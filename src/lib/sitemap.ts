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

function formatLastMod(value: string | Date | undefined): string {
  if (!value) return "";
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return `<lastmod>${date.toISOString().split("T")[0]}</lastmod>`;
}

export function sitemapUrlSetXml(entries: SitemapEntry[]): string {
  const body = entries
    .map((entry) => {
      const parts = [
        "  <url>",
        `    <loc>${entry.url}</loc>`,
        formatLastMod(entry.lastModified),
        entry.changeFrequency
          ? `    <changefreq>${entry.changeFrequency}</changefreq>`
          : "",
        entry.priority !== undefined
          ? `    <priority>${entry.priority.toFixed(1)}</priority>`
          : "",
        "  </url>",
      ].filter(Boolean);
      return parts.join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>`;
}

export function sitemapIndexXml(paths: string[]): string {
  const body = paths
    .map((path) => {
      const loc = absoluteUrl(path);
      return `  <sitemap>\n    <loc>${loc}</loc>\n  </sitemap>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</sitemapindex>`;
}

export function xmlResponse(body: string): Response {
  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
