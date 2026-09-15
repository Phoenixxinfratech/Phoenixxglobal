/**
 * Assembles a Lead from a validated form payload plus server-derived facts.
 * The client can influence attribution but never the id, score, band or SLA.
 */
import { formatIstTimestamp } from "@/lib/format";
import type { LeadFormValues } from "@/lib/validation";
import { deviceFromUserAgent } from "./attribution";
import { ROUTING } from "./config";
import { generateLeadId } from "./id";
import { normalizePhone } from "./phone";
import { scoreLead } from "./score";
import { assessSpam } from "./spam";
import type { Lead, TouchPoint } from "./types";

export type BuildContext = {
  userAgent: string;
  receivedAt?: Date;
};

function fallbackTouch(values: LeadFormValues, at: string): TouchPoint {
  return {
    at,
    source: "direct",
    medium: "none",
    landingPage: values.landingPage ?? values.sourcePage ?? "/",
    ...(values.referrer ? { referrer: values.referrer } : {}),
  };
}

export function buildLead(values: LeadFormValues, context: BuildContext): Lead {
  const receivedAt = context.receivedAt ?? new Date();
  const iso = receivedAt.toISOString();

  const spam = assessSpam({
    email: values.email,
    message: values.message,
    name: values.name,
    company: values.company,
  });

  const { score, band, reasons } = scoreLead(
    {
      country: values.country,
      email: values.email,
      product: values.productInterest,
      application: values.application,
      quantity: values.quantity,
      requiredBy: values.requiredBy,
      message: values.message,
      pagePath: values.sourcePage,
      selectionToolCompleted: values.selectionToolCompleted,
      spamFlagged: spam.spam,
    },
    receivedAt,
  );

  const { e164 } = normalizePhone(values.phone ?? "", values.country);
  const routing = ROUTING[band];

  const firstTouch = values.firstTouch ?? fallbackTouch(values, iso);
  const lastTouch = values.lastTouch ?? firstTouch;

  return {
    id: generateLeadId(receivedAt),
    receivedAt: iso,
    istTimestamp: formatIstTimestamp(receivedAt),
    variant: values.variant,

    name: values.name,
    ...(values.company?.trim() ? { company: values.company.trim() } : {}),
    email: values.email,
    phone: values.phone ?? "",
    phoneE164: e164,

    country: values.country,
    ...(values.city?.trim() ? { city: values.city.trim() } : {}),

    ...(values.productInterest?.trim() ? { product: values.productInterest.trim() } : {}),
    ...(values.application?.trim() ? { application: values.application.trim() } : {}),
    ...(values.industry?.trim() ? { industry: values.industry.trim() } : {}),
    ...(values.quantity?.trim() ? { quantity: values.quantity.trim() } : {}),
    ...(values.thickness?.trim() ? { thickness: values.thickness.trim() } : {}),
    ...(values.temperature?.trim() ? { temperature: values.temperature.trim() } : {}),
    ...(values.requiredBy?.trim() ? { requiredBy: values.requiredBy.trim() } : {}),
    ...(values.message?.trim() ? { message: values.message.trim() } : {}),

    source: {
      pagePath: values.sourcePage ?? "/",
      pageTitle: values.pageTitle ?? "",
      ...(values.referrer ? { referrer: values.referrer } : {}),
      utm: {
        ...(lastTouch.source ? { source: lastTouch.source } : {}),
        ...(lastTouch.medium ? { medium: lastTouch.medium } : {}),
        ...(lastTouch.campaign ? { campaign: lastTouch.campaign } : {}),
      },
      firstTouch,
      lastTouch,
      device: deviceFromUserAgent(context.userAgent),
      landingPage: values.landingPage ?? firstTouch.landingPage ?? values.sourcePage ?? "/",
      ...(values.pagesViewed !== undefined ? { pagesViewed: values.pagesViewed } : {}),
    },

    score,
    band,
    scoreReasons: band === "spam" ? [...reasons, ...spam.reasons] : reasons,

    routing: {
      owner: routing.owner,
      channel: [...routing.channel],
      slaMinutes: routing.slaMinutes,
    },

    consent: {
      marketing: values.marketingConsent ?? false,
      timestamp: iso,
    },

    status: "new",
  };
}
