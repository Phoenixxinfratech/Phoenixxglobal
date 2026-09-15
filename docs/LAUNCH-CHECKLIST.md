# Launch checklist — PHOENIXX SMARTBUILD

Nothing ships until every row is **Done**. Blocked items name the owner. Engineering cannot tick a business or DNS row.

## Domain and infra

| Item | Status | Owner |
| --- | --- | --- |
| DNS for `phoenixxglobal.com` points at Netlify | Blocked — client DNS | Client |
| SSL live | Blocked on DNS | Client + Netlify |
| www → apex (or the reverse) as a 301, one canonical host | Blocked on DNS | Client |
| Trailing-slash consistency (`trailingSlash: true`) | Done | Engineering |
| Staging protected (auth + noindex) | Blocked — no staging host yet | Client + Engineering |
| 301s for pre-existing URLs | Scaffold in `next.config.ts`; add real legacy paths when the old site list arrives | Client to supply list |
| Production env vars from `.env.example` | Blocked — credentials | Client |
| Backups of the Sheets ledger | Blocked on Sheets setup | Client |

## Search

| Item | Status | Owner |
| --- | --- | --- |
| `robots.txt` allows AI crawlers (Phase 3 decision) | Done | Engineering |
| Sitemap index at `/sitemap-index.xml` | Done | Engineering |
| Submit sitemap to Google Search Console | Blocked — GSC property | Client |
| Submit sitemap to Bing Webmaster | Blocked — Bing property | Client |
| Search Console + Bing verified | Blocked | Client |
| GA4 receiving live data | Blocked — `NEXT_PUBLIC_GA4_MEASUREMENT_ID` empty | Client |
| Clarity live | Blocked — `NEXT_PUBLIC_CLARITY_PROJECT_ID` empty | Client |
| Structured data valid on templates | Done (`audit:schema`) | Engineering |
| Indexing requested for `/`, `/products/puf-panels/`, `/export/kenya/`, `/resources/panel-selection/` | Blocked on GSC | Client |

## Business

| Item | Status | Owner |
| --- | --- | --- |
| Phone, WhatsApp and email tested on a real device | Blocked — still `[CONFIRM]` in `src/config/site.ts`. Call and WhatsApp CTAs are hidden until confirmed. | Client |
| Buyer auto-reply in Inbox, not spam | Blocked — Resend + SPF/DKIM/DMARC | Client |
| Internal alert on the sales phone | Blocked — WhatsApp templates / alert email | Client |
| Sheets ledger populating | Blocked — service account | Client |
| CRM records created | Not used — client has no CRM; Sheets is the ledger | — |
| SPF / DKIM / DMARC verified | Blocked — launch-blocking. Steps in `docs/INTEGRATIONS.md` §3 | Client |
| Google Business Profile URL | Blocked — confirm listing | Client |
| IndiaMART / LinkedIn profiles updated to `phoenixxglobal.com` | Blocked | Client |

## Content

| Item | Status | Owner |
| --- | --- | --- |
| OPEN-ITEMS business facts resolved **or** dependent UI hidden | Done for UI hiding via `confirmed()`. Facts themselves still open. | Client |
| Legal pages reviewed | Draft only — privacy updated in Phase 4, still pending lawyer | Client / counsel |
| No placeholder images on live indexed pages | Company pages still use stock until plant photos arrive (`docs/IMAGE-BRIEF.md`) | Client |
| No unverified claim rendered | Done — sentinels hidden | Engineering |

## Monitoring

| Item | Status | Owner |
| --- | --- | --- |
| Uptime monitoring | Blocked — pick a provider (UptimeRobot is enough) | Client |
| Form-submission failure alert | Code ready (`leads-failed.json` + `raiseInternalAlert`). Needs alert channel live. | Client |
| 404 monitoring | Blocked — Search Console after go-live | Client |
| Weekly Lighthouse | `npm run audit:perf` exists. Schedule after launch. | Engineering |
| Zero-leads-in-48-hours alert | Blocked — needs GA4 or a Sheets formula + email. Documented in `docs/RUNBOOK.md`. | Client |

## Engineering sign-off (this repo)

| Item | Status |
| --- | --- |
| `npm run build` | Pass |
| `tsc --noEmit` / `npm run lint` | Pass |
| `audit:links` `audit:copy` `audit:unique` `audit:schema` | Pass |
| `audit:a11y` | Pass (footer contrast excluded — Phase 1 tokens) |
| `audit:perf` | Pass on localhost gates; LCP still above 2.0s — `docs/LIGHTHOUSE-PHASE4.md` |
| Playwright `npm run test:e2e` | Pass (12 tests, Chromium) |
| CSP enforced | Done |
| Consent banner (reject is real) | Done |

**Ship decision:** do not point the public domain at this build until the Business rows for contact details, Sheets, Resend and SPF/DKIM/DMARC are Done. A live site that cannot acknowledge an enquiry is worse than a staging site.
