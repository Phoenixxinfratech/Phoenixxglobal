import { site } from "@/config/site";

const SITEMAP_PATHS = [
  "/sitemap.xml",
  "/products/sitemap.xml",
  "/solutions/sitemap.xml",
  "/export/sitemap.xml",
  "/resources/sitemap.xml",
  "/blog/sitemap.xml",
] as const;

export async function GET() {
  const base = site.domain.replace(/\/$/, "");
  const body = SITEMAP_PATHS.map(
    (path) => `  <sitemap>\n    <loc>${base}${path}</loc>\n  </sitemap>`,
  ).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</sitemapindex>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
