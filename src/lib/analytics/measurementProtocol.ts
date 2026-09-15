/**
 * GA4 Measurement Protocol — server-side generate_lead.
 * Uses the lead id as event_id so the client event with the same id is
 * de-duplicated in GA4.
 */
import type { Lead } from "@/lib/leads/types";

export async function sendGenerateLead(lead: Lead): Promise<void> {
  const measurementId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim();
  const apiSecret = process.env.GA4_API_SECRET?.trim();
  if (!measurementId || !apiSecret) return;

  const body = {
    client_id: `server.${lead.id}`,
    events: [
      {
        name: "generate_lead",
        params: {
          engagement_time_msec: 1,
          session_id: lead.id,
          lead_id: lead.id,
          band: lead.band,
          value_band: lead.band,
          page_path: lead.source.pagePath,
          country: lead.country,
          product: lead.product ?? "",
          variant: lead.variant,
        },
      },
    ],
  };

  try {
    await fetch(
      `https://www.google-analytics.com/mp/collect?measurement_id=${encodeURIComponent(
        measurementId,
      )}&api_secret=${encodeURIComponent(apiSecret)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(4000),
      },
    );
  } catch (error) {
    console.warn(
      "[analytics:mp]",
      JSON.stringify({
        leadId: lead.id,
        detail: error instanceof Error ? error.message : String(error),
      }),
    );
  }
}
