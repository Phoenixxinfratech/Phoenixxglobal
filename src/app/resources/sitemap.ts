import type { MetadataRoute } from "next";
import { comparisons, getLiveGuides, glossaryTerms } from "@/content";
import { pages } from "@/content/pages";
import { sitemapEntry } from "@/lib/sitemap";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages.filter((p) => p.section === "resources" && !p.draft)) {
    entries.push(
      sitemapEntry(page.path, {
        lastModified: page.updatedAt,
        priority: page.path === "/resources/" ? 0.8 : 0.6,
        changeFrequency: "monthly",
      }),
    );
  }

  for (const term of glossaryTerms.filter((t) => !t.draft)) {
    entries.push(
      sitemapEntry(`/resources/glossary/${term.slug}/`, {
        priority: 0.6,
        changeFrequency: "yearly",
      }),
    );
  }

  for (const guide of getLiveGuides()) {
    entries.push(
      sitemapEntry(`/resources/guides/${guide.slug}/`, {
        lastModified: guide.updatedAt,
        priority: 0.6,
        changeFrequency: "monthly",
      }),
    );
  }

  for (const comparison of comparisons.filter((c) => !c.draft)) {
    entries.push(
      sitemapEntry(`/resources/comparisons/${comparison.slug}/`, {
        lastModified: comparison.updatedAt,
        priority: 0.6,
        changeFrequency: "monthly",
      }),
    );
  }

  return entries;
}
