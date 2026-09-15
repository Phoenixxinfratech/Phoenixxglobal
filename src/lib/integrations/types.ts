/**
 * Integration layer contract — Phase 4 Section 6.
 * Every adapter is isolated: one failing provider must never block another,
 * and must never surface an error to the buyer.
 */
export type { IntegrationResult, LeadIntegration } from "@/lib/leads/types";

export type RetryOptions = {
  attempts: number;
  baseDelayMs: number;
};

export const DEFAULT_RETRY: RetryOptions = {
  attempts: 3,
  baseDelayMs: 400,
};

/** Truthy env flag helper — adapters stay off unless explicitly enabled. */
export function envEnabled(value: string | undefined): boolean {
  if (!value) return false;
  const normalized = value.trim().toLowerCase();
  return normalized === "1" || normalized === "true" || normalized === "yes";
}

export async function withRetry<T>(
  label: string,
  fn: () => Promise<T>,
  options: RetryOptions = DEFAULT_RETRY,
): Promise<{ ok: true; value: T } | { ok: false; error: string }> {
  let lastError = "unknown error";

  for (let attempt = 1; attempt <= options.attempts; attempt += 1) {
    try {
      const value = await fn();
      return { ok: true, value };
    } catch (error) {
      lastError = error instanceof Error ? error.message : String(error);
      if (attempt < options.attempts) {
        const delay = options.baseDelayMs * 2 ** (attempt - 1);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }

  return { ok: false, error: `${label} failed after ${options.attempts} attempts: ${lastError}` };
}
