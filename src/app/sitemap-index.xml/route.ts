import { sitemapIndexXml, xmlResponse } from "@/lib/sitemap";

const SITEMAP_PATHS = [
  "/sitemap.xml",
  "/products/sitemap.xml",
  "/solutions/sitemap.xml",
  "/export/sitemap.xml",
  "/sitemap-countries.xml",
  "/sitemap-cities.xml",
  "/resources/sitemap.xml",
  "/sitemap-guides.xml",
  "/sitemap-comparisons.xml",
  "/blog/sitemap.xml",
] as const;

export async function GET() {
  return xmlResponse(sitemapIndexXml([...SITEMAP_PATHS]));
}
