# Change log

Additive Phase 1 touches made during later phases. Prefer extension over modification.

## 2026-09-15 Content depth, freshness, port/location SEO

### Docs
**Change:** Added `docs/CONTENT-QUALITY.md`, `docs/CONTENT-QA-REPORT.md`. Updated `docs/COPY-GUIDE.md` (depth audit + port rules). Updated this change log.
**Reason:** Mandatory quality floors and QA record.
**Backwards compatible:** yes

### Scripts
**File:** `scripts/audit-depth.ts`, `package.json` (`audit:depth`)
**Change:** Soft word-floor audit for products, solutions, company, export content.
**Reason:** Measure useful depth without encouraging padding.
**Backwards compatible:** yes

### Solutions / products / company / export
**Files:** `src/content/solutions.ts`, `products.ts`, `company.ts`, `export.ts`, `pages.ts`, `src/app/export/africa/page.tsx`
**Change:** Deepened thin solutions and company pages; refreshed product exportNotes with multi-port Gujarat logistics; expanded export support pages; natural Sanand/Changodar/Dahej/etc. industrial context on About/Manufacturing.
**Reason:** Content depth + freshness + local/port SEO without redesign or invented claims.
**Backwards compatible:** URLs and templates unchanged

## 2026-09-15 Prompt 5 — Content, SEO & GEO authority

### Docs
**Change:** Added `docs/PROMPT-5-AUDIT.md`, `PROMPT-5-OPPORTUNITY-MAP.md`, `PROMPT-5-CLUSTERS.md`, `PROMPT-5-BRIEFS.md`. Updated `URL-MAP.md`, `KEYWORD-MAP.md`, `AI-SEARCH-STRATEGY.md`.
**Reason:** Prompt 5 §27 strategy deliverables before/with content ship.
**Backwards compatible:** yes (docs)

### Schema / types / UI blocks
**Files:** `src/content/types.ts`, `src/config/site.ts`, `src/lib/schema.ts`, `src/content/index.ts`, `src/components/blocks/BuyerChecklist.tsx`, `BuyerScenarios.tsx`, product/solution/country/comparison page templates
**Change:** Optional `buyerChecklist`, `limitations`, `buyerScenarios` on products/solutions/countries; comparison `productC` / `optionC` / label overrides / `chooseCWhen`; Organization `alternateName`; render blocks without redesign.
**Reason:** GEO answer structure + three-way comparisons without redesign.
**Backwards compatible:** yes — new fields optional

### Hubs un-drafted
**Files:** `src/app/resources/page.tsx`, `src/app/export/africa/page.tsx`, `src/content/pages.ts`
**Change:** Live resources and Africa hubs (no HoldingPage); `draft: false`.
**Reason:** Topical authority crawl paths.
**Backwards compatible:** URLs unchanged

### Export hub refresh
**File:** `src/content/export.ts`
**Change:** India sandwich-panel export hub framing; Africa + Gulf notes; MOQ/container/manufacturer FAQs; CTA “Request export pricing”.
**Reason:** Phase B commercial authority on existing URL.
**Backwards compatible:** yes

### Products / solutions GEO copy
**Files:** `src/content/products.ts`, `src/content/solutions.ts`, `src/content/company.ts`
**Change:** Buyer checklists, limitations, scenarios; brand GLOBAL sentence on About; product comparison links to three-way.
**Reason:** Prompt 5 product/solution depth without new URLs.
**Backwards compatible:** yes

### New comparisons (12 live)
**File:** `src/content/comparisons.ts`
**Change:** `puf-vs-pir-vs-rockwool`, `manufacturer-vs-trader`, `50mm-vs-75mm-vs-100mm-puf-panels`, `ppgi-vs-ppgl-sandwich-panels`.
**Reason:** True comparison gaps only.
**Backwards compatible:** existing pairwise URLs untouched

### New + refreshed guides (20 live)
**File:** `src/content/guides.ts`
**Change:** Eight new guides (price factors, RFQ, landed cost, FM education, custom, PEB+PUF, buyers guide, import mistakes). Refresh: 20 questions, R-value, concealed vs exposed fix.
**Reason:** P0/P1 authority cluster.
**Backwards compatible:** existing guide URLs untouched

### Countries
**File:** `src/content/countries.ts`
**Change:** South Africa published; UAE + Saudi Arabia added (publish gate passed). Zimbabwe/Mauritius/DRC remain draft shells.
**Reason:** Africa completion + MENA P1 unique pages.
**Backwards compatible:** yes

### llms.txt
**Files:** `src/lib/llms.ts`, `public/llms.txt`
**Change:** Include Africa hub, resources hub, new countries/guides/comparisons.
**Reason:** AI crawler discovery.
**Backwards compatible:** yes

## 2026-09-15 Client contact decision

### File: `src/config/site.ts`
**Change:** Email `info@phoenixxsmartbuild.com` stored; `publishEmail: false`. Call and WhatsApp both use `+91 8866556879`.
**Reason:** Client: contact details must not show; only WhatsApp call and WhatsApp message.
**Backwards compatible:** yes — email still available to forms and Resend env

### File: Header, Footer, TopBar, MobileNav, StickyCtaBar, contact page, navigation.ts, footer.ts
**Change:** Call + WhatsApp CTAs live. Email not rendered. "Contact" removed from nav and footer; `/contact/` form remains. Schema omits email while `publishEmail` is false.
**Reason:** Same decision. Additions via navigation.ts / footer.ts.
**Backwards compatible:** `/contact/` URL unchanged

## 2026-09-15 Phase 4 (Batch F)

### File: `src/app/request-a-quote/page.tsx`
**Change:** Honours `?variant=` when it is a known `LeadVariant` (consultation, export, etc.).
**Reason:** Hero already linked to `?variant=consultation`; the page ignored it.
**Backwards compatible:** yes — default remains quote

### File: `src/app/api/lead/route.ts`
**Change:** Rate limit skipped when `LEAD_LOCAL_LEDGER=true` so Playwright can submit more than five times.
**Reason:** E2E coverage without raising production limits.
**Backwards compatible:** yes — production default unchanged

### File: `e2e/*`, `playwright.config.ts`
**Change:** Playwright suite for variants, dead-letter success path, selection-tool prefill, 404, robots/sitemap, sentinels, footer identity.
**Reason:** Phase 4 Section 15.
**Backwards compatible:** n/a

### File: `docs/LAUNCH-CHECKLIST.md`, `docs/RUNBOOK.md`, `docs/OPERATIONS.md`, `docs/PHASE-4-REPORT.md`
**Change:** Launch gate, incident runbook, handover procedures, Phase 4 report.
**Reason:** Phase 4 Sections 16–17, 21.
**Backwards compatible:** n/a (docs)

## 2026-09-15 Phase 4 (Batch E)

### File: `next.config.ts`
**Change:** CSP moved from Report-Only to enforce; allowlisted GTM, GA4 and Clarity origins.
**Reason:** Phase 4 Section 13 — ship with an enforced policy after the report-only period.
**Backwards compatible:** yes for first-party assets; third-party scripts already gated on consent

### File: `src/app/privacy-policy/page.tsx`
**Change:** Storage (Sheets/CRM/email/WhatsApp), 24-month retention, deletion procedure, DPDP + GDPR-style rights, third-party list, analytics cookies.
**Reason:** Phase 4 Section 13. Still marked pending legal review.
**Backwards compatible:** yes — copy only on the legal page

### File: `src/components/analytics/AnalyticsRoot.tsx`
**Change:** Consent bar is a `region`, not a `dialog` (no focus trap); labelled and described for keyboard/screen readers.
**Reason:** Phase 4 Section 14.
**Backwards compatible:** yes

### File: `src/app/api/cron/route.ts`, `src/lib/leads/spam.ts`
**Change:** Rate limit on cron (30 / 10 min). `checkRateLimit` accepts per-key max/window.
**Reason:** Phase 4 Section 13 — rate limit every API route.
**Backwards compatible:** yes — lead route still 5 / 10 min

### File: `src/app/api/lead/route.ts`
**Change:** Local ledger also writes when `LEAD_LOCAL_LEDGER=true`.
**Reason:** Playwright needs a row under `next start`.
**Backwards compatible:** yes — production default unchanged

### File: `src/lib/integrations/failTest.ts`, `index.ts`
**Change:** Optional QA adapter that always fails, so dead-letter can be proven without a live provider.
**Reason:** Phase 4 Section 15. Off unless `INTEGRATION_FAIL_TEST=true`.
**Backwards compatible:** yes

### File: `src/components/conversion/LeadForm.tsx`
**Change:** Optional "project details" control uses `text-ember-deep` (same token as `Link` / success WhatsApp).
**Reason:** axe color-contrast on `text-ember` (#E8481F on white is below 4.5:1). No new colour.
**Backwards compatible:** yes for behaviour; link is slightly darker

### File: `src/components/ui/Table.tsx`, guide and quality table wrappers
**Change:** Scrollable tables are keyboard-focusable regions (`tabIndex={0}`).
**Reason:** axe `scrollable-region-focusable`.
**Backwards compatible:** yes — visual output unchanged

### File: `src/components/blocks/HeroSlider.tsx`
**Change:** Only the active slide (plus slide 1) mounts `<Image>`. Off-slide photos were in-viewport stacked layers, so `loading="lazy"` never applied and they competed with LCP.
**Reason:** Home mobile Lighthouse was 76 / 5.7s LCP with every slide downloading.
**Backwards compatible:** yes for slide 1; later slides load when they become active

### File: `scripts/audit-a11y.ts`
**Change:** axe-core against eight templates. Footer excluded: zinc-on-graphite contrast is a Phase 1 token, not restyled here.
**Reason:** Phase 4 Section 14 vs Section 0.2 (do not change Footer).
**Backwards compatible:** n/a

### File: `docs/ARCHITECTURE.md`, `docs/ANALYTICS.md`
**Change:** Caching/revalidation; third-party 90KB budget (drop Clarity first).
**Reason:** Phase 4 Section 11.
**Backwards compatible:** n/a (docs)

## 2026-09-15 Phase 4 (Batch D)

### File: `src/lib/analytics/*`, `src/components/analytics/AnalyticsRoot.tsx`, `src/app/layout.tsx`
**Change:** Consent bar (reject is real; DNT respected); GTM/GA4/Clarity load `afterInteractive` only after grant; typed `track()` helper; scroll_75.
**Reason:** Phase 4 Section 9. Scripts must not load without consent.
**Backwards compatible:** yes — scripts no-op when IDs are empty

### File: `src/app/api/lead/route.ts`
**Change:** Fire GA4 Measurement Protocol `generate_lead` after dispatch, keyed by lead id.
**Reason:** Ad-blocked sessions still register a conversion.
**Backwards compatible:** yes — skipped when `GA4_API_SECRET` is empty

### File: `LeadForm.tsx`, `WhatsAppButton.tsx`, `StickyCtaBar.tsx`, `QuoteButton.tsx`, `CtaBand.tsx`, `LeadFormSection.tsx`, country/city pages
**Change:** form_start / form_submit / generate_lead / whatsapp_click / cta_click / call_click. Sticky bar hides when the form is on screen. Default CTA label states the outcome. Country/city forms pre-select market.
**Reason:** Phase 4 Section 10 CRO on highest-intent templates.
**Backwards compatible:** yes for form fields; CTA label is an intentional copy change on quote buttons

### File: `src/lib/experiments.ts`, `docs/ANALYTICS.md`, `docs/EXPERIMENTS.md`
**Change:** 50/50 helper; taxonomy and dashboard spec; explicit "no experiment running" until traffic exists.
**Reason:** Phase 4 Sections 9–10.
**Backwards compatible:** n/a

## 2026-09-15 Phase 4 (Batch C)

### File: `src/lib/messages/followUp.ts`, `src/lib/leads/sequence.ts`, `src/lib/leads/workingHours.ts`
**Change:** D+3 / D+7 / D+14 / D+45 follow-up copy; IST working-hours SLA maths; JSON follow-up queue with stop/touched controls.
**Reason:** Phase 4 Section 7 automation that runs without anyone logging in.
**Backwards compatible:** yes — new modules

### File: `src/app/api/cron/route.ts`
**Change:** Authenticated cron endpoint for follow-up, SLA, daily/weekly digest, stop and touched.
**Reason:** Netlify/external schedulers need a single POST/GET to hit.
**Backwards compatible:** yes — new route

### File: `src/lib/integrations/index.ts`
**Change:** Enqueue the follow-up sequence after dispatch (non-fatal if the queue write fails).
**Reason:** D0 ack is the email adapter; D+3 onwards needs a record at capture time.
**Backwards compatible:** yes

### File: `docs/SALES-SCRIPTS.md`, `docs/OPERATIONS.md`
**Change:** Phone/WhatsApp/email scripts; operations follow-up and cron SOP.
**Reason:** Phase 4 Sections 7.5 and 17.
**Backwards compatible:** n/a (docs)

## 2026-09-15 Phase 4 (Batch B)

### File: `src/lib/integrations/email.ts`, `alert.ts`, `whatsapp.ts`, `crm.ts`, `webhook.ts`
**Change:** Independent adapters behind env flags. Email (Resend: buyer ack + internal brief), alert (email + optional Telegram), WhatsApp Cloud API templates, Zoho/HubSpot CRM, signed generic webhook. Shared `withRetry` (3× exponential backoff).
**Reason:** Phase 4 Section 6 — provider-agnostic integration layer.
**Backwards compatible:** yes — all adapters default off

### File: `src/lib/integrations/index.ts`, `deadLetter.ts`
**Change:** Dispatcher runs enabled adapters independently; spam band routes only to sheets; permanent failures write a dead-letter record and raise `raiseInternalAlert`.
**Reason:** A failing WhatsApp API must never surface an error to the buyer; a lead must never be silently lost.
**Backwards compatible:** yes

### File: `src/lib/leads/config.ts`
**Change:** Routing channels include `crm` and `webhook` on every non-spam band so those adapters receive leads once enabled. Alert reserved for hot leads.
**Reason:** Record-keeping vs interrupt channels.
**Backwards compatible:** yes — adapters still no-op when disabled

### File: `docs/INTEGRATIONS.md`
**Change:** Non-developer setup for Sheets, Resend, DNS, Telegram, WhatsApp templates, webhook signature, CRM.
**Reason:** Phase 4 Section 6 documentation requirement.
**Backwards compatible:** n/a (docs)

### File: `.gitignore`
**Change:** Ignore `leads-failed.json` and local follow-up queue.
**Reason:** Dead-letter files can contain PII.
**Backwards compatible:** yes

## 2026-09-15 Phase 4 (Batch A)

### File: `src/lib/validation.ts`
**Change:** `LEAD_VARIANTS` extended with `export` and `selection-tool`. Added optional fields (`industry`, `thickness`, `temperature`, `pageTitle`, `referrer`, `landingPage`, `pagesViewed`, `selectionToolCompleted`, `marketingConsent`, `firstTouch`, `lastTouch`). `company` and `phone` moved from unconditionally required to required-by-variant via `superRefine`, with `MINIMAL_GATE_VARIANTS` exempting `datasheet`.
**Reason:** Phase 4 Section 3 requires six variants, contextual attribution and a minimally gated datasheet form. A PDF download should not demand a phone number.
**Backwards compatible:** yes for the four existing variants — every previously valid payload still validates, and `quote`/`consultation`/`contact` still require company and phone.

### File: `src/app/api/lead/route.ts`
**Change:** Extended the Phase 1 stub in place. Added content-type, origin and body-size checks, per-IP rate limiting, 60-second idempotency, `Lead` construction with scoring and routing, non-blocking integration dispatch, structured logging keyed by lead id, and a 405 `GET` handler. Response now returns `leadId`, `band` and a `delivery` field.
**Reason:** Phase 4 Section 5.
**Backwards compatible:** yes — `{ ok: true }` still returned on success and `{ ok: false, error }` on failure, so the existing client contract holds.

### File: `src/components/conversion/LeadForm.tsx`
**Change:** Added `defaultCountry` and `defaultCity` props, `export` and `selection-tool` variant copy, `thickness` and `temperature` fields inside the existing optional project-details section, blur-time validation (`mode: "onBlur"`), a dial-code hint driven by the selected country, attribution capture on submit, and a success screen that states the lead reference, the response promise and the WhatsApp fallback. POST target changed from `/api/lead` to `/api/lead/`.
**Reason:** Phase 4 Section 3 micro-UX and Section 4 attribution. The trailing slash avoids a 308 redirect on every submission under `trailingSlash: true`.
**Backwards compatible:** yes — all existing call sites pass `variant` only and render unchanged apart from the added response-time line.

### File: `.env.example`
**Change:** Restructured into commented blocks covering analytics, per-adapter enable flags, Sheets, Resend, WhatsApp Cloud API, CRM, webhook, Telegram and the cron secret. Existing keys retained.
**Reason:** Phase 4 Sections 6 and 13 require a complete, non-developer-readable env reference.
**Backwards compatible:** yes (no key renamed or removed)

## 2026-09-14 Phase 3 Batch F (blog, AI layer, sitemaps)

### File: `src/content/authors.ts`, `src/content/articles.ts`
**Change:** Company author (`phoenixx-smartbuild`) and 12 live typed blog articles with QuickAnswer, bodySections, keyTakeaways, and cross-links.
**Reason:** Phase 3 Batch F — blog without MDX.
**Backwards compatible:** yes — new modules

### File: `src/content/index.ts`, `src/content/types.ts`
**Change:** Author/Article validation, getters (`getAuthor`, `getLiveArticles`, `getArticlesByCategory`), optional `keyTakeaways` on `ArticleSchema`.
**Reason:** Wire blog into content engine.
**Backwards compatible:** yes — additive

### File: `src/app/blog/page.tsx`, `src/app/blog/[slug]/page.tsx`
**Change:** Live blog hub with category filter; article template with BlogPosting JSON-LD, author box, related grids, CTA, LeadForm.
**Reason:** Replace holding stubs.
**Backwards compatible:** yes — route replacement

### File: `src/config/site.ts`, `src/lib/schema.ts`, `src/lib/llms.ts`, `public/llms.txt`
**Change:** `canonicalDescription` set; Organization schema uses it; llms.txt generator and static file.
**Reason:** AI-search entity consistency.
**Backwards compatible:** yes

### File: `src/app/robots.ts`
**Change:** Explicit allow rules for GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, Bingbot.
**Reason:** Batch F crawler policy.
**Backwards compatible:** yes — additive rules

### File: sitemap routes (`sitemap-index.xml`, `sitemap-countries.xml`, `sitemap-cities.xml`, `sitemap-guides.xml`, `sitemap-comparisons.xml`, `export/sitemap.ts`, `resources/sitemap.ts`, `blog/sitemap.ts`)
**Change:** Split sitemap groups; publishable filters for countries/cities; live blog URLs.
**Reason:** Batch F sitemap architecture.
**Backwards compatible:** yes — index extended

### File: `scripts/audit-links.ts`, `scripts/audit-unique.ts`
**Change:** Blog slug resolution; uniqueness audit includes guides and articles.
**Reason:** Verification coverage for new content types.
**Backwards compatible:** yes

### File: `docs/PHASE-3-REPORT.md`, `docs/EDITORIAL-CALENDAR.md`, `docs/LIGHTHOUSE-PHASE3.md`
**Change:** Phase 3 completion report, 24-topic editorial calendar, Lighthouse placeholder.
**Reason:** Batch F documentation deliverables.
**Backwards compatible:** yes

## 2026-09-14 Phase 3 Batch E (part 1 — guides)

### File: `scripts/audit-links.ts`
**Change:** Resolve `/resources/guides/[slug]/` against `getAllGuides()` so live guide hub links pass the HTML link audit.
**Reason:** Guide routes were unrecognised path patterns after Batch E.
**Backwards compatible:** yes

### File: `src/components/conversion/LeadForm.tsx`, `src/components/blocks/LeadFormSection.tsx`
**Change:** Optional `defaultMessage` prop for Panel Selection Tool handoff into the lead form message field.
**Reason:** Selection tool must pre-fill engineer request without new dependencies.
**Backwards compatible:** yes — optional prop

### File: `src/app/products/[slug]/page.tsx`
**Change:** Rockwool contextual overview link retargeted from removed `puf-vs-rockwool-panels` to `rockwool-vs-glasswool-panels`.
**Reason:** Comparison slug set changed in Batch E; keep product page links live.
**Backwards compatible:** yes — link target only

### File: `src/content/guides.ts`
**Change:** Twelve publishable technical guides (`draft: false`, `updatedAt: 2026-09-14`) with `quickAnswer`, `bodySections`, `limitations`, and cross-links to products, solutions, and comparisons.
**Reason:** Phase 3 Batch E programmatic guide content for specification long-tail queries.
**Backwards compatible:** yes — new module

### File: `src/content/types.ts`
**Change:** Added `GuideInput` type alias (`z.input<typeof GuideSchema>`).
**Reason:** Typed guide seed arrays without forcing defaulted fields.
**Backwards compatible:** yes — additive export

### File: `src/content/index.ts`
**Change:** Import and validate guides; `assertUniqueSlugs`; cross-ref checks for related slugs; export `getGuide`, `getAllGuides`, `getLiveGuides`, re-export `guides`.
**Reason:** Wire guide entities into content layer following products/countries pattern.
**Backwards compatible:** yes

### File: `src/app/resources/guides/[slug]/page.tsx`, `page.tsx`
**Change:** Full guide template — PageHero, QuickAnswer, body sections, limitations, ProductGrid, SolutionGrid, related links (≥8), CtaBand, LeadFormSection; hub lists live guides; breadcrumb JSON-LD only.
**Reason:** Ship individual guide pages and hub as indexable programmatic content.
**Backwards compatible:** yes — replaces stubs

### File: `src/lib/links.ts`, `src/app/resources/sitemap.ts`
**Change:** `isDraftPath` for guide slugs; sitemap entries for live guides.
**Reason:** Metadata and discovery for guide URLs.
**Backwards compatible:** yes

### File: `docs/URL-MAP.md`
**Change:** Marked guides hub and 12 guide slugs phase-3 live.
**Reason:** Reflect Batch E part 1 ship state.
**Backwards compatible:** n/a (docs)

## 2026-09-14 Phase 3 Batch E (parts 2–3)

### File: `src/content/comparisons.ts`
**Change:** Eight live comparisons (`draft: false`) with decision tables, verdict copy, cost notes and FAQs.
**Reason:** Phase 3 Batch E comparison hub and detail pages.
**Backwards compatible:** yes — replaced stubs; product comparison slug refs updated

### File: `src/app/resources/comparisons/[slug]/page.tsx`, `page.tsx`
**Change:** Full comparison template — QuickAnswer, ComparisonTable, verdict, cost notes, FAQ schema, LeadForm.
**Reason:** Ship comparison pages with ≥8 internal links per detail page.
**Backwards compatible:** yes — replaces HoldingPage on live comparisons

### File: `src/content/faqs.ts`, `src/components/resources/FaqHubClient.tsx`, `src/app/resources/faqs/page.tsx`
**Change:** Categorised FAQs (product, technical, export, commercial, installation) with search/filter; FAQPage schema for visible items only.
**Reason:** Batch E FAQ hub expansion.
**Backwards compatible:** yes — `sharedFaqs` retained

### File: `src/content/glossary.ts`, `src/app/resources/glossary/page.tsx`
**Change:** Expanded to 56 terms; letter-index anchors and related product links.
**Reason:** Batch E glossary requirement (50+ terms).
**Backwards compatible:** yes — content only

### File: `src/lib/datasheets.ts`, `src/app/resources/datasheets/page.tsx`
**Change:** Lists only files in `public/documents/`; empty-state copy + LeadForm datasheet variant.
**Reason:** Batch E datasheets hub — no fake download buttons.
**Backwards compatible:** yes

### File: `src/lib/selection-rules.ts`, `src/components/tools/PanelSelectionTool.tsx`, panel-selection page
**Change:** Pure selection rules + client tool with aria-live, keyboard operable inputs, quote pre-fill via LeadForm.
**Reason:** Batch E panel selection at `/resources/panel-selection/`.
**Backwards compatible:** yes — URL unchanged

### File: `src/content/types.ts`, `src/content/index.ts`
**Change:** `FaqCategorySchema`, optional FAQ link fields; `getFaqCategories` / `getAllCategorizedFaqs` exports.
**Reason:** Wire categorised FAQs without breaking existing validation.
**Backwards compatible:** yes — additive

### File: `docs/URL-MAP.md`, `docs/OPEN-ITEMS.md`
**Change:** Batch E resource routes marked phase-3 live; empty documents folder logged.
**Reason:** Docs reflect ship state.
**Backwards compatible:** n/a (docs)

## 2026-09-14 Phase 3 Batch D

### File: `src/content/cities.ts`
**Change:** Full publishable content for 13 launch cities (Nairobi through Luanda) clearing `isPublishableCity` gates.
**Reason:** Phase 3 Batch D city / industrial-zone architecture with local industrial substance.
**Backwards compatible:** yes — content only

### File: `src/app/export/[country]/[city]/page.tsx`
**Change:** Gated full city template via `isPublishableCity`; Phase 2 blocks; breadcrumb + FAQ schema only.
**Reason:** Assemble city pages without LocalBusiness or doorway patterns.
**Backwards compatible:** yes — HoldingPage retained for non-publishable

### File: `src/app/export/[country]/page.tsx`
**Change:** Added publishable city links section per country.
**Reason:** Country → city internal linking once cities clear the gate.
**Backwards compatible:** yes — section renders only when cities exist

### File: `docs/URL-MAP.md`
**Change:** Marked 13 city routes phase-3 live.
**Reason:** Reflect Batch D ship state.
**Backwards compatible:** n/a (docs)

### File: `src/content/types.ts`
**Change:** Extended `ComparisonSchema` additively with `quickAnswer`, `decisionTable`, `chooseAWhen`, `chooseBWhen`, `costNotes`, related arrays and FAQs; added `ComparisonRowSchema`.
**Reason:** Prep for Batch E comparison pages without breaking existing stubs.
**Backwards compatible:** yes — all new fields optional/defaulted

## 2026-09-14 Phase 3 Batch C

### File: `src/content/countries.ts`
**Change:** Full publishable content for 12 launch countries (Kenya, Tanzania, Uganda, Rwanda, Ghana, Zambia, Mozambique, Namibia, Botswana, Angola, Ethiopia, Nigeria); SA/Zimbabwe/Mauritius/DRC remain draft stubs.
**Reason:** Phase 3 Batch C country architecture with ≥12 data points and ≥900 words each.
**Backwards compatible:** yes — content only

### File: `src/app/export/[country]/page.tsx`
**Change:** Gated full country template via `isPublishableCountry`; PageHero, QuickAnswer, SpecTable, ProductGrid, SolutionGrid, FAQ, CTA; JSON-LD breadcrumb + FAQ only (no LocalBusiness).
**Reason:** Assemble Phase 2 blocks for researched country pages.
**Backwards compatible:** yes — HoldingPage retained for non-publishable

### File: `docs/URL-MAP.md`
**Change:** Marked 12 country routes phase-3 live.
**Reason:** Reflect Batch C ship state.
**Backwards compatible:** n/a (docs)

## 2026-09-14 Phase 3 Batch B

### File: `src/content/export.ts`
**Change:** New structured copy module for export hub and five support pages (process, documentation, packaging, incoterms, lead time).
**Reason:** Phase 3 Batch B full export page rewrites with shared content pattern matching `company.ts`.
**Backwards compatible:** yes — new module

### File: `src/content/pages.ts`
**Change:** Set `draft: false` on `/export/process/`, `/export/documentation/`, `/export/packaging-and-container-loading/`; added registry entries for `/export/incoterms-and-payment-terms/` and `/export/lead-time-and-freight/`.
**Reason:** Ship full export support pages in sitemap and search index.
**Backwards compatible:** yes

### File: `src/lib/links.ts`
**Change:** Added `exportIncoterms` and `exportLeadTime` routes; extended `isDraftPath` export support slug set.
**Reason:** New export support routes must not be treated as country draft shells.
**Backwards compatible:** yes

### File: `src/content/navigation.ts`
**Change:** Export Process column — added Incoterms & Payment and Lead Time & Freight links.
**Reason:** Discoverability for new support pages from primary nav.
**Backwards compatible:** yes

### File: `src/content/footer.ts`
**Change:** `countryLinks` — added Packaging & Loading, Incoterms & Payment, Lead Time & Freight.
**Reason:** Footer export column parity with nav support pages.
**Backwards compatible:** yes

### File: `docs/URL-MAP.md`
**Change:** Updated export hub and support page statuses to phase-3 live; added incoterms and lead-time URLs.
**Reason:** URL map reflects Batch B ship state.
**Backwards compatible:** n/a (docs)

## 2026-09-14 Phase 3 Batch A

### File: `src/content/types.ts`
**Change:** Extended `CountrySchema` with optional Phase 3 fields (`climateNotes`, `temperatureRange`, `coastal`, `keyPorts`, `inlandRoutes`, `demandSectors`, `typicalProjectTypes`, `importConsiderations`, `localInstallationNotes`, `researchSources`, `quickAnswer`, `marketContext`, `specificationNotes`, `sectionOrder`, `wordCountHint`). Extended `CitySchema` with `industrialEstates`, `localIndustries`, `roadAccessNotes`, `projectProfiles`, `specificationNotes`, `quickAnswer`, `marketContext`, `faqs`, `sectionOrder`, `climateNotes`, `portRelevance`. Extended `GuideSchema` with `quickAnswer`, `bodySections`, `limitations`. Added `BodySectionSchema`, `AuthorSchema`, `ArticleSchema` for typed blog content.
**Reason:** Phase 3 programmatic pages and blog need structured fields without a CMS or MDX.
**Backwards compatible:** yes — all new fields optional with sensible defaults; existing country/city seed validates unchanged. Added `CountryInput` / `CityInput` aliases so seed arrays omit defaulted fields without TS errors.

### File: `src/content/index.ts`
**Change:** `validateContent` now separates input/output generics so `CountryInput`/`CityInput` seed arrays parse to full `Country`/`City` types.
**Reason:** Optional Zod defaults must not force empty arrays into every seed literal.
**Backwards compatible:** yes

### File: `src/lib/publishable.ts`
**Change:** Added `countCountryDataPoints`, `countCityDataPoints`, `isPublishableCountry`, `isPublishableCity` — single source of truth for indexation gates (draft, ≥12 data points, required copy fields, ≥6 FAQs, ≥1 product, ≥900 words).
**Reason:** Templates and sitemaps need a shared publishability check before country/city pages go live.
**Backwards compatible:** yes — new module, no existing consumers changed.

### File: `scripts/audit-unique.ts`
**Change:** New audit — Jaccard word-set similarity on long quoted strings across products, solutions, countries, cities; fails if different entities exceed 70% overlap.
**Reason:** Phase 3 Section 21 — prevent boilerplate duplication across programmatic pages.
**Backwards compatible:** yes (new script; skips country/city stubs until `quickAnswer` / `marketContext` present)

### File: `scripts/audit-schema.ts`
**Change:** New audit — scans `.next/server/app/**/*.html` for JSON-LD; fails on `AggregateRating`, priced `Offer`, `Review`, or `LocalBusiness` on `/export/` routes; warns on empty `FAQPage`.
**Reason:** AI-search and export schema constraints.
**Backwards compatible:** yes (exits 0 with warning if `.next` missing)

### File: `package.json`
**Change:** Added `audit:unique` and `audit:schema` scripts.
**Reason:** Wire new Phase 3 audits into CI/local checks.
**Backwards compatible:** yes

### File: `src/config/site.ts`
**Change:** Added optional `canonicalDescription` (empty until client confirms 55-word entity description).
**Reason:** Entity consistency for schema and `llms.txt` (Batch F).
**Backwards compatible:** yes — empty string; existing `confirmed()` patterns unaffected.

### File: `docs/prompts/phase-3.md`
**Change:** Phase 3 pointer doc with batches A–F and Section 21 acceptance criteria.
**Reason:** Session continuity across Phase 3 batches.
**Backwards compatible:** n/a (docs)

### File: `docs/KEYWORD-MAP.md`
**Change:** Keyword table for homepage, 10 products, 9 solutions, export hub, 12 planned countries, 3 comparisons.
**Reason:** One primary keyword per URL for copy and internal linking.
**Backwards compatible:** n/a (docs)

### File: `docs/AI-SEARCH-STRATEGY.md`
**Change:** Brief AI-search strategy — QuickAnswer, entity consistency, llms.txt planned Batch F, crawler policy, no LocalBusiness on export.
**Reason:** Phase 3 AI-search readiness documentation.
**Backwards compatible:** n/a (docs)

### File: `docs/ARCHITECTURE.md`
**Change:** Updated content architecture note — typed blog (no MDX), `publishable.ts`, new audit scripts.
**Reason:** Keep architecture doc aligned with Phase 3 Batch A.
**Backwards compatible:** n/a (docs)

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
