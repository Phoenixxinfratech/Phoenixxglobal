# URL Map

All URLs use lowercase hyphenated slugs and a trailing slash (`trailingSlash: true`). Status reflects the build as of Phase 1 (2026-04-13).

| Status | Meaning |
| --- | --- |
| **phase-1 live** | Route exists, indexable (`draft: false`), substantive content |
| **phase-1 shell** | Route exists, holding copy, `noindex` until full content |
| **phase-2** | Full page layout and copy (products, solutions, core company pages) |
| **phase-3** | Programmatic / long-tail content (countries, cities, guides, blog) |
| **phase-4** | Integrations and interactive tools (analytics, CRM, panel selector) |

---

## Core

| URL | Status | Notes |
| --- | --- | --- |
| `/` | phase-1 shell | Homepage shell; hero and sections in Phase 2 |
| `/about/` | phase-1 shell | Holding copy |
| `/manufacturing/` | phase-1 shell | |
| `/quality-and-testing/` | phase-1 shell | |
| `/projects/` | phase-1 shell | No case studies until client approval |
| `/contact/` | phase-1 live | Full page; contact fields hidden until `[CONFIRM]` values supplied |
| `/request-a-quote/` | phase-1 live | Full page + LeadForm |
| `/careers/` | phase-1 shell | |

---

## Products

| URL | Status | Notes |
| --- | --- | --- |
| `/products/` | phase-1 live | Hub indexable |
| `/products/puf-panels/` | phase-1 live | Reference product page |
| `/products/pir-panels/` | phase-1 live | Reference product page |
| `/products/rockwool-panels/` | phase-1 shell | Draft entity |
| `/products/roofing-panels/` | phase-1 shell | |
| `/products/wall-panels/` | phase-1 shell | |
| `/products/cold-room-panels/` | phase-1 shell | |
| `/products/cleanroom-panels/` | phase-1 shell | |
| `/products/fire-rated-panels/` | phase-1 shell | |
| `/products/industrial-doors/` | phase-1 shell | |
| `/products/peb-prefabricated-buildings/` | phase-1 shell | |

---

## Solutions

| URL | Status | Notes |
| --- | --- | --- |
| `/solutions/` | phase-1 live | Hub indexable |
| `/solutions/cold-storage/` | phase-1 live | Reference solution page |
| `/solutions/food-processing/` | phase-1 shell | |
| `/solutions/pharmaceutical-cleanroom/` | phase-1 shell | |
| `/solutions/warehousing-logistics/` | phase-1 shell | |
| `/solutions/dairy/` | phase-1 shell | |
| `/solutions/poultry-meat-processing/` | phase-1 shell | |
| `/solutions/hospitals/` | phase-1 shell | |
| `/solutions/data-centres/` | phase-1 shell | |
| `/solutions/manufacturing-plants/` | phase-1 shell | |

---

## Export

| URL | Status | Notes |
| --- | --- | --- |
| `/export/` | phase-1 live | Hub indexable |
| `/export/africa/` | phase-1 shell | Regional overview |
| `/export/process/` | phase-1 shell | |
| `/export/documentation/` | phase-1 shell | |
| `/export/packaging-and-container-loading/` | phase-1 shell | |
| `/export/kenya/` | phase-1 live | Reference country page |
| `/export/tanzania/` | phase-1 shell | |
| `/export/uganda/` | phase-1 shell | |
| `/export/rwanda/` | phase-1 shell | |
| `/export/ghana/` | phase-1 shell | |
| `/export/zambia/` | phase-1 shell | |
| `/export/mozambique/` | phase-1 shell | |
| `/export/namibia/` | phase-1 shell | |
| `/export/botswana/` | phase-1 shell | |
| `/export/angola/` | phase-1 shell | |
| `/export/ethiopia/` | phase-1 shell | |
| `/export/nigeria/` | phase-1 shell | |
| `/export/south-africa/` | phase-1 shell | |
| `/export/zimbabwe/` | phase-1 shell | |
| `/export/mauritius/` | phase-1 shell | |
| `/export/drc/` | phase-1 shell | |

### Export city pages (Phase 3)

Pattern: `/export/[country]/[city]/`

| URL | Status | Notes |
| --- | --- | --- |
| `/export/kenya/nairobi/` | phase-3 | Draft city entity |
| `/export/kenya/athi-river/` | phase-3 | |
| `/export/kenya/mombasa/` | phase-3 | |
| `/export/tanzania/dar-es-salaam/` | phase-3 | |
| `/export/rwanda/kigali/` | phase-3 | |
| `/export/ghana/accra/` | phase-3 | |
| `/export/ghana/tema/` | phase-3 | |
| `/export/uganda/kampala/` | phase-3 | |
| `/export/zambia/lusaka/` | phase-3 | |
| `/export/mozambique/maputo/` | phase-3 | |
| `/export/namibia/windhoek/` | phase-3 | |
| `/export/botswana/gaborone/` | phase-3 | |
| `/export/angola/luanda/` | phase-3 | |

---

## Resources

| URL | Status | Notes |
| --- | --- | --- |
| `/resources/` | phase-1 shell | Hub noindex until expanded |
| `/resources/guides/` | phase-1 shell | |
| `/resources/guides/[slug]/` | phase-3 | Route stub; no guide entities yet |
| `/resources/comparisons/` | phase-1 shell | |
| `/resources/comparisons/puf-vs-pir-panels/` | phase-1 shell | Draft comparison |
| `/resources/comparisons/pir-vs-rockwool-panels/` | phase-1 shell | |
| `/resources/comparisons/puf-vs-rockwool-panels/` | phase-1 shell | |
| `/resources/faqs/` | phase-1 live | Shared FAQs |
| `/resources/glossary/` | phase-1 live | 10 terms on hub page |
| `/resources/glossary/[slug]/` | phase-3 | Per-term pages (sitemap reserved) |
| `/resources/datasheets/` | phase-1 shell | Lists only when PDF exists |
| `/resources/panel-selection/` | phase-4 | Guided selector tool |

---

## Blog

| URL | Status | Notes |
| --- | --- | --- |
| `/blog/` | phase-1 shell | |
| `/blog/[slug]/` | phase-3 | MDX articles |

---

## Legal and utility

| URL | Status | Notes |
| --- | --- | --- |
| `/privacy-policy/` | phase-1 live | Draft legal copy — pending review |
| `/terms/` | phase-1 live | Draft legal copy — pending review |
| `/sitemap/` | phase-1 live | HTML sitemap |

---

## Applications (Phase 3)

Pattern: `/applications/[slug]/` — link registry exists; app routes not yet created.

| Slug | Status |
| --- | --- |
| `cold-room-construction`, `controlled-temperature-storage`, `warehouse-insulation`, `food-processing-envelope`, `cleanroom-fitout`, `pharmaceutical-cold-chain`, `industrial-envelope`, `poultry-house-construction` | phase-3 |

---

## API and system

| URL | Status | Notes |
| --- | --- | --- |
| `/api/lead` | phase-1 live | POST stub; provider Phase 4 |
| `/sitemap.xml` | phase-1 live | Core sitemap |
| `/sitemap-index.xml` | phase-1 live | Custom index |
| `/products/sitemap.xml` | phase-1 live | |
| `/solutions/sitemap.xml` | phase-1 live | |
| `/export/sitemap.xml` | phase-1 live | |
| `/resources/sitemap.xml` | phase-1 live | |
| `/blog/sitemap.xml` | phase-1 live | Empty until posts exist |
| `/robots.txt` | phase-1 live | |
| `/opengraph-image` | phase-1 live | Dynamic OG |

---

## Redirects (configured)

| From | To |
| --- | --- |
| `/home` | `/` |
| `/products/puf` | `/products/puf-panels/` |
| `/products/pir` | `/products/pir-panels/` |

Add further redirects in `next.config.ts` as legacy URLs are discovered.
