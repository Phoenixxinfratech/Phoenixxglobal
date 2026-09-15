# Phase 4 — Lead automation, integrations, analytics, CRO, hardening, launch

Master prompt 04 of 04. Full text held by the client; this file records the
operative constraints and batch plan so any session can resume.

## Standing rules (unchanged from Phases 1–3)

- Do not re-scaffold, duplicate or rename anything from Phases 1–3.
- Extend `LeadForm`, `QuoteButton`, `WhatsAppButton`, `StickyCtaBar` and
  `/api/lead` — never build a second version of any of them.
- Tokens only. No new colours, fonts, spacing, radii, shadows.
- No URL changes. No popups, interstitials, countdown timers, fake urgency.
- Never weaken the draft flag, `isPublishable()` or any audit script.
- Never invent credentials, template IDs, CRM field mappings or DNS records.
- Every prior-phase file touched gets a `docs/CHANGE-LOG.md` entry.

## Pre-approved dependencies (only if actually needed)

`resend` or `nodemailer`, `googleapis`, `@upstash/ratelimit` + `@upstash/redis`
(or an in-memory limiter), `@playwright/test` (dev only), `libphonenumber-js`.
Anything else requires approval with the rejected alternative stated.

## Batch plan

| Batch | Scope |
|-------|-------|
| A | Lead types + attribution, harden `/api/lead`, scoring engine, Sheets ledger |
| B | email / alert / whatsapp / crm / webhook adapters, retry + dead-letter, `INTEGRATIONS.md` |
| C | Acknowledgement + internal brief + follow-up sequence copy, SLA escalation, digests, `SALES-SCRIPTS.md` |
| D | GTM/GA4/Clarity with consent, `track()` taxonomy, Measurement Protocol, dashboard spec, CRO pass, experiment helper |
| E | Perf budgets, CSP enforce, rate limiting, `audit:a11y`, `audit:perf`, privacy policy + consent banner |
| F | Playwright E2E, device matrix, real end-to-end lead test, content + SEO QA, launch checklist, `OPERATIONS.md` + `RUNBOOK.md`, final report |

## The governing test

If nobody logs in for a week, does a serious enquiry from Nairobi still get
acknowledged in 60 seconds, land in front of a human who can act on it from a
phone, and get followed up — without anyone remembering to do it?

## Launch gate

Section 16 of the master prompt. Nothing ships until every box in
`docs/LAUNCH-CHECKLIST.md` passes.
