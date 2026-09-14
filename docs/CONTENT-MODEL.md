# Content Model

All entities are defined in `src/content/types.ts` with matching Zod schemas. Data files in `src/content/` are validated at build time in `src/content/index.ts`. Cross-references (product → solution slugs, country → city slugs, etc.) are checked and fail the build on unknown slugs.

---

## Shared types

### `SpecRow`

| Field | Type | Owner | Notes |
| --- | --- | --- | --- |
| `label` | string | Engineering | Row heading in spec tables |
| `value` | string | Engineering | Numeric or text value |
| `unit` | string? | Engineering | e.g. `kg/m³`, `mm`, `W/m·K` |
| `note` | string? | Engineering / Marketing | Caveat shown below the row |
| `verified` | boolean | Engineering | **`false`** until confirmed against project documentation; UI must show disclaimer when unverified |

**Verification rule:** Never set `verified: true` without a signed-off datasheet or test report. Default note: *"Confirmed against approved project documentation before dispatch."*

### `ImageRef`

| Field | Type | Owner | Notes |
| --- | --- | --- | --- |
| `src` | string | Marketing / Assets | Path under `/public/images/` |
| `alt` | string | Marketing | Descriptive, specific (not "panel image") |
| `width` | number | Engineering | Explicit dimensions for CLS |
| `height` | number | Engineering | |
| `caption` | string? | Marketing | Optional figure caption |

### `FaqItem`

| Field | Type | Owner | Notes |
| --- | --- | --- | --- |
| `question` | string | Marketing | As buyers actually ask |
| `answer` | string | Marketing / Engineering | Plain language; no invented claims |

### `PageMeta` (pages registry)

| Field | Type | Owner | Notes |
| --- | --- | --- | --- |
| `path` | string | Engineering | Trailing slash, e.g. `/about/` |
| `title` | string | Marketing | SEO title (not always identical to `h1`) |
| `description` | string | Marketing | Meta description |
| `h1` | string | Marketing | Visible page heading |
| `holdingCopy` | string | Marketing | Honest stub copy for shell routes |
| `draft` | boolean | Engineering | Controls noindex + sitemap |
| `section` | enum | Engineering | `core` \| `products` \| `solutions` \| `export` \| `resources` \| `blog` \| `legal` |
| `updatedAt` | string? | Engineering | ISO date for sitemap `lastModified` |

### `NavItem`

| Field | Type | Owner | Notes |
| --- | --- | --- | --- |
| `label` | string | Marketing | |
| `href` | string | Engineering | Must match `routes` in `lib/links.ts` |
| `description` | string? | Marketing | Mega menu descriptor |
| `children` | array? | Marketing | Nested nav links |

---

## `Product`

| Field | Type | Owner | Notes |
| --- | --- | --- | --- |
| `slug` | string | Engineering | URL segment, unique |
| `name` | string | Marketing | Full product name |
| `shortName` | string | Marketing | Nav/cards |
| `category` | `"panel"` \| `"door"` \| `"structure"` | Engineering | |
| `h1` | string | Marketing | |
| `seoTitle` | string | Marketing | Max 70 chars |
| `metaDescription` | string | Marketing | Max 170 chars |
| `summary` | string | Marketing | 40–60 words; answers "what is it" |
| `coreOfType` | string | Engineering | e.g. `polyurethane foam (PUF)` |
| `specs` | SpecRow[] | Engineering | See verification rules |
| `thicknessOptions` | string[]? | Engineering | |
| `coverWidth` | string? | Engineering | |
| `facings` | string[]? | Engineering | |
| `jointTypes` | string[]? | Engineering | |
| `finishes` | string[]? | Engineering | |
| `applications` | string[] | Engineering | Slugs → `Application` |
| `industries` | string[] | Engineering | Slugs → `Solution` |
| `comparisons` | string[] | Engineering | Slugs → `Comparison` |
| `relatedProducts` | string[] | Engineering | Slugs → `Product` |
| `faqs` | FaqItem[] | Marketing / Engineering | 6–10 per live product |
| `exportNotes` | string? | Export | Packing, container fit |
| `images` | ImageRef[] | Assets | Real photos only; placeholders → OPEN-ITEMS |
| `datasheet` | string? | Engineering | Path to PDF — **only if file exists** |
| `holdingCopy` | string? | Marketing | Shown when `draft: true` |
| `draft` | boolean | Engineering | |
| `updatedAt` | string? | Engineering | |

### Seed status — products

| Slug | Status |
| --- | --- |
| `puf-panels` | **Live** — full reference implementation |
| `pir-panels` | **Live** — full reference implementation |
| `rockwool-panels`, `roofing-panels`, `wall-panels`, `cold-room-panels`, `cleanroom-panels`, `fire-rated-panels`, `industrial-doors`, `peb-prefabricated-buildings` | **Draft** — slug + name + holding copy only |

All live product specs are marked `verified: false` until client confirms production ranges.

---

## `Solution`

| Field | Type | Owner | Notes |
| --- | --- | --- | --- |
| `slug` | string | Engineering | |
| `name` | string | Marketing | |
| `h1` | string | Marketing | |
| `seoTitle` | string | Marketing | Max 70 |
| `metaDescription` | string | Marketing | Max 170 |
| `summary` | string | Marketing | |
| `relevantProducts` | string[] | Engineering | Product slugs |
| `applications` | string[] | Engineering | Application slugs |
| `comparisons` | string[] | Engineering | Comparison slugs |
| `faqs` | FaqItem[] | Marketing | |
| `images` | ImageRef[] | Assets | |
| `holdingCopy` | string? | Marketing | |
| `draft` | boolean | Engineering | |
| `updatedAt` | string? | Engineering | |

### Seed status — solutions

| Slug | Status |
| --- | --- |
| `cold-storage` | **Live** |
| All others (`food-processing`, `pharmaceutical-cleanroom`, `warehousing-logistics`, `dairy`, `poultry-meat-processing`, `hospitals`, `data-centres`, `manufacturing-plants`) | **Draft** |

---

## `Application`

| Field | Type | Owner | Notes |
| --- | --- | --- | --- |
| `slug` | string | Engineering | |
| `name` | string | Marketing | |
| `summary` | string? | Marketing | |
| `relatedProducts` | string[] | Engineering | |
| `relatedSolutions` | string[] | Engineering | |
| `draft` | boolean | Engineering | |

**Seed status:** 8 applications, all **draft**. Routes planned Phase 3 (`/applications/[slug]/` in link registry; pages not yet created).

---

## `Country`

| Field | Type | Owner | Notes |
| --- | --- | --- | --- |
| `slug` | string | Engineering | |
| `name` | string | Marketing | |
| `iso2` | string | Engineering | Two-letter ISO |
| `region` | string | Marketing | e.g. `East Africa` |
| `h1` | string | Marketing | |
| `seoTitle` | string | Marketing | Max 70 |
| `metaDescription` | string | Marketing | Max 170 |
| `portsOfEntry` | string[] | Export | Real port names only |
| `majorCities` | string[] | Export | City slugs |
| `industrialZones` | string[] | Export | Industrial zone slugs |
| `demandDrivers` | string[] | Export / Marketing | Qualified, not invented |
| `relevantProducts` | string[] | Engineering | |
| `relevantIndustries` | string[] | Engineering | Solution slugs |
| `logisticsNotes` | string | Export | |
| `documentationNotes` | string | Export | |
| `faqs` | FaqItem[] | Export / Marketing | |
| `holdingCopy` | string? | Marketing | |
| `draft` | boolean | Engineering | |
| `updatedAt` | string? | Engineering | |

### Seed status — countries

| Slug | Status |
| --- | --- |
| `kenya` | **Live** |
| All other 15 countries | **Draft** |

---

## `City`

| Field | Type | Owner | Notes |
| --- | --- | --- | --- |
| `slug` | string | Engineering | |
| `name` | string | Marketing | |
| `countrySlug` | string | Engineering | Must exist in `countries` |
| `nearestPort` | string? | Export | |
| `relevantProducts` | string[] | Engineering | |
| `relevantIndustries` | string[] | Engineering | |
| `holdingCopy` | string? | Marketing | |
| `draft` | boolean | Engineering | |
| `updatedAt` | string? | Engineering | |

**Seed status:** 13 cities, all **draft**. Route: `/export/[country]/[city]/` (Phase 3).

---

## `IndustrialZone`

| Field | Type | Owner | Notes |
| --- | --- | --- | --- |
| `slug` | string | Engineering | |
| `name` | string | Marketing | |
| `countrySlug` | string | Engineering | |
| `citySlug` | string? | Engineering | |
| `draft` | boolean | Engineering | |

**Seed status:** 2 zones (Kenya), both **draft**.

---

## `Comparison`

| Field | Type | Owner | Notes |
| --- | --- | --- | --- |
| `slug` | string | Engineering | |
| `name` | string | Marketing | |
| `h1` | string | Marketing | |
| `seoTitle` | string | Marketing | Max 70 |
| `metaDescription` | string | Marketing | Max 170 |
| `productA` | string | Engineering | Product slug |
| `productB` | string | Engineering | Product slug |
| `summary` | string? | Marketing | |
| `holdingCopy` | string? | Marketing | |
| `draft` | boolean | Engineering | |
| `updatedAt` | string? | Engineering | |

**Seed status:** 3 comparisons (`puf-vs-pir-panels`, `pir-vs-rockwool-panels`, `puf-vs-rockwool-panels`), all **draft**.

---

## `Guide`

| Field | Type | Owner | Notes |
| --- | --- | --- | --- |
| `slug` | string | Engineering | |
| `name` | string | Marketing | |
| `h1` | string | Marketing | |
| `seoTitle` | string | Marketing | Max 70 |
| `metaDescription` | string | Marketing | Max 170 |
| `relatedProducts` | string[] | Engineering | |
| `relatedSolutions` | string[] | Engineering | |
| `relatedComparisons` | string[] | Engineering | |
| `holdingCopy` | string? | Marketing | |
| `draft` | boolean | Engineering | |
| `updatedAt` | string? | Engineering | |

**Seed status:** 12 guides live (Batch D/E).

---

## `Author`

| Field | Type | Owner | Notes |
| --- | --- | --- | --- |
| `slug` | string | Engineering | URL-safe id |
| `name` | string | Marketing | Company name or approved byline |
| `role` | string | Marketing | e.g. Engineering & Export Team |
| `credentials` | string? | Marketing | Optional — omit if unverified |
| `bio` | string | Marketing | Short; no invented person |
| `photo` | string? | Assets | Optional |
| `linkedin` | string? | Marketing | Optional |
| `draft` | boolean | Engineering | |

**Seed status:** 1 company author — `phoenixx-smartbuild` (Batch F). Never invent named individuals.

---

## `Article`

| Field | Type | Owner | Notes |
| --- | --- | --- | --- |
| `slug` | string | Engineering | |
| `title` | string | Marketing | Card / schema headline |
| `h1` | string | Marketing | Visible heading |
| `seoTitle` | string | Marketing | Max 70 |
| `metaDescription` | string | Marketing | Max 170 |
| `category` | string | Marketing | Editorial category |
| `authorSlug` | string | Engineering | → `Author` |
| `excerpt` | string | Marketing | Hub teaser |
| `quickAnswer` | string | Marketing / Engineering | Answer-first paragraph |
| `bodySections` | BodySection[] | Marketing / Engineering | Question-led H2s |
| `keyTakeaways` | string[] | Marketing | Optional bullet list (default `[]`) |
| `datePublished` | string | Engineering | ISO date — not before site build |
| `dateModified` | string | Engineering | ISO date |
| `relatedProducts` | string[] | Engineering | Live product slugs |
| `relatedSolutions` | string[] | Engineering | Live solution slugs |
| `relatedGuides` | string[] | Engineering | Live guide slugs |
| `draft` | boolean | Engineering | |
| `updatedAt` | string? | Engineering | Sitemap `lastModified` |

**Seed status:** 12 articles live (Batch F). Typed TS — no MDX.

---

## `Certification`

| Field | Type | Owner | Notes |
| --- | --- | --- | --- |
| `slug` | string | Engineering | |
| `name` | string | Engineering | |
| `issuer` | string? | Engineering | |
| `documentPath` | string? | Engineering | PDF path when uploaded |
| `verified` | boolean | Engineering | Must be `true` only with real document |
| `draft` | boolean | Engineering | |

**Seed status:** Empty array — never invent certifications.

---

## `GlossaryTerm`

| Field | Type | Owner | Notes |
| --- | --- | --- | --- |
| `slug` | string | Engineering | |
| `term` | string | Marketing | Display name |
| `definition` | string | Marketing / Engineering | |
| `relatedProducts` | string[] | Engineering | |
| `draft` | boolean | Engineering | |

**Seed status:** 10 terms, all **live** (rendered on `/resources/glossary/` hub; individual term URLs reserved for Phase 3).

---

## Shared FAQs

`src/content/faqs.ts` — `sharedFaqs[]` used on the FAQs hub. **Live.** Export and quotation topics; no invented lead times tied to unconfirmed capacity.

---

## Editing workflow

1. Edit the relevant `src/content/*.ts` file.
2. Run `npm run build` — Zod and cross-ref checks run automatically.
3. Set `draft: false` and `updatedAt` only when the page passes `docs/SEO-CHECKLIST.md`.
4. Run `npm run audit:links` and `npm run audit:copy` before merge.
