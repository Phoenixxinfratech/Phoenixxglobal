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
| `/about/` | phase-2 live | Company story, positioning, FAQs — stock hero image |
| `/manufacturing/` | phase-2 live | Process timeline, raw materials, in-process checks — stock photos |
| `/quality-and-testing/` | phase-2 live | In-house checks; no published third-party certs yet |
| `/projects/` | phase-2 live | No portfolio — references on request with client consent |
| `/contact/` | phase-1 live | Full page; contact fields hidden until `[CONFIRM]` values supplied |
| `/request-a-quote/` | phase-1 live | Full page + LeadForm |
| `/careers/` | phase-1 shell | |

---

## Products

| URL | Status | Notes |
| --- | --- | --- |
| `/products/` | phase-2 live | Hub with ProductGrid, comparison table, FAQ |
| `/products/puf-panels/` | phase-2 live | Full block template; cold-room intent |
| `/products/pir-panels/` | phase-2 live | Full block template; PIR premium vs PUF |
| `/products/rockwool-panels/` | phase-2 live | Full block template; fire-rated walls |
| `/products/roofing-panels/` | phase-2 live | Full block template; trapezoidal roof |
| `/products/wall-panels/` | phase-2 live | Full block template; exterior/partition |
| `/products/cold-room-panels/` | phase-2 live | Full block template; cam-lock kits |
| `/products/cleanroom-panels/` | phase-2 live | Full block template; hygiene joints |
| `/products/fire-rated-panels/` | phase-2 live | Full block template; system ratings |
| `/products/industrial-doors/` | phase-2 live | Full block template; cold room doors |
| `/products/peb-prefabricated-buildings/` | phase-2 live | Full block template; PEB + cladding |

---

## Solutions

| URL | Status | Notes |
| --- | --- | --- |
| `/solutions/` | phase-2 live | Hub with SolutionGrid, selection guidance, FAQ |
| `/solutions/cold-storage/` | phase-2 live | Full block template; condensation and door bridging |
| `/solutions/food-processing/` | phase-2 live | Washdown zones and cold docks |
| `/solutions/pharmaceutical-cleanroom/` | phase-2 live | ISO class guidance; verify local regs |
| `/solutions/warehousing-logistics/` | phase-2 live | Fast-erect PEB sheds |
| `/solutions/dairy/` | phase-2 live | Milk chilling rooms |
| `/solutions/poultry-meat-processing/` | phase-2 live | Processing halls and cold holding |
| `/solutions/hospitals/` | phase-2 live | OT/pharmacy partitions; fire regs qualified |
| `/solutions/data-centres/` | phase-2 live | Fire-rated envelope; no Tier claims |
| `/solutions/manufacturing-plants/` | phase-2 live | Factory walls and roofs |

---

## Export

| URL | Status | Notes |
| --- | --- | --- |
| `/export/` | phase-3 live | Full hub — QuickAnswer, support links, country list, FAQ |
| `/export/africa/` | phase-1 shell | Regional overview |
| `/export/process/` | phase-3 live | ProcessTimeline enquiry → installation |
| `/export/documentation/` | phase-3 live | Commercial docs; agent caveat |
| `/export/packaging-and-container-loading/` | phase-3 live | Bundles, 20/40/40HC, stock images |
| `/export/incoterms-and-payment-terms/` | phase-3 live | EXW FOB CFR CIF DAP + payment framing |
| `/export/lead-time-and-freight/` | phase-3 live | Production drivers, indicative transit |
| `/export/kenya/` | phase-3 live | Full country template — Mombasa port, coastal/inland specs |
| `/export/tanzania/` | phase-3 live | Full country template — Dar es Salaam port |
| `/export/uganda/` | phase-3 live | Full country template — landlocked via Mombasa/Dar |
| `/export/rwanda/` | phase-3 live | Full country template — landlocked via Mombasa transit |
| `/export/ghana/` | phase-3 live | Full country template — Tema/Takoradi ports, Accra industrial |
| `/export/zambia/` | phase-3 live | Full country template — landlocked via Durban/Dar/Beira transit |
| `/export/mozambique/` | phase-3 live | Full country template — Maputo and Beira ports |
| `/export/namibia/` | phase-3 live | Full country template — Walvis Bay port, Windhoek inland |
| `/export/botswana/` | phase-3 live | Full country template — landlocked via Durban/Walvis Bay transit |
| `/export/angola/` | phase-3 live | Full country template — Luanda port, Portuguese docs caveat |
| `/export/ethiopia/` | phase-3 live | Full country template — landlocked via Djibouti corridor |
| `/export/nigeria/` | phase-3 live | Full country template — Lagos Apapa/Tin Can, coastal/inland specs |
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
