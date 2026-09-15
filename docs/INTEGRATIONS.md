# Integrations — setup for a non-developer

Each channel is a separate adapter. Turning one on does not require the others. Turning one off never loses a lead: the Google Sheets ledger is the permanent record.

A lead is accepted and the buyer sees success **before** these channels run. If WhatsApp or the CRM is down, the enquiry is still captured. Failures retry three times, then write a dead-letter record and raise an internal alert.

Until an adapter's enable flag is `true` **and** its credentials are set, that adapter stays off. Missing credentials are not invented.

Full env reference: `.env.example`.

---

## 0. Order of work (do this, then that)

1. **Google Sheets ledger** — enable first. Without it, enquiries exist only in the server log.
2. **Resend + verified sending domain** — buyer auto-reply and internal brief. Unverified domains land in spam and the funnel stops working.
3. **SPF, DKIM, DMARC** at the domain registrar — launch-blocking.
4. **Internal alert** (same Resend inbox, optional Telegram).
5. **WhatsApp Cloud API** — only after Meta approves the templates. `wa.me` links on the site work today without this.
6. **Webhook** — only if you use n8n / Make / Zapier.
7. **CRM** — only if you later choose Zoho or HubSpot. Until then, the sheet is the CRM.

Set each flag to `true` in the hosting dashboard (Netlify → Site configuration → Environment variables) after the credentials for that adapter are in place. Then redeploy.

---

## 1. Google Sheets ledger

This is the cheapest reliable CRM for a three-person team. One row per enquiry. Readable on a phone.

### Create the sheet

1. Open Google Drive. Create a Google Sheet named `PHOENIXX leads`.
2. Rename the first tab to `Leads` (must match `GOOGLE_SHEETS_TAB_NAME`).
3. In row 1, paste these headers in order. Do not reorder later columns; new columns go at the end.

```
Lead ID | Received (IST) | Band | Score | Variant | Name | Company | Email | Phone (E.164) | Country | City | Product | Application | Quantity | Thickness | Temperature | Required by | Message | Page path | Page title | First touch source | First touch medium | First touch campaign | Last touch source | Last touch medium | Landing page | Referrer | Device | Owner | SLA minutes | Score reasons | Status
```

### Create a Google Cloud service account

1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Create a project (or pick an existing one).
3. Enable the **Google Sheets API**.
4. IAM & Admin → Service Accounts → Create. Name it `phoenixx-leads`.
5. Open the account → Keys → Add key → JSON. Download the file. Do not commit it.
6. Copy `client_email` into `GOOGLE_SHEETS_CLIENT_EMAIL`.
7. Copy `private_key` into `GOOGLE_SHEETS_PRIVATE_KEY`. Keep the quotes. Replace real newlines with `\n` if the host stores it as a single line.

### Share the sheet

1. Open the sheet. Share → add the service-account email as **Editor**.
2. Copy the long id in the URL between `/d/` and `/edit` into `GOOGLE_SHEETS_SPREADSHEET_ID`.

### Turn it on

```
INTEGRATION_SHEETS_ENABLED=true
GOOGLE_SHEETS_CLIENT_EMAIL=...
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_SPREADSHEET_ID=...
GOOGLE_SHEETS_TAB_NAME=Leads
```

Test: submit the quote form on staging. A new row should appear within a few seconds. If it does not, check the hosting logs for `[lead:dead-letter]`.

---

## 2. Email (Resend)

Two messages per enquiry: the buyer acknowledgement, and the internal lead brief.

### Account

1. Create a [Resend](https://resend.com/) account.
2. Add and verify the sending domain (`phoenixxglobal.com`). Resend will show DNS records.
3. Create an API key. Put it in `RESEND_API_KEY`.
4. Set `LEAD_FROM_EMAIL` to an address on that verified domain, e.g. `enquiries@phoenixxglobal.com`.
5. Set `LEAD_REPLY_TO_EMAIL` to the inbox the team actually reads.
6. Set `LEAD_NOTIFY_EMAIL` to one or more internal inboxes, comma-separated.

```
INTEGRATION_EMAIL_ENABLED=true
RESEND_API_KEY=re_...
LEAD_FROM_EMAIL=enquiries@phoenixxglobal.com
LEAD_REPLY_TO_EMAIL=export@phoenixxglobal.com
LEAD_NOTIFY_EMAIL=export@phoenixxglobal.com,founder@phoenixxglobal.com
```

Do not enable this adapter until the domain is verified. Auto-replies from `*.resend.dev` land in spam.

---

## 3. SPF, DKIM and DMARC (launch-blocking)

Add these at the domain registrar (where `phoenixxglobal.com` DNS is managed). Use the exact values Resend shows for your domain. Typical shape:

| Type | Name | Value |
| --- | --- | --- |
| TXT | `@` | `v=spf1 include:amazonses.com ~all` (Resend will give the precise include) |
| CNAME | `resend._domainkey` | the DKIM host Resend shows |
| TXT | `_dmarc` | `v=DMARC1; p=quarantine; rua=mailto:you@phoenixxglobal.com; pct=100` |

### Test procedure

1. Send yourself a test enquiry from a Gmail address and from a company domain.
2. Open the received auto-reply. Check it is in **Inbox**, not Spam/Promotions.
3. In Gmail: three dots → Show original. SPF, DKIM and DMARC should all say **PASS**.
4. Repeat from Outlook if you have one.
5. If any check fails, do not launch. Fix DNS, wait up to 24 hours, retest.

Treat a failed auto-reply as a broken funnel, not a nice-to-have.

---

## 4. Internal alerts

Hot leads and delivery failures page a human. Channels:

- **Email** — uses the same Resend setup as Section 2. Enable `INTEGRATION_ALERT_ENABLED=true`.
- **Telegram (optional)** — create a bot with [@BotFather](https://t.me/BotFather), message the bot from the sales phone, get the chat id, set `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID`.

If neither channel is configured, failures still write `[lead:dead-letter]` to the log. Pair the host's log drain with an email/SMS alert so a silent week is impossible.

---

## 5. WhatsApp Cloud API

The site already opens `wa.me` with a prefilled message. That path needs **no** Meta approval and works as soon as the business WhatsApp number is confirmed in `src/config/site.ts`.

The Cloud API adapter sends a template acknowledgement to the buyer and a template alert to the sales number. Meta rejects business-initiated free-form messages. Templates must be approved before this adapter is enabled.

### Templates to submit in Meta Business Manager

**Buyer acknowledgement** (`WHATSAPP_ACK_TEMPLATE`) — language `en`, body:

```
Hi {{1}}, thanks for the enquiry about {{2}} — reference {{3}}. Our engineer will send the specification and pricing within {{4}}. If you can share {{5}}, we will quote faster. — PHOENIXX SMARTBUILD, Ahmedabad
```

Variables: name, enquiry subject, lead id, response time, details needed.

**Internal alert** (`WHATSAPP_ALERT_TEMPLATE`) — language `en`, body:

```
{{1}} LEAD {{2}}
{{3}} — {{4}}
{{5}}
{{6}}
Reply within {{7}} min.
```

Keep the adapter **disabled** until both template names exist in the Meta dashboard.

```
INTEGRATION_WHATSAPP_ENABLED=false
WHATSAPP_PHONE_NUMBER_ID=
WHATSAPP_ACCESS_TOKEN=
WHATSAPP_SALES_NUMBER=          # E.164 without +
WHATSAPP_ACK_TEMPLATE=
WHATSAPP_ALERT_TEMPLATE=
```

When Meta approves them, fill the names, set the flag to `true`, redeploy. Until then, log this as a pending item — already listed in `docs/OPEN-ITEMS.md`.

---

## 6. Generic webhook (n8n / Make / Zapier)

For future automations without a code change.

```
INTEGRATION_WEBHOOK_ENABLED=true
LEAD_WEBHOOK_URL=https://your-automation.example/hooks/phoenixx-lead
LEAD_WEBHOOK_SECRET=a-long-random-string
```

The payload is `{ "event": "lead.created", "lead": { ... } }`.

Verify before trusting:

1. Read the raw body bytes.
2. HMAC-SHA256 with `LEAD_WEBHOOK_SECRET`.
3. Hex-encode.
4. Compare to the `X-PSB-Signature` header. Reject on mismatch.
5. `X-PSB-Lead-Id` is the same id as `lead.id`.

---

## 7. CRM (Zoho or HubSpot) — optional

The client has no CRM today. The Sheets ledger is the system of record. This adapter is written so switching it on is credentials, not a rewrite.

```
INTEGRATION_CRM_ENABLED=false
CRM_PROVIDER=                  # "zoho" or "hubspot"
```

**HubSpot:** private app token with `crm.objects.contacts.write` in `CRM_API_KEY`. Standard fields only: email, firstname, lastname, company, phone, country, city, message, hs_lead_status.

**Zoho (India):** OAuth refresh token in `CRM_REFRESH_TOKEN`, plus `CRM_CLIENT_ID`, `CRM_CLIENT_SECRET`. Defaults: `CRM_ACCOUNTS_URL=https://accounts.zoho.in`, `CRM_API_DOMAIN=https://www.zohoapis.in`. Creates a Lead with First_Name, Last_Name, Company, Email, Phone, Country, City, Lead_Source, Description.

Custom CRM fields (band, score, first-touch) must be created in the CRM before they will accept values. Do not invent API names here. Map them later if you add those fields.

---

## 8. What a failed channel looks like

1. The buyer still sees the success screen and a reference number.
2. The adapter retries 3 times with backoff (400 ms, 800 ms, 1600 ms).
3. Permanent failure: `[lead:dead-letter]` in the log, `leads-failed.json` on disk when the filesystem is writable, and `raiseInternalAlert` on every configured alert channel.
4. A human contacts the buyer from the brief in that alert, then follows `docs/RUNBOOK.md`.

A lead is never deleted because a provider failed.

---

## 9. Health check

`GET /api/lead/` returns 405 by design (POST only).

To see which adapters are on: search the deploy logs for `[lead:dispatched]` after a test submission. The JSON lists `attempted`, `succeeded`, `failed` and `skipped`.

`skipped` is normal when a flag is off. `failed` is the line that must page someone.
