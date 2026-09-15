/**
 * Follow-up queue. Source of truth for "what should go out today".
 * On serverless hosts the JSON file is ephemeral — production should also
 * keep stage in the Sheets ledger (see docs/OPERATIONS.md). The queue is still
 * the scheduler the cron job reads.
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import { Resend } from "resend";
import { raiseInternalAlert } from "@/lib/integrations/alert";
import { envEnabled } from "@/lib/integrations/types";
import {
  FOLLOW_UP_CADENCE,
  dailyDigestSubject,
  followUpEmail,
  slaBreachAlert,
  weeklyDigestSubject,
  type FollowUpStep,
} from "@/lib/messages/followUp";
import { enquirySubject } from "@/lib/messages/format";
import type { Lead } from "./types";
import { addWorkingMinutes, workingMinutesBetween } from "./workingHours";

const QUEUE_FILE = path.join(process.cwd(), "data", "follow-up-queue.json");

export type SequenceRecord = {
  lead: Lead;
  nextStep: FollowUpStep | "done";
  nextAt: string;
  stopped: boolean;
  stopReason?: string;
  lastSent?: FollowUpStep;
  lastSentAt?: string;
  slaEscalatedAt?: string;
  ownerTouchedAt?: string;
};

async function readQueue(): Promise<SequenceRecord[]> {
  try {
    const raw = await fs.readFile(QUEUE_FILE, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as SequenceRecord[]) : [];
  } catch {
    return [];
  }
}

async function writeQueue(records: SequenceRecord[]): Promise<void> {
  await fs.mkdir(path.dirname(QUEUE_FILE), { recursive: true });
  await fs.writeFile(QUEUE_FILE, JSON.stringify(records, null, 2), "utf8");
}

function firstStepAt(lead: Lead): string {
  const first = FOLLOW_UP_CADENCE[0]!;
  return new Date(new Date(lead.receivedAt).getTime() + first.dayOffset * 86400000).toISOString();
}

export async function enqueueSequence(lead: Lead): Promise<void> {
  if (lead.band === "spam") return;
  const queue = await readQueue();
  if (queue.some((record) => record.lead.id === lead.id)) return;
  queue.push({
    lead,
    nextStep: FOLLOW_UP_CADENCE[0]!.step,
    nextAt: firstStepAt(lead),
    stopped: false,
  });
  await writeQueue(queue);
}

export async function stopSequence(leadId: string, reason: string): Promise<boolean> {
  const queue = await readQueue();
  const record = queue.find((item) => item.lead.id === leadId);
  if (!record) return false;
  record.stopped = true;
  record.stopReason = reason;
  record.nextStep = "done";
  await writeQueue(queue);
  return true;
}

export async function markOwnerTouched(leadId: string): Promise<boolean> {
  const queue = await readQueue();
  const record = queue.find((item) => item.lead.id === leadId);
  if (!record) return false;
  record.ownerTouchedAt = new Date().toISOString();
  await writeQueue(queue);
  return true;
}

function emailConfigured(): boolean {
  return Boolean(
    envEnabled(process.env.INTEGRATION_EMAIL_ENABLED) &&
      process.env.RESEND_API_KEY &&
      process.env.LEAD_FROM_EMAIL,
  );
}

async function sendBuyerEmail(to: string, message: { subject: string; text: string; html: string }) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const response = await resend.emails.send({
    from: process.env.LEAD_FROM_EMAIL!,
    to: [to],
    subject: message.subject,
    text: message.text,
    html: message.html,
    ...(process.env.LEAD_REPLY_TO_EMAIL ? { replyTo: process.env.LEAD_REPLY_TO_EMAIL } : {}),
  });
  if (response.error) throw new Error(response.error.message);
}

function nextAfter(step: FollowUpStep): FollowUpStep | "done" {
  const index = FOLLOW_UP_CADENCE.findIndex((item) => item.step === step);
  const upcoming = FOLLOW_UP_CADENCE[index + 1];
  return upcoming?.step ?? "done";
}

export async function processDueFollowUps(now = new Date()): Promise<{ sent: string[]; skipped: string[] }> {
  const queue = await readQueue();
  const sent: string[] = [];
  const skipped: string[] = [];

  for (const record of queue) {
    if (record.stopped || record.nextStep === "done") continue;
    if (new Date(record.nextAt) > now) continue;

    if (!emailConfigured()) {
      skipped.push(`${record.lead.id} (${record.nextStep}) — email adapter off`);
      continue;
    }

    const step = record.nextStep;
    const message = followUpEmail(record.lead, step);
    try {
      await sendBuyerEmail(record.lead.email, message);
      record.lastSent = step;
      record.lastSentAt = now.toISOString();
      const upcoming = nextAfter(step);
      record.nextStep = upcoming;
      if (upcoming === "done") {
        record.nextAt = now.toISOString();
      } else {
        const cadence = FOLLOW_UP_CADENCE.find((item) => item.step === upcoming)!;
        record.nextAt = new Date(
          new Date(record.lead.receivedAt).getTime() + cadence.dayOffset * 86400000,
        ).toISOString();
      }
      sent.push(`${record.lead.id}:${step}`);
    } catch (error) {
      skipped.push(
        `${record.lead.id} (${step}) — ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }

  await writeQueue(queue);
  return { sent, skipped };
}

export async function processSlaBreaches(now = new Date()): Promise<{ escalated: string[] }> {
  const queue = await readQueue();
  const escalated: string[] = [];

  for (const record of queue) {
    if (record.stopped || record.ownerTouchedAt || record.slaEscalatedAt) continue;
    const { lead } = record;
    if (lead.band !== "hot") continue;
    if (lead.routing.slaMinutes <= 0) continue;

    const deadline = addWorkingMinutes(new Date(lead.receivedAt), lead.routing.slaMinutes);
    if (now < deadline) continue;

    const openFor = workingMinutesBetween(new Date(lead.receivedAt), now);
    const alert = slaBreachAlert(lead, openFor);
    await raiseInternalAlert(alert.subject, alert.text);
    record.slaEscalatedAt = now.toISOString();
    escalated.push(lead.id);
  }

  await writeQueue(queue);
  return { escalated };
}

function startOfIstDay(date: Date): Date {
  const ist = new Date(date.getTime() + 5.5 * 3600 * 1000);
  return new Date(
    Date.UTC(ist.getUTCFullYear(), ist.getUTCMonth(), ist.getUTCDate(), 0, 0) - 5.5 * 3600 * 1000,
  );
}

export async function buildDailyDigest(now = new Date()): Promise<{ subject: string; text: string }> {
  const queue = await readQueue();
  const since = startOfIstDay(now);
  const todays = queue.filter((record) => new Date(record.lead.receivedAt) >= since);
  const untouched = queue.filter(
    (record) =>
      !record.stopped &&
      !record.ownerTouchedAt &&
      record.lead.band !== "spam" &&
      new Date(record.lead.receivedAt) < now,
  );
    const due = queue.filter(
      (record) => !record.stopped && record.nextStep !== "done" && new Date(record.nextAt) <= now,
    );

    const untouchedLines =
      untouched.length === 0
        ? ["- none"]
        : untouched
            .slice(0, 15)
            .map(
              (record) =>
                `- ${record.lead.id} · ${record.lead.band} · ${record.lead.name} · ${record.lead.email}`,
            );

  const lines = [
    `${todays.length} new enquiry(ies) since midnight IST.`,
    `${untouched.length} open file(s) with no owner touch recorded.`,
    `${due.length} follow-up(s) due today.`,
    "",
    "NEW",
    ...(todays.length
      ? todays.map(
          (record) =>
            `- ${record.lead.id} · ${record.lead.band} · ${record.lead.country} · ${enquirySubject(record.lead)}`,
        )
      : ["- none"]),
    "",
    "UNTOUCHED",
    ...untouchedLines,
    "",
    "Mark a file touched: POST /api/cron/ with { job: \"touched\", leadId } and the cron secret.",
  ];

  const dateLabel = now.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" });
  return { subject: dailyDigestSubject(dateLabel), text: lines.join("\n") };
}

export async function buildWeeklyDigest(now = new Date()): Promise<{ subject: string; text: string }> {
  const queue = await readQueue();
  const weekAgo = new Date(now.getTime() - 7 * 86400000);
  const recent = queue.filter((record) => new Date(record.lead.receivedAt) >= weekAgo);

  const byCountry = new Map<string, number>();
  const byProduct = new Map<string, number>();
  const byBand = new Map<string, number>();
  for (const record of recent) {
    byCountry.set(record.lead.country, (byCountry.get(record.lead.country) ?? 0) + 1);
    const product = record.lead.product ?? "(unspecified)";
    byProduct.set(product, (byProduct.get(product) ?? 0) + 1);
    byBand.set(record.lead.band, (byBand.get(record.lead.band) ?? 0) + 1);
  }

  const tally = (map: Map<string, number>) =>
    [...map.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([key, count]) => `- ${key}: ${count}`)
      .join("\n") || "- none";

  const dateLabel = weekAgo.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" });
  return {
    subject: weeklyDigestSubject(dateLabel),
    text: [
      `${recent.length} enquiries in the last 7 days.`,
      "",
      "BY BAND",
      tally(byBand),
      "",
      "BY COUNTRY",
      tally(byCountry),
      "",
      "BY PRODUCT",
      tally(byProduct),
      "",
      "Monday SOP: 15 minutes on this list, then the untouched sweep, then one editorial-calendar item.",
    ].join("\n"),
  };
}
