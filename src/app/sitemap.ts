import type { MetadataRoute } from "next";
import { pages } from "@/content/pages";
import { sitemapEntry } from "@/lib/sitemap";

/** Core and legal pages plus always-indexable conversion routes. */
export default function sitemap(): MetadataRoute.Sitemap {
  const registryEntries = pages
    .filter(
      (page) =>
        !page.draft &&
        (page.section === "core" || page.section === "legal"),
    )
    .map((page) =>
      sitemapEntry(page.path, {
        lastModified: page.updatedAt,
        priority: page.path === "/" ? 1 : page.path === "/sitemap/" ? 0.6 : 0.8,
        changeFrequency: page.section === "legal" ? "yearly" : "monthly",
      }),
    );

  const conversionEntries = ["/contact/", "/request-a-quote/"].map((path) =>
    sitemapEntry(path, {
      priority: 0.8,
      changeFrequency: "monthly",
    }),
  );

  return [...registryEntries, ...conversionEntries];
}
