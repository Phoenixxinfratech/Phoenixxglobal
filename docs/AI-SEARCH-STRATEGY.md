# AI Search Strategy

Prompt 5 updates (2026-09-15) on top of Phase 3 GEO plumbing.

---

## Answer-first content

Every indexable country, city, guide, comparison, blog article, product and solution carries a **QuickAnswer** (or equivalent) — a direct factual paragraph at the top of the page. Templates render QuickAnswer before body sections so AI crawlers and featured snippets get a clean extract.

**Prompt 5 additions:**

- **BuyerChecklist** — numbered practical checks after QuickAnswer on products, solutions and countries
- **BuyerScenarios** — high-intent “I need X for Y” Q&A blocks (GEO question cluster) without creating one URL per scenario
- **Limitations** — honest caveats on products/solutions/guides
- Three-way and label-override **comparisons** (`productC`, `optionALabel`, etc.)

---

## Entity consistency

Company facts live in `src/config/site.ts`.

- **Visible brand:** PHOENIXX SMARTBUILD
- **Legal:** NXT Phoenixx SmartBuild LLP
- **alternateName** (Organization schema only): PHOENIXX SMARTBUILD GLOBAL, PHOENIXX GLOBAL — not used in nav or logo
- **`site.canonicalDescription`** feeds Organization schema, `public/llms.txt`, and cross-page entity references

Never hardcode company names, locations, or claims in page copy.

---

## Topical hubs (Prompt 5)

Content is clustered, not blog-dumped:

1. Core panels (PUF / PIR / Rockwool products)
2. Roofing & walls
3. Cleanroom
4. PEB + insulated buildings
5. India export hub (`/export/`)
6. Africa (`/export/africa/` + countries)
7. MENA (UAE, Saudi Arabia live; Oman/Qatar/Kuwait deferred)
8. Technical guides
9. Pricing & buying (variables + RFQ + landed cost — **no invented prices**)
10. Comparisons (including three-way pillar)
11. Buyer questions / mistakes / supplier evaluation
12. EPC / solutions (factual scope only)

See `docs/PROMPT-5-CLUSTERS.md` and `docs/PROMPT-5-OPPORTUNITY-MAP.md`.

---

## llms.txt

Machine-readable site summary at **`/llms.txt`** (`npm run generate:llms` from `src/lib/llms.ts`).

Includes products, solutions, export markets (publishable countries only), cities, guides, comparisons, blog, resources hub. Target under 200 lines.

Regenerate after adding or removing live URLs.

---

## Crawler policy

`robots.ts` allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, Bingbot on `/`, disallow `/api/`.

Draft pages (`draft: true`) emit `noindex`. Country pages also require `isPublishableCountry()` for indexability.

Sitemap index: `/sitemap-index.xml`.

---

## Schema constraints

- Export country/city pages: **no** LocalBusiness, AggregateRating, Review, or Offer with price
- FAQPage only where FAQs are visible on the page
- Organization may include `alternateName` for GLOBAL descriptors
- FM / SABS / SASO / ESMA mentioned only as buyer-verification topics — never as PHOENIXX credentials unless certificates are verified in `certifications.ts`

Enforced by `npm run audit:schema` after build.

---

## Truth rules for AI citation

Do not invent certifications, live prices, HS codes, duty rates, clients, projects, or FM approval for PHOENIXX.

Educational pages (e.g. FM approval guide) explain the concept and state explicitly what we do **not** claim.

---

## Editorial

Blog calendar: `docs/EDITORIAL-CALENDAR.md`. Prefer guides over thin blogs for RFQ / pricing / import mistakes (Prompt 5).
