/**
 * Link audit — Phase 1: nav/footer slug validation.
 * Phase 2: rendered HTML crawl (.next/server/app) for broken links,
 * orphans, under-linked live pages, and anchor overuse.
 *
 * Exit 1: broken slug refs, broken HTML links, under-linked live pages,
 *         anchor overuse (>3 identical anchor texts in <main> site-wide)
 * Exit 0: pass (orphan warnings OK when footer covers them)
 */
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import {
  getAllComparisons,
  getAllProducts,
  getAllSolutions,
  getAllCountries,
  getAllCities,
  getAllGuides,
} from "../src/content";
import { getFooterData, footerPopularSearches } from "../src/content/footer";
import { pages } from "../src/content/pages";
import { primaryNav } from "../src/content/navigation";
import { isDraftPath } from "../src/lib/links";

const ROOT = path.resolve(import.meta.dirname, "..");
const HTML_APP_DIR = path.join(ROOT, ".next/server/app");

type LinkRef = { label: string; href: string; source: string };

const productSlugs = new Set(getAllProducts().map((p) => p.slug));
const solutionSlugs = new Set(getAllSolutions().map((s) => s.slug));
const countrySlugs = new Set(getAllCountries().map((c) => c.slug));
const cityByPath = new Set(
  getAllCities().map((c) => `/export/${c.countrySlug}/${c.slug}/`),
);
const comparisonSlugs = new Set(getAllComparisons().map((c) => c.slug));
const guideSlugs = new Set(getAllGuides().map((g) => g.slug));
const pagePaths = new Set(pages.map((p) => p.path));

/** Live pages exempt from the ≥8 in-body link rule (legal / utility). */
const UNDERLINK_EXEMPT = new Set([
  "/privacy-policy/",
  "/terms/",
  "/sitemap/",
  "/resources/faqs/",
  "/resources/glossary/",
]);

/** Chrome anchors that are structural, not money keywords. */
const ANCHOR_ALLOWLIST = new Set([
  "home",
  "products",
  "solutions",
  "export",
  "resources",
  "company",
  "contact",
  "about",
  "request a quote",
  "get quote",
  "get a quote",
  "request a quotation",
  "book a consultation",
  "whatsapp",
  "request datasheet",
  "download datasheet",
  "read more",
  "view products",
  "explore panel range",
]);

const STATIC_PATHS = new Set([
  "/",
  "/about/",
  "/contact/",
  "/request-a-quote/",
  "/products/",
  "/solutions/",
  "/export/",
  "/export/africa/",
  "/export/process/",
  "/export/documentation/",
  "/export/packaging-and-container-loading/",
  "/resources/",
  "/resources/guides/",
  "/resources/comparisons/",
  "/resources/faqs/",
  "/resources/glossary/",
  "/resources/datasheets/",
  "/resources/panel-selection/",
  "/blog/",
  "/manufacturing/",
  "/quality-and-testing/",
  "/projects/",
  "/careers/",
  "/privacy/",
  "/privacy-policy/",
  "/terms/",
  "/sitemap/",
  "/applications/",
  "/cities/",
]);

const MIN_MAIN_LINKS = 8;
const MAX_ANCHOR_REUSE = 3;

function normalizeHref(href: string): string {
  const withoutQuery = href.split("?")[0]?.split("#")[0] ?? href;
  if (withoutQuery === "/") return "/";
  return withoutQuery.endsWith("/") ? withoutQuery : `${withoutQuery}/`;
}

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function stripTags(html: string): string {
  return decodeHtmlEntities(html.replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();
}

function isInternalHref(href: string): boolean {
  const trimmed = href.trim();
  if (!trimmed || trimmed.startsWith("#")) return false;
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://") || trimmed.startsWith("mailto:") || trimmed.startsWith("tel:")) {
    return false;
  }
  return trimmed.startsWith("/") || !trimmed.includes("://");
}

function resolveInternalHref(href: string, fromRoute: string): string {
  const decoded = decodeHtmlEntities(href.trim());
  if (decoded.startsWith("/")) {
    return normalizeHref(decoded);
  }
  const base = fromRoute === "/" ? "/" : fromRoute;
  const joined = path.posix.normalize(path.posix.join(base, decoded));
  return normalizeHref(joined.startsWith("/") ? joined : `/${joined}`);
}

function htmlFileToRoute(filePath: string, appDir: string): string {
  const rel = path.relative(appDir, filePath).replace(/\\/g, "/");
  if (rel === "index.html") return "/";
  const withoutExt = rel.replace(/\.html$/, "");
  return normalizeHref(`/${withoutExt}`);
}

function extractMainHtml(html: string): string {
  const match = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);
  let main = match?.[1] ?? "";
  // Breadcrumbs are structural — exclude from in-body link / anchor audits
  main = main.replace(
    /<nav\b[^>]*aria-label="Breadcrumb"[^>]*>[\s\S]*?<\/nav>/gi,
    "",
  );
  return main;
}

type ExtractedLink = { href: string; anchor: string };

function extractLinks(html: string, fromRoute: string): ExtractedLink[] {
  const links: ExtractedLink[] = [];
  const re = /<a\b[^>]*\bhref="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
  let match: RegExpExecArray | null;
  while ((match = re.exec(html)) !== null) {
    const rawHref = match[1]!;
    if (!isInternalHref(rawHref)) continue;
    links.push({
      href: resolveInternalHref(rawHref, fromRoute),
      anchor: stripTags(match[2]!),
    });
  }
  return links;
}

function collectNavLinks(): LinkRef[] {
  const links: LinkRef[] = [];

  function add(link: { label: string; href: string }, source: string) {
    links.push({ ...link, source });
  }

  for (const group of primaryNav) {
    add({ label: group.label, href: group.href }, `nav:${group.label}`);
    if (group.promo) {
      add(
        { label: group.promo.title, href: group.promo.href },
        `nav:${group.label}:promo`,
      );
    }
    for (const column of group.columns ?? []) {
      for (const link of column.links) {
        add(link, `nav:${group.label}:${column.title}`);
      }
    }
    for (const link of group.links ?? []) {
      add(link, `nav:${group.label}`);
    }
  }

  return links;
}

function buildKnownRoutes(): Set<string> {
  const routes = new Set<string>([...STATIC_PATHS, ...pagePaths]);

  for (const slug of productSlugs) {
    routes.add(`/products/${slug}/`);
  }
  for (const slug of solutionSlugs) {
    routes.add(`/solutions/${slug}/`);
  }
  for (const slug of countrySlugs) {
    routes.add(`/export/${slug}/`);
  }
  for (const cityPath of cityByPath) {
    routes.add(cityPath);
  }

  return routes;
}

function resolveHref(href: string): { ok: boolean; reason?: string } {
  const pathNorm = normalizeHref(href);

  if (STATIC_PATHS.has(pathNorm) || pagePaths.has(pathNorm)) {
    return { ok: true };
  }

  const productMatch = pathNorm.match(/^\/products\/([^/]+)\/$/);
  if (productMatch) {
    const slug = productMatch[1]!;
    if (!productSlugs.has(slug)) {
      return { ok: false, reason: `unknown product slug "${slug}"` };
    }
    return { ok: true };
  }

  const solutionMatch = pathNorm.match(/^\/solutions\/([^/]+)\/$/);
  if (solutionMatch) {
    const slug = solutionMatch[1]!;
    if (!solutionSlugs.has(slug)) {
      return { ok: false, reason: `unknown solution slug "${slug}"` };
    }
    return { ok: true };
  }

  const exportMatch = pathNorm.match(/^\/export\/([^/]+)\/$/);
  if (exportMatch) {
    const slug = exportMatch[1]!;
    const staticExportSlugs = new Set([
      "africa",
      "process",
      "documentation",
      "packaging-and-container-loading",
    ]);
    if (staticExportSlugs.has(slug)) {
      return { ok: true };
    }
    if (!countrySlugs.has(slug)) {
      return { ok: false, reason: `unknown country slug "${slug}"` };
    }
    return { ok: true };
  }

  const comparisonMatch = pathNorm.match(/^\/resources\/comparisons\/([^/]+)\/$/);
  if (comparisonMatch) {
    const slug = comparisonMatch[1]!;
    if (!comparisonSlugs.has(slug)) {
      return { ok: false, reason: `unknown comparison slug "${slug}"` };
    }
    return { ok: true };
  }

  const guideMatch = pathNorm.match(/^\/resources\/guides\/([^/]+)\/$/);
  if (guideMatch) {
    const slug = guideMatch[1]!;
    if (!guideSlugs.has(slug)) {
      return { ok: false, reason: `unknown guide slug "${slug}"` };
    }
    return { ok: true };
  }

  if (pathNorm.match(/^\/resources\/glossary\/([^/]+)\/$/)) {
    return { ok: true };
  }

  if (pathNorm.match(/^\/blog\/([^/]+)\/$/)) {
    return { ok: true };
  }

  const cityMatch = pathNorm.match(/^\/export\/([^/]+)\/([^/]+)\/$/);
  if (cityMatch) {
    const candidate = `/export/${cityMatch[1]}/${cityMatch[2]}/`;
    if (cityByPath.has(candidate)) {
      return { ok: true };
    }
    return { ok: false, reason: `unknown city path "${candidate}"` };
  }

  return { ok: false, reason: "unrecognised path pattern" };
}

function isKnownRoute(href: string, knownRoutes: Set<string>): boolean {
  return resolveHref(href).ok || knownRoutes.has(normalizeHref(href));
}

function isLivePage(route: string): boolean {
  if (isDraftPath(route)) return false;
  const page = pages.find((p) => p.path === route);
  if (page) return !page.draft;
  return false;
}

function orphanCandidates(): Set<string> {
  const candidates = new Set<string>(["/products/", "/solutions/"]);

  for (const product of getAllProducts()) {
    if (!product.draft) {
      candidates.add(`/products/${product.slug}/`);
    }
  }
  for (const solution of getAllSolutions()) {
    if (!solution.draft) {
      candidates.add(`/solutions/${solution.slug}/`);
    }
  }

  const home = pages.find((p) => p.path === "/");
  if (home && !home.draft) {
    candidates.add("/");
  }

  return candidates;
}

async function walkHtmlFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkHtmlFiles(full)));
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      files.push(full);
    }
  }

  return files;
}

function runPhase1(): {
  slugPassFailed: boolean;
  draftWarnings: LinkRef[];
  navFooterHrefs: Set<string>;
} {
  const footer = getFooterData();
  const allLinks: LinkRef[] = [
    ...collectNavLinks(),
    ...footer.productLinks.map((l) => ({ ...l, source: "footer:products" })),
    ...footer.solutionLinks.map((l) => ({ ...l, source: "footer:solutions" })),
    ...footer.countryLinks.map((l) => ({ ...l, source: "footer:export" })),
    ...footer.resourceLinks.map((l) => ({ ...l, source: "footer:resources" })),
    ...footerPopularSearches.map((l) => ({
      ...l,
      source: "footer:popular-searches",
    })),
  ];

  const broken: Array<LinkRef & { reason: string }> = [];
  const draftWarnings: LinkRef[] = [];
  const seen = new Set<string>();
  const navFooterHrefs = new Set<string>();

  for (const link of allLinks) {
    const key = `${link.source}::${link.href}`;
    if (seen.has(key)) continue;
    seen.add(key);
    navFooterHrefs.add(normalizeHref(link.href));

    const result = resolveHref(link.href);
    if (!result.ok) {
      broken.push({ ...link, reason: result.reason ?? "unknown error" });
      continue;
    }

    if (
      link.source === "footer:popular-searches" &&
      isDraftPath(link.href)
    ) {
      draftWarnings.push(link);
    }
  }

  console.log("=== Link audit — Phase 1 (nav/footer slugs) ===\n");
  console.log(`Checked ${seen.size} unique hrefs from footer and navigation.\n`);

  if (draftWarnings.length) {
    console.log(
      `Warnings — draft pages linked from popular searches (${draftWarnings.length}):`,
    );
    for (const w of draftWarnings) {
      console.log(`  • ${w.label} → ${w.href}`);
    }
    console.log("");
  }

  if (broken.length) {
    console.error(`Errors — broken slug references (${broken.length}):`);
    for (const b of broken) {
      console.error(`  • [${b.source}] ${b.label} → ${b.href} (${b.reason})`);
    }
    console.log("");
    return { slugPassFailed: true, draftWarnings, navFooterHrefs };
  }

  console.log("All footer and nav hrefs resolve to known slugs.");
  if (draftWarnings.length) {
    console.log(
      `${draftWarnings.length} draft link(s) flagged as warnings (non-fatal).`,
    );
  }
  console.log("");

  return { slugPassFailed: false, draftWarnings, navFooterHrefs };
}

async function runPhase2(navFooterHrefs: Set<string>): Promise<boolean> {
  let appDirStat;
  try {
    appDirStat = await stat(HTML_APP_DIR);
  } catch {
    console.warn("=== Link audit — Phase 2 (rendered HTML) ===\n");
    console.warn(
      "Warning: .next/server/app/ not found — run `npm run build` first. Skipping HTML pass.\n",
    );
    return false;
  }

  if (!appDirStat.isDirectory()) {
    console.warn("=== Link audit — Phase 2 (rendered HTML) ===\n");
    console.warn(
      "Warning: .next/server/app/ is not a directory — run `npm run build` first. Skipping HTML pass.\n",
    );
    return false;
  }

  const htmlFiles = await walkHtmlFiles(HTML_APP_DIR);
  const knownRoutes = buildKnownRoutes();
  const inbound = new Set<string>(navFooterHrefs);
  const mainAnchorCounts = new Map<string, number>();
  const underLinked: Array<{ route: string; count: number }> = [];
  const brokenHtml: Array<{ from: string; href: string; anchor: string }> = [];

  console.log("=== Link audit — Phase 2 (rendered HTML) ===\n");
  console.log(`Scanned ${htmlFiles.length} HTML files under .next/server/app/.\n`);

  for (const file of htmlFiles) {
    const html = await readFile(file, "utf8");
    const route = htmlFileToRoute(file, HTML_APP_DIR);
    const mainHtml = extractMainHtml(html);
    const mainLinks = extractLinks(mainHtml, route);
    // Anchor-overuse applies to in-body prose only — not product grids / related lists
    const proseHtml = (mainHtml.match(/<p\b[^>]*>[\s\S]*?<\/p>/gi) || []).join("\n");
    const proseLinks = extractLinks(proseHtml, route);
    const uniqueMainTargets = new Set<string>();
    const routeIsLive = isLivePage(route);

    for (const link of mainLinks) {
      inbound.add(link.href);
      uniqueMainTargets.add(link.href);

      if (!isKnownRoute(link.href, knownRoutes)) {
        brokenHtml.push({ from: route, href: link.href, anchor: link.anchor });
      }
    }

    for (const link of proseLinks) {
      if (routeIsLive && link.anchor) {
        const key = link.anchor.toLowerCase().trim();
        if (!ANCHOR_ALLOWLIST.has(key)) {
          mainAnchorCounts.set(key, (mainAnchorCounts.get(key) ?? 0) + 1);
        }
      }
    }

    if (
      routeIsLive &&
      !UNDERLINK_EXEMPT.has(route) &&
      uniqueMainTargets.size < MIN_MAIN_LINKS
    ) {
      underLinked.push({ route, count: uniqueMainTargets.size });
    }
  }

  const orphanWarnings: string[] = [];
  for (const candidate of orphanCandidates()) {
    if (!inbound.has(candidate)) {
      orphanWarnings.push(candidate);
    }
  }

  const anchorOveruse = [...mainAnchorCounts.entries()]
    .filter(([, count]) => count > MAX_ANCHOR_REUSE)
    .sort((a, b) => b[1] - a[1]);

  let phase2Failed = false;

  if (brokenHtml.length) {
    phase2Failed = true;
    console.error(`Errors — broken internal links in <main> (${brokenHtml.length}):`);
    for (const b of brokenHtml.slice(0, 30)) {
      console.error(
        `  • ${b.from} → ${b.href}${b.anchor ? ` (“${b.anchor.slice(0, 60)}”)` : ""}`,
      );
    }
    if (brokenHtml.length > 30) {
      console.error(`  … and ${brokenHtml.length - 30} more`);
    }
    console.log("");
  } else {
    console.log("No broken internal links in rendered <main> content.");
  }

  if (underLinked.length) {
    phase2Failed = true;
    console.error(
      `Errors — under-linked live pages (< ${MIN_MAIN_LINKS} unique <main> links):`,
    );
    for (const u of underLinked.sort((a, b) => a.count - b.count)) {
      console.error(`  • ${u.route} — ${u.count} unique internal link(s)`);
    }
    console.log("");
  } else {
    console.log(
      `All live pages have ≥ ${MIN_MAIN_LINKS} unique internal links in <main>.`,
    );
  }

  if (anchorOveruse.length) {
    phase2Failed = true;
    console.error(
      `Errors — anchor text overuse (> ${MAX_ANCHOR_REUSE} in <main> site-wide):`,
    );
    for (const [anchor, count] of anchorOveruse.slice(0, 20)) {
      console.error(`  • “${anchor}” — ${count}×`);
    }
    console.log("");
  } else {
    console.log(
      `No anchor text reused more than ${MAX_ANCHOR_REUSE} times in <main>.`,
    );
  }

  if (orphanWarnings.length) {
    console.log(
      `Warnings — orphan candidates with no inbound from nav, footer, or <main> (${orphanWarnings.length}):`,
    );
    for (const route of orphanWarnings.sort()) {
      console.log(`  • ${route}`);
    }
    console.log("");
  } else {
    console.log(
      "No orphan warnings — all tracked live hubs/pages have inbound links.",
    );
  }

  console.log("");
  return phase2Failed;
}

async function main() {
  const { slugPassFailed, navFooterHrefs } = runPhase1();
  const htmlPassFailed = await runPhase2(navFooterHrefs);

  console.log("=== Summary ===");
  if (slugPassFailed) {
    console.error("FAIL — Phase 1 slug validation errors.");
  } else {
    console.log("PASS — Phase 1 nav/footer slug validation.");
  }

  try {
    await stat(HTML_APP_DIR);
    if (htmlPassFailed) {
      console.error("FAIL — Phase 2 rendered HTML link checks.");
    } else {
      console.log("PASS — Phase 2 rendered HTML link checks.");
    }
  } catch {
    console.log("SKIP — Phase 2 (no build output).");
  }

  if (slugPassFailed || htmlPassFailed) {
    process.exit(1);
  }
  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
