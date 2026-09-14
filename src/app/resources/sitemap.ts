import type { MetadataRoute } from "next";
import { glossaryTerms } from "@/content";
import { pages } from "@/content/pages";
import { sitemapEntry } from "@/lib/sitemap";

/** Resource hub pages and glossary — guides and comparisons have dedicated sitemaps. */
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = pages
    .filter((p) => p.section === "resources" && !p.draft)
    .map((page) =>
      sitemapEntry(page.path, {
        lastModified: page.updatedAt,
        priority: page.path === "/resources/" ? 0.8 : 0.6,
        changeFrequency: "monthly",
      }),
    );

  for (const term of glossaryTerms.filter((t) => !t.draft)) {
    entries.push(
      sitemapEntry(`/resources/glossary/${term.slug}/`, {
        priority: 0.6,
        changeFrequency: "yearly",
      }),
    );
  }

  return entries;
}
