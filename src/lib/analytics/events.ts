/**
 * Typed analytics events. Every call site uses `track()`, never a raw gtag().
 */
export const ANALYTICS_EVENTS = [
  "form_start",
  "form_submit",
  "generate_lead",
  "form_abandon",
  "whatsapp_click",
  "call_click",
  "email_click",
  "datasheet_download",
  "selection_tool_start",
  "selection_tool_complete",
  "view_product",
  "view_country_page",
  "comparison_view",
  "cta_click",
  "scroll_75",
  "outbound_click",
] as const;

export type AnalyticsEvent = (typeof ANALYTICS_EVENTS)[number];

export type AnalyticsParams = {
  page_path?: string;
  page_type?: string;
  product?: string;
  country?: string;
  variant?: string;
  location?: string;
  lead_id?: string;
  band?: string;
  value_band?: string;
  device?: string;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function pageTypeFromPath(pathname: string): string {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/products/")) return "product";
  if (pathname.startsWith("/solutions/")) return "solution";
  if (pathname.startsWith("/export/") && pathname.split("/").filter(Boolean).length >= 3)
    return "city";
  if (pathname.startsWith("/export/")) return "country";
  if (pathname.startsWith("/resources/guides/")) return "guide";
  if (pathname.startsWith("/resources/comparisons/")) return "comparison";
  if (pathname.startsWith("/resources/panel-selection")) return "selection_tool";
  if (pathname.startsWith("/blog/")) return "article";
  if (pathname.startsWith("/request-a-quote")) return "quote";
  return "other";
}
