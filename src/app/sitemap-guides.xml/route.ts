import { getLiveGuides } from "@/content";
import { sitemapEntry, sitemapUrlSetXml, xmlResponse } from "@/lib/sitemap";

export async function GET() {
  const entries = getLiveGuides().map((guide) =>
    sitemapEntry(`/resources/guides/${guide.slug}/`, {
      lastModified: guide.updatedAt,
      priority: 0.6,
      changeFrequency: "monthly",
    }),
  );

  return xmlResponse(sitemapUrlSetXml(entries));
}
