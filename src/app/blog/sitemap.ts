import type { MetadataRoute } from "next";
import { getLiveArticles } from "@/content";
import { pages } from "@/content/pages";
import { sitemapEntry } from "@/lib/sitemap";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  const blogHub = pages.find((p) => p.path === "/blog/" && !p.draft);
  if (blogHub) {
    entries.push(
      sitemapEntry(blogHub.path, {
        lastModified: blogHub.updatedAt,
        priority: 0.7,
        changeFrequency: "weekly",
      }),
    );
  }

  for (const article of getLiveArticles()) {
    entries.push(
      sitemapEntry(`/blog/${article.slug}/`, {
        lastModified: article.updatedAt ?? article.dateModified,
        priority: 0.6,
        changeFrequency: "monthly",
      }),
    );
  }

  return entries;
}
