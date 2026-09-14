import type { MetadataRoute } from "next";
import { getLiveSolutions } from "@/content";
import { pages } from "@/content/pages";
import { sitemapEntry } from "@/lib/sitemap";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  const hub = pages.find((p) => p.path === "/solutions/");
  if (hub && !hub.draft) {
    entries.push(
      sitemapEntry("/solutions/", {
        lastModified: hub.updatedAt,
        priority: 0.8,
        changeFrequency: "weekly",
      }),
    );
  }

  for (const solution of getLiveSolutions()) {
    entries.push(
      sitemapEntry(`/solutions/${solution.slug}/`, {
        lastModified: solution.updatedAt,
        priority: 0.6,
        changeFrequency: "monthly",
      }),
    );
  }

  return entries;
}
