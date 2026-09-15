# Prompt 5 — Existing Website Content Audit

Date: 2026-09-15. No Search Console data available — every live Phase 2–3 URL is treated as protected.

## Strong pages (protect and deepen)

| URL family | Count / examples | Why strong |
| --- | --- | --- |
| Products | 10 live — PUF, PIR, Rockwool, roofing, wall, cold-room, cleanroom, fire-rated, industrial doors, PEB | Specs, FAQs, QuickAnswer, export notes |
| Solutions | 9 live — cold-storage, food-processing, pharma, warehousing, dairy, poultry, hospitals, data-centres, manufacturing | Engineering requirement + failure points |
| Export hub + support | `/export/`, process, documentation, packaging, Incoterms, lead-time | Buyer journey already answer-first |
| Africa countries | 12 live (KE, TZ, UG, RW, GH, ZM, MZ, NA, BW, AO, ET, NG) | Unique climate/logistics; publish gate |
| Cities | 13 live | Port + industrial estate context |
| Guides | 12 live | Thickness, density, U-value, fire, joints, PPGI, spans, condensation, cleanroom, quantity, install, supplier eval |
| Comparisons | 8 live | Pairwise decision tables |
| Blog | 12 live | Spec mistakes, quotes, inspection, coating |
| FAQ + glossary | Hub + 56 terms | GEO extractable definitions |
| Panel selection | `/resources/panel-selection/` | Interactive + noscript guidance |
| GEO plumbing | QuickAnswer, FAQ schema, Organization, llms.txt, AI bots allowed | Already AI-readable |

## Weak / shell pages (fill, do not delete)

| URL | Status | Gap |
| --- | --- | --- |
| `/resources/` | draft noindex | Hub not listing live child hubs |
| `/export/africa/` | draft noindex | Regional synthesis missing |
| South Africa, Zimbabwe, Mauritius, DRC | draft country shells | Holding copy only |
| `/projects/` | empty | No case studies — do not invent |
| `/careers/` | draft | Out of Prompt 5 scope |
| `certifications.ts` | empty array | Do not invent FM/certs |
| Product specs | mostly `verified: false` | Keep disclaimers |

## Duplicate / cannibalisation risks

| Topic | Existing | Action |
| --- | --- | --- |
| PUF vs PIR | `/resources/comparisons/puf-vs-pir-panels/` | Keep; link from three-way |
| PIR vs Rockwool | live comparison | Keep |
| PUF vs Rockwool | No dedicated URL | Covered by three-way pillar — do not add thin pair page |
| Wall vs masonry | `sandwich-panel-vs-masonry` | Keep |
| PPGI coating | guide `ppgi-coating-selection` | New PPGI vs PPGL comparison = decision table only |
| Supplier evaluation | guide `evaluating-sandwich-panel-suppliers` | Refresh; do not blog-duplicate |
| Quotation reading | blog `reading-a-panel-quotation` | Keep; price-factors guide is complementary |
| Applications registry | 8 slugs, no routes | Do not build — cannibalises solutions |

## Missing topics (Prompt 5 gaps)

| Pillar | Gap | Planned format |
| --- | --- | --- |
| Manufacturer selection | Manufacturer vs trader; RFQ checklist depth | Comparison + guide |
| Export commercial | Landed-cost methodology; MOQ/container depth | Guide + packaging/lead-time refresh |
| Three-way core choice | PUF vs PIR vs Rockwool single page | New comparison |
| Thickness bands | 50/75/100 mm decision | New comparison |
| MENA | No UAE/Saudi/Oman/Qatar/Kuwait | New country entities (gated) |
| Pricing education | No price-factors page (correctly no live prices) | New guide |
| FM education | No educational page; empty certs | Educational guide only |
| Buyer guides | No complete buyer-guide cluster | Consolidated guide(s) |
| Custom / PEB pack | Thin on BOQ + PEB+panels | Two new guides |
| Brand GLOBAL | Domain vs SMARTBUILD naming | Schema alternateName only |

## Commercial gaps

- Contextual CTAs exist but often generic “Get a panel specification and quote”
- No dedicated “Send BOQ / drawings” framing on manufacturing/custom flows
- Payment terms stated carefully (no fixed policy) — keep; confirm before inventing LC/TT defaults
- Export hub still Africa-weighted in copy; Prompt 5 needs India-export framing without dropping Africa

## Technical / GEO gaps

- Optional fields missing: `buyerChecklist`, `buyerScenarios`, `limitations` on products/solutions
- R-value explained only indirectly via U-value guide
- Resources hub noindex blocks topical authority crawl path
- `llms.txt` will need regen after new URLs
- No MENA in sitemaps yet (correct until publishable)

## Export / GEO gaps by Prompt phase

| Phase | Verdict |
| --- | --- |
| A Manufacturer | Partial — supplier guide exists; trader/RFQ thin |
| B Import India | Strong hub; deepen packaging/MOQ/landed cost |
| C Core choice | Pairwise strong; missing three-way |
| D Africa | Strong 12 countries; SA shell; Africa hub draft |
| E MENA | Missing |
| F Certs/quality | Quality page + fire guide; no FM education; empty certs |
| G Engineering | Guides strong; weight/custom length as H2s |
| H–J Roof/wall/clean | Products/solutions exist — refresh FAQs |
| K Cost | Never invent prices — need variables guide |
| L–M Custom/PEB | Needs guides |
| N Comparisons | Add true gaps only |
| O Buyer guides | Mostly missing as dedicated URLs |

## Do-not-touch list

- Design tokens, header/footer, nav structure, form fields, Phase 4 lead API
- Live country/product/comparison URLs (no redirects)
- Invented certifications, prices, HS codes, clients, projects, FM claims
- `/applications/` route build
