/**
 * Automated follow-up copy — Phase 4 Section 7.3.
 * Each step references the actual enquiry and offers one next step.
 * The sequence stops the moment a human marks the lead as replied.
 */
import { RESPONSE_PROMISE } from "@/lib/leads/config";
import type { Lead } from "@/lib/leads/types";
import type { EmailMessage } from "./buyerAck";
import {
  enquirySubject,
  firstName,
  htmlEmail,
  htmlParagraph,
  htmlSignature,
  productLabel,
  siteUrl,
  textSignature,
} from "./format";

export type FollowUpStep = "d3" | "d7" | "d14" | "d45";

export const FOLLOW_UP_CADENCE: Array<{ step: FollowUpStep; dayOffset: number }> = [
  { step: "d3", dayOffset: 3 },
  { step: "d7", dayOffset: 7 },
  { step: "d14", dayOffset: 14 },
  { step: "d45", dayOffset: 45 },
];

function relevantGuide(lead: Lead): { href: string; label: string } {
  const product = lead.product ?? "";
  if (product.includes("pir") || lead.application?.toLowerCase().includes("fire")) {
    return {
      href: siteUrl("/resources/comparisons/puf-vs-pir-panels/"),
      label: "PUF vs PIR — when each core is the right spend",
    };
  }
  if (product.includes("roof")) {
    return {
      href: siteUrl("/resources/guides/roofing-panel-spans/"),
      label: "roofing panel spans and purlin spacing",
    };
  }
  if (
    product.includes("cold") ||
    lead.application?.toLowerCase().includes("cold") ||
    lead.application?.toLowerCase().includes("freezer")
  ) {
    return {
      href: siteUrl("/resources/guides/cold-storage-panel-thickness/"),
      label: "how to choose panel thickness for cold storage",
    };
  }
  return {
    href: siteUrl("/resources/guides/evaluating-sandwich-panel-suppliers/"),
    label: "what to check before placing an export panel order",
  };
}

function wrap(lead: Lead, subject: string, paragraphs: string[]): EmailMessage {
  const text = [
    `Hi ${firstName(lead)},`,
    "",
    ...paragraphs,
    "",
    textSignature(),
  ].join("\n\n");

  const html = htmlEmail(
    [
      htmlParagraph(`Hi ${firstName(lead)},`),
      ...paragraphs.map((p) => htmlParagraph(p)),
      htmlSignature(),
    ].join(""),
  );

  return { subject, text, html };
}

export function followUpEmail(lead: Lead, step: FollowUpStep): EmailMessage {
  const subjectThing = enquirySubject(lead);
  const guide = relevantGuide(lead);
  const product = productLabel(lead.product);

  switch (step) {
    case "d3":
      return wrap(lead, `${subjectThing} — a note on specification (${lead.id})`, [
        `You asked about ${subjectThing} on ${lead.istTimestamp.split(",")[0] ?? "your enquiry date"} (reference ${lead.id}). While our engineer prepares numbers, this is the page we send buyers in the same position: ${guide.label} at ${guide.href}.`,
        "It is not a brochure. It tells you where people over-specify and where they under-specify. Read the limitations section before you lock a thickness.",
        "Reply to this email with a layout, even a rough one, and we will put dimensions against a bill of materials.",
      ]);
    case "d7":
      return wrap(lead, `${lead.id} — has the layout been finalised?`, [
        `Checking in on ${subjectThing} for ${lead.city ? `${lead.city}, ` : ""}${lead.country}. If the room layout is now frozen, send the drawing and we will revise the quotation against the actual walls, not an estimate.`,
        product
          ? `We quoted against ${product}. If the core, thickness or facing has changed since then, say so in the reply so we do not reissue the wrong sheet.`
          : "If the application or temperature band has changed since the enquiry, say so in the reply so we do not reissue the wrong sheet.",
        "One attachment is enough. A photo of a sketched plan is fine.",
      ]);
    case "d14":
      return wrap(lead, `${subjectThing} — similar rooms we specify this way`, [
        `Most export enquiries for ${subjectThing} stall for the same reason: the drawing arrives after the first quote, and the quantity moves. We would rather quote once against a drawing than three times against a guess.`,
        `If this room is still going ahead, send the layout and the operating temperature. We will return a specification, packing note and ${RESPONSE_PROMISE.short} on price.`,
        "If the project is paused, reply with 'hold' and we will stop these notes. No offence taken.",
      ]);
    case "d45":
      return wrap(lead, `${lead.id} — still useful, or shall we close the file?`, [
        `Your enquiry ${lead.id} about ${subjectThing} has been quiet for several weeks. The file is still here.`,
        "If the room is back on the programme, reply with the current layout and required-by date and we will pick it up the same working day.",
        "If it is dead, reply 'close' and we will mark the ledger so we stop writing. Either answer is useful.",
      ]);
  }
}

export function slaBreachAlert(lead: Lead, workingMinutesOpen: number): {
  subject: string;
  text: string;
} {
  return {
    subject: `[SLA] ${lead.band.toUpperCase()} ${lead.id} untouched for ${workingMinutesOpen} min`,
    text: [
      `${lead.name}${lead.company ? `, ${lead.company}` : ""} — ${lead.country}`,
      enquirySubject(lead),
      lead.phoneE164 || lead.email,
      `Opened ${workingMinutesOpen} working minutes ago. Target is ${lead.routing.slaMinutes} minutes.`,
      `Call or WhatsApp now. Page: ${lead.source.pagePath}`,
      `Mark the ledger row as contacted, or POST /api/cron/?job=stop with this lead id, so the sequence does not keep escalating.`,
    ].join("\n"),
  };
}

export function dailyDigestSubject(dateLabel: string): string {
  return `Daily lead digest — ${dateLabel}`;
}

export function weeklyDigestSubject(dateLabel: string): string {
  return `Weekly lead digest — week of ${dateLabel}`;
}
