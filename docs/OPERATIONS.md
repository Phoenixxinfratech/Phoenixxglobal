# Operations manual — PHOENIXX SMARTBUILD

Written for the three-person team. Every procedure names the exact file to edit.
Nothing here needs a developer unless the step says so.

---

## 1. How a lead moves through the system

1. A buyer submits any form on the site.
2. The server validates it, checks it is not a bot, and gives it a reference
   like `PSB-20260915-0042`.
3. The server scores the enquiry and puts it in a band: **hot**, **warm**,
   **cold** or **spam**.
4. The buyer sees a success screen with the reference and the response promise.
   They get this even if a delivery channel is down.
5. The enquiry is written to the Google Sheets ledger, then pushed to the other
   enabled channels (email, internal alert, WhatsApp, CRM, webhook).
6. If any channel fails after three retries, the enquiry is recorded as a
   dead letter and an internal alert is raised. Nothing is lost silently.

Spam-banded enquiries are written to the ledger and nowhere else. Nobody is
paged for them, and they are never deleted automatically so you can review
whether the filter is too strict.

---

## 2. Lead scoring — what the numbers mean

Scoring is a plain list of rules, not a black box. Every enquiry carries the
reasons it scored what it did, and those reasons appear in the ledger's
"Score reasons" column and in the internal brief.

| Signal | Points |
| --- | --- |
| Country is one of the 12 target export markets | +20 |
| Country is India | +10 |
| Country is outside the target markets | +0 |
| A specific product was named | +10 |
| An application was named | +10 |
| A quantity was stated | +15 |
| The required-by date is inside 90 days | +15 |
| Email is on a company domain (not Gmail/Yahoo/etc.) | +10 |
| Enquiry came from a product, export, quote or selection-tool page | +10 |
| The panel selection tool was completed | +15 |
| Message is under 15 characters or generic | −15 |

Score is clamped to 0–100.

### Bands and what happens

| Band | Score | Channels | Response target |
| --- | --- | --- | --- |
| Hot | 60 and above | Ledger, email, internal alert, WhatsApp | 60 minutes in working hours |
| Warm | 35 to 59 | Ledger, email, internal alert | 4 working hours |
| Cold | Below 35 | Ledger, email | 1 working day |
| Spam | Heuristic match | Ledger only | No action |

### How to change a threshold

Every number above lives in one file: `src/lib/leads/config.ts`.

1. Open `src/lib/leads/config.ts`.
2. To change points, edit `SCORE_WEIGHTS`.
3. To change what counts as hot or warm, edit `SCORE_BANDS`.
4. To change who is notified or the response target, edit `ROUTING`.
5. To add or remove an export market, edit `TARGET_EXPORT_COUNTRIES`.
6. Save, commit, and deploy. No other file needs touching.

If you raise the hot threshold you will get fewer WhatsApp alerts and may miss
a real buyer. If you lower it, the team gets paged for enquiries that do not
deserve it and stops trusting the alerts. Change one number at a time and watch
a fortnight of leads before changing another.

---

## 3. The response promise

The site tells every buyer: **an engineer replies within one working day
(Mon–Sat, 9:30 AM – 6:30 PM IST)**.

This sentence appears above every form, on every success screen and in every
auto-reply. It is the single strongest conversion lever in export enquiry
handling, and it only works if it is true.

It is set in one place: `RESPONSE_PROMISE` in `src/lib/leads/config.ts`.
If the team cannot keep one working day, change it there rather than letting
the site make a promise the team breaks.

Working hours used for escalation maths are in `WORKING_HOURS_IST` in the same
file.

---

## 4. Spam handling

There is deliberately no CAPTCHA. A CAPTCHA costs real enquiries, and the
layers below stop the bots this site actually sees:

- A hidden field no human can fill.
- A three-second minimum between opening and submitting a form.
- Five submissions per IP per ten minutes.
- A disposable-email domain list.
- A link count and keyword check on the message body.
- Duplicate suppression for the same email and page inside 60 seconds.

All of these are tunable in `ANTI_SPAM` in `src/lib/leads/config.ts`.

If spam starts arriving in volume, add the offending domain to
`DISPOSABLE_EMAIL_DOMAINS` or the phrase to `spamKeywords` first. Only consider
a CAPTCHA if that stops working — see `docs/RUNBOOK.md`.

---

## 5. Where the records live

| Record | Where | Notes |
| --- | --- | --- |
| Permanent lead ledger | Google Sheet, "Leads" tab | One row per enquiry, the source of truth |
| Delivery failures | `leads-failed.json` and the server log | Also raises an internal alert |
| Development test leads | `leads.json` at the project root | Written only when running locally |

Column order in the ledger is fixed by `LEDGER_COLUMNS` in
`src/lib/integrations/sheets.ts`. You can add columns at the end. Never
reorder or delete existing ones — the append writes by position.

---

## 6. Data retention

Lead records are kept for **24 months** in the ledger, then archived to a
separate sheet and removed from the live tab. Deletion requests are handled per
`/privacy-policy/`: search the ledger for the email address, delete the row,
delete the matching CRM record if one exists, and reply to confirm within 30
days.

---

Sections on analytics, experiments, the weekly SOP and handover live in later
Phase 4 batches (`docs/ANALYTICS.md`, `docs/RUNBOOK.md`).

---

## 7. Follow-up sequence

The buyer acknowledgement is sent at once (D0). A human should send the
quotation on D+1. The system then sends:

| When | What |
| --- | --- |
| D+3 | A relevant guide or comparison, tied to their product or application |
| D+7 | "Has the layout been finalised?" — one attachment request |
| D+14 | Similar-application note plus a soft close |
| D+45 | Dormant reactivation, or close the file |

Any reply stops the sequence. From a phone: POST `/api/cron/` with
`{ "job": "stop", "leadId": "PSB-…" }` and the `Authorization: Bearer` cron
secret. Marking `{ "job": "touched", "leadId": "…" }` records that an owner
acted, which also stops SLA escalation.

Copy lives in `src/lib/messages/followUp.ts`. Change the words there, not in
the cron route.

On Netlify the queue file is ephemeral. Until a persistent store is wired,
treat the Google Sheet as the backup record and run follow-ups from the sheet
if a deploy wipes `data/follow-up-queue.json`.

---

## 8. Cron jobs

Set `CRON_SECRET` in the host. Call these URLs on a schedule (Netlify scheduled
functions, cron-job.org, or GitHub Actions):

| Job | When | URL |
| --- | --- | --- |
| SLA sweep | every 15 minutes, working hours | `GET /api/cron/?job=sla` |
| Follow-ups | 10:00 IST daily | `GET /api/cron/?job=follow-up` |
| Daily digest | 09:30 IST Mon–Sat | `GET /api/cron/?job=digest-daily` |
| Weekly digest | 09:30 IST Mondays | `GET /api/cron/?job=digest-weekly` |

Every request needs `Authorization: Bearer $CRON_SECRET` (or `?secret=`).

A hot lead still untouched after 60 working minutes raises a WhatsApp/email
alert to the owner. Daily digest: new leads, untouched files, follow-ups due.
Weekly digest: counts by country, product and band.

---

## 9. Weekly SOP (15 minutes, Monday)

1. Open the Looker Studio dashboard (`docs/ANALYTICS.md`) or the weekly digest email.
2. Sweep untouched rows in the sheet. Call or WhatsApp anything still hot.
3. Publish or outline one item from `docs/EDITORIAL-CALENDAR.md`.
4. Once a fortnight, decide the CRO experiment in `docs/EXPERIMENTS.md`.
5. If zero enquiries in 48 hours, follow `docs/RUNBOOK.md` section 1 immediately — do not wait for Monday.

Dashboard: one Looker Studio page (spec in `docs/ANALYTICS.md`). Runbook: `docs/RUNBOOK.md`. Launch gate: `docs/LAUNCH-CHECKLIST.md`.

---

## 10. How to add a product

1. Open `src/content/products.ts`.
2. Copy an existing product object (start from `puf-panels`).
3. Change `slug`, names, copy, specs. Keep `verified: false` on any number you have not measured.
4. Add the slug to the products hub and to `src/content/pages.ts` only if a new hub URL is required — product URLs are `/products/{slug}/` automatically.
5. Add the product to `related` arrays on solutions and countries that should link to it.
6. Run `npm run build` and `npm run audit:links`. If the build fails, the slug is missing somewhere.
7. Commit, deploy. The sitemap picks it up on the next publish.

Do not invent certifications, capacities or prices. If a fact is unconfirmed, omit it or it will be hidden.

---

## 11. How to add a country

1. Open `src/content/countries.ts`. Copy `kenya` as the shape.
2. Fill only confirmed facts. `isPublishableCountry()` in `src/lib/publishable.ts` decides whether the page indexes.
3. Add cities in `src/content/cities.ts` with `countrySlug` matching the country.
4. Add the country to `TARGET_EXPORT_COUNTRIES` in `src/lib/leads/config.ts` if it should score +20.
5. Run `npm run build`. Thin pages stay `draft` / unpublished until the publish gate passes.

---

## 12. How to publish an article

1. Open `src/content/articles.ts`. Copy a live article.
2. Set `slug`, `title`, `description`, body, `date`, `author: "phoenixx-smartbuild"`.
3. `draft: false` only when every claim is confirmed.
4. Run `npm run generate:llms` so `public/llms.txt` stays current.
5. Commit, deploy. URL is `/blog/{slug}/`.

---

## 13. How to change a phone number or WhatsApp

1. Open `src/config/site.ts`.
2. Put the real E.164 number in `contact.phonePrimary` and `contact.whatsapp`. Never leave `[CONFIRM]`.
3. Save, commit, deploy. Header, footer, sticky bar and `wa.me` links read from this file only.
4. Call the number from a personal phone before you announce the change.

---

## 14. How to tune scoring

1. Open `src/lib/leads/config.ts`.
2. Change one constant in `SCORE_WEIGHTS`, `SCORE_BANDS` or `ROUTING`.
3. Deploy. Watch a fortnight of leads before changing another number.
4. Owner names live in `ROUTING.*.owner`.

---

## 15. How to read the dashboard

Monday, 15 minutes:

1. Enquiries by source — if IndiaMART is zero and LinkedIn is not, the IndiaMART URL or UTM is wrong.
2. Page-to-lead conversion — a product page with traffic and no leads needs a clearer CTA, not more blog posts.
3. Band mix — if everything is cold, the form is asking too little or traffic is the wrong country.
4. Search Console overlay — queries in positions 8–20 become next week's article (`docs/EDITORIAL-CALENDAR.md`).

If the dashboard is empty, GA4 IDs are not set. The sheet still has the leads.

