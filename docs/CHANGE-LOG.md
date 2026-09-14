# Change log

Additive Phase 1 touches made during later phases. Prefer extension over modification.

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
