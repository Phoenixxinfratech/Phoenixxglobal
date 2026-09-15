/**
 * QA-only adapter. When INTEGRATION_FAIL_TEST=true the dispatcher records a
 * dead letter and still returns success to the buyer. Never enable in production.
 */
import type { IntegrationResult, Lead, LeadIntegration } from "@/lib/leads/types";
import { envEnabled } from "./types";

export const failTestIntegration: LeadIntegration = {
  name: "fail-test",
  get enabled() {
    return envEnabled(process.env.INTEGRATION_FAIL_TEST);
  },
  async send(lead: Lead): Promise<IntegrationResult> {
    return { ok: false, detail: `Forced QA failure for ${lead.id}` };
  },
};
