# Change log

Additive Phase 1 touches made during later phases. Prefer extension over modification.

## 2026-09-14 Phase 3 Batch D

### File: `src/content/cities.ts`
**Change:** Full publishable content for 13 launch cities (Nairobi through Luanda) clearing `isPublishableCity` gates.
**Reason:** Phase 3 Batch D city / industrial-zone architecture with local industrial substance.
**Backwards compatible:** yes — content only

### File: `src/app/export/[country]/[city]/page.tsx`
**Change:** Gated full city template via `isPublishableCity`; Phase 2 blocks; breadcrumb + FAQ schema only.
**Reason:** Assemble city pages without LocalBusiness or doorway patterns.
**Backwards compatible:** yes — HoldingPage retained for non-publishable

### File: `src/app/export/[country]/page.tsx`
**Change:** Added publishable city links section per country.
**Reason:** Country → city internal linking once cities clear the gate.
**Backwards compatible:** yes — section renders only when cities exist

### File: `docs/URL-MAP.md`
**Change:** Marked 13 city routes phase-3 live.
**Reason:** Reflect Batch D ship state.
**Backwards compatible:** n/a (docs)

### File: `src/content/types.ts`
**Change:** Extended `ComparisonSchema` additively with `quickAnswer`, `decisionTable`, `chooseAWhen`, `chooseBWhen`, `costNotes`, related arrays and FAQs; added `ComparisonRowSchema`.
**Reason:** Prep for Batch E comparison pages without breaking existing stubs.
**Backwards compatible:** yes — all new fields optional/defaulted

## 2026-09-14 Phase 3 Batch C

### File: `src/content/countries.ts`
**Change:** Full publishable content for 12 launch countries (Kenya, Tanzania, Uganda, Rwanda, Ghana, Zambia, Mozambique, Namibia, Botswana, Angola, Ethiopia, Nigeria); SA/Zimbabwe/Mauritius/DRC remain draft stubs.
**Reason:** Phase 3 Batch C country architecture with ≥12 data points and ≥900 words each.
**Backwards compatible:** yes — content only

### File: `src/app/export/[country]/page.tsx`
**Change:** Gated full country template via `isPublishableCountry`; PageHero, QuickAnswer, SpecTable, ProductGrid, SolutionGrid, FAQ, CTA; JSON-LD breadcrumb + FAQ only (no LocalBusiness).
**Reason:** Assemble Phase 2 blocks for researched country pages.
**Backwards compatible:** yes — HoldingPage retained for non-publishable

### File: `docs/URL-MAP.md`
**Change:** Marked 12 country routes phase-3 live.
**Reason:** Reflect Batch C ship state.
**Backwards compatible:** n/a (docs)

## 2026-09-14 Phase 3 Batch B

### File: `src/content/export.ts`
**Change:** New structured copy module for export hub and five support pages (process, documentation, packaging, incoterms, lead time).
**Reason:** Phase 3 Batch B full export page rewrites with shared content pattern matching `company.ts`.
**Backwards compatible:** yes — new module

### File: `src/content/pages.ts`
**Change:** Set `draft: false` on `/export/process/`, `/export/documentation/`, `/export/packaging-and-container-loading/`; added registry entries for `/export/incoterms-and-payment-terms/` and `/export/lead-time-and-freight/`.
**Reason:** Ship full export support pages in sitemap and search index.
**Backwards compatible:** yes

### File: `src/lib/links.ts`
**Change:** Added `exportIncoterms` and `exportLeadTime` routes; extended `isDraftPath` export support slug set.
**Reason:** New export support routes must not be treated as country draft shells.
**Backwards compatible:** yes

### File: `src/content/navigation.ts`
**Change:** Export Process column — added Incoterms & Payment and Lead Time & Freight links.
**Reason:** Discoverability for new support pages from primary nav.
**Backwards compatible:** yes

### File: `src/content/footer.ts`
**Change:** `countryLinks` — added Packaging & Loading, Incoterms & Payment, Lead Time & Freight.
**Reason:** Footer export column parity with nav support pages.
**Backwards compatible:** yes

### File: `docs/URL-MAP.md`
**Change:** Updated export hub and support page statuses to phase-3 live; added incoterms and lead-time URLs.
**Reason:** URL map reflects Batch B ship state.
**Backwards compatible:** n/a (docs)

## 2026-09-14 Phase 3 Batch A

### File: `src/content/types.ts`
**Change:** Extended `CountrySchema` with optional Phase 3 fields (`climateNotes`, `temperatureRange`, `coastal`, `keyPorts`, `inlandRoutes`, `demandSectors`, `typicalProjectTypes`, `importConsiderations`, `localInstallationNotes`, `researchSources`, `quickAnswer`, `marketContext`, `specificationNotes`, `sectionOrder`, `wordCountHint`). Extended `CitySchema` with `industrialEstates`, `localIndustries`, `roadAccessNotes`, `projectProfiles`, `specificationNotes`, `quickAnswer`, `marketContext`, `faqs`, `sectionOrder`, `climateNotes`, `portRelevance`. Extended `GuideSchema` with `quickAnswer`, `bodySections`, `limitations`. Added `BodySectionSchema`, `AuthorSchema`, `ArticleSchema` for typed blog content.
**Reason:** Phase 3 programmatic pages and blog need structured fields without a CMS or MDX.
**Backwards compatible:** yes — all new fields optional with sensible defaults; existing country/city seed validates unchanged. Added `CountryInput` / `CityInput` aliases so seed arrays omit defaulted fields without TS errors.

### File: `src/content/index.ts`
**Change:** `validateContent` now separates input/output generics so `CountryInput`/`CityInput` seed arrays parse to full `Country`/`City` types.
**Reason:** Optional Zod defaults must not force empty arrays into every seed literal.
**Backwards compatible:** yes

### File: `src/lib/publishable.ts`
**Change:** Added `countCountryDataPoints`, `countCityDataPoints`, `isPublishableCountry`, `isPublishableCity` — single source of truth for indexation gates (draft, ≥12 data points, required copy fields, ≥6 FAQs, ≥1 product, ≥900 words).
**Reason:** Templates and sitemaps need a shared publishability check before country/city pages go live.
**Backwards compatible:** yes — new module, no existing consumers changed.

### File: `scripts/audit-unique.ts`
**Change:** New audit — Jaccard word-set similarity on long quoted strings across products, solutions, countries, cities; fails if different entities exceed 70% overlap.
**Reason:** Phase 3 Section 21 — prevent boilerplate duplication across programmatic pages.
**Backwards compatible:** yes (new script; skips country/city stubs until `quickAnswer` / `marketContext` present)

### File: `scripts/audit-schema.ts`
**Change:** New audit — scans `.next/server/app/**/*.html` for JSON-LD; fails on `AggregateRating`, priced `Offer`, `Review`, or `LocalBusiness` on `/export/` routes; warns on empty `FAQPage`.
**Reason:** AI-search and export schema constraints.
**Backwards compatible:** yes (exits 0 with warning if `.next` missing)

### File: `package.json`
**Change:** Added `audit:unique` and `audit:schema` scripts.
**Reason:** Wire new Phase 3 audits into CI/local checks.
**Backwards compatible:** yes

### File: `src/config/site.ts`
**Change:** Added optional `canonicalDescription` (empty until client confirms 55-word entity description).
**Reason:** Entity consistency for schema and `llms.txt` (Batch F).
**Backwards compatible:** yes — empty string; existing `confirmed()` patterns unaffected.

### File: `docs/prompts/phase-3.md`
**Change:** Phase 3 pointer doc with batches A–F and Section 21 acceptance criteria.
**Reason:** Session continuity across Phase 3 batches.
**Backwards compatible:** n/a (docs)

### File: `docs/KEYWORD-MAP.md`
**Change:** Keyword table for homepage, 10 products, 9 solutions, export hub, 12 planned countries, 3 comparisons.
**Reason:** One primary keyword per URL for copy and internal linking.
**Backwards compatible:** n/a (docs)

### File: `docs/AI-SEARCH-STRATEGY.md`
**Change:** Brief AI-search strategy — QuickAnswer, entity consistency, llms.txt planned Batch F, crawler policy, no LocalBusiness on export.
**Reason:** Phase 3 AI-search readiness documentation.
**Backwards compatible:** n/a (docs)

### File: `docs/ARCHITECTURE.md`
**Change:** Updated content architecture note — typed blog (no MDX), `publishable.ts`, new audit scripts.
**Reason:** Keep architecture doc aligned with Phase 3 Batch A.
**Backwards compatible:** n/a (docs)

## 2026-09-14 Phase 2

### File: `src/content/types.ts`
**Change:** Extended `ImageRefSchema` with optional `credit`, `sourceUrl`, `isStock`. Added optional Phase 2 fields on `ProductSchema` (`quickAnswer`, `overview`, `construction`, `benefits`, `selectionGuidance`, `thermalPerformance`, `installationNotes`, `comparisonNotes`, `keySpec`) and `SolutionSchema` (`quickAnswer`, `engineeringRequirement`, `recommendedSpec`, `failurePoints`, `estimatingGuidance`, `productRationale`). Added supporting schemas `ThermalPerfSchema`, `FailurePointSchema`, `ProductRationaleSchema`.
**Reason:** Product and solution templates need structured copy and stock-image provenance without inventing a second content model.
**Backwards compatible:** yes
**Files affected:** content consumers that ignore unknown fields; Zod still validates existing seed data.

### File: `scripts/audit-links.ts`
**Change:** Added HTML link-graph pass over `.next/server/app/**/*.html` for orphans, sub-8 in-body links, and anchor-text overuse. Kept Phase 1 nav/footer slug pass.
**Reason:** Phase 2 acceptance requires in-body link enforcement.
**Backwards compatible:** yes (exit codes unchanged for slug failures)

### File: `scripts/audit-copy.ts`
**Change:** Added duplicate-paragraph detection across pages (fail), sentence-length variance (warn), repeated paragraph openers (warn), word-count report.
**Reason:** Phase 2 Section 12.4 AI-tell detector requirements.
**Backwards compatible:** yes for banned-word path

## 2026-09-14 Phase 2 (Batch B)

### File: `src/components/ui/Button.tsx`
**Change:** Primary variant now uses `ember-deep` as default background (hover to `ember`).
**Reason:** White text on `#E8481F` failed WCAG AA contrast in Lighthouse; `#B8320F` passes. Tokens unchanged.
**Backwards compatible:** yes (API unchanged)
**Files affected:** all primary Buttons


### File: `scripts/audit-links.ts`
**Change:** Anchor-overuse check now counts only links inside `<p>` tags on live pages; city routes recognised; legal/FAQ underlink exemptions; chrome CTA allowlist.
**Reason:** Product grids and related lists inevitably repeat product names; prose is where money-keyword overuse matters.
**Backwards compatible:** yes
