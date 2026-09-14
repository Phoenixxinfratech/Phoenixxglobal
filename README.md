# PHOENIXX SMARTBUILD

Website for NXT Phoenixx SmartBuild LLP — insulated sandwich panels and pre-engineered buildings manufactured in Ahmedabad and exported to Africa and international markets.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Netlify

---

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server (Turbopack) |
| `npm run build` | Production build (runs Zod content validation) |
| `npm run start` | Serve production build locally |
| `npm run lint` | ESLint (Next 16 — no `next lint`) |
| `npm run typecheck` | TypeScript strict check |
| `npm run audit:links` | Validate nav/footer hrefs against content slugs |
| `npm run audit:copy` | Fail on banned marketing words |
| `npm run audit:open-items` | Regenerate sentinel rows in `docs/OPEN-ITEMS.md` |

---

## Environment variables

Copy `.env.example` to `.env.local` and fill in values:

| Variable | Phase | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | 1 | Canonical base URL (e.g. `https://phoenixxglobal.com`) |
| `NEXT_PUBLIC_GA4_MEASUREMENT_ID` | 4 | Google Analytics |
| `NEXT_PUBLIC_GTM_ID` | 4 | Google Tag Manager |
| `LEAD_WEBHOOK_URL` | 4 | Lead delivery webhook |
| `RESEND_API_KEY` | 4 | Transactional email |
| `LEAD_NOTIFY_EMAIL` | 4 | Internal lead notification |
| `CRM_API_KEY` | 4 | Optional CRM integration |
| `CRM_PIPELINE_ID` | 4 | Optional CRM pipeline |

Phase 1 runs with `NEXT_PUBLIC_SITE_URL` only. Leave Phase 4 variables empty until integrations are wired.

---

## Deploy to Netlify

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. In Netlify: **Add new site → Import an existing project** and connect the repo.
3. Build settings are read from `netlify.toml`:
   - Build command: `npm run build`
   - Node version: **22**
   - Plugin: `@netlify/plugin-nextjs` (installs automatically from config)
4. Set `NEXT_PUBLIC_SITE_URL` to your production domain in **Site configuration → Environment variables**.
5. Deploy. The plugin handles App Router, server routes, and image optimisation.

Do not use static export — the site requires the Netlify Next.js runtime for API routes and dynamic rendering.

---

## Project phases

| Phase | Scope |
| --- | --- |
| **1** (current) | Foundation, design system, global shell, content engine, SEO infrastructure, route stubs, lead form stub, docs |
| **2** | Homepage visual system, full product/solution pages, core company pages |
| **3** | Country/city programmatic SEO, guides, comparisons, blog (MDX) |
| **4** | Analytics, CRM/email/WhatsApp lead delivery, panel selection tool |

See `docs/prompts/phase-1.md` for Phase 1 acceptance criteria and `docs/URL-MAP.md` for every route and its status.

---

## Documentation

| Doc | Contents |
| --- | --- |
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) | Stack, routing, content, SEO, deployment decisions |
| [`docs/CONTENT-MODEL.md`](docs/CONTENT-MODEL.md) | Entity fields, ownership, seed status |
| [`docs/URL-MAP.md`](docs/URL-MAP.md) | Complete URL list with phase status |
| [`docs/INTERNAL-LINKING.md`](docs/INTERNAL-LINKING.md) | Linking rules, `lib/links.ts`, audits |
| [`docs/COPY-GUIDE.md`](docs/COPY-GUIDE.md) | Voice, banned words, truth rules |
| [`docs/SEO-CHECKLIST.md`](docs/SEO-CHECKLIST.md) | Per-page publish checklist |
| [`docs/OPEN-ITEMS.md`](docs/OPEN-ITEMS.md) | Unverified facts awaiting client input |

---

## Key paths

```
src/config/site.ts      Company facts (single source of truth)
src/content/            Typed content + Zod validation
src/lib/links.ts        Route helpers — no hardcoded URLs
src/lib/confirmed.ts    [CONFIRM] / VERIFY_REQUIRED handling
docs/                   Project documentation
```

Company facts marked `[CONFIRM]` or `VERIFY_REQUIRED` in `site.ts` are hidden in the UI until the client supplies verified values. See `docs/OPEN-ITEMS.md`.
