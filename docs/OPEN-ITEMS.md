# Open Items

Items blocking full UI rendering or final publication. **Owner: Client** for all rows unless noted.

> **Note:** Contact details (email, phone, WhatsApp, address) and the brand logo were promised by the client but not yet provided at build time. Components hide unconfirmed fields via `src/lib/confirmed.ts`; nothing prints `[CONFIRM]` on live pages.

Regenerate sentinel rows with:

```bash
npm run audit:open-items
```

Then merge any new fields into the category sections below.

**Auto-generated from `src/config/site.ts` on 2026-09-14.**

## Contact

| Path | Value | Owner | Notes |
| --- | --- | --- | --- |
| `foundedYear` | [CONFIRM] | Client | Replace sentinel with verified value before rendering in UI |
| `contact.salesEmail` | [CONFIRM] | Client | Replace sentinel with verified value before rendering in UI |
| `contact.exportEmail` | [CONFIRM] | Client | Replace sentinel with verified value before rendering in UI |
| `contact.phonePrimary` | [CONFIRM] | Client | Replace sentinel with verified value before rendering in UI |
| `contact.whatsapp` | [CONFIRM] | Client | Replace sentinel with verified value before rendering in UI |
| `address.line1` | [CONFIRM] | Client | Replace sentinel with verified value before rendering in UI |
| `address.postalCode` | [CONFIRM] | Client | Replace sentinel with verified value before rendering in UI |
| `address.mapsUrl` | [CONFIRM] | Client | Replace sentinel with verified value before rendering in UI |
| `address.geo.lat` | [CONFIRM] | Client | Replace sentinel with verified value before rendering in UI |
| `address.geo.lng` | [CONFIRM] | Client | Replace sentinel with verified value before rendering in UI |

## Registrations

| Path | Value | Owner | Notes |
| --- | --- | --- | --- |
| `registrations.gstin` | [CONFIRM] | Client | Replace sentinel with verified value before rendering in UI |
| `registrations.llpin` | [CONFIRM] | Client | Replace sentinel with verified value before rendering in UI |
| `registrations.iec` | [CONFIRM] | Client | Replace sentinel with verified value before rendering in UI |
| `registrations.udyam` | [CONFIRM] | Client | Replace sentinel with verified value before rendering in UI |

## Social

| Path | Value | Owner | Notes |
| --- | --- | --- | --- |
| `social.linkedin` | [CONFIRM] | Client | Replace sentinel with verified value before rendering in UI |
| `social.youtube` | [CONFIRM] | Client | Replace sentinel with verified value before rendering in UI |
| `social.instagram` | [CONFIRM] | Client | Replace sentinel with verified value before rendering in UI |
| `social.facebook` | [CONFIRM] | Client | Replace sentinel with verified value before rendering in UI |
| `social.indiamart` | [CONFIRM] | Client | Replace sentinel with verified value before rendering in UI |

## Claims

| Path | Value | Owner | Notes |
| --- | --- | --- | --- |
| `claims.manufacturingCapacity` | VERIFY_REQUIRED | Client | Replace sentinel with verified value before rendering in UI |
| `claims.plantLocation` | VERIFY_REQUIRED | Client | Replace sentinel with verified value before rendering in UI |
| `claims.yearsInBusiness` | VERIFY_REQUIRED | Client | Replace sentinel with verified value before rendering in UI |
| `claims.installedArea` | VERIFY_REQUIRED | Client | Replace sentinel with verified value before rendering in UI |
| `claims.certifications` | (empty array) | Client | Add verified certification names once documents are uploaded |
| `claims.exportCountries` | (empty array) | Client | Populate with confirmed export destination countries |

## Legal

| Path | Value | Owner | Notes |
| --- | --- | --- | --- |
| `pages./privacy-policy/` | draft legal copy | Client | Pending legal review before treating as final |
| `pages./terms/` | draft legal copy | Client | Pending legal review before treating as final |

## Assets

| Path | Value | Owner | Notes |
| --- | --- | --- | --- |
| `assets.logo` | pending | Client | Final brand logo not yet placed in public/images/icons/ |
| `assets.photography` | pending | Client | Product and project photos pending — Pexels stock on company pages (about, manufacturing) until plant photography is shot |
| `company pages stock images` | pending | Client | Replace stock heroes and FeatureSplit on `/about/` and `/manufacturing/` with Ahmedabad plant photography — see `docs/IMAGE-BRIEF.md` |

## Content gaps (Phase 2 Batch E)

| Item | Owner | Notes |
| --- | --- | --- |
| Project references | Client | `/projects/` publishes no case studies — references shared only with written client consent |
| Third-party certifications | Client | `certifications.ts` empty — quality page lists in-house checks only; formal certs shared when documents exist |
| Contact details + logo | Client | Still `[CONFIRM]` in `site.ts` — header/footer hide unconfirmed fields |

## Engineering follow-up (not client blockers)

| Item | Owner | Notes |
| --- | --- | --- |
| Product spec verification | Client + Engineering | All seed specs marked `verified: false` until datasheets issued |
| Datasheet PDFs | Client | Link in `product.datasheet` only when file exists in `public/documents/` |
| Datasheet PDF files in `public/documents/` | Client | Folder empty — hub shows email request + LeadForm datasheet variant only |
| Lighthouse mobile scores | Engineering | Chrome binary unavailable at Batch F ship — see `docs/LIGHTHOUSE-PHASE3.md` |
| `site.canonicalDescription` | Done (Batch F) | Client may refine wording; currently feeds schema and `llms.txt` |
| Blog author bylines | Client | Company author only until named reviewers approved |

## Phase 4 — credentials and business decisions

| Item | Owner | Blocks | Notes |
| --- | --- | --- | --- |
| Google Sheets service account | Client + Engineering | Lead ledger | Create the sheet, share it with the service-account email, set `GOOGLE_SHEETS_*` and `INTEGRATION_SHEETS_ENABLED=true`. Steps in `docs/INTEGRATIONS.md`. Until this is done, leads exist only in the server log. |
| Resend account and verified sending domain | Client | Buyer auto-reply, internal brief | Auto-replies from an unverified domain land in spam, which silently kills the funnel. |
| SPF, DKIM, DMARC records | Client | Email deliverability | Launch-blocking. Records and test procedure in `docs/INTEGRATIONS.md`. |
| WhatsApp Cloud API number and template approval | Client | WhatsApp adapter | Adapter built and **disabled**. `wa.me` links work today and need no approval. Submit `WHATSAPP_ACK_TEMPLATE` and `WHATSAPP_ALERT_TEMPLATE` bodies from `docs/INTEGRATIONS.md` / `src/lib/messages/buyerAck.ts` to Meta; keep `INTEGRATION_WHATSAPP_ENABLED=false` until both template IDs exist. |
| CRM decision | Client | CRM adapter | Client confirmed no CRM for now — the Sheets ledger is the system of record. Adapter is built behind `CRM_PROVIDER` and stays disabled. |
| Business phone, WhatsApp number and email | Client | Every conversion surface | Still `[CONFIRM]` in `src/config/site.ts`. The UI hides these fields while unconfirmed, so the sticky Call button and the WhatsApp path do not render. This must be resolved before launch. |
| Lead ownership | Client | Routing | Confirmed: one owner for all bands, escalation to the founder. Set the real name and contact in `ROUTING` in `src/lib/leads/config.ts`. |
