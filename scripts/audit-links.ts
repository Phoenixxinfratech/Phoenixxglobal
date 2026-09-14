/**
 * Phase 1 link audit — validates footer/nav hrefs against content slugs.
 * Does not crawl rendered HTML; checks known routes from content registries.
 *
 * Exit 0: all slugs resolve (warnings for draft links in popular searches OK)
 * Exit 1: broken slug references
 */
import {
  getAllComparisons,
  getAllProducts,
  getAllSolutions,
  getAllCountries,
} from "../src/content";
import { getFooterData, footerPopularSearches } from "../src/content/footer";
import { pages } from "../src/content/pages";
import { primaryNav } from "../src/content/navigation";
import { isDraftPath } from "../src/lib/links";

type LinkRef = { label: string; href: string; source: string };

const productSlugs = new Set(getAllProducts().map((p) => p.slug));
const solutionSlugs = new Set(getAllSolutions().map((s) => s.slug));
const countrySlugs = new Set(getAllCountries().map((c) => c.slug));
const comparisonSlugs = new Set(getAllComparisons().map((c) => c.slug));
const pagePaths = new Set(pages.map((p) => p.path));

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

function normalizeHref(href: string): string {
  const withoutQuery = href.split("?")[0]?.split("#")[0] ?? href;
  if (withoutQuery === "/") return "/";
  return withoutQuery.endsWith("/") ? withoutQuery : `${withoutQuery}/`;
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

function resolveHref(href: string): { ok: boolean; reason?: string } {
  const path = normalizeHref(href);

  if (STATIC_PATHS.has(path) || pagePaths.has(path)) {
    return { ok: true };
  }

  const productMatch = path.match(/^\/products\/([^/]+)\/$/);
  if (productMatch) {
    const slug = productMatch[1]!;
    if (!productSlugs.has(slug)) {
      return { ok: false, reason: `unknown product slug "${slug}"` };
    }
    return { ok: true };
  }

  const solutionMatch = path.match(/^\/solutions\/([^/]+)\/$/);
  if (solutionMatch) {
    const slug = solutionMatch[1]!;
    if (!solutionSlugs.has(slug)) {
      return { ok: false, reason: `unknown solution slug "${slug}"` };
    }
    return { ok: true };
  }

  const exportMatch = path.match(/^\/export\/([^/]+)\/$/);
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

  const comparisonMatch = path.match(/^\/resources\/comparisons\/([^/]+)\/$/);
  if (comparisonMatch) {
    const slug = comparisonMatch[1]!;
    if (!comparisonSlugs.has(slug)) {
      return { ok: false, reason: `unknown comparison slug "${slug}"` };
    }
    return { ok: true };
  }

  const glossaryMatch = path.match(/^\/resources\/glossary\/([^/]+)\/$/);
  if (glossaryMatch) {
    return { ok: true };
  }

  const blogMatch = path.match(/^\/blog\/([^/]+)\/$/);
  if (blogMatch) {
    return { ok: true };
  }

  return { ok: false, reason: "unrecognised path pattern" };
}

function main() {
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

  for (const link of allLinks) {
    const key = `${link.source}::${link.href}`;
    if (seen.has(key)) continue;
    seen.add(key);

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

  console.log("=== Link audit (Phase 1) ===\n");
  console.log(`Checked ${seen.size} unique hrefs from footer and navigation.\n`);

  if (draftWarnings.length) {
    console.log(`Warnings — draft pages linked from popular searches (${draftWarnings.length}):`);
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
    process.exit(1);
  }

  console.log("All footer and nav hrefs resolve to known slugs.");
  if (draftWarnings.length) {
    console.log(`${draftWarnings.length} draft link(s) flagged as warnings (exit 0).`);
  }
  process.exit(0);
}

main();
