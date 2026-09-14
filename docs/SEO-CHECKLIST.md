# SEO Publish Checklist

Run this checklist before setting `draft: false` on any page or entity. A page that fails any critical item stays `noindex`.

---

## Metadata

- [ ] **Title** — unique, primary intent first, `| PHOENIXX SMARTBUILD` or `| PHOENIXX` suffix; **≤ 60 characters** preferred (schema allows up to 70 in content model).
- [ ] **Meta description** — 140–158 characters; specific benefit + soft CTA; hand-written (not template concatenation).
- [ ] **Canonical URL** — absolute, trailing slash, matches `site.domain` + path via `buildMetadata()`.
- [ ] **`draft` flag** — `false` only when the page is ready to index; confirm `robots` shows `index, follow`.
- [ ] **Open Graph / Twitter** — title, description, and OG image populated (default or route-specific).
- [ ] **hreflang** — `en` and `x-default` self-reference present (scaffold for future locales).

---

## Content quality

- [ ] **One `h1`** per page, matches intent, not stuffed with keywords.
- [ ] **Heading order** — logical `h2` → `h3` hierarchy; no skipped levels.
- [ ] **No invented claims** — capacities, certifications, client names, export history, or test results.
- [ ] **Spec rows** — `verified: true` only with documentation; unverified rows show the standard disclaimer.
- [ ] **Practitioner line** — at least one honest caveat or trade-off (see `COPY-GUIDE.md`).
- [ ] **Copy audit** — `npm run audit:copy` passes.

---

## Structured data

- [ ] **JSON-LD matches visible content** — no `AggregateRating`, fake `offers.price`, or certifications not on the page.
- [ ] **BreadcrumbList** on all non-home pages.
- [ ] **FAQPage** only where FAQs are visible in the DOM.
- [ ] **Product / Service** schema only on pages with full product content (Phase 2+).
- [ ] **No LocalBusiness** on export country pages.
- [ ] **Organization** in root layout — uses `site.canonicalDescription`; GSTIN/IEC identifiers only when confirmed in `site.ts`.
- [ ] **BlogPosting** on article pages — `datePublished`, `dateModified`, company `Person` author, publisher `Organization`.

---

## Internal linking

- [ ] **≥ 8 contextual internal links** in body copy (not counting header/footer/breadcrumbs).
- [ ] **Related content block** present on product and solution pages where relationships exist.
- [ ] **Conversion path** — RFQ or contact CTA above the fold and at page end.
- [ ] **Link audit** — `npm run audit:links` passes (zero broken slugs).
- [ ] **Anchor text** — descriptive, varied; no more than 3 identical money-keyword anchors site-wide.

---

## Images

- [ ] All images via `next/image` with **width**, **height**, and **`sizes`** set.
- [ ] **Alt text** — specific and descriptive (e.g. "PUF wall panel cam-lock joint detail, 100 mm thickness").
- [ ] **`priority`** only on the first hero image; all others lazy-loaded.
- [ ] Placeholder images listed in `OPEN-ITEMS.md` until client photography arrives.

---

## Sitemap and robots

- [ ] Page appears in the correct section sitemap when `draft: false` (see sitemap index groups: core, products, solutions, export, countries, cities, resources, guides, comparisons, blog).
- [ ] `updatedAt` set on the content entity or pages registry entry for accurate `lastModified`.
- [ ] Draft pages **excluded** from sitemaps and carry `noindex`.

---

## Legal and sensitive pages

- [ ] Privacy Policy and Terms marked as pending legal review in `OPEN-ITEMS.md` until client sign-off.
- [ ] Contact details, registrations, and social URLs confirmed before rendering in footer schema.

---

## Pre-merge commands

```bash
npm run typecheck
npm run lint
npm run build
npm run audit:links
npm run audit:copy
```

Fix every error before setting `draft: false` and deploying.
