/**
 * CRM adapter — Zoho CRM or HubSpot, chosen by CRM_PROVIDER.
 *
 * The client has no CRM today, so this adapter is disabled and the Google
 * Sheets ledger is the system of record. It is written and typed so that
 * switching it on is a matter of credentials, not code.
 *
 * Field mappings below use each provider's standard fields only. Custom fields
 * (lead band, score, first-touch source) must be created in the CRM before they
 * will accept the values — see docs/INTEGRATIONS.md. Nothing here invents a
 * custom field API name.
 */
import type { IntegrationResult, Lead, LeadIntegration } from "@/lib/leads/types";
import { productLabel } from "@/lib/messages/format";
import { envEnabled, withRetry } from "./types";

type CrmProvider = "zoho" | "hubspot";

export function crmProvider(): CrmProvider | null {
  const raw = process.env.CRM_PROVIDER?.trim().toLowerCase();
  if (raw === "zoho" || raw === "hubspot") return raw;
  return null;
}

export function crmConfigured(): boolean {
  const provider = crmProvider();
  if (!provider) return false;
  if (provider === "hubspot") return Boolean(process.env.CRM_API_KEY);
  return Boolean(
    process.env.CRM_REFRESH_TOKEN && process.env.CRM_CLIENT_ID && process.env.CRM_CLIENT_SECRET,
  );
}

/** The description block both providers receive, so no context is lost. */
function enquiryNotes(lead: Lead): string {
  const lines = [
    `Reference: ${lead.id}`,
    `Received: ${lead.istTimestamp} IST`,
    `Band: ${lead.band} (score ${lead.score}/100)`,
    `Form: ${lead.variant}`,
    `Enquiry page: ${lead.source.pagePath}`,
    `Landing page: ${lead.source.landingPage}`,
    `First touch: ${lead.source.firstTouch.source ?? "unknown"} / ${lead.source.firstTouch.medium ?? "unknown"}`,
    `Last touch: ${lead.source.lastTouch.source ?? "unknown"} / ${lead.source.lastTouch.medium ?? "unknown"}`,
    `Device: ${lead.source.device}`,
  ];

  if (lead.quantity) lines.push(`Quantity: ${lead.quantity}`);
  if (lead.thickness) lines.push(`Thickness: ${lead.thickness}`);
  if (lead.temperature) lines.push(`Temperature: ${lead.temperature}`);
  if (lead.requiredBy) lines.push(`Required by: ${lead.requiredBy}`);
  if (lead.message) lines.push("", "Buyer's message:", lead.message);

  return lines.join("\n");
}

function splitName(lead: Lead): { first: string; last: string } {
  const parts = lead.name.trim().split(/\s+/);
  if (parts.length === 1) return { first: parts[0]!, last: parts[0]! };
  return { first: parts[0]!, last: parts.slice(1).join(" ") };
}

/** Zoho access tokens are short-lived; exchange the refresh token per request. */
async function zohoAccessToken(): Promise<string> {
  const accountsUrl = process.env.CRM_ACCOUNTS_URL ?? "https://accounts.zoho.in";
  const params = new URLSearchParams({
    refresh_token: process.env.CRM_REFRESH_TOKEN ?? "",
    client_id: process.env.CRM_CLIENT_ID ?? "",
    client_secret: process.env.CRM_CLIENT_SECRET ?? "",
    grant_type: "refresh_token",
  });

  const response = await fetch(`${accountsUrl}/oauth/v2/token?${params.toString()}`, {
    method: "POST",
  });

  if (!response.ok) {
    throw new Error(`Zoho token exchange ${response.status}: ${(await response.text()).slice(0, 200)}`);
  }

  const data = (await response.json()) as { access_token?: string; error?: string };
  if (!data.access_token) {
    throw new Error(`Zoho token exchange returned no access_token (${data.error ?? "unknown"})`);
  }
  return data.access_token;
}

async function pushToZoho(lead: Lead): Promise<string> {
  const token = await zohoAccessToken();
  const apiDomain = process.env.CRM_API_DOMAIN ?? "https://www.zohoapis.in";
  const { first, last } = splitName(lead);

  const response = await fetch(`${apiDomain}/crm/v5/Leads`, {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: [
        {
          First_Name: first,
          Last_Name: last,
          Company: lead.company ?? lead.name,
          Email: lead.email,
          Phone: lead.phoneE164,
          Country: lead.country,
          City: lead.city ?? "",
          Lead_Source: lead.source.firstTouch.source ?? "Website",
          Description: enquiryNotes(lead),
        },
      ],
      trigger: [],
    }),
  });

  if (!response.ok) {
    throw new Error(`Zoho create ${response.status}: ${(await response.text()).slice(0, 300)}`);
  }

  return "Zoho lead created";
}

async function pushToHubspot(lead: Lead): Promise<string> {
  const { first, last } = splitName(lead);

  const response = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.CRM_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      properties: {
        email: lead.email,
        firstname: first,
        lastname: last,
        company: lead.company ?? "",
        phone: lead.phoneE164,
        country: lead.country,
        city: lead.city ?? "",
        message: enquiryNotes(lead),
        hs_lead_status: "NEW",
      },
    }),
  });

  // 409 means the contact already exists, which is a success for our purposes.
  if (response.status === 409) return "HubSpot contact already existed";

  if (!response.ok) {
    throw new Error(`HubSpot create ${response.status}: ${(await response.text()).slice(0, 300)}`);
  }

  return "HubSpot contact created";
}

export const crmIntegration: LeadIntegration = {
  name: "crm",
  get enabled() {
    return envEnabled(process.env.INTEGRATION_CRM_ENABLED) && crmConfigured();
  },
  async send(lead: Lead): Promise<IntegrationResult> {
    const provider = crmProvider();
    if (!provider) {
      return { ok: false, detail: "CRM_PROVIDER is not set to zoho or hubspot" };
    }

    const result = await withRetry(`crm.${provider}`, () =>
      provider === "zoho" ? pushToZoho(lead) : pushToHubspot(lead),
    );

    if (!result.ok) return { ok: false, detail: result.error };

    const product = productLabel(lead.product);
    return {
      ok: true,
      detail: product ? `${result.value} (${product})` : result.value,
    };
  },
};
