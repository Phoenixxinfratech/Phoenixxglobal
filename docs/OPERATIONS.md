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

Sections on analytics, digests, follow-up sequences, the weekly SOP and the
handover procedures are added in later Phase 4 batches.
