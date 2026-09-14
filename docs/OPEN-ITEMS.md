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
| `assets.photography` | pending | Client | Product and project photos pending — placeholders in use |

## Engineering follow-up (not client blockers)

| Item | Owner | Notes |
| --- | --- | --- |
| Product spec verification | Client + Engineering | All seed specs marked `verified: false` until datasheets issued |
| Datasheet PDFs | Client | Link in `product.datasheet` only when file exists in `public/documents/` |
| Guide and comparison content | Engineering | Phase 3 — entities stubbed `draft: true` |
