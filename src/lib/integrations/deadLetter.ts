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
}
