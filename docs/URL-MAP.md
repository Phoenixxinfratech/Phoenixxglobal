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
| `/export/africa/` | prompt-5 live | Regional climate bands, ports, country grid |
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
| `/export/south-africa/` | prompt-5 live | Durban / Cape Town / Gqeberha; Highveld vs KZN vs Cape |
| `/export/uae/` | prompt-5 live | Jebel Ali / Khalifa; heat UV warehouse + cold chain |
| `/export/saudi-arabia/` | prompt-5 live | Jeddah / Dammam / KAP; arid industrial + warehousing |
| `/export/zimbabwe/` | phase-1 shell | |
| `/export/mauritius/` | phase-1 shell | |
| `/export/drc/` | phase-1 shell | |

### Export city pages (Phase 3)

Pattern: `/export/[country]/[city]/`

| URL | Status | Notes |
| --- | --- | --- |
| `/export/kenya/nairobi/` | phase-3 live | Full city — Industrial Area, Embakasi, Tatu City |
| `/export/kenya/athi-river/` | phase-3 live | Full city — EPZ / industrial parks, Mombasa–Nairobi corridor |
| `/export/kenya/mombasa/` | phase-3 live | Full city — Kilindini port-side, salt-air specs |
| `/export/tanzania/dar-es-salaam/` | phase-3 live | Full city — port industrial zones |
| `/export/rwanda/kigali/` | phase-3 live | Full city — SEZ, inland via Mombasa |
| `/export/ghana/accra/` | phase-3 live | Full city — Greater Accra industrial, Tema haulage |
| `/export/ghana/tema/` | phase-3 live | Full city — free zone and port-side cold chain |
| `/export/uganda/kampala/` | phase-3 live | Full city — Namanve / Jinja road, Mombasa transit |
| `/export/zambia/lusaka/` | phase-3 live | Full city — capital industrial + Copperbelt link |
| `/export/mozambique/maputo/` | phase-3 live | Full city — port, humidity/cyclone notes |
| `/export/namibia/windhoek/` | phase-3 live | Full city — arid UV, Walvis Bay inland haul |
| `/export/botswana/gaborone/` | phase-3 live | Full city — landlocked corridors, beef/mining cold chain |
| `/export/angola/luanda/` | phase-3 live | Full city — Luanda port, Portuguese docs caveat |

---

## Resources

| URL | Status | Notes |
| --- | --- | --- |
| `/resources/` | prompt-5 live | Hub — guides, comparisons, FAQs, glossary, selection, datasheets |
| `/resources/guides/` | phase-3 live | Hub listing live guides |
| `/resources/guides/cold-storage-panel-thickness/` | phase-3 live | Full guide template |
| `/resources/guides/puf-core-density-explained/` | phase-3 live | Full guide template |
| `/resources/guides/u-values-and-running-cost/` | phase-3 live | Full guide + R-value section (Prompt 5) |
| `/resources/guides/fire-performance-insulated-panels/` | phase-3 live | Full guide template |
| `/resources/guides/joint-systems-compared/` | phase-3 live | Full guide + concealed vs exposed fix |
| `/resources/guides/ppgi-coating-selection/` | phase-3 live | Full guide template |
| `/resources/guides/roofing-panel-spans/` | phase-3 live | Full guide template |
| `/resources/guides/condensation-vapour-control/` | phase-3 live | Full guide template |
| `/resources/guides/cleanroom-panel-requirements/` | phase-3 live | Full guide template |
| `/resources/guides/estimating-panel-quantity/` | phase-3 live | Full guide template |
| `/resources/guides/installation-sequence-mistakes/` | phase-3 live | Full guide template |
| `/resources/guides/evaluating-sandwich-panel-suppliers/` | phase-3 live | Full guide + 20 questions (Prompt 5) |
| `/resources/guides/what-affects-puf-panel-price/` | prompt-5 live | Price variables only — no invented rates |
| `/resources/guides/sandwich-panel-rfq-from-india/` | prompt-5 live | RFQ field checklist |
| `/resources/guides/landed-cost-of-imported-puf-panels/` | prompt-5 live | Landed-cost methodology |
| `/resources/guides/fm-approval-and-sandwich-panels/` | prompt-5 live | Educational — no PHOENIXX FM claim |
| `/resources/guides/custom-sandwich-panels-from-india/` | prompt-5 live | Custom length/colour/drawings |
| `/resources/guides/peb-warehouse-with-puf-panels/` | prompt-5 live | PEB + cladding coordination |
| `/resources/guides/sandwich-panel-buyers-guide/` | prompt-5 live | Consolidated buyer guide |
| `/resources/guides/mistakes-importing-sandwich-panels-from-india/` | prompt-5 live | Import pitfall guide |
| `/resources/comparisons/` | phase-3 live | Hub — live comparisons |
| `/resources/comparisons/puf-vs-pir-panels/` | phase-3 live | Full decision table + FAQ |
| `/resources/comparisons/pir-vs-rockwool-panels/` | phase-3 live | Thermal vs fire |
| `/resources/comparisons/puf-vs-eps-panels/` | phase-3 live | PUF vs EPS board build-ups |
| `/resources/comparisons/rockwool-vs-glasswool-panels/` | phase-3 live | Mineral wool compared |
| `/resources/comparisons/sandwich-panel-vs-masonry/` | phase-3 live | Speed vs block construction |
| `/resources/comparisons/puf-vs-pir-cold-storage/` | phase-3 live | Cold room core choice |
| `/resources/comparisons/panel-roof-vs-conventional-roof/` | phase-3 live | Insulated roof vs site-built |
| `/resources/comparisons/peb-vs-rcc/` | phase-3 live | Steel frame vs concrete |
| `/resources/comparisons/puf-vs-pir-vs-rockwool/` | prompt-5 live | Three-way core pillar |
| `/resources/comparisons/manufacturer-vs-trader/` | prompt-5 live | Manufacturer vs trading company |
| `/resources/comparisons/50mm-vs-75mm-vs-100mm-puf-panels/` | prompt-5 live | Thickness band decision |
| `/resources/comparisons/ppgi-vs-ppgl-sandwich-panels/` | prompt-5 live | Facing substrate decision |
| `/resources/faqs/` | phase-3 live | Categorised searchable FAQs |
| `/resources/glossary/` | phase-3 live | 56 terms with letter anchors |
| `/resources/glossary/[slug]/` | phase-3 | Per-term pages (sitemap reserved) |
| `/resources/datasheets/` | phase-3 live | Lists PDFs when present; else email request |
| `/resources/panel-selection/` | phase-3 live | Client selection tool + static noscript guidance |

---

## Blog

| URL | Status | Notes |
| --- | --- | --- |
| `/blog/` | phase-3 live | Hub with category filter |
| `/blog/cold-room-panel-specification-mistakes/` | phase-3 live | Technical |
| `/blog/coastal-humidity-coating-east-africa/` | phase-3 live | Export & Logistics |
| `/blog/what-delays-export-shipments/` | phase-3 live | Export & Logistics |
| `/blog/reading-a-panel-quotation/` | phase-3 live | Technical |
| `/blog/cheapest-quote-rarely-cheapest-project/` | phase-3 live | Project Insights |
| `/blog/container-loading-damage-mistakes/` | phase-3 live | Export & Logistics |
| `/blog/doors-for-blast-freezers/` | phase-3 live | Technical |
| `/blog/handling-a-site-complaint/` | phase-3 live | Project Insights |
| `/blog/when-to-specify-pir-over-puf/` | phase-3 live | Technical |
| `/blog/how-long-panel-quotes-stay-valid/` | phase-3 live | Export & Logistics |
| `/blog/dairy-chill-room-specification/` | phase-3 live | Industry Applications |
| `/blog/pre-shipment-inspection-checklist/` | phase-3 live | Company News |

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
| `/sitemap-index.xml` | phase-3 live | Index — core, products, solutions, export, countries, cities, resources, guides, comparisons, blog |
| `/sitemap-countries.xml` | phase-3 live | Publishable country pages only |
| `/sitemap-cities.xml` | phase-3 live | Publishable city pages only |
| `/sitemap-guides.xml` | phase-3 live | Live guides |
| `/sitemap-comparisons.xml` | phase-3 live | Live comparisons |
| `/products/sitemap.xml` | phase-1 live | |
| `/solutions/sitemap.xml` | phase-1 live | |
| `/export/sitemap.xml` | phase-3 live | Export hub pages only |
| `/resources/sitemap.xml` | phase-3 live | Resource hubs + glossary |
| `/blog/sitemap.xml` | phase-3 live | Hub + 12 articles |
| `/llms.txt` | phase-3 live | Static file in `/public/` |
| `/robots.txt` | phase-3 live | AI crawlers explicitly allowed |
| `/opengraph-image` | phase-1 live | Dynamic OG |

---

## Redirects (configured)

| From | To |
| --- | --- |
| `/home` | `/` |
| `/products/puf` | `/products/puf-panels/` |
| `/products/pir` | `/products/pir-panels/` |

Add further redirects in `next.config.ts` as legacy URLs are discovered.
