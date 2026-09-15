"use client";

import Script from "next/script";
import { useCallback, useEffect, useSyncExternalStore } from "react";
import { analyticsAllowed, prefersDoNotTrack, readConsent, writeConsent } from "@/lib/analytics/consent";
import { track } from "@/lib/analytics/track";

const gaId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

const CONSENT_EVENT = "psb-consent";

function subscribe(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => undefined;
  window.addEventListener(CONSENT_EVENT, onStoreChange);
  return () => window.removeEventListener(CONSENT_EVENT, onStoreChange);
}

function getConsentSnapshot() {
  if (prefersDoNotTrack()) return "denied" as const;
  return readConsent();
}

function Scripts() {
  return (
    <>
      {gtmId ? (
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':Date.now(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
        </Script>
      ) : null}
      {gaId ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}',{anonymize_ip:true,send_page_view:true});`}
          </Script>
        </>
      ) : null}
      {clarityId ? (
        <Script id="clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,r);})(window,document,"clarity","script","${clarityId}");`}
        </Script>
      ) : null}
    </>
  );
}

export function AnalyticsRoot() {
  const consent = useSyncExternalStore(subscribe, getConsentSnapshot, () => "unknown" as const);

  useEffect(() => {
    if (!analyticsAllowed(consent)) return;

    function onScroll() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      if (window.scrollY / scrollable >= 0.75) {
        track("scroll_75");
        window.removeEventListener("scroll", onScroll);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [consent]);

  const grant = useCallback(() => {
    writeConsent("granted");
    window.dispatchEvent(new Event(CONSENT_EVENT));
  }, []);

  const deny = useCallback(() => {
    writeConsent("denied");
    window.dispatchEvent(new Event(CONSENT_EVENT));
  }, []);

  return (
    <>
      {analyticsAllowed(consent) ? <Scripts /> : null}
      {consent === "unknown" ? (
        <div
          role="region"
          aria-label="Cookie preferences"
          aria-describedby="cookie-consent-copy"
          className="fixed inset-x-0 bottom-0 z-[60] border-t border-line bg-white/95 p-4 shadow-[0_-4px_24px_rgba(0,0,0,0.08)] backdrop-blur"
        >
          <div className="mx-auto flex max-w-[1280px] flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p id="cookie-consent-copy" className="text-sm text-steel">
              We use optional analytics cookies (Google Analytics, Tag Manager, Clarity) to see which
              specification pages help buyers. Forms work without them.{" "}
              <a href="/privacy-policy/" className="font-medium text-ember-deep underline underline-offset-4">
                Privacy policy
              </a>
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                className="rounded-[2px] border border-line px-4 py-2 text-sm font-medium text-ink"
                onClick={deny}
              >
                Reject analytics
              </button>
              <button
                type="button"
                className="rounded-[2px] bg-ember-deep px-4 py-2 text-sm font-medium text-white"
                onClick={grant}
              >
                Accept analytics
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
