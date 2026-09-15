/**
 * Layered anti-spam. No CAPTCHA by design — it costs real conversions and the
 * layers below stop the bots we actually see. Add a CAPTCHA only if spam gets
 * through in volume (see docs/RUNBOOK.md).
 */
import { ANTI_SPAM } from "./config";
import { isDisposableEmail } from "./score";

export type SpamVerdict = {
  /** True when the submission should be banded as spam (logged, not routed). */
  spam: boolean;
  /** True when the request should be rejected outright before any work. */
  reject: boolean;
  reasons: string[];
};

function countLinks(message: string): number {
  const matches = message.match(/https?:\/\/|www\.|\[url|<a\s/gi);
  return matches?.length ?? 0;
}

export function assessSpam(input: {
  email: string;
  message?: string;
  name?: string;
  company?: string;
}): SpamVerdict {
  const reasons: string[] = [];
  let spam = false;

  if (isDisposableEmail(input.email)) {
    spam = true;
    reasons.push("Disposable email domain");
  }

  const message = input.message ?? "";

  if (countLinks(message) > ANTI_SPAM.maxLinksInMessage) {
    spam = true;
    reasons.push("Message contains more links than a genuine enquiry needs");
  }

  const haystack = `${message} ${input.name ?? ""} ${input.company ?? ""}`.toLowerCase();
  const hit = ANTI_SPAM.spamKeywords.find((keyword) => haystack.includes(keyword));
  if (hit) {
    spam = true;
    reasons.push(`Solicitation keyword: "${hit}"`);
  }

  // Cyrillic or CJK blocks in an otherwise English B2B form are near-certain bots.
  if (/[\u0400-\u04FF]/.test(haystack)) {
    spam = true;
    reasons.push("Cyrillic script in an English-language enquiry form");
  }

  return { spam, reject: false, reasons };
}

/**
 * In-memory per-IP rate limiter and idempotency cache.
 * Deliberately dependency-free. On a single Netlify function instance this
 * catches the bursts that matter; the ledger's idempotency key is the real
 * protection against duplicates across instances.
 */
type Bucket = { count: number; resetAt: number };

const rateBuckets = new Map<string, Bucket>();
const recentSubmissions = new Map<string, number>();

function sweep(now: number): void {
  for (const [key, bucket] of rateBuckets) {
    if (bucket.resetAt <= now) rateBuckets.delete(key);
  }
  for (const [key, at] of recentSubmissions) {
    if (now - at > ANTI_SPAM.idempotencyWindowMs) recentSubmissions.delete(key);
  }
}

export function checkRateLimit(
  key: string,
  now = Date.now(),
  options: { max?: number; windowMs?: number } = {},
): { allowed: boolean; retryAfterSeconds: number } {
  sweep(now);
  const max = options.max ?? ANTI_SPAM.rateLimitMax;
  const windowMs = options.windowMs ?? ANTI_SPAM.rateLimitWindowMs;
  const bucket = rateBuckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    rateBuckets.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (bucket.count >= max) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((bucket.resetAt - now) / 1000)),
    };
  }

  bucket.count += 1;
  return { allowed: true, retryAfterSeconds: 0 };
}

/** Returns true when this exact enquiry was already accepted seconds ago. */
export function isDuplicateSubmission(
  key: string,
  now = Date.now(),
): boolean {
  sweep(now);
  const seen = recentSubmissions.get(key);
  if (seen !== undefined && now - seen <= ANTI_SPAM.idempotencyWindowMs) {
    return true;
  }
  recentSubmissions.set(key, now);
  return false;
}

export function idempotencyKey(email: string, pagePath: string): string {
  return `${email.trim().toLowerCase()}::${pagePath}`;
}
