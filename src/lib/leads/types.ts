/**
 * Lead data model — Phase 4 Section 4.
 * The API route builds a Lead from the validated form payload plus
 * server-side attribution, scoring and routing. Integrations consume Lead.
 */
import type { LeadVariant } from "@/lib/validation";

export type LeadBand = "hot" | "warm" | "cold" | "spam";

export type TouchPoint = {
  /** ISO timestamp of the touch. */
  at: string;
  source?: string;
  medium?: string;
  campaign?: string;
  landingPage?: string;
  referrer?: string;
};

export type LeadUtm = {
  source?: string;
  medium?: string;
  campaign?: string;
  term?: string;
  content?: string;
};

export type LeadSource = {
  pagePath: string;
  pageTitle: string;
  referrer?: string;
  utm: LeadUtm;
  firstTouch: TouchPoint;
  lastTouch: TouchPoint;
  device: string;
  landingPage: string;
  pagesViewed?: number;
};

export type LeadRouting = {
  owner: string;
  channel: string[];
  slaMinutes: number;
};

export type LeadConsent = {
  marketing: boolean;
  timestamp: string;
};

export type Lead = {
  /** PSB-YYYYMMDD-XXXX */
  id: string;
  receivedAt: string;
  /** Human-readable IST timestamp for the sheet and the internal brief. */
  istTimestamp: string;
  variant: LeadVariant;

  name: string;
  company?: string;
  email: string;
  phone: string;
  /** E.164 where parsing succeeded, otherwise the raw phone. */
  phoneE164: string;

  country: string;
  city?: string;

  product?: string;
  application?: string;
  industry?: string;
  quantity?: string;
  thickness?: string;
  temperature?: string;
  requiredBy?: string;
  message?: string;

  source: LeadSource;

  /** 0–100, see score.ts */
  score: number;
  band: LeadBand;
  scoreReasons: string[];

  routing: LeadRouting;
  consent: LeadConsent;

  /** CRM owns the lifecycle after handoff; we only ever emit "new". */
  status: "new";
};

/** Result contract every integration adapter returns. */
export type IntegrationResult = {
  ok: boolean;
  detail?: string;
};

export type LeadIntegration = {
  name: string;
  enabled: boolean;
  send(lead: Lead): Promise<IntegrationResult>;
};
