/**
 * Email adapter (Resend). Sends two messages per lead: the buyer
 * acknowledgement and the internal lead brief.
 *
 * Deliverability is the whole point. The from-address domain must be verified
 * in Resend with SPF, DKIM and DMARC in place, or auto-replies land in spam and
 * the funnel silently stops working. See docs/INTEGRATIONS.md.
 */
import { Resend } from "resend";
import type { IntegrationResult, Lead, LeadIntegration } from "@/lib/leads/types";
import { buyerAckEmail } from "@/lib/messages/buyerAck";
import { internalBriefEmail } from "@/lib/messages/internalBrief";
import { envEnabled, withRetry } from "./types";

function fromAddress(): string {
  return process.env.LEAD_FROM_EMAIL?.trim() ?? "";
}

function internalRecipients(): string[] {
  return (process.env.LEAD_NOTIFY_EMAIL ?? "")
    .split(",")
    .map((address) => address.trim())
    .filter(Boolean);
}

export function emailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY && fromAddress());
}

async function sendViaResend(message: {
  to: string[];
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
}): Promise<void> {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const response = await resend.emails.send({
    from: fromAddress(),
    to: message.to,
    subject: message.subject,
    text: message.text,
    html: message.html,
    ...(message.replyTo ? { replyTo: message.replyTo } : {}),
  });

  if (response.error) {
    throw new Error(response.error.message);
  }
}

export const emailIntegration: LeadIntegration = {
  name: "email",
  get enabled() {
    return envEnabled(process.env.INTEGRATION_EMAIL_ENABLED) && emailConfigured();
  },
  async send(lead: Lead): Promise<IntegrationResult> {
    const replyTo = process.env.LEAD_REPLY_TO_EMAIL?.trim() || undefined;
    const recipients = internalRecipients();
    const outcomes: string[] = [];
    const failures: string[] = [];

    // Buyer acknowledgement. Never sent to a spam-banded address.
    if (lead.band !== "spam") {
      const ack = buyerAckEmail(lead);
      const result = await withRetry("email.buyerAck", () =>
        sendViaResend({
          to: [lead.email],
          subject: ack.subject,
          text: ack.text,
          html: ack.html,
          replyTo,
        }),
      );
      if (result.ok) outcomes.push("buyer acknowledgement sent");
      else failures.push(result.error);
    }

    // Internal brief.
    if (recipients.length > 0) {
      const brief = internalBriefEmail(lead);
      const result = await withRetry("email.internalBrief", () =>
        sendViaResend({
          to: recipients,
          subject: brief.subject,
          text: brief.text,
          html: brief.html,
          replyTo: lead.email,
        }),
      );
      if (result.ok) outcomes.push(`internal brief sent to ${recipients.length} recipient(s)`);
      else failures.push(result.error);
    } else {
      failures.push("LEAD_NOTIFY_EMAIL not set — nobody was told about this enquiry");
    }

    if (failures.length > 0) {
      return { ok: false, detail: failures.join("; ") };
    }
    return { ok: true, detail: outcomes.join("; ") };
  },
};
