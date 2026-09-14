import { comparisons } from "@/content";
import { sitemapEntry, sitemapUrlSetXml, xmlResponse } from "@/lib/sitemap";

export async function GET() {
  const entries = comparisons
    .filter((c) => !c.draft)
    .map((comparison) =>
      sitemapEntry(`/resources/comparisons/${comparison.slug}/`, {
        lastModified: comparison.updatedAt,
        priority: 0.6,
        changeFrequency: "monthly",
      }),
    );

  return xmlResponse(sitemapUrlSetXml(entries));
}
