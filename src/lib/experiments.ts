/**
 * Cookie-based 50/50 split. No third-party library, no flicker:
 * read the cookie before paint on the client, or pass the variant from a
 * server component that inspected the request cookie.
 *
 * Run one experiment at a time. Do not start one until the page has enough
 * traffic for a decision — see docs/EXPERIMENTS.md.
 */
const COOKIE = "psb_exp";

export type ExperimentVariant = "control" | "variant";

export function assignVariant(id: string, existing?: string | null): ExperimentVariant {
  if (existing === "control" || existing === "variant") return existing;
  let hash = 0;
  for (let i = 0; i < id.length; i += 1) {
    hash = (hash * 31 + id.charCodeAt(i)) >>> 0;
  }
  return hash % 2 === 0 ? "control" : "variant";
}

export function experimentCookie(id: string, variant: ExperimentVariant): string {
  return `${COOKIE}=${id}:${variant}; path=/; max-age=${90 * 24 * 60 * 60}; SameSite=Lax`;
}

export function parseExperimentCookie(raw: string | undefined, id: string): ExperimentVariant | null {
  if (!raw) return null;
  const [cookieId, variant] = raw.split(":");
  if (cookieId !== id) return null;
  if (variant === "control" || variant === "variant") return variant;
  return null;
}
