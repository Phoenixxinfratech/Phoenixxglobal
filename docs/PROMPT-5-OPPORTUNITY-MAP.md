# Prompt 5 — Content Opportunity Map

Every mandatory Prompt 5 question → format. Rule: one authoritative URL per intent; extras become H2/FAQ/internal link.

Legend: **R** = refresh existing · **N** = new page · **F** = FAQ/H2 on existing · **S** = schema · **L** = internal link cluster

---

## Phase A — Manufacturer & supplier selection

| # | Question | Format | Target URL |
| --- | --- | --- | --- |
| 1–3 | Best / leading Indian manufacturers | F + About | `/about/`, `/manufacturing/` — shortlist criteria, not “we are best” |
| 4–9, 13–14 | Select / compare / verify / questions / capacity / export experience | R | `/resources/guides/evaluating-sandwich-panel-suppliers/` |
| 10–12 | Manufacturer vs trader; buy direct from India | N | `/resources/comparisons/manufacturer-vs-trader/` |
| 15 | What to include in RFQ | N | `/resources/guides/sandwich-panel-rfq-from-india/` |

## Phase B — Importing from India

| # | Question | Format | Target |
| --- | --- | --- | --- |
| 1, 3–4, 18–20 | How to import; process; docs; quotation inputs | R | `/export/`, `/export/process/`, `/export/documentation/` |
| 2, 16–17 | Cost / duties / landed cost | N | `/resources/guides/landed-cost-of-imported-puf-panels/` |
| 5–8 | MOQ; packing; container fit; loading | R | `/export/packaging-and-container-loading/`, lead-time |
| 9–12 | Shipping cost; manufacture time; lead time; ports | R | `/export/lead-time-and-freight/` |
| 13–15 | Incoterms; FOB/CIF/CFR; payment | R | `/export/incoterms-and-payment-terms/` |

## Phase C — PUF vs PIR vs Rockwool

| # | Question | Format | Target |
| --- | --- | --- | --- |
| 1, 6–8, 14–15 | Which to choose; thermal; fire; value; lifecycle | N | `/resources/comparisons/puf-vs-pir-vs-rockwool/` |
| 2–5 | Pairwise | R + L | Existing pairwise comparisons |
| 9–12 | Density / thickness | R + N | Density guide + `50mm-vs-75mm-vs-100mm-puf-panels` |
| 13 | Extreme temperatures | F | Product FAQs + country climate |

## Phase D — African markets

| # | Question | Format | Target |
| --- | --- | --- | --- |
| 1–4, 10–15 | Climate / warehouse / UV / coastal / import | R + F | `/export/africa/` (un-draft) + country FAQs + thickness guide |
| 5–9 | Country-specific | R | Live country pages; **N publish** South Africa |

## Phase E — MENA

| # | Question | Format | Target |
| --- | --- | --- | --- |
| UAE / Saudi / thickness / import / packaging | N country | `/export/uae/`, `/export/saudi-arabia/` (P1) |
| Oman / Qatar / Kuwait | N country | P2 after unique research |
| Import process shared | L | `/export/process/` |

## Phase F — Certifications & quality

| # | Question | Format | Target |
| --- | --- | --- | --- |
| 1, 5–7, 13–15 | Certs to check; fire tests; datasheet; QC; inspection | R | `/quality/`, fire guide, pre-shipment blog |
| 2–4 | FM approval | N educational | `/resources/guides/fm-approval-and-sandwich-panels/` — **no PHOENIXX FM claim** |
| 8–12 | Density / thickness / PPGI / PPGL / coating | R + N | Density/coating guides + `ppgi-vs-ppgl-sandwich-panels` |

## Phase G — Technical / engineering

| # | Question | Format | Target |
| --- | --- | --- | --- |
| 1–5 | Thickness; thermal; R/U; density | R | Thickness, U-value (add R-value H2), density guides |
| 6–8 | Weight; quantity; drawings | R | `estimating-panel-quantity` + manufacturing H2 |
| 9–12 | Width; max length; custom; drawings | F | Product FAQs + custom guide |
| 13–14 | Joints; concealed vs exposed | R | `joint-systems-compared` |
| 15–17 | Install; accessories; install cost | R | Install guide; variables only |

## Phase H–J — Roofing, walls, cleanroom

| Topics | Format | Target |
| --- | --- | --- |
| Hot climate roofing; PUF vs conventional; thickness; warehouse/factory | R | Roofing product + `panel-roof-vs-conventional-roof` |
| Wall thickness; vs brick; PEB/modular; repair | R | Wall product + masonry comparison |
| Pharma / food / finish / doors | R | Cleanroom product + pharma solution + cleanroom guide |

## Phase K — Cost & commercial

| # | Question | Format | Target |
| --- | --- | --- | --- |
| 1–8 | Price / factors / thickness / steel / density / core | N | `/resources/guides/what-affects-puf-panel-price/` — **no invented prices** |
| 9–12 | Compare quotes; inclusions; reduce cost; installed cost | R + L | Quotation blog + price-factors + landed-cost |
| 13–14 | Ex-factory vs landed; additional import costs | N | Landed-cost guide |

## Phase L–M — Customisation & PEB

| Topics | Format | Target |
| --- | --- | --- |
| Custom thickness/length/colour/drawings/accessories/volume | N | `/resources/guides/custom-sandwich-panels-from-india/` |
| PEB selection; structure+panels; warehouse guide; export package | N + R | `/resources/guides/peb-warehouse-with-puf-panels/` + PEB product |

## Phase N — High-value comparisons

| Topic | Format | Target |
| --- | --- | --- |
| Three-way cores | N | `puf-vs-pir-vs-rockwool` |
| PUF vs EPS; PIR vs PUF; Rockwool vs PIR | R | Live |
| PPGI vs PPGL | N | `ppgi-vs-ppgl-sandwich-panels` |
| 0.5 vs 0.6 mm | F or N | Fold into PPGI guide H2 if thin; else comparison |
| 50/75/100 mm | N | `50mm-vs-75mm-vs-100mm-puf-panels` |
| Roof vs single-skin | R | Live panel-roof comparison |
| India vs China | N P2 | `indian-vs-chinese-sandwich-panels` |
| Manufacturer vs trader | N | As Phase A |
| Imported vs local; low-cost vs premium | F | Price-factors + supplier guide |

## Phase O — Buyer guides

| Topic | Format | Target |
| --- | --- | --- |
| Complete buyer guides | N consolidated | `/resources/guides/sandwich-panel-buyers-guide/` with core H2s (avoid 5 near-duplicate product cannibals) |
| Checklist / 20 questions | R | Fold into supplier-evaluation |
| Mistakes importing | N | `/resources/guides/mistakes-importing-sandwich-panels-from-india/` |
| Evaluate quotation / RFQ / calculate requirement | L | Existing blogs + RFQ + quantity guides |

## Scenario content (Prompt §22)

Do **not** create one URL per scenario. Add `buyerScenarios` optional field on products/countries; render as H2s.

## Schema / tools

| Item | Action |
| --- | --- |
| Organization `alternateName` | S — PHOENIXX SMARTBUILD GLOBAL / PHOENIXX GLOBAL |
| FAQPage | S — only where FAQs visible |
| Panel selection tool | Keep; no new calculator UI |
| Product Offer/price | Never |

## Priority tags on this map

- **P0:** Export hub refresh, resources hub, Africa hub, product/solution GEO fields, three-way, price-factors, RFQ, manufacturer-vs-trader, internal links, docs
- **P1:** South Africa, UAE, Saudi, landed-cost, FM education, custom, PEB+PUF, 50/75/100, PPGI vs PPGL, buyer guide, import mistakes
- **P2:** Oman/Qatar/Kuwait, India vs China, remaining depth
- **P3:** Zimbabwe/Mauritius/DRC, applications routes (not recommended), case studies with evidence only
