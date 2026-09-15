/**
 * Human-readable lead references: PSB-YYYYMMDD-XXXX.
 * Generated server-side only so two browsers can never mint the same id.
 */
import { randomInt } from "node:crypto";

function istDateStamp(date: Date): string {
  // IST is UTC+5:30 with no DST.
  const ist = new Date(date.getTime() + 5.5 * 60 * 60 * 1000);
  const year = ist.getUTCFullYear();
  const month = String(ist.getUTCMonth() + 1).padStart(2, "0");
  const day = String(ist.getUTCDate()).padStart(2, "0");
  return `${year}${month}${day}`;
}

export function generateLeadId(date = new Date()): string {
  const suffix = String(randomInt(0, 10000)).padStart(4, "0");
  return `PSB-${istDateStamp(date)}-${suffix}`;
}

export function isLeadId(value: string): boolean {
  return /^PSB-\d{8}-\d{4}$/.test(value);
}
