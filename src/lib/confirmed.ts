/**
 * Sentinel values that must never appear in rendered UI.
 * Components call confirmed() / isConfirmed() before rendering any site.ts field.
 */
export const UNCONFIRMED = ["[CONFIRM]", "VERIFY_REQUIRED"] as const;

export function isConfirmed(value: unknown): value is string {
  if (typeof value !== "string") return false;
  const trimmed = value.trim();
  if (!trimmed) return false;
  return !(UNCONFIRMED as readonly string[]).includes(trimmed);
}

/** Returns the value if confirmed, otherwise null (caller must render nothing). */
export function confirmed(value: unknown): string | null {
  return isConfirmed(value) ? value.trim() : null;
}

/** Dev-only guard: throws if a sentinel string reaches the DOM path. */
export function assertConfirmed(value: unknown, fieldPath: string): string {
  if (!isConfirmed(value)) {
    if (process.env.NODE_ENV !== "production") {
      throw new Error(
        `Unconfirmed site value rendered for "${fieldPath}". Hide the element and add it to OPEN-ITEMS.md.`,
      );
    }
    return "";
  }
  return value.trim();
}

/** Collect every unconfirmed leaf path from a nested object (used by open-items script). */
export function collectUnconfirmed(
  obj: unknown,
  prefix = "",
): Array<{ path: string; value: string }> {
  const results: Array<{ path: string; value: string }> = [];

  if (obj === null || obj === undefined) return results;

  if (typeof obj === "string") {
    if ((UNCONFIRMED as readonly string[]).includes(obj) || obj.trim() === "") {
      // Only flag known sentinels; empty arrays of certifications etc. are handled separately
      if ((UNCONFIRMED as readonly string[]).includes(obj)) {
        results.push({ path: prefix || "(root)", value: obj });
      }
    }
    return results;
  }

  if (Array.isArray(obj)) {
    obj.forEach((item, i) => {
      results.push(...collectUnconfirmed(item, `${prefix}[${i}]`));
    });
    return results;
  }

  if (typeof obj === "object") {
    for (const [key, val] of Object.entries(obj as Record<string, unknown>)) {
      const path = prefix ? `${prefix}.${key}` : key;
      results.push(...collectUnconfirmed(val, path));
    }
  }

  return results;
}
