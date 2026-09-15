"use client";

import { ANALYTICS_EVENTS, pageTypeFromPath, type AnalyticsEvent, type AnalyticsParams } from "./events";
import { analyticsAllowed } from "./consent";

function contextParams(): AnalyticsParams {
  if (typeof window === "undefined") return {};
  const path = window.location.pathname;
  return {
    page_path: path,
    page_type: pageTypeFromPath(path),
    device: window.matchMedia("(max-width: 767px)").matches ? "mobile" : "desktop",
  };
}

/**
 * Single typed tracker. No gtag() calls elsewhere.
 * Drops the event when consent is denied or DNT is set.
 */
export function track(event: AnalyticsEvent, params: AnalyticsParams = {}): void {
  if (!ANALYTICS_EVENTS.includes(event)) return;
  if (!analyticsAllowed()) return;
  if (typeof window === "undefined") return;

  const payload = { event, ...contextParams(), ...params };

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(payload);

  if (typeof window.gtag === "function") {
    window.gtag("event", event, payload);
  }
}
