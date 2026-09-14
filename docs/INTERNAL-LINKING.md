# Internal Linking

Internal links are the primary navigation path for procurement engineers who land on a product page from search. Every page must be reachable within three clicks from the homepage via header, footer, or a parent hub.

---

## Link registry

**File:** `src/lib/links.ts`

- Exports a typed `routes` object — use `routes.product(slug)`, `routes.exportCountry(slug)`, etc. Never hardcode path strings in components.
- **`requestQuoteUrl({ product, variant })`** — builds RFQ URLs with query params for pre-selection.
- **`whatsAppUrl(message, phone)`** — WhatsApp deep links (phone from `site.ts` when confirmed).
- **`isDraftPath(path)`** — returns whether a URL points at draft content (used by audits and `InlineLink`).
- **`getRelatedForProduct(slug)`** / **`getRelatedForSolution(slug)`** — derive related links from content relationships.

---

## Components

### `RelatedContent`

**File:** `src/components/blocks/RelatedContent.tsx`

Renders a related-content aside for **product** and **solution** pages. Pulls from content relationships only — never random links.

| Section | Source |
| --- | --- |
| Related products | `product.relatedProducts` |
| Related solutions | `product.industries` or solution overlap |
| Guides and comparisons | `comparisons` slugs on the entity |
| Export markets | Countries where `relevantProducts` or `relevantIndustries` includes the entity |

### `InlineLink`

**File:** `src/components/blocks/InlineLink.tsx`

Wraps the UI `Link` component. In development, logs a console warning when `href` points to a `draft: true` page so thin content is not linked from live pages without awareness.

---

## Linking rules (by page type)

| Page type | Must link to |
| --- | --- |
| **Product** | Its industries (solutions), applications, comparisons, at least 2 guides/comparisons when live, export hub, RFQ |
| **Solution** | 3+ products, 2+ applications, 1 comparison, 1 project (when live), RFQ |
| **Country** | Export hub, 3+ products, 2+ industries, its cities, export process, documentation |
| **City** | Its country, nearest port, 2+ products, 1 industry, RFQ |
| **Guide** | 2+ products, 1 comparison, 1 solution |
| **Comparison** | Both products compared, application where each wins, RFQ |

### Global rules

- **Minimum 8 in-body contextual links** per page (excluding header, footer, and breadcrumb).
- **Maximum 3 uses** of the same anchor text site-wide for money keywords.
- Anchor text must be descriptive and varied — never "click here", never a bare URL.
- No orphan pages: every URL reachable from header, footer, or parent hub within 3 clicks.
- Prefer linking to **live** (`draft: false`) pages from indexable content. Draft targets are acceptable in footer popular searches with dev warnings.

---

## Footer and navigation

- **Header mega menu** and **footer columns** read from `src/content/navigation.ts` and `src/content/footer.ts`.
- Adding a product to `products.ts` automatically surfaces it in the footer product column (via `getFooterData()`).
- **Popular technical searches** row: 12–16 crosslinks to real pages only — no keyword-stuffed link blocks.

---

## Audit script

```bash
npm run audit:links
```

**File:** `scripts/audit-links.ts`

Phase 1 scope: validates every href in primary navigation and footer against known slugs and static paths. Reports:

- **Errors** — broken slug references (exit 1)
- **Warnings** — draft pages linked from footer popular searches (exit 0)

Future phases may extend the script to crawl rendered HTML for orphan detection and sub-8 link counts.

---

## Checklist before publishing a page

1. Body copy includes ≥ 8 contextual internal links to live or intentional stub pages.
2. `RelatedContent` (or equivalent manual links) covers products, solutions, and export where relevant.
3. At least one conversion link (RFQ or contact) above the fold and one at page end.
4. Run `npm run audit:links` — zero errors.
5. No link to a draft page from an indexable page without deliberate reason (and dev warning acknowledged).
