import { site } from "@/config/site";
import {
  comparisons,
  getLiveArticles,
  getLiveCountries,
  getLiveCities,
  getLiveGuides,
  getLiveProducts,
  getLiveSolutions,
} from "@/content";
import { isPublishableCity, isPublishableCountry } from "@/lib/publishable";
import { absoluteUrl } from "@/lib/sitemap";
import { routes } from "@/lib/links";

function link(path: string, label: string): string {
  return `- [${label}](${absoluteUrl(path)})`;
}

/** Build machine-readable site summary for AI crawlers (target under 200 lines). */
export function buildLlmsTxt(): string {
  const lines: string[] = [
    `# ${site.brand}`,
    "",
    site.canonicalDescription || site.tagline,
    "",
    `Legal entity: ${site.legalName}. Manufacturing: ${site.address.city}, ${site.address.state}, ${site.address.country}.`,
    "",
    "## Core",
    link(routes.home, "Home"),
    link(routes.about, "About"),
    link(routes.contact, "Contact"),
    link(routes.requestQuote, "Request a quote"),
    link(routes.manufacturing, "Manufacturing"),
    link(routes.qualityAndTesting, "Quality and testing"),
    "",
    "## Products",
    link(routes.products, "Products hub"),
    ...getLiveProducts().map((p) => link(routes.product(p.slug), p.name)),
    "",
    "## Solutions",
    link(routes.solutions, "Solutions hub"),
    ...getLiveSolutions().map((s) => link(routes.solution(s.slug), s.name)),
    "",
    "## Export",
    link(routes.export, "Export hub"),
    link(routes.exportProcess, "Export process"),
    link(routes.exportDocumentation, "Export documentation"),
    link(routes.exportPackaging, "Packaging and container loading"),
    link(routes.exportIncoterms, "Incoterms and payment"),
    link(routes.exportLeadTime, "Lead time and freight"),
    ...getLiveCountries()
      .filter(isPublishableCountry)
      .map((c) => link(routes.exportCountry(c.slug), c.name)),
    "",
    "## Cities",
    ...getLiveCities()
      .filter(isPublishableCity)
      .map((c) =>
        link(`/export/${c.countrySlug}/${c.slug}/`, `${c.name} (${c.countrySlug})`),
      ),
    "",
    "## Guides",
    link(routes.guides, "Guides hub"),
    ...getLiveGuides().map((g) => link(routes.guide(g.slug), g.name)),
    "",
    "## Comparisons",
    link(routes.comparisons, "Comparisons hub"),
    ...comparisons
      .filter((c) => !c.draft)
      .map((c) => link(routes.comparison(c.slug), c.name)),
    "",
    "## Blog",
    link(routes.blog, "Blog hub"),
    ...getLiveArticles().map((a) => link(routes.blogPost(a.slug), a.title)),
    "",
    "## Resources",
    link(routes.faqs, "FAQs"),
    link(routes.glossary, "Glossary"),
    link(routes.panelSelection, "Panel selection tool"),
    link(routes.datasheets, "Datasheets"),
    link("/sitemap/", "HTML sitemap"),
    "",
    "## Legal",
    link(routes.privacy, "Privacy policy"),
    link(routes.terms, "Terms of use"),
    "",
    `Sitemap index: ${absoluteUrl("/sitemap-index.xml")}`,
  ];

  const body = lines.join("\n");
  const lineCount = body.split("\n").length;
  if (lineCount > 200) {
    return body.split("\n").slice(0, 199).concat("… (truncated)").join("\n");
  }
  return body;
}
