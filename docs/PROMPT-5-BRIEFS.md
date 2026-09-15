# Prompt 5 — Page-by-Page Content Briefs (P0 / P1)

Depth: match intent. Never invent prices, certs, clients, or FM claims. CTA via existing quote routes.

---

## P0 — Refresh

### `/export/` — India sandwich panel export hub
- **Intent:** Commercial — how to import panels from India
- **Primary:** sandwich panel export from India, import PUF panels from India
- **Structure:** QuickAnswer → what we export → order run → packing → docs → freight → payment → markets → FAQs → CTA “Request export pricing”
- **Depth:** Deepen India-hub framing; keep Africa as primary market cluster; link landed-cost + RFQ guides when live
- **Schema:** FAQPage if FAQs visible; WebPage

### `/export/process|documentation|packaging|incoterms|lead-time/`
- Refresh intros for answer-first; add MOQ/container FAQ on packaging; payment honesty on Incoterms
- Preserve URLs

### `/resources/` — un-draft hub
- **Intent:** Navigational + topical authority
- **Structure:** Hero → QuickAnswer → hub cards (guides, comparisons, FAQ, glossary, selection, datasheets) → CTA
- **draft:** false

### `/export/africa/` — un-draft regional hub
- **Intent:** Climate + logistics for African buyers
- **Structure:** QuickAnswer → climate bands → typical projects → ports overview → country grid → buyer checklist → CTA
- Unique regional synthesis — not country-name swap
- **draft:** false

### Products (10) + Solutions (9)
- Ensure QuickAnswer answers buyer question in first sentences
- Add `buyerChecklist` (5–8 bullets) + optional `limitations` + 1–2 `buyerScenarios` where useful
- Contextual related links already exist — add three-way / price-factors / RFQ when live
- CTA labels may vary by product family

### `/resources/guides/evaluating-sandwich-panel-suppliers/`
- Add “20 questions to ask” numbered section; capacity/export experience checks

### `/resources/guides/u-values-and-running-cost/`
- Add R-value H2 (R ≈ 1/U for stated build-up; assumptions)

### `/resources/guides/joint-systems-compared/`
- Add concealed-fix vs exposed-fix H2

### `/quality/`, manufacturing, about
- Light FAQ/copy for manufacturer shortlist; no “best in India”

---

## P0 — New

### `/resources/comparisons/puf-vs-pir-vs-rockwool/`
- **Intent:** Decision — which core
- **productA/B/C:** puf-panels, pir-panels, rockwool-panels
- **Table:** thermal, fire, weight, cost tendency, humidity, typical use
- **chooseWhen** for each; link pairwise; FAQ 6+
- **CTA:** Panel selection tool + quote

### `/resources/comparisons/manufacturer-vs-trader/`
- **Labels:** Manufacturer vs trading company (override labels; product refs for linking)
- Balanced; when trader may still fit
- **CTA:** Request manufacturer quotation

### `/resources/guides/what-affects-puf-panel-price/`
- Variables only; no INR/USD figures
- Link quotation blog + landed-cost

### `/resources/guides/sandwich-panel-rfq-from-india/`
- RFQ field checklist; drawings vs BOQ; Incoterm; port; colour; fire

---

## P1 — New / publish

### `/export/south-africa/` (publish shell → full)
- Ports: Durban, Cape Town, Gqeberha; climate bands; cold chain + mining industry; SABS/NRCS as “buyer should verify” only
- ≥900 words, ≥6 FAQs, publish gate

### `/export/uae/`
- Jebel Ali / Khalifa; extreme heat/UV; warehouse + cold chain; packaging for heat; import notes without inventing duty rates
- Unique copy; Incoterms tip; ≥900 words

### `/export/saudi-arabia/`
- Jeddah / Dammam / King Abdullah; hot arid; Vision-driven industrial demand described carefully without overclaim
- Unique vs UAE

### Guides
- `landed-cost-of-imported-puf-panels` — methodology
- `fm-approval-and-sandwich-panels` — education; explicit non-claim for PHOENIXX
- `custom-sandwich-panels-from-india`
- `peb-warehouse-with-puf-panels`
- `sandwich-panel-buyers-guide` — consolidated
- `mistakes-importing-sandwich-panels-from-india`

### Comparisons
- `50mm-vs-75mm-vs-100mm-puf-panels`
- `ppgi-vs-ppgl-sandwich-panels`

---

## Audience map

| Page type | Primary audience |
| --- | --- |
| Product | Specifiers, contractors, importers |
| Comparison | Engineers + procurement |
| Export / country | Overseas buyers + clearing agents |
| Price / RFQ / landed | Commercial buyers |
| Buyer guide / mistakes | First-time importers |
| FM / quality | Consultants + fire officers |

## Content depth targets

| Type | Guidance |
| --- | --- |
| Product refresh | Checklist + limitations + 1 scenario; keep existing length |
| Comparison | Decision table + verdicts + 6 FAQs |
| Guide | 5–8 body sections; limitations; related products |
| Country | Pass `isPublishableCountry` |
| Hub (resources/africa) | Navigation + unique intro; not thin doorway |
