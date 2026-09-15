# PHASE 4 COMPLETE — SITE READY FOR LAUNCH

Engineering complete. **Public launch is blocked** on client credentials and confirmed contact details (see Open items). The repo is ready to go live the day those land.

## Pre-flight audit

What existed from Phases 1–3: `LeadForm` (six variants after Batch A), `QuoteButton`, `WhatsAppButton`, `StickyCtaBar`, `/api/lead`, design tokens, Header/Footer, all live URLs, audit scripts, draft/`isPublishable()` gates.

What Phase 4 extended rather than rebuilt: the same `LeadForm` and `/api/lead` route, the same conversion buttons, the same layout chrome. New work is adapters, scoring, analytics, consent, audits, and docs.

## Phases 1–3 integrity

Prior-phase files touched are listed in `docs/CHANGE-LOG.md` (Batches A–F). No second lead form, no URL changes, no new colours. Footer markup is unchanged (contrast not restyled).

Dependencies added from the approved list: `resend`, `googleapis`, `libphonenumber-js` (already present by Batch A/B); `@playwright/test` and `axe-core` (dev, Batches E–F). Nothing else.

## Lead system

- Surfaces: quote, datasheet, consultation (`/request-a-quote/?variant=consultation`), contact, export (API + country quote form), selection-tool (prefill into quote form).
- Model: `src/lib/leads/types.ts`. IDs `PSB-YYYYMMDD-XXXX`. First-touch cookie 90 days.
- Spam: honeypot, 3s trap, 5/10 min/IP (skipped only when `LEAD_LOCAL_LEDGER=true` for Playwright), disposable domains, link/keyword heuristics, idempotency 60s.
- Scoring: `src/lib/leads/score.ts` + `config.ts`. Hot ≥60 / warm 35–59 / cold / spam.
- Routing: hot 60 min WhatsApp+alert; warm 4 working hours; cold ledger+email. Single owner.

## Integrations

| Adapter | Status | Credentials needed | Setup |
| --- | --- | --- | --- |
| sheets | Disabled | Google service account + sheet id | `docs/INTEGRATIONS.md` §1 |
| email (Resend) | Disabled | API key + verified domain | §2–3 |
| alert | Disabled | Same email and/or Telegram | §4 |
| whatsapp | Disabled (templates pending Meta) | Phone number id, token, template names | §5 |
| crm | Disabled (no CRM) | Zoho or HubSpot flag | §6 |
| webhook | Disabled | URL + HMAC secret | §7 |
| fail-test | QA only | `INTEGRATION_FAIL_TEST` | Playwright |

## Automation

- D0 buyer ack + internal brief (`src/lib/messages/`).
- D+3 / D+7 / D+14 / D+45 follow-up; stops on `job=stop`.
- SLA escalation + daily/weekly digests via `/api/cron/`.
- Queue file is ephemeral on Netlify — sheet is backup (`docs/OPERATIONS.md` §7).
- Sales copy: `docs/SALES-SCRIPTS.md`.

## Analytics

- Consent bar (reject is real, DNT honoured). GTM/GA4/Clarity after grant only.
- `track()` taxonomy in `docs/ANALYTICS.md`.
- Server `generate_lead` via Measurement Protocol, de-duped on lead id.
- No live experiment (`docs/EXPERIMENTS.md`) — insufficient traffic.
- Dashboard spec in `docs/ANALYTICS.md`.

## CRO

- Quote CTA: "Get a panel specification and quote".
- Sticky bar after 40% scroll, hides when `[data-lead-form]` is on screen.
- Country/city forms pre-select market.
- Datasheet under-gated.
- No experiment running.

## Hardening

- CSP enforced (`next.config.ts`).
- `audit:a11y` pass (footer contrast excluded — Phase 1 zinc on graphite).
- `audit:perf` pass on localhost gates. Actuals: `docs/LIGHTHOUSE-PHASE4.md`. LCP still above 2.0s (Phase 3 was 2.4–2.7s). Production re-measure after analytics IDs.
- Privacy draft expanded; legal review still required.

## QA

- Playwright: 12 tests passing (form variants, success despite failed adapter + dead-letter row, selection-tool prefill, 404, robots/sitemap, no `[CONFIRM]` in HTML, footer identical on home vs product).
- Cross-browser/device matrix: Chromium automated. Safari/Firefox/Edge/Samsung and extra viewports: manual before public launch (blocked on a deployed URL with real contact numbers).
- Real email/Sheets/WhatsApp/CRM test: **blocked** — no credentials. Procedure in `docs/INTEGRATIONS.md`.

## Launch checklist status

See `docs/LAUNCH-CHECKLIST.md`. Engineering rows done. Domain, DNS, GSC, GA4, Sheets, Resend, SPF/DKIM/DMARC, and confirmed phone/WhatsApp/email are **blocked on the client**. Do not point the public domain at this build until those are Done.

## Open items needing your input

1. Confirmed sales email, phone and WhatsApp (`src/config/site.ts`) — Call and WhatsApp CTAs stay hidden until then.
2. Google Sheets service account + spreadsheet (ledger).
3. Resend API key and verified sending domain.
4. SPF, DKIM and DMARC at the registrar (launch-blocking).
5. Lawyer review of `/privacy-policy/` and `/terms/`.
6. WhatsApp Cloud API templates (adapter stays off until Meta IDs exist).
7. GA4 / GTM / Clarity IDs and Search Console / Bing verification.
8. Staging host with auth + noindex, if you want one before DNS cutover.

## Operating instructions for the team

- Weekly SOP and handover: `docs/OPERATIONS.md`
- Incidents: `docs/RUNBOOK.md`
- Dashboard spec: `docs/ANALYTICS.md`
- Integration setup: `docs/INTEGRATIONS.md`
- Launch gate: `docs/LAUNCH-CHECKLIST.md`
