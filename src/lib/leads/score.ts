/**
 * Rules-based lead scoring — Phase 4 Section 8.
 * Transparent by design: every point is attributable to a named rule so the
 * sales team can see why a lead was banded the way it was.
 */
import {
  DISPOSABLE_EMAIL_DOMAINS,
  FREE_EMAIL_DOMAINS,
  HIGH_INTENT_PAGE_PREFIXES,
  SCORE_BANDS,
  SCORE_WEIGHTS,
  TARGET_EXPORT_COUNTRIES,
} from "./config";
import type { LeadBand } from "./types";

export type ScoreInput = {
  country?: string;
  email: string;
  product?: string;
  application?: string;
  quantity?: string;
  requiredBy?: string;
  message?: string;
  pagePath?: string;
  selectionToolCompleted?: boolean;
  /** Set when spam heuristics already flagged the submission. */
  spamFlagged?: boolean;
};

export type ScoreResult = {
  score: number;
  band: LeadBand;
  reasons: string[];
};

export function emailDomain(email: string): string {
  const at = email.lastIndexOf("@");
  if (at === -1) return "";
  return email.slice(at + 1).trim().toLowerCase();
}

export function isDisposableEmail(email: string): boolean {
  const domain = emailDomain(email);
  return (DISPOSABLE_EMAIL_DOMAINS as readonly string[]).includes(domain);
}

export function isFreeEmail(email: string): boolean {
  const domain = emailDomain(email);
  return (FREE_EMAIL_DOMAINS as readonly string[]).includes(domain);
}

/**
 * True when requiredBy points at a date inside the next 90 days, or reads as
 * an urgent phrase. Deliberately forgiving — buyers type "Q3", "asap", "next
 * month" far more often than an ISO date.
 */
export function isNearTermTimeline(requiredBy: string | undefined, now = new Date()): boolean {
  if (!requiredBy?.trim()) return false;
  const raw = requiredBy.trim().toLowerCase();

  if (/(asap|urgent|immediate|this month|next month|within \d+ (day|week)s?)/.test(raw)) {
    return true;
  }

  const parsed = Date.parse(requiredBy);
  if (!Number.isNaN(parsed)) {
    const days = (parsed - now.getTime()) / (1000 * 60 * 60 * 24);
    return days >= 0 && days <= 90;
  }

  // Quarter shorthand: treat the current and next quarter as near term.
  const quarterMatch = raw.match(/q([1-4])\s*(\d{4})?/);
  if (quarterMatch) {
    const quarter = Number(quarterMatch[1]);
    const year = quarterMatch[2] ? Number(quarterMatch[2]) : now.getFullYear();
    const quarterStart = new Date(Date.UTC(year, (quarter - 1) * 3, 1));
    const days = (quarterStart.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
    return days <= 90;
  }

  return false;
}

function isGenericMessage(message: string | undefined): boolean {
  if (!message?.trim()) return true;
  const trimmed = message.trim();
  if (trimmed.length < 15) return true;
  return /^(hi|hello|test|please quote|quote|need info|info|details|price|pricing)\.?$/i.test(
    trimmed,
  );
}

export function scoreLead(input: ScoreInput, now = new Date()): ScoreResult {
  const reasons: string[] = [];
  let score = 0;

  if (input.spamFlagged || isDisposableEmail(input.email)) {
    return {
      score: 0,
      band: "spam",
      reasons: ["Disposable email domain or spam heuristic triggered"],
    };
  }

  const country = input.country?.trim() ?? "";
  if ((TARGET_EXPORT_COUNTRIES as readonly string[]).includes(country)) {
    score += SCORE_WEIGHTS.targetExportCountry;
    reasons.push(`Target export market: ${country} (+${SCORE_WEIGHTS.targetExportCountry})`);
  } else if (country === "India") {
    score += SCORE_WEIGHTS.india;
    reasons.push(`Domestic enquiry: India (+${SCORE_WEIGHTS.india})`);
  } else if (country) {
    reasons.push(`Outside target markets: ${country} (+0)`);
  }

  if (input.product?.trim()) {
    score += SCORE_WEIGHTS.productNamed;
    reasons.push(`Product named: ${input.product} (+${SCORE_WEIGHTS.productNamed})`);
  }

  if (input.application?.trim()) {
    score += SCORE_WEIGHTS.applicationNamed;
    reasons.push(`Application named (+${SCORE_WEIGHTS.applicationNamed})`);
  }

  if (input.quantity?.trim()) {
    score += SCORE_WEIGHTS.quantityStated;
    reasons.push(`Quantity stated: ${input.quantity} (+${SCORE_WEIGHTS.quantityStated})`);
  }

  if (isNearTermTimeline(input.requiredBy, now)) {
    score += SCORE_WEIGHTS.timelineWithin90Days;
    reasons.push(`Timeline within 90 days (+${SCORE_WEIGHTS.timelineWithin90Days})`);
  }

  if (!isFreeEmail(input.email)) {
    score += SCORE_WEIGHTS.corporateEmail;
    reasons.push(`Corporate email domain (+${SCORE_WEIGHTS.corporateEmail})`);
  } else {
    reasons.push("Free email domain (+0)");
  }

  const pagePath = input.pagePath ?? "";
  if (HIGH_INTENT_PAGE_PREFIXES.some((prefix) => pagePath.startsWith(prefix))) {
    score += SCORE_WEIGHTS.highIntentPage;
    reasons.push(`High-intent page: ${pagePath} (+${SCORE_WEIGHTS.highIntentPage})`);
  }

  if (input.selectionToolCompleted) {
    score += SCORE_WEIGHTS.selectionToolCompleted;
    reasons.push(`Selection tool completed (+${SCORE_WEIGHTS.selectionToolCompleted})`);
  }

  if (isGenericMessage(input.message)) {
    score += SCORE_WEIGHTS.thinMessagePenalty;
    reasons.push(`Thin or generic message (${SCORE_WEIGHTS.thinMessagePenalty})`);
  }

  const clamped = Math.max(0, Math.min(100, score));
  const band: LeadBand =
    clamped >= SCORE_BANDS.hot ? "hot" : clamped >= SCORE_BANDS.warm ? "warm" : "cold";

  return { score: clamped, band, reasons };
}
