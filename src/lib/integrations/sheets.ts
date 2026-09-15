/**
 * Google Sheets ledger — the permanent record and the client's single source
 * of truth. For a three-person team with no CRM yet, this is the workflow:
 * one row per lead, readable on a phone, exportable, and impossible to lose
 * in an inbox.
 *
 * Setup steps for a non-developer: docs/INTEGRATIONS.md.
 */
import { google } from "googleapis";
import type { Lead, IntegrationResult, LeadIntegration } from "@/lib/leads/types";
import { envEnabled, withRetry } from "./types";

/** Column order. Append new columns at the end — never reorder existing ones. */
export const LEDGER_COLUMNS = [
  "Lead ID",
  "Received (IST)",
  "Band",
  "Score",
  "Variant",
  "Name",
  "Company",
  "Email",
  "Phone (E.164)",
  "Country",
  "City",
  "Product",
  "Application",
  "Quantity",
  "Thickness",
  "Temperature",
  "Required by",
  "Message",
  "Page path",
  "Page title",
  "First touch source",
  "First touch medium",
  "First touch campaign",
  "Last touch source",
  "Last touch medium",
  "Landing page",
  "Referrer",
  "Device",
  "Owner",
  "SLA minutes",
  "Score reasons",
  "Status",
] as const;

export function leadToRow(lead: Lead): string[] {
  return [
    lead.id,
    lead.istTimestamp,
    lead.band,
    String(lead.score),
    lead.variant,
    lead.name,
    lead.company ?? "",
    lead.email,
    lead.phoneE164,
    lead.country,
    lead.city ?? "",
    lead.product ?? "",
    lead.application ?? "",
    lead.quantity ?? "",
    lead.thickness ?? "",
    lead.temperature ?? "",
    lead.requiredBy ?? "",
    lead.message ?? "",
    lead.source.pagePath,
    lead.source.pageTitle,
    lead.source.firstTouch.source ?? "",
    lead.source.firstTouch.medium ?? "",
    lead.source.firstTouch.campaign ?? "",
    lead.source.lastTouch.source ?? "",
    lead.source.lastTouch.medium ?? "",
    lead.source.landingPage,
    lead.source.referrer ?? "",
    lead.source.device,
    lead.routing.owner,
    String(lead.routing.slaMinutes),
    lead.scoreReasons.join(" | "),
    lead.status,
  ];
}

function readPrivateKey(): string {
  const key = process.env.GOOGLE_SHEETS_PRIVATE_KEY ?? "";
  // Env vars store newlines escaped; the JWT client needs real ones.
  return key.replace(/\\n/g, "\n");
}

function sheetsClient() {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    key: readPrivateKey(),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return google.sheets({ version: "v4", auth });
}

export function sheetsConfigured(): boolean {
  return Boolean(
    process.env.GOOGLE_SHEETS_CLIENT_EMAIL &&
      process.env.GOOGLE_SHEETS_PRIVATE_KEY &&
      process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
  );
}

export const sheetsIntegration: LeadIntegration = {
  name: "sheets",
  get enabled() {
    return envEnabled(process.env.INTEGRATION_SHEETS_ENABLED) && sheetsConfigured();
  },
  async send(lead: Lead): Promise<IntegrationResult> {
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    const tab = process.env.GOOGLE_SHEETS_TAB_NAME ?? "Leads";

    if (!spreadsheetId) {
      return { ok: false, detail: "GOOGLE_SHEETS_SPREADSHEET_ID not set" };
    }

    const result = await withRetry("sheets.append", async () => {
      const sheets = sheetsClient();
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: `${tab}!A1`,
        valueInputOption: "RAW",
        insertDataOption: "INSERT_ROWS",
        requestBody: { values: [leadToRow(lead)] },
      });
      return true;
    });

    return result.ok
      ? { ok: true, detail: `Appended ${lead.id} to ${tab}` }
      : { ok: false, detail: result.error };
  },
};
