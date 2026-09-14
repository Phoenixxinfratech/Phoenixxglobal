# Phase 1 Master Prompt — Pointer

**Executed:** 2026-04-13  
**Documentation refreshed:** 2026-09-14

The full 20-section Phase 1 master prompt (Cursor Master Prompt 01 of 04) lives with the client and in the original build chat. It is not duplicated here — this file records scope, deliverables, and acceptance criteria only.

---

## Scope boundary

**In scope (Phase 1):** project scaffold, design tokens, UI primitives, global shell (header, mega menu, mobile nav, footer, breadcrumbs), conversion components, typed content model with Zod validation, metadata/schema/sitemap/robots infrastructure, all Section 9 routes as compliant stubs, lead form + stub API, link registry + audit scripts, and `/docs`.

**Out of scope:** homepage hero and sections (Phase 2), full product/solution page layouts (Phase 2), country/city programmatic content (Phase 3), blog articles (Phase 3), CRM/email/WhatsApp automation, analytics events, A/B tests (Phase 4).

---

## Deliverables summary

| Area | What shipped |
| --- | --- |
| Stack | Next.js 16.3.5 App Router, React 19, TypeScript strict, Tailwind 4, Netlify deploy target |
| Config | `src/config/site.ts` (single source of truth), `tokens.ts`, `seo.ts` |
| Shell | Header with mega menu, mobile drawer, footer (5 zones + popular searches), WhatsApp + sticky CTA |
| Content | `src/content/types.ts` + Zod; seed: PUF, PIR, Cold Storage, Kenya; all other entities stubbed `draft: true` |
| SEO | `buildMetadata`, JSON-LD helpers, grouped sitemaps, custom `sitemap-index.xml`, `robots.ts`, OG image route |
| Routes | Every URL from brief Section 9; `draft: true` → `noindex` + sitemap exclusion |
| Conversion | Contact + Request a Quote pages, `LeadForm`, `POST /api/lead` (logs only, provider-agnostic) |
| Linking | `src/lib/links.ts`, `RelatedContent`, `InlineLink` dev warnings, `npm run audit:links` |
| Docs | Architecture, content model, URL map, linking rules, copy guide, SEO checklist, open items |
| Audits | `audit:links`, `audit:copy`, `audit:open-items` |

---

## Acceptance criteria

Phase 1 is complete when all of the following pass:

1. **`npm run build`** — zero errors; Zod content validation passes at import time.
2. **`npm run typecheck`** — zero TypeScript errors (strict mode).
3. **`npm run lint`** — zero ESLint errors (Next 16 uses ESLint CLI directly, not `next lint`).
4. **`npm run audit:links`** — all nav/footer hrefs resolve to known slugs (warnings for draft popular-search links are acceptable).
5. **`npm run audit:copy`** — no banned marketing words in `src/content` or `src/app`.
6. **No sentinel leakage** — `[CONFIRM]` and `VERIFY_REQUIRED` values from `site.ts` never render in the UI; unconfirmed fields listed in `docs/OPEN-ITEMS.md`.
7. **Draft handling** — every `draft: true` page carries `robots: noindex,follow` and is excluded from sitemaps.
8. **Truth rules** — no invented certifications, capacities, client names, or export history; product specs marked `verified: false` until confirmed.
9. **Global shell** — identical footer on every page; breadcrumbs on all non-home pages; conversion path above the fold and at page end.
10. **Documentation** — all `/docs` files present and accurate.

---

## Next phase

Proceed to **Master Prompt 02** (homepage visual system + core page content) only after the acceptance criteria above pass and open items requiring client input are acknowledged.
