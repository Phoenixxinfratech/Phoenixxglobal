/**
 * Internal lead brief — Phase 4 Section 7.2.
 * Written so the team can act from a phone: band in the subject, one-tap call
 * and WhatsApp links at the top, attribution trail at the bottom.
 */
import { site } from "@/config/site";
import { confirmed } from "@/lib/confirmed";
import { toWhatsAppDigits } from "@/lib/leads/phone";
import type { Lead } from "@/lib/leads/types";
import type { EmailMessage } from "./buyerAck";
import {
  enquirySubject,
  escapeHtml,
  firstName,
  htmlEmail,
  htmlParagraph,
  productLabel,
  siteUrl,
} from "./format";

/** [HOT] Kenya · Cold room panels · 1,200 sqm · PSB-20260915-0042 */
export function internalBriefSubject(lead: Lead): string {
  const parts = [lead.country];
  const product = productLabel(lead.product);
  if (product) parts.push(product);
  if (lead.quantity) parts.push(lead.quantity);
  parts.push(lead.id);
  return `[${lead.band.toUpperCase()}] ${parts.join(" · ")}`;
}

/**
 * The line the salesperson opens the call with. Built from what the buyer
 * actually said so the first sentence proves someone read the enquiry.
 */
export function suggestedOpener(lead: Lead): string {
  const product = productLabel(lead.product);
  const where = lead.city ? `${lead.city}` : lead.country;

  if (product && lead.application) {
    return `${firstName(lead)}, this is [your name] from PHOENIXX SMARTBUILD in Ahmedabad — you asked about ${enquirySubject(lead)} in ${where}. Before I put numbers to it, what temperature does the room need to hold?`;
  }
  if (product) {
    return `${firstName(lead)}, this is [your name] from PHOENIXX SMARTBUILD in Ahmedabad — you enquired about ${product} for a project in ${where}. What is the room going to be used for?`;
  }
  return `${firstName(lead)}, this is [your name] from PHOENIXX SMARTBUILD in Ahmedabad — you sent us an enquiry about panels for a project in ${where}. Tell me what you are building and I will tell you what specification it needs.`;
}

function contactActions(lead: Lead): Array<{ label: string; href: string }> {
  const actions: Array<{ label: string; href: string }> = [];

  if (lead.phoneE164) {
    actions.push({ label: `Call ${lead.phoneE164}`, href: `tel:${lead.phoneE164}` });
    const waMessage = `Hi ${firstName(lead)}, [your name] here from PHOENIXX SMARTBUILD, Ahmedabad. Following up on your enquiry ${lead.id} about ${enquirySubject(lead)}.`;
    actions.push({
      label: "WhatsApp this buyer",
      href: `https://wa.me/${toWhatsAppDigits(lead.phoneE164)}?text=${encodeURIComponent(waMessage)}`,
    });
  }

  actions.push({
    label: `Reply to ${lead.email}`,
    href: `mailto:${lead.email}?subject=${encodeURIComponent(
      `Re: ${enquirySubject(lead)} — ${lead.id}`,
    )}`,
  });

  return actions;
}

function fieldRows(lead: Lead): Array<[string, string]> {
  const rows: Array<[string, string]> = [
    ["Reference", lead.id],
    ["Received", `${lead.istTimestamp} IST`],
    ["Band / score", `${lead.band} · ${lead.score}/100`],
    ["Reply by", `${lead.routing.slaMinutes} minutes of working time`],
    ["Form", lead.variant],
    ["Name", lead.name],
  ];

  if (lead.company) rows.push(["Company", lead.company]);
  rows.push(["Email", lead.email]);
  if (lead.phoneE164) rows.push(["Phone", lead.phoneE164]);
  rows.push(["Country", lead.country]);
  if (lead.city) rows.push(["City", lead.city]);

  const product = productLabel(lead.product);
  if (product) rows.push(["Product", product]);
  if (lead.application) rows.push(["Application", lead.application]);
  if (lead.industry) rows.push(["Industry", lead.industry]);
  if (lead.quantity) rows.push(["Quantity", lead.quantity]);
  if (lead.thickness) rows.push(["Thickness", lead.thickness]);
  if (lead.temperature) rows.push(["Temperature", lead.temperature]);
  if (lead.requiredBy) rows.push(["Required by", lead.requiredBy]);

  return rows;
}

function attributionRows(lead: Lead): Array<[string, string]> {
  const { source } = lead;
  const rows: Array<[string, string]> = [
    ["Enquired from", source.pagePath],
    ["Landing page", source.landingPage],
    [
      "First touch",
      `${source.firstTouch.source ?? "unknown"} / ${source.firstTouch.medium ?? "unknown"}${
        source.firstTouch.campaign ? ` / ${source.firstTouch.campaign}` : ""
      }`,
    ],
    [
      "Last touch",
      `${source.lastTouch.source ?? "unknown"} / ${source.lastTouch.medium ?? "unknown"}${
        source.lastTouch.campaign ? ` / ${source.lastTouch.campaign}` : ""
      }`,
    ],
    ["Device", source.device],
  ];

  if (source.referrer) rows.push(["Referrer", source.referrer]);
  if (source.pagesViewed !== undefined) rows.push(["Pages viewed", String(source.pagesViewed)]);
  rows.push(["Marketing consent", lead.consent.marketing ? "yes" : "no"]);

  return rows;
}

export function internalBriefEmail(lead: Lead): EmailMessage {
  const actions = contactActions(lead);
  const fields = fieldRows(lead);
  const attribution = attributionRows(lead);

  const textLines = [
    internalBriefSubject(lead),
    "",
    ...actions.map(({ label, href }) => `${label}: ${href}`),
    "",
    "ENQUIRY",
    ...fields.map(([label, value]) => `  ${label}: ${value}`),
  ];

  if (lead.message) {
    textLines.push("", "WHAT THEY WROTE", lead.message);
  }

  textLines.push(
    "",
    "SUGGESTED OPENING LINE",
    suggestedOpener(lead),
    "",
    "WHY IT SCORED THIS WAY",
    ...lead.scoreReasons.map((reason) => `  ${reason}`),
    "",
    "WHERE IT CAME FROM",
    ...attribution.map(([label, value]) => `  ${label}: ${value}`),
    "",
    `Page: ${siteUrl(lead.source.pagePath)}`,
    `Ledger: the Google Sheet "${process.env.GOOGLE_SHEETS_TAB_NAME ?? "Leads"}" tab`,
  );

  const table = (rows: Array<[string, string]>) =>
    `<table style="border-collapse:collapse;margin:0 0 18px;font-size:14px;">${rows
      .map(
        ([label, value]) =>
          `<tr><td style="padding:3px 12px 3px 0;color:#57534e;vertical-align:top;white-space:nowrap;">${escapeHtml(
            label,
          )}</td><td style="padding:3px 0;">${escapeHtml(value)}</td></tr>`,
      )
      .join("")}</table>`;

  const heading = (text: string) =>
    `<p style="margin:22px 0 8px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#78716c;">${text}</p>`;

  const htmlBody = [
    `<p style="margin:0 0 4px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#b8320f;font-weight:700;">${lead.band} · reply within ${lead.routing.slaMinutes} min</p>`,
    `<h1 style="margin:0 0 18px;font-size:20px;line-height:1.3;">${escapeHtml(
      internalBriefSubject(lead),
    )}</h1>`,
    `<p style="margin:0 0 20px;">${actions
      .map(
        ({ label, href }) =>
          `<a href="${href}" style="display:inline-block;margin:0 8px 8px 0;padding:9px 14px;background:#b8320f;color:#ffffff;text-decoration:none;font-weight:600;font-size:14px;">${escapeHtml(
            label,
          )}</a>`,
      )
      .join("")}</p>`,
    heading("Enquiry"),
    table(fields),
    lead.message
      ? heading("What they wrote") +
        `<blockquote style="margin:0 0 18px;padding:12px 14px;background:#f5f5f4;border-left:3px solid #b8320f;">${escapeHtml(
          lead.message,
        )}</blockquote>`
      : "",
    heading("Suggested opening line"),
    htmlParagraph(escapeHtml(suggestedOpener(lead))),
    heading("Why it scored this way"),
    `<ul style="margin:0 0 18px;padding-left:20px;font-size:14px;color:#57534e;">${lead.scoreReasons
      .map((reason) => `<li style="margin:0 0 3px;">${escapeHtml(reason)}</li>`)
      .join("")}</ul>`,
    heading("Where it came from"),
    table(attribution),
    `<p style="margin:0;font-size:13px;color:#78716c;">Enquiry page: <a href="${siteUrl(
      lead.source.pagePath,
    )}" style="color:#b8320f;">${escapeHtml(siteUrl(lead.source.pagePath))}</a></p>`,
  ].join("");

  return {
    subject: internalBriefSubject(lead),
    text: textLines.join("\n"),
    html: htmlEmail(htmlBody),
  };
}

/**
 * Internal WhatsApp alert. Short by design — the team reads it on a phone and
 * taps through. Under 700 characters.
 */
export function internalAlertWhatsApp(lead: Lead): string {
  const lines = [
    `${lead.band.toUpperCase()} LEAD ${lead.id}`,
    `${lead.name}${lead.company ? `, ${lead.company}` : ""} — ${lead.city ? `${lead.city}, ` : ""}${lead.country}`,
    enquirySubject(lead) + (lead.quantity ? ` · ${lead.quantity}` : ""),
    lead.phoneE164 || lead.email,
    `Reply within ${lead.routing.slaMinutes} min. Page: ${lead.source.pagePath}`,
  ];

  const message = lines.join("\n");
  return message.length <= 700 ? message : `${message.slice(0, 697)}...`;
}

export const WHATSAPP_ALERT_TEMPLATE_BODY = [
  "{{1}} LEAD {{2}}",
  "{{3}} — {{4}}",
  "{{5}}",
  "{{6}}",
  "Reply within {{7}} min.",
].join("\n");

/** Who receives internal alerts. Empty when the client has not set the number. */
export function internalWhatsAppRecipient(): string | null {
  const configured = process.env.WHATSAPP_SALES_NUMBER?.trim();
  if (configured) return toWhatsAppDigits(configured);
  const fallback = confirmed(site.contact.whatsapp);
  return fallback ? toWhatsAppDigits(fallback) : null;
}
