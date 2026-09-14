# Architecture

Technical decisions for PHOENIXX SMARTBUILD Phase 1. Harmless implementation choices not listed here were made to keep the build passing and are noted only when they affect later phases.

---

## Stack

| Layer | Choice | Notes |
| --- | --- | --- |
| Framework | Next.js **16.3.5** (App Router) | Turbopack default in dev; `params` / `searchParams` are Promises — always `await` |
| UI | React **19** | Server Components by default; client islands for forms and interactive nav |
| Language | TypeScript **strict** | Path alias `@/*` → `src/*` |
| Styling | Tailwind CSS **4** (CSS-first) | Design tokens in `src/styles/globals.css` via `@theme inline`; no separate `tailwind.config` |
| Content | Typed TS in `src/content/` | Zod schemas in `types.ts`; validated at module load — invalid content fails the build |
| Forms | React Hook Form + Zod | Shared validation client and server |
| Icons | **lucide-react** only | No UI kit or component library |
| Deployment | **Netlify** | `@netlify/plugin-nextjs`; Node **22** (see `netlify.toml`) — client choice, not Vercel |

---

## Routing and URLs

- **`trailingSlash: true`** in `next.config.ts` — all internal links and canonicals use trailing slashes.
- Lowercase, hyphenated slugs; no dates in paths; no `/index` URLs.
- `redirects()` scaffold in `next.config.ts` for legacy paths (e.g. `/products/puf` → `/products/puf-panels/`).
- Route handlers: `POST /api/lead` (Phase 1 stub — validate, log, no provider).

---

## Content architecture

- **No CMS.** All entities live as typed arrays in `src/content/*.ts`.
- **Build-time validation:** `src/content/index.ts` parses every entity with Zod and asserts cross-reference integrity (product slugs, country → city links, etc.).
- **Page registry:** `src/content/pages.ts` holds holding-page metadata for hub and static routes not driven by a single entity.
- **`draft: true`** on any entity or page entry triggers:
  - `robots: noindex,follow` via `buildMetadata({ draft: true })`
  - Exclusion from section sitemaps and the core sitemap filter
- **Articles:** Typed TS content (`ArticleSchema`, `AuthorSchema` in `types.ts`) — no MDX. Blog entities land in Batch E.
- **Publishability:** `src/lib/publishable.ts` — `isPublishableCountry()` / `isPublishableCity()` gate indexation (data points, copy depth, FAQs, word count). Used by templates and sitemaps in later batches.

---

## Single source of truth

| File | Purpose |
| --- | --- |
| `src/config/site.ts` | Company facts — contact, address, registrations, social, claims |
| `src/config/tokens.ts` | Design tokens (mirrored in CSS) |
| `src/config/seo.ts` | Site name, locale, default OG behaviour |
| `src/lib/links.ts` | Typed route helpers — no hardcoded paths in components |
| `src/lib/confirmed.ts` | `[CONFIRM]` / `VERIFY_REQUIRED` sentinel handling |

Sentinel values must never reach the DOM. Components call `confirmed()` or `isConfirmed()` before rendering `site.ts` fields. Dev builds throw via `assertConfirmed()` if a sentinel slips through.

---

## SEO infrastructure

- **`src/lib/metadata.ts`** — `buildMetadata()` sets title, description, canonical, hreflang scaffold (`en`, `x-default`), Open Graph, Twitter card, and draft/noindex.
- **`src/lib/schema.ts`** — JSON-LD helpers; only emit data visible on the page.
- **Sitemaps:** nested route sitemaps under `/products/`, `/solutions/`, `/export/`, `/resources/`, `/blog/` plus root `/sitemap.xml` for core/legal/conversion pages.
- **`/sitemap-index.xml`** — custom route handler (`src/app/sitemap-index.xml/route.ts`) because Next 16 `generateSitemaps` emits nested sitemaps without an index document in the shape this project needs.
- **`robots.ts`** — allows `/`, disallows `/api/` and `/_next/`, points to sitemap index.

---

## Linting and quality

- **`next lint` removed in Next 16.** Use `npm run lint` → `eslint .` with `eslint-config-next`.
- Audit scripts: `audit:links`, `audit:copy`, `audit:unique`, `audit:schema`, `audit:open-items` (see `package.json`).

---

## Design system

- **Palette:** ember/graphite industrial tokens from the brief (`src/config/tokens.ts`). Logo not yet supplied — palette unchanged; update tokens when logo arrives.
- **Fonts:** Archivo (display), IBM Plex Sans (body/UI), IBM Plex Mono (spec tables only) via `next/font/google` in root layout.
- **Layout:** 1280px container, 12-column grid, section padding owned by `<Section>` component.
- **Anti-template rules:** no gradient washes, no uniform card shadows, minimal motion, `prefers-reduced-motion` respected.

---

## Lead capture (Phase 1 vs Phase 4)

- `LeadForm` + `POST /api/lead` validate and log submissions in dev.
- Provider integration (email webhook, Resend, CRM) deferred to **Phase 4** — env vars stubbed in `.env.example`.
- `QuoteButton` and WhatsApp CTAs pre-fill context from the current page.

---

## Security baseline

Security headers in `next.config.ts`: CSP (report-only), HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options`.

---

## Key directories

```
src/
├── app/           # App Router pages, sitemaps, API routes
├── components/    # layout/, ui/, blocks/, seo/, conversion/
├── content/       # Typed content + Zod validation
├── config/        # site, tokens, seo
├── lib/           # metadata, schema, links, slug, confirmed, sitemap
└── styles/        # globals.css (@theme)
docs/              # Project documentation (this folder)
scripts/           # audit:links, audit:copy, audit:unique, audit:schema, generate-open-items
```

---

## Deployment (Netlify)

1. Connect the Git repository in Netlify.
2. Build command: `npm run build` (set in `netlify.toml`).
3. Node version: **22** (`[build.environment]` in `netlify.toml`).
4. `@netlify/plugin-nextjs` handles App Router, route handlers, and image optimisation.
5. Set environment variables from `.env.example` in the Netlify UI before Phase 4 integrations go live.
