# Analytics

Written for the three-person team. One dashboard on Monday should tell you what to do.

## What is installed

| Tool | When it loads | Env var |
| --- | --- | --- |
| Google Tag Manager | After the visitor accepts analytics cookies | `NEXT_PUBLIC_GTM_ID` |
| GA4 | After consent, `afterInteractive` | `NEXT_PUBLIC_GA4_MEASUREMENT_ID` |
| Microsoft Clarity | After consent; masks form inputs in the Clarity project settings | `NEXT_PUBLIC_CLARITY_PROJECT_ID` |
| GA4 Measurement Protocol | Server-side, on every non-spam lead | `GA4_API_SECRET` |

Scripts do not load when:

- the visitor clicks **Reject analytics**
- the browser sends Do Not Track
- the IDs are empty (staging default)

Never call `gtag()` from a page. Use `track()` in `src/lib/analytics/track.ts`.

## Event taxonomy

Every event carries `page_path`, `page_type` and `device`. Add context where it exists.

| Event | When | Extra params |
| --- | --- | --- |
| `form_start` | First focus inside a lead form | `variant` |
| `form_submit` | API accepted the submission | `variant`, `lead_id` |
| `generate_lead` | Same moment, client + server | `lead_id`, `band` (server). Same `lead_id` is the GA4 `event_id` equivalent for de-dupe. |
| `form_abandon` | reserved | — |
| `whatsapp_click` | Floating WhatsApp button | `location` |
| `call_click` | Sticky bar call | `location` |
| `email_click` | mailto from a page | `location` |
| `datasheet_download` | when a real PDF is clicked | `product` |
| `selection_tool_start` / `_complete` | selection tool | — |
| `view_product` / `view_country_page` / `comparison_view` | reserved for GTM page groups | — |
| `cta_click` | sticky quote CTA | `location`, `product` |
| `scroll_75` | once per page | — |
| `outbound_click` | reserved | — |

`generate_lead` fires twice by design: once in the browser, once from `/api/lead` via Measurement Protocol so ad-blocked sessions still count. GA4 de-duplicates on the lead id when both arrive. Do not add a third call.

## Consent

Bottom bar, not a modal. Accept and Reject are equal. Reject is a real reject: scripts never load. Stored in `psb_consent` for 180 days.

## Search Console and Bing

1. Verify `phoenixxglobal.com` in Google Search Console and Bing Webmaster.
2. Submit `https://phoenixxglobal.com/sitemap-index.xml`.
3. Request indexing for `/`, `/products/puf-panels/`, `/export/kenya/`, `/resources/panel-selection/`.
4. Monthly: queries the site almost ranks for → next editorial-calendar item.

## UTM convention

Use these so first-touch stays clean. Never put a name or email in a URL.

| Channel | `utm_source` | `utm_medium` | `utm_campaign` example |
| --- | --- | --- | --- |
| IndiaMART | `indiamart` | `referral` | `panels-kenya-q3` |
| LinkedIn post | `linkedin` | `social` | `cold-room-guide` |
| LinkedIn message | `linkedin` | `cpc` | `export-quote` |
| Email signature / broadcast | `email` | `email` | `weekly-digest` |
| WhatsApp broadcast | `whatsapp` | `messaging` | `east-africa-cold-chain` |
| Print QR | `print` | `offline` | `brochure-2026` |

Landing page is stored on first visit for 90 days (`psb_attr` cookie). A buyer who reads a guide in March and enquires in May still credits the guide.

## Looker Studio dashboard (spec)

Connect GA4 + Search Console. One page, Monday morning:

1. Enquiries (generate_lead) by source / medium / country / product.
2. Page-to-lead conversion by `page_type` (product, country, selection tool, quote).
3. Lead band mix (from the Sheets ledger — GA4 does not own scoring).
4. Top entry pages for sessions that later generated a lead.
5. SEO overlay: impressions, clicks, average position by page group (products, export, guides, blog).

If a row in (1) is zero for 48 hours while traffic is normal, that is the silent-failure alert in `docs/RUNBOOK.md`.

## Third-party script budget

GTM + GA4 + Clarity combined must stay under **90KB transferred**. Measure in DevTools → Network after accepting cookies on a production build.

- If the budget breaks, **drop Clarity first**. Do not drop GTM/GA4 — conversion reporting depends on them.
- Scripts load `afterInteractive` and only after consent, so they must not compete with LCP.
- Staging default: IDs empty, so this site's first paint has **0KB** of analytics. Turn IDs on in production after Search Console verification, then re-run `npm run audit:perf`.
