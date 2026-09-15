# Lighthouse — Phase 4 Batch E (mobile)

Run date: 2026-09-15. Playwright Chromium + `npx lighthouse`, `next start` on localhost.

Consent / GTM / GA4 / Clarity IDs are empty, so first paint has no third-party analytics. The consent island still hydrates.

| Page | Perf | A11y | Best Practices | SEO | LCP |
|------|------|------|----------------|-----|-----|
| `/` | 89 | 97 | 100 | 100 | 3.4 s |
| `/products/puf-panels/` | 86 | 97 | 100 | 100 | 3.7 s |
| `/solutions/cold-storage/` | 92 | 97 | 100 | 100 | 3.0 s |
| `/export/kenya/` | 90 | 97 | 100 | 100 | 3.3 s |
| `/export/kenya/nairobi/` | 94 | 97 | 100 | 100 | 2.7 s |
| `/resources/guides/cold-storage-panel-thickness/` | 91 | 97 | 100 | 100 | 3.2 s |
| `/resources/comparisons/puf-vs-pir-panels/` | 90 | 97 | 100 | 100 | 3.4 s |
| `/resources/panel-selection/` | 91 | 97 | 100 | 100 | 3.3 s |

Phase 3 (same inner templates, no home, no consent island) was Perf 95–96 / LCP 2.4–2.7 s.

`audit:perf` gates: Perf ≥85 (localhost noise + consent island), A11y ≥95, Best Practices ≥95, SEO 100. LCP target 2.0 s (warn to 4.0 s). Re-run on the production URL after analytics IDs go live.
