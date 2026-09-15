/**
 * Shared helpers for automated message copy.
 * Product slugs and blank fields must never leak into a buyer-facing message.
 */
import { products } from "@/content/products";
import { site } from "@/config/site";
import { confirmed } from "@/lib/confirmed";
import { toWhatsAppDigits } from "@/lib/leads/phone";
import type { Lead } from "@/lib/leads/types";

/** "puf-panels" → "PUF Sandwich Panels". Falls back to the raw value. */
export function productLabel(slug: string | undefined): string | null {
  if (!slug?.trim()) return null;
  const match = products.find((product) => product.slug === slug.trim());
  return match?.name ?? slug.trim();
}

/**
 * The thing the buyer asked about, in their terms, for echoing back.
 * Order matters: the most specific available detail wins.
 */
/** "a freezer room" — buyers type the noun without the article. */
function withArticle(phrase: string): string {
  const trimmed = phrase.trim();
  if (/^(a|an|the|some|our|your|\d)\b/i.test(trimmed)) return trimmed;
  return `${/^[aeiou]/i.test(trimmed) ? "an" : "a"} ${trimmed}`;
}

export function enquirySubject(lead: Lead): string {
  const product = productLabel(lead.product);
  if (product && lead.application) return `${product} for ${withArticle(lead.application)}`;
  if (product) return product;
  if (lead.application) return withArticle(lead.application);
  if (lead.variant === "datasheet") return "our panel datasheets";
  return "insulated panels";
}

/** First name only — "Hi Jane" reads better than "Hi Jane Mwangi". */
export function firstName(lead: Lead): string {
  const first = lead.name.trim().split(/\s+/)[0];
  return first && first.length > 1 ? first : lead.name.trim();
}

/** Only the fields the buyer actually filled, ready to list back to them. */
export function statedDetails(lead: Lead): Array<{ label: string; value: string }> {
  const rows: Array<{ label: string; value: string }> = [];
  const product = productLabel(lead.product);

  if (product) rows.push({ label: "Product", value: product });
  if (lead.application) rows.push({ label: "Application", value: lead.application });
  if (lead.quantity) rows.push({ label: "Quantity", value: lead.quantity });
  if (lead.thickness) rows.push({ label: "Thickness", value: lead.thickness });
  if (lead.temperature) rows.push({ label: "Operating temperature", value: lead.temperature });
  if (lead.requiredBy) rows.push({ label: "Required by", value: lead.requiredBy });
  rows.push({
    label: "Delivery location",
    value: lead.city ? `${lead.city}, ${lead.country}` : lead.country,
  });

  return rows;
}

/** What the buyer can send to get a faster, firmer quotation. */
export function missingForQuote(lead: Lead): string[] {
  const asks: string[] = [];
  if (!lead.quantity) asks.push("room dimensions or panel area");
  if (!lead.temperature) asks.push("operating temperature");
  if (!lead.thickness) asks.push("panel thickness, if it is already specified");
  if (!lead.requiredBy) asks.push("the date you need it on site");
  asks.push("a layout drawing if you have one");
  if (!lead.city) asks.push("the delivery location or port of discharge");
  return asks;
}

export function whatsAppLink(message: string): string | null {
  const number = confirmed(site.contact.whatsapp);
  if (!number) return null;
  return `https://wa.me/${toWhatsAppDigits(number)}?text=${encodeURIComponent(message)}`;
}

export function siteUrl(pathname = "/"): string {
  const base = (process.env.NEXT_PUBLIC_SITE_URL ?? site.domain).replace(/\/$/, "");
  return `${base}${pathname}`;
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Minimal HTML email wrapper. Inline styles only, no external CSS, no images —
 * the things that get mail filtered or rendered badly in Outlook.
 */
export function htmlEmail(bodyHtml: string): string {
  return [
    '<!doctype html><html><body style="margin:0;padding:24px;background:#f5f5f4;',
    'font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;',
    'font-size:15px;line-height:1.6;color:#1c1917;">',
    '<div style="max-width:600px;margin:0 auto;background:#ffffff;padding:28px;',
    'border:1px solid #e7e5e4;">',
    bodyHtml,
    "</div></body></html>",
  ].join("");
}

export function htmlParagraph(text: string): string {
  return `<p style="margin:0 0 14px;">${text}</p>`;
}

export function htmlDetailTable(rows: Array<{ label: string; value: string }>): string {
  const cells = rows
    .map(
      ({ label, value }) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#57534e;vertical-align:top;">${escapeHtml(
          label,
        )}</td><td style="padding:4px 0;font-weight:600;">${escapeHtml(value)}</td></tr>`,
    )
    .join("");
  return `<table style="border-collapse:collapse;margin:0 0 16px;font-size:15px;">${cells}</table>`;
}

/** Plain-text signature. Only renders contact fields that are confirmed. */
export function textSignature(): string {
  const lines = [`— ${site.brand}, Ahmedabad, India`];
  const phone = confirmed(site.contact.phonePrimary);
  const email = confirmed(site.contact.exportEmail) ?? confirmed(site.contact.salesEmail);
  if (phone) lines.push(`Phone: ${phone}`);
  if (email) lines.push(`Email: ${email}`);
  lines.push(site.contact.workingHours);
  lines.push(siteUrl("/"));
  return lines.join("\n");
}

export function htmlSignature(): string {
  return `<p style="margin:24px 0 0;padding-top:16px;border-top:1px solid #e7e5e4;color:#57534e;font-size:13px;">${textSignature()
    .split("\n")
    .map(escapeHtml)
    .join("<br>")}</p>`;
}