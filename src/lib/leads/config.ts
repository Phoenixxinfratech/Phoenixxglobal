/**
 * Tunable business rules for lead scoring, routing and SLA.
 * These are the numbers the client is expected to change over time —
 * see docs/OPERATIONS.md. Changing a value here needs no other code edit.
 */

/** Countries Phase 3 publishes export pages for. Scored highest. */
export const TARGET_EXPORT_COUNTRIES = [
  "Kenya",
  "Tanzania",
  "Uganda",
  "Rwanda",
  "Ghana",
  "Zambia",
  "Mozambique",
  "Namibia",
  "Botswana",
  "Angola",
  "Ethiopia",
  "Nigeria",
] as const;

export const SCORE_WEIGHTS = {
  targetExportCountry: 20,
  india: 10,
  otherCountry: 0,
  productNamed: 10,
  applicationNamed: 10,
  quantityStated: 15,
  timelineWithin90Days: 15,
  corporateEmail: 10,
  highIntentPage: 10,
  selectionToolCompleted: 15,
  thinMessagePenalty: -15,
} as const;

export const SCORE_BANDS = {
  /** score >= hot */
  hot: 60,
  /** score >= warm (and below hot) */
  warm: 35,
} as const;

/**
 * Routing table. Single owner for every band per client decision —
 * escalation target is the founder. Channels are adapter names.
 *
 * "sheets", "crm" and "webhook" are record-keeping: every non-spam lead goes to
 * all three. "email", "alert" and "whatsapp" interrupt a human, so they are
 * rationed by band — a team that gets paged for cold leads stops reading alerts.
 */
export const ROUTING: Record<
  "hot" | "warm" | "cold" | "spam",
  { owner: string; channel: string[]; slaMinutes: number }
> = {
  hot: {
    owner: "sales-owner",
    channel: ["sheets", "crm", "webhook", "email", "alert", "whatsapp"],
    slaMinutes: 60,
  },
  warm: {
    owner: "sales-owner",
    channel: ["sheets", "crm", "webhook", "email", "whatsapp"],
    slaMinutes: 240,
  },
  cold: {
    owner: "sales-owner",
    channel: ["sheets", "crm", "webhook", "email"],
    slaMinutes: 1440,
  },
  spam: {
    owner: "unassigned",
    channel: ["sheets"],
    slaMinutes: 0,
  },
};

/** Response-time promise printed in the UI and the auto-reply. Must stay true. */
export const RESPONSE_PROMISE = {
  short: "one working day",
  full: "within one working day (Mon–Sat, 9:30 AM – 6:30 PM IST)",
} as const;

/** Working hours used for SLA escalation maths, IST. */
export const WORKING_HOURS_IST = {
  startHour: 9,
  startMinute: 30,
  endHour: 18,
  endMinute: 30,
  /** 0 = Sunday. Mon–Sat. */
  workingDays: [1, 2, 3, 4, 5, 6],
} as const;

/** Free/consumer mail domains — no corporate-domain bonus. */
export const FREE_EMAIL_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "yahoo.co.in",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "aol.com",
  "icloud.com",
  "protonmail.com",
  "proton.me",
  "rediffmail.com",
  "zoho.com",
  "ymail.com",
  "gmx.com",
  "mail.com",
] as const;

/** Disposable domains — routed to the spam band, logged but not actioned. */
export const DISPOSABLE_EMAIL_DOMAINS = [
  "mailinator.com",
  "guerrillamail.com",
  "10minutemail.com",
  "tempmail.com",
  "temp-mail.org",
  "throwawaymail.com",
  "yopmail.com",
  "trashmail.com",
  "sharklasers.com",
  "getnada.com",
  "dispostable.com",
  "maildrop.cc",
  "fakeinbox.com",
  "mintemail.com",
  "spamgourmet.com",
] as const;

/** Page prefixes treated as high commercial intent for scoring. */
export const HIGH_INTENT_PAGE_PREFIXES = [
  "/products/",
  "/export/",
  "/resources/panel-selection/",
  "/request-a-quote/",
] as const;

export const ANTI_SPAM = {
  /** Reject submissions faster than this — bots fill instantly. */
  minSubmitMs: 3000,
  /** Per-IP window. */
  rateLimitWindowMs: 10 * 60 * 1000,
  rateLimitMax: 5,
  /** Idempotency window for identical email + page. */
  idempotencyWindowMs: 60 * 1000,
  /** Message bodies with more links than this are spam-scored. */
  maxLinksInMessage: 2,
  /** Max accepted request body size. */
  maxBodyBytes: 32 * 1024,
  spamKeywords: [
    "seo service",
    "seo services",
    "guest post",
    "backlink",
    "crypto",
    "bitcoin",
    "forex",
    "casino",
    "loan offer",
    "viagra",
    "escort",
    "rank your website",
    "increase your traffic",
  ],
} as const;

/** How long a first-touch attribution cookie survives. */
export const ATTRIBUTION_COOKIE = {
  name: "psb_attr",
  maxAgeDays: 90,
} as const;
