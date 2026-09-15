/**
 * Instant buyer acknowledgement — Phase 4 Section 7.1.
 * Sent within 60 seconds by email, and by WhatsApp once the Cloud API template
 * is approved. Echoes what the buyer asked about, gives them a reference, says
 * who replies and by when, and asks for the details that speed up a quotation.
 */
import { RESPONSE_PROMISE } from "@/lib/leads/config";
import type { Lead } from "@/lib/leads/types";
import {
  enquirySubject,
  firstName,
  htmlDetailTable,
  htmlEmail,
  htmlParagraph,
  htmlSignature,
  missingForQuote,
  siteUrl,
  statedDetails,
  textSignature,
  whatsAppLink,
} from "./format";

export type EmailMessage = {
  subject: string;
  text: string;
  html: string;
};

export function buyerAckEmail(lead: Lead): EmailMessage {
  const subject = `${enquirySubject(lead)} — enquiry ${lead.id} received`;
  const details = statedDetails(lead);
  const asks = missingForQuote(lead);
  const waLink = whatsAppLink(`Adding details to enquiry ${lead.id}.`);

  const textLines = [
    `Hi ${firstName(lead)},`,
    "",
    `We have your enquiry about ${enquirySubject(lead)}. Your reference is ${lead.id}.`,
    "",
    "Here is what you sent us:",
    ...details.map(({ label, value }) => `  ${label}: ${value}`),
    "",
    `An engineer from our export team will reply ${RESPONSE_PROMISE.full}. The reply will cover the panel specification we recommend, pricing, and what the shipment involves.`,
    "",
    "You can speed that up by sending:",
    ...asks.map((ask) => `  - ${ask}`),
    "",
    "Reply to this email with anything you have. A rough sketch is more useful than a perfect one.",
  ];

  if (waLink) {
    textLines.push("", `Prefer WhatsApp? Message us here: ${waLink}`);
  }

  textLines.push(
    "",
    `Our guides on specification and export terms are at ${siteUrl("/resources/")} if you want to read up while you wait.`,
    "",
    textSignature(),
  );

  const htmlBody = [
    htmlParagraph(`Hi ${firstName(lead)},`),
    htmlParagraph(
      `We have your enquiry about <strong>${enquirySubject(lead)}</strong>. Your reference is <strong>${lead.id}</strong>.`,
    ),
    htmlParagraph("Here is what you sent us:"),
    htmlDetailTable(details),
    htmlParagraph(
      `An engineer from our export team will reply ${RESPONSE_PROMISE.full}. The reply will cover the panel specification we recommend, pricing, and what the shipment involves.`,
    ),
    htmlParagraph("You can speed that up by sending:"),
    `<ul style="margin:0 0 14px;padding-left:20px;">${asks
      .map((ask) => `<li style="margin:0 0 4px;">${ask}</li>`)
      .join("")}</ul>`,
    htmlParagraph(
      "Reply to this email with anything you have. A rough sketch is more useful than a perfect one.",
    ),
    waLink
      ? htmlParagraph(
          `Prefer WhatsApp? <a href="${waLink}" style="color:#b8320f;">Message us here</a>.`,
        )
      : "",
    htmlParagraph(
      `Our guides on specification and export terms are at <a href="${siteUrl(
        "/resources/",
      )}" style="color:#b8320f;">${siteUrl("/resources/")}</a> if you want to read up while you wait.`,
    ),
    htmlSignature(),
  ].join("");

  return { subject, text: textLines.join("\n"), html: htmlEmail(htmlBody) };
}

/**
 * WhatsApp acknowledgement. Must stay under 700 characters — WhatsApp truncates
 * long template bodies and the reference number is the part that matters.
 */
export function buyerAckWhatsApp(lead: Lead): string {
  const asks: string[] = [];
  if (!lead.quantity) asks.push("room dimensions");
  if (!lead.temperature) asks.push("operating temperature");
  if (!lead.city) asks.push("delivery location");
  if (asks.length === 0) asks.push("a layout drawing");

  const askSentence =
    asks.length === 1
      ? `If you can share ${asks[0]}, we will quote faster.`
      : `If you can share ${asks.slice(0, -1).join(", ")} and ${asks.at(-1)}, we will quote faster.`;

  const message = [
    `Hi ${firstName(lead)}, thanks for the enquiry about ${enquirySubject(lead)} — reference ${lead.id}.`,
    `Our engineer will send the specification and pricing within ${RESPONSE_PROMISE.short}.`,
    askSentence,
    "— PHOENIXX SMARTBUILD, Ahmedabad",
  ].join(" ");

  return message.length <= 700 ? message : `${message.slice(0, 697)}...`;
}

/** Variables the Meta template submission needs, in order. */
export const WHATSAPP_ACK_TEMPLATE_VARIABLES = [
  "name",
  "enquiry_subject",
  "lead_id",
  "response_time",
  "details_needed",
] as const;

/** Body text submitted to Meta for approval. Keep in step with buyerAckWhatsApp. */
export const WHATSAPP_ACK_TEMPLATE_BODY = [
  "Hi {{1}}, thanks for the enquiry about {{2}} — reference {{3}}.",
  "Our engineer will send the specification and pricing within {{4}}.",
  "If you can share {{5}}, we will quote faster.",
  "— PHOENIXX SMARTBUILD, Ahmedabad",
].join(" ");
