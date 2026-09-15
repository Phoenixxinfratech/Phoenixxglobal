const CONSENT_COOKIE = "psb_consent";
const MAX_AGE_DAYS = 180;

export type ConsentState = "unknown" | "granted" | "denied";

export function readConsent(): ConsentState {
  if (typeof document === "undefined") return "unknown";
  const match = document.cookie.match(/(?:^|; )psb_consent=([^;]*)/);
  const value = match?.[1];
  if (value === "granted" || value === "denied") return value;
  return "unknown";
}

export function prefersDoNotTrack(): boolean {
  if (typeof navigator === "undefined") return false;
  const flag = navigator.doNotTrack ?? (navigator as Navigator & { msDoNotTrack?: string }).msDoNotTrack;
  return flag === "1" || flag === "yes";
}

export function writeConsent(state: "granted" | "denied"): void {
  const maxAge = MAX_AGE_DAYS * 24 * 60 * 60;
  document.cookie = `${CONSENT_COOKIE}=${state}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

export function analyticsAllowed(state: ConsentState = readConsent()): boolean {
  if (prefersDoNotTrack()) return false;
  return state === "granted";
}
