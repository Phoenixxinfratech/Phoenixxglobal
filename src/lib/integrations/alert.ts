/**
 * Internal alerting — the channel that must never be silent.
 *
 * This is deliberately not a second copy of the email adapter's internal brief.
 * The email adapter handles the routine brief for every routed lead. This
 * adapter is the urgent and failure path:
 *
 *   1. Hot leads, pushed as a short phone-readable summary.
 *   2. Delivery failures (dead letters), SLA breaches and digest failures.
 *
 * It tries every configured channel and reports success if any one of them
 * landed, because the point is that a human finds out — not that a particular
 * provider worked.
 */
import { Resend } from "resend";
import type { IntegrationResult, Lead, LeadIntegration } from "@/lib/leads/types";
import { internalAlertWhatsApp, internalBriefSubject } from "@/lib/messages/internalBrief";
import { envEnabled, withRetry } from "./types";

function telegramConfigured(): boolean {
  return Boolean(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID);
}

function alertEmailConfigured(): boolean {
  return Boolean(
    process.env.RESEND_API_KEY && process.env.LEAD_FROM_EMAIL && process.env.LEAD_NOTIFY_EMAIL,
  );
}

export function alertConfigured(): boolean {
  return telegramConfigured() || alertEmailConfigured();
}

async function sendTelegram(text: string): Promise<void> {
  const response = await fetch(
    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text,
        disable_web_page_preview: true,
      }),
      signal: AbortSignal.timeout(10_000),
    },
  );

  if (!response.ok) {
    throw new Error(`Telegram ${response.status}: ${(await response.text()).slice(0, 200)}`);
  }
}

async function sendAlertEmail(subject: string, text: string): Promise<void> {
  const recipients = (process.env.LEAD_NOTIFY_EMAIL ?? "")
    .split(",")
    .map((address) => address.trim())
    .filter(Boolean);

  if (recipients.length === 0) throw new Error("LEAD_NOTIFY_EMAIL not set");

  const resend = new Resend(process.env.RESEND_API_KEY);
  const response = await resend.emails.send({
    from: process.env.LEAD_FROM_EMAIL!,
    to: recipients,
    subject,
    text,
  });

  if (response.error) throw new Error(response.error.message);
}

/**
 * Raises an alert on every configured channel. Used by the dead-letter writer,
 * the SLA escalation job and the digest jobs as well as by the adapter below.
 */
export async function raiseInternalAlert(
  subject: string,
  text: string,
): Promise<{ ok: boolean; detail: string }> {
  const delivered: string[] = [];
  const failed: string[] = [];

  if (telegramConfigured()) {
    const result = await withRetry("alert.telegram", () => sendTelegram(`${subject}\n\n${text}`));
    if (result.ok) delivered.push("telegram");
    else failed.push(result.error);
  }

  if (alertEmailConfigured()) {
    const result = await withRetry("alert.email", () => sendAlertEmail(subject, text));
    if (result.ok) delivered.push("email");
    else failed.push(result.error);
  }

  if (delivered.length > 0) {
    return { ok: true, detail: `Alert delivered via ${delivered.join(", ")}` };
  }

  // Nothing configured or everything failed. The log line is the last resort.
  console.error("[alert:undelivered]", JSON.stringify({ subject, failed }));
  return {
    ok: false,
    detail:
      failed.length > 0
        ? failed.join("; ")
        : "No alert channel configured — set TELEGRAM_* or RESEND_API_KEY + LEAD_NOTIFY_EMAIL",
  };
}

export const alertIntegration: LeadIntegration = {
  name: "alert",
  get enabled() {
    return envEnabled(process.env.INTEGRATION_ALERT_ENABLED) && alertConfigured();
  },
  async send(lead: Lead): Promise<IntegrationResult> {
    // Warm and cold leads are covered by the email brief. Paging the team for
    // them trains everyone to ignore alerts.
    if (lead.band !== "hot") {
      return { ok: true, detail: `No alert needed for a ${lead.band} lead` };
    }

    const { ok, detail } = await raiseInternalAlert(
      internalBriefSubject(lead),
      `${internalAlertWhatsApp(lead)}\n\n${lead.message ?? "(no message)"}\n\nWhy it scored ${lead.score}:\n${lead.scoreReasons.map((r) => `- ${r}`).join("\n")}`,
    );

    return { ok, detail };
  },
};
