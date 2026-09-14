# Phase 3 Master Prompt — Pointer

**Started:** 2026-09-14

The full Phase 3 master prompt (Master Prompt 03 of 04) lives in the original build chat — it is not duplicated here.

---

## Scope

Programmatic export content (countries, cities), technical guides, comparisons, typed blog articles, AI-search readiness, and publishability gates.

Delivered in batches **A–F** per the master prompt sequence.

| Batch | Focus |
| --- | --- |
| **A** | Schema extensions, `isPublishable`, audit scripts, keyword map, AI strategy docs |
| **B** | Country page content (12 markets) |
| **C** | City pages and industrial zones |
| **D** | Guides and comparisons |
| **E** | Blog (typed TS articles, authors) |
| **F** | `llms.txt`, entity consistency, final AI-search polish |

---

## Acceptance

Phase 3 completion criteria are defined in **Section 21** of the master prompt, including:

- `npm run build` and `npm run typecheck` pass
- `npm run audit:unique` — no cross-entity long-text overlap above threshold
- `npm run audit:schema` — no forbidden JSON-LD on export routes
- Country/city pages pass `isPublishableCountry` / `isPublishableCity` before indexation
- Existing Phase 1/2 audit scripts still pass

---

## Prior phases

- [phase-1.md](./phase-1.md) — foundation, shell, content engine
- [phase-2.md](./phase-2.md) — homepage, blocks, product/solution pages
