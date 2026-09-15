# PHOENIXX SMARTBUILD — CURSOR MASTER PROMPT 04 of 04
# PHASE 4: LEAD AUTOMATION, CRM + WHATSAPP + EMAIL INTEGRATION, ANALYTICS, CRO, HARDENING, QA AND LAUNCH

Saved from the client master prompt. Operative constraints:

- Same repository as Phases 1–3. Do not start a new project.
- Batches A–F. Build, audit and commit after each. Resume with "continue Phase 4 from Batch C".
- Section 16 launch checklist is the gate — nothing ships until every box is ticked.

## Standing instruction

Do not disrupt or duplicate Phases 1–3. Extend `LeadForm`, `QuoteButton`, `WhatsAppButton`, `StickyCtaBar` and `/api/lead`. No second lead form, no new colours, no URL changes, no popups. Tokens only. Additions through `navigation.ts` / `footer.ts`. Never invent credentials, template IDs, CRM mappings or DNS records.

Pre-approved dependencies only if needed: `resend` or `nodemailer`, `googleapis`, in-memory rate limiter (or Upstash), `@playwright/test` (dev), `libphonenumber-js`. Anything else: stop and ask.

## Batch plan

| Batch | Scope |
|-------|-------|
| A | Lead types + attribution, harden `/api/lead`, scoring, Sheets ledger |
| B | email / alert / whatsapp / crm / webhook adapters, retry + dead-letter, `INTEGRATIONS.md` |
| C | Acknowledgement + internal brief + follow-up sequence, SLA, digests, `SALES-SCRIPTS.md` |
| D | GTM/GA4/Clarity with consent, `track()` taxonomy, Measurement Protocol, dashboard spec, CRO, experiments |
| E | Perf budgets, CSP enforce, `audit:a11y`, `audit:perf`, privacy policy + consent banner |
| F | Playwright, launch checklist, `OPERATIONS.md` + `RUNBOOK.md`, final report |

## Governing test

If nobody logs in for a week, does a serious enquiry from Nairobi still get acknowledged in 60 seconds, land in front of a human who can act from a phone, and get followed up — without anyone remembering to do it?
