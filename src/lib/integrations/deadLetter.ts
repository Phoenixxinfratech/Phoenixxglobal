/**
 * Dead-letter handling. A lead must never be silently lost: when an adapter
 * exhausts its retries the failure is written where a human will find it and
 * an internal alert is raised.
 *
 * On serverless hosts the filesystem is ephemeral, so the file write is a
 * best-effort local aid and the structured log line is the durable record —
 * pair it with the log-drain alert described in docs/RUNBOOK.md.
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import type { Lead } from "@/lib/leads/types";
import { raiseInternalAlert } from "./alert";

const DEAD_LETTER_FILE = "leads-failed.json";

export type DeadLetterEntry = {
  leadId: string;
  at: string;
  failures: Array<{ adapter: string; detail: string }>;
  lead: Lead;
};

export async function recordDeadLetter(
  lead: Lead,
  failures: Array<{ adapter: string; detail: string }>,
): Promise<void> {
  const entry: DeadLetterEntry = {
    leadId: lead.id,
    at: new Date().toISOString(),
    failures,
    lead,
  };

  // Durable record first — log drains survive the ephemeral filesystem.
  console.error(
    "[lead:dead-letter]",
    JSON.stringify({
      leadId: lead.id,
      band: lead.band,
      country: lead.country,
      failures: failures.map((f) => `${f.adapter}: ${f.detail}`),
    }),
  );

  try {
    const filePath = path.join(process.cwd(), DEAD_LETTER_FILE);
    let existing: DeadLetterEntry[] = [];
    try {
      const raw = await fs.readFile(filePath, "utf8");
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) existing = parsed as DeadLetterEntry[];
    } catch {
      existing = [];
    }
    existing.push(entry);
    await fs.writeFile(filePath, JSON.stringify(existing, null, 2), "utf8");
  } catch (error) {
    console.warn(
      "[lead:dead-letter] could not persist to disk:",
      error instanceof Error ? error.message : String(error),
    );
  }

  // A failure nobody hears about is the same as a lost lead.
  await raiseInternalAlert(
    `[DELIVERY FAILED] ${lead.id} · ${lead.band} · ${lead.country}`,
    [
      `Enquiry ${lead.id} was captured but could not be delivered everywhere.`,
      "",
      "Failed channels:",
      ...failures.map(({ adapter, detail }) => `- ${adapter}: ${detail}`),
      "",
      "The buyer's details:",
      `${lead.name}${lead.company ? `, ${lead.company}` : ""}`,
      lead.email,
      lead.phoneE164 || "(no phone)",
      `${lead.city ? `${lead.city}, ` : ""}${lead.country}`,
      "",
      lead.message ?? "(no message)",
      "",
      "Contact this buyer manually, then follow the delivery-failure steps in docs/RUNBOOK.md.",
    ].join("\n"),
  );
}
