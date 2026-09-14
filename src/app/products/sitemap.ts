import type { MetadataRoute } from "next";
import { getLiveProducts } from "@/content";
import { pages } from "@/content/pages";
import { sitemapEntry } from "@/lib/sitemap";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  const hub = pages.find((p) => p.path === "/products/");
  if (hub && !hub.draft) {
    entries.push(
      sitemapEntry("/products/", {
        lastModified: hub.updatedAt,
        priority: 0.8,
        changeFrequency: "weekly",
      }),
    );
  }

  for (const product of getLiveProducts()) {
    entries.push(
      sitemapEntry(`/products/${product.slug}/`, {
        lastModified: product.updatedAt,
        priority: 0.6,
        changeFrequency: "monthly",
      }),
    );
  }

  return entries;
}
