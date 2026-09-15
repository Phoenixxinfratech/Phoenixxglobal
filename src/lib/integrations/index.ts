/**
 * Dispatcher. Runs every enabled adapter independently, collects results, and
 * dead-letters permanent failures. Never throws: the caller has already told
 * the buyer their enquiry was received.
 */
import type { Lead } from "@/lib/leads/types";
import { alertIntegration } from "./alert";
import { crmIntegration } from "./crm";
import { recordDeadLetter } from "./deadLetter";
import { emailIntegration } from "./email";
import { sheetsIntegration } from "./sheets";
import { webhookIntegration } from "./webhook";
import { whatsappIntegration } from "./whatsapp";
import type { LeadIntegration } from "./types";

/**
 * Registry, in the order they matter. The ledger goes first because it is the
 * permanent record; everything after it is a notification.
 */
export function allIntegrations(): LeadIntegration[] {
  return [
    sheetsIntegration,
    emailIntegration,
    alertIntegration,
    whatsappIntegration,
    crmIntegration,
    webhookIntegration,
  ];
}

/** Status table for docs, the launch checklist and the health endpoint. */
export function integrationStatus(): Array<{ name: string; enabled: boolean }> {
  return allIntegrations().map(({ name, enabled }) => ({ name, enabled }));
}

export type DispatchSummary = {
  leadId: string;
  attempted: string[];
  succeeded: string[];
  failed: Array<{ adapter: string; detail: string }>;
  skipped: string[];
};

export async function dispatchLead(lead: Lead): Promise<DispatchSummary> {
  const integrations = allIntegrations();
  const summary: DispatchSummary = {
    leadId: lead.id,
    attempted: [],
    succeeded: [],
    failed: [],
    skipped: [],
  };

  // Spam-banded leads are recorded but never routed to a human channel.
  const routable = integrations.filter((integration) => {
    if (!integration.enabled) {
      summary.skipped.push(integration.name);
      return false;
    }
    if (lead.band === "spam" && integration.name !== "sheets") {
      summary.skipped.push(integration.name);
      return false;
    }
    if (!lead.routing.channel.includes(integration.name)) {
      summary.skipped.push(integration.name);
      return false;
    }
    return true;
  });

  const settled = await Promise.allSettled(
    routable.map(async (integration) => {
      summary.attempted.push(integration.name);
      const result = await integration.send(lead);
      return { name: integration.name, result };
    }),
  );

  for (const outcome of settled) {
    if (outcome.status === "fulfilled") {
      const { name, result } = outcome.value;
      if (result.ok) {
        summary.succeeded.push(name);
      } else {
        summary.failed.push({ adapter: name, detail: result.detail ?? "unknown failure" });
      }
    } else {
      summary.failed.push({
        adapter: "unknown",
        detail:
          outcome.reason instanceof Error ? outcome.reason.message : String(outcome.reason),
      });
    }
  }

  if (summary.failed.length > 0) {
    await recordDeadLetter(lead, summary.failed);
  }

  return summary;
}
