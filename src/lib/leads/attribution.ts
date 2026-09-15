/**
 * First-party attribution. UTMs and the landing page are captured on first
 * visit into a same-site cookie (90 days) so a buyer who lands on a guide in
 * March and enquires in May still credits the guide.
 *
 * No personal data goes in the cookie or in any URL.
 */
import { ATTRIBUTION_COOKIE } from "./config";
import type { LeadUtm, TouchPoint } from "./types";

export type AttributionSnapshot = {
  firstTouch: TouchPoint;
  lastTouch: TouchPoint;
};

const UTM_KEYS: Array<keyof LeadUtm> = ["source", "medium", "campaign", "term", "content"];

export function parseUtmFromSearch(search: string): LeadUtm {
  const params = new URLSearchParams(search);
  const utm: LeadUtm = {};
  for (const key of UTM_KEYS) {
    const value = params.get(`utm_${key}`);
    if (value) utm[key] = value.slice(0, 120);
  }
  return utm;
}

function touchFrom(utm: LeadUtm, landingPage: string, referrer: string): TouchPoint {
  return {
    at: new Date().toISOString(),
    ...(utm.source ? { source: utm.source } : {}),
    ...(utm.medium ? { medium: utm.medium } : {}),
    ...(utm.campaign ? { campaign: utm.campaign } : {}),
    landingPage,
    ...(referrer ? { referrer: referrer.slice(0, 300) } : {}),
  };
}

/**
 * Infers source/medium when no UTMs are present, so organic and referral
 * traffic is not recorded as "direct".
 */
export function inferSourceMedium(referrer: string, hostname: string): LeadUtm {
  if (!referrer) return { source: "direct", medium: "none" };

  let refHost = "";
  try {
    refHost = new URL(referrer).hostname.replace(/^www\./, "");
  } catch {
    return { source: "direct", medium: "none" };
  }

  if (!refHost || refHost === hostname.replace(/^www\./, "")) {
    return { source: "direct", medium: "none" };
  }

  const searchEngines: Record<string, string> = {
    "google.com": "google",
    "google.co.in": "google",
    "google.co.ke": "google",
    "bing.com": "bing",
    "duckduckgo.com": "duckduckgo",
    "search.yahoo.com": "yahoo",
    "yandex.com": "yandex",
  };

  const aiAssistants: Record<string, string> = {
    "chatgpt.com": "chatgpt",
    "chat.openai.com": "chatgpt",
    "perplexity.ai": "perplexity",
    "claude.ai": "claude",
    "gemini.google.com": "gemini",
    "copilot.microsoft.com": "copilot",
  };

  for (const [host, name] of Object.entries(searchEngines)) {
    if (refHost === host || refHost.endsWith(`.${host}`)) {
      return { source: name, medium: "organic" };
    }
  }

  for (const [host, name] of Object.entries(aiAssistants)) {
    if (refHost === host || refHost.endsWith(`.${host}`)) {
      return { source: name, medium: "ai_assistant" };
    }
  }

  return { source: refHost, medium: "referral" };
}

/**
 * Client-side: read the stored snapshot, writing first touch on the first
 * visit and refreshing last touch on every visit. Safe to call repeatedly.
 */
export function captureAttribution(): AttributionSnapshot | null {
  if (typeof window === "undefined") return null;

  const utmFromUrl = parseUtmFromSearch(window.location.search);
  const referrer = document.referrer ?? "";
  const utm = Object.keys(utmFromUrl).length
    ? utmFromUrl
    : inferSourceMedium(referrer, window.location.hostname);

  const currentTouch = touchFrom(utm, window.location.pathname, referrer);
  const existing = readAttributionCookie();

  const snapshot: AttributionSnapshot = existing
    ? { firstTouch: existing.firstTouch, lastTouch: currentTouch }
    : { firstTouch: currentTouch, lastTouch: currentTouch };

  writeAttributionCookie(snapshot);
  return snapshot;
}

export function readAttributionCookie(): AttributionSnapshot | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${ATTRIBUTION_COOKIE.name}=`));
  if (!match) return null;

  try {
    const raw = decodeURIComponent(match.slice(ATTRIBUTION_COOKIE.name.length + 1));
    const parsed = JSON.parse(raw) as AttributionSnapshot;
    if (!parsed?.firstTouch?.at) return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeAttributionCookie(snapshot: AttributionSnapshot): void {
  if (typeof document === "undefined") return;
  const value = encodeURIComponent(JSON.stringify(snapshot));
  const maxAge = ATTRIBUTION_COOKIE.maxAgeDays * 24 * 60 * 60;
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${ATTRIBUTION_COOKIE.name}=${value}; Path=/; Max-Age=${maxAge}; SameSite=Lax${secure}`;
}

/** Rough device class from the user agent — enough for reporting splits. */
export function deviceFromUserAgent(userAgent: string): string {
  const ua = userAgent.toLowerCase();
  if (/ipad|tablet|playbook|silk/.test(ua)) return "tablet";
  if (/mobi|android|iphone|ipod/.test(ua)) return "mobile";
  if (!ua) return "unknown";
  return "desktop";
}
