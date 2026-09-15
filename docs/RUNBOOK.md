# Runbook — PHOENIXX SMARTBUILD

Written so someone on the three-person team can follow step one from a phone. If a step says "developer", stop and message them rather than guessing.

---

## 1. Leads have stopped arriving

1. Open the Google Sheet (the "Leads" tab). If it has no new row in 48 hours while the site has traffic, treat this as an incident.
2. Submit a test enquiry yourself from `/request-a-quote/` using your work email.
3. You should see a success screen with a `PSB-` reference. If the page errors, the site or `/api/lead` is down — check Netlify → Deploys and the function logs.
4. If you got a reference but no sheet row: the Sheets adapter is off or the service account lost access. Follow `docs/INTEGRATIONS.md` §1. Do not turn random flags on.
5. If the sheet has the row but you got no email: Resend or DNS. See section 2.
6. If nothing at all is logged, check Netlify env vars still match `.env.example` names. A renamed variable disables the adapter silently.

Zero leads for 48 hours is the most common silent failure. Put a calendar reminder every other morning until a proper uptime+Sheets check exists.

---

## 2. Auto-replies land in spam

1. Open the auto-reply in Gmail → three dots → Show original.
2. SPF, DKIM and DMARC must all say **PASS**. If any fail, do not send campaigns. Fix DNS using `docs/INTEGRATIONS.md` §3. Wait up to 24 hours and retest.
3. Confirm `LEAD_FROM_EMAIL` is an address on the verified Resend domain, not `@resend.dev`.
4. Ask one buyer on a company domain and one on Gmail. If only Gmail fails, it is still a launch blocker.

---

## 3. WhatsApp template is rejected by Meta

1. Leave `INTEGRATION_WHATSAPP_ENABLED=false`. Do not enable a rejected template.
2. `wa.me` links on the site still work and need no approval. Sales can reply there by hand.
3. Copy the template body from `src/lib/messages/buyerAck.ts` (keep under 700 characters) and resubmit in Meta Business Suite.
4. When Meta issues a template name, put it in `WHATSAPP_ACK_TEMPLATE` / `WHATSAPP_ALERT_TEMPLATE`, then set the flag to `true`.
5. Send one test enquiry. Confirm the buyer phone and the sales phone both get a message.

---

## 4. A deploy breaks the build

1. Netlify will refuse the publish. The live site stays on the last good deploy.
2. Open the failed deploy log. If it mentions `audit:` or `Type error`, the change cannot ship.
3. Revert the last commit on `main` (developer) or ask them to fix forward. Do not "just disable the check".
4. After a good deploy, submit one test enquiry and confirm the sheet row.

---

## 5. Search Console reports a manual action or index drop

1. Search Console → Security & Manual Actions. If a manual action exists, do not publish new pages until it is resolved.
2. Coverage / Pages: if valid pages drop sharply, check `robots.txt` still allows `/` and that no `noindex` leaked onto live templates (draft flag).
3. Compare `/sitemap-index.xml` with last week. A missing group means a publishability gate failed — see `src/lib/publishable.ts`.
4. Do not buy links or blast directories to "recover". Fix the cause, request re-indexing on the priority URLs in `docs/LAUNCH-CHECKLIST.md`.

---

## 6. An integration failed but the buyer saw success

This is working as designed. Look for:

- An email/Telegram subject starting `[DELIVERY FAILED]`
- A row in `leads-failed.json` (local) or the `[lead:dead-letter]` line in Netlify logs

Call or WhatsApp the buyer using the details in that alert. Then fix the failing adapter (usually an expired token). Do not ask the buyer to submit again unless their reference is missing from the sheet.

---

## 7. The follow-up sequence will not stop

A reply does not automatically stop the queue on Netlify (the queue file is ephemeral). When you speak to a buyer:

`POST https://phoenixxglobal.com/api/cron/?job=stop`  
Header: `Authorization: Bearer` + `CRON_SECRET`  
Body: `{ "job": "stop", "leadId": "PSB-…", "reason": "replied" }`

Until that is routine, treat the sheet as the truth and skip anyone who already replied.

---

## 8. Spam is getting through

1. Add the domain to `DISPOSABLE_EMAIL_DOMAINS` or the phrase to `ANTI_SPAM.spamKeywords` in `src/lib/leads/config.ts`.
2. Deploy.
3. Do not add a CAPTCHA unless this still fails in volume. A CAPTCHA costs real export enquiries.
