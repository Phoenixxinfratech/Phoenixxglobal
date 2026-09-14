import type { MetadataRoute } from "next";
import { getLiveCountries } from "@/content";
import { pages } from "@/content/pages";
import { sitemapEntry } from "@/lib/sitemap";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages.filter((p) => p.section === "export" && !p.draft)) {
    entries.push(
      sitemapEntry(page.path, {
        lastModified: page.updatedAt,
        priority: page.path === "/export/" ? 0.8 : 0.6,
        changeFrequency: "monthly",
      }),
    );
  }

  for (const country of getLiveCountries()) {
    entries.push(
      sitemapEntry(`/export/${country.slug}/`, {
        lastModified: country.updatedAt,
        priority: 0.6,
        changeFrequency: "monthly",
      }),
    );
  }

  return entries;
}
