/**
 * WhatsApp Cloud API adapter.
 *
 * Meta only permits business-initiated messages through pre-approved templates.
 * The template bodies are written in src/lib/messages/ and must be submitted to
 * Meta for approval before this adapter can be enabled. Until the approved
 * template names exist, this adapter stays off and the site's wa.me links carry
 * the WhatsApp path — those need no approval and work today.
 *
 * Setup and template submission steps: docs/INTEGRATIONS.md.
 */
import { RESPONSE_PROMISE } from "@/lib/leads/config";
import { toWhatsAppDigits } from "@/lib/leads/phone";
import type { IntegrationResult, Lead, LeadIntegration } from "@/lib/leads/types";
import { enquirySubject, firstName, productLabel } from "@/lib/messages/format";
import { internalWhatsAppRecipient } from "@/lib/messages/internalBrief";
import { envEnabled, withRetry } from "./types";

const GRAPH_VERSION = "v21.0";

export function whatsappConfigured(): boolean {
  return Boolean(
    process.env.WHATSAPP_PHONE_NUMBER_ID &&
      process.env.WHATSAPP_ACCESS_TOKEN &&
      process.env.WHATSAPP_ACK_TEMPLATE,
  );
}

type TemplateParameter = { type: "text"; text: string };

async function sendTemplate(
  to: string,
  templateName: string,
  parameters: TemplateParameter[],
  languageCode = "en",
): Promise<void> {
  const url = `https://graph.facebook.com/${GRAPH_VERSION}/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to,
      type: "template",
      template: {
        name: templateName,
        language: { code: languageCode },
        components: [{ type: "body", parameters }],
      },
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`WhatsApp API ${response.status}: ${body.slice(0, 300)}`);
  }
}

function detailsNeeded(lead: Lead): string {
  const asks: string[] = [];
  if (!lead.quantity) asks.push("room dimensions");
  if (!lead.temperature) asks.push("operating temperature");
  if (!lead.city) asks.push("delivery location");
  if (asks.length === 0) asks.push("a layout drawing");
  return asks.join(", ");
}

export const whatsappIntegration: LeadIntegration = {
  name: "whatsapp",
  get enabled() {
    return envEnabled(process.env.INTEGRATION_WHATSAPP_ENABLED) && whatsappConfigured();
  },
  async send(lead: Lead): Promise<IntegrationResult> {
    const ackTemplate = process.env.WHATSAPP_ACK_TEMPLATE?.trim();
    const alertTemplate = process.env.WHATSAPP_ALERT_TEMPLATE?.trim();
    const outcomes: string[] = [];
    const failures: string[] = [];

    // Buyer acknowledgement — only where we have a parseable number.
    if (ackTemplate && lead.phoneE164.startsWith("+") && lead.band !== "spam") {
      const result = await withRetry("whatsapp.buyerAck", () =>
        sendTemplate(toWhatsAppDigits(lead.phoneE164), ackTemplate, [
          { type: "text", text: firstName(lead) },
          { type: "text", text: enquirySubject(lead) },
          { type: "text", text: lead.id },
          { type: "text", text: RESPONSE_PROMISE.short },
          { type: "text", text: detailsNeeded(lead) },
        ]),
      );
      if (result.ok) outcomes.push("buyer acknowledgement sent");
      else failures.push(result.error);
    }

    // Internal alert to the sales number.
    const salesNumber = internalWhatsAppRecipient();
    if (alertTemplate && salesNumber) {
      const result = await withRetry("whatsapp.internalAlert", () =>
        sendTemplate(salesNumber, alertTemplate, [
          { type: "text", text: lead.band.toUpperCase() },
          { type: "text", text: lead.id },
          { type: "text", text: `${lead.name}${lead.company ? `, ${lead.company}` : ""}` },
          { type: "text", text: lead.city ? `${lead.city}, ${lead.country}` : lead.country },
          {
            type: "text",
            text: productLabel(lead.product) ?? enquirySubject(lead),
          },
          { type: "text", text: lead.phoneE164 || lead.email },
          { type: "text", text: String(lead.routing.slaMinutes) },
        ]),
      );
      if (result.ok) outcomes.push("internal alert sent");
      else failures.push(result.error);
    }

    if (failures.length > 0) return { ok: false, detail: failures.join("; ") };
    if (outcomes.length === 0) {
      return { ok: false, detail: "No approved template configured for this message type" };
    }
    return { ok: true, detail: outcomes.join("; ") };
  },
};
