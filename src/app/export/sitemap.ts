import type { MetadataRoute } from "next";
import { pages } from "@/content/pages";
import { sitemapEntry } from "@/lib/sitemap";

/** Export hub and process pages — country and city URLs live in dedicated sitemaps. */
export default function sitemap(): MetadataRoute.Sitemap {
  return pages
    .filter((p) => p.section === "export" && !p.draft)
    .map((page) =>
      sitemapEntry(page.path, {
        lastModified: page.updatedAt,
        priority: page.path === "/export/" ? 0.8 : 0.6,
        changeFrequency: "monthly",
      }),
    );
}
