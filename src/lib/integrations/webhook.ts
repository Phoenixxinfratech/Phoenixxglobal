/**
 * Generic signed webhook. Lets the client add future automations in n8n, Make
 * or Zapier without a developer touching this codebase.
 *
 * The receiver should verify X-PSB-Signature before trusting the payload:
 * HMAC-SHA256 of the raw body using LEAD_WEBHOOK_SECRET, hex encoded.
 */
import { createHmac } from "node:crypto";
import type { IntegrationResult, Lead, LeadIntegration } from "@/lib/leads/types";
import { envEnabled, withRetry } from "./types";

export function webhookConfigured(): boolean {
  return Boolean(process.env.LEAD_WEBHOOK_URL && process.env.LEAD_WEBHOOK_SECRET);
}

export function signPayload(body: string, secret: string): string {
  return createHmac("sha256", secret).update(body).digest("hex");
}

export const webhookIntegration: LeadIntegration = {
  name: "webhook",
  get enabled() {
    return envEnabled(process.env.INTEGRATION_WEBHOOK_ENABLED) && webhookConfigured();
  },
  async send(lead: Lead): Promise<IntegrationResult> {
    const url = process.env.LEAD_WEBHOOK_URL;
    const secret = process.env.LEAD_WEBHOOK_SECRET;

    if (!url || !secret) {
      return { ok: false, detail: "LEAD_WEBHOOK_URL or LEAD_WEBHOOK_SECRET not set" };
    }

    const body = JSON.stringify({ event: "lead.created", lead });
    const signature = signPayload(body, secret);

    const result = await withRetry("webhook.post", async () => {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-PSB-Signature": signature,
          "X-PSB-Lead-Id": lead.id,
        },
        body,
        signal: AbortSignal.timeout(10_000),
      });

      if (!response.ok) {
        throw new Error(`Webhook ${response.status}: ${(await response.text()).slice(0, 200)}`);
      }
      return response.status;
    });

    return result.ok
      ? { ok: true, detail: `Webhook accepted with ${result.value}` }
      : { ok: false, detail: result.error };
  },
};
