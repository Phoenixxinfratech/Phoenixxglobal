# AI Search Strategy

Brief notes for Phase 3 programmatic content and Phase 3 Batch F polish.

---

## Answer-first content

Every indexable country, city, guide, and blog article carries a **QuickAnswer** field — a direct, factual paragraph at the top of the page that answers the primary query without preamble. Templates render QuickAnswer before body sections so AI crawlers and featured snippets get a clean extract.

---

## Entity consistency

Company facts live in `src/config/site.ts`. When the client confirms a 55-word description, set `site.canonicalDescription` — the same string feeds Organization schema, `llms.txt` (Batch F), and cross-page entity references. Never hardcode company names, locations, or claims in page copy.

---

## llms.txt (Batch F)

A machine-readable site summary at `/llms.txt` is planned for Batch F. It will list primary URLs, entity description, and export scope — not implemented in Batch A.

---

## Crawler policy

`robots.ts` allows standard search and AI crawlers on public routes. Draft pages (`draft: true`) emit `noindex`. No paywall or bot-blocking on export or product content.

---

## Schema constraints on export

Export country and city pages must **not** emit:

- `LocalBusiness` (we export from India; no local storefront per market)
- `AggregateRating` or `Review` (no unverified ratings)
- `Offer` with price (quotes are enquiry-based, not listed prices)

Enforced by `npm run audit:schema` after build.
