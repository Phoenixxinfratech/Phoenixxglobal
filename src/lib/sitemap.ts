import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { withTrailingSlash } from "@/lib/slug";

export type SitemapEntry = MetadataRoute.Sitemap[number];

export function absoluteUrl(path: string): string {
  const base = site.domain.replace(/\/$/, "");
  const normalized = withTrailingSlash(path);
  if (normalized === "/") return `${base}/`;
  return `${base}${normalized}`;
}

export function sitemapEntry(
  path: string,
  options?: {
    lastModified?: string | Date;
    changeFrequency?: SitemapEntry["changeFrequency"];
    priority?: number;
  },
): SitemapEntry {
  return {
    url: absoluteUrl(path),
    lastModified: options?.lastModified
      ? new Date(options.lastModified)
      : new Date(),
    ...(options?.changeFrequency
      ? { changeFrequency: options.changeFrequency }
      : {}),
    ...(options?.priority !== undefined ? { priority: options.priority } : {}),
  };
}
