import { getLiveCities } from "@/content";
import { isPublishableCity } from "@/lib/publishable";
import { sitemapEntry, sitemapUrlSetXml, xmlResponse } from "@/lib/sitemap";

export async function GET() {
  const entries = getLiveCities()
    .filter(isPublishableCity)
    .map((city) =>
      sitemapEntry(`/export/${city.countrySlug}/${city.slug}/`, {
        lastModified: city.updatedAt,
        priority: 0.5,
        changeFrequency: "monthly",
      }),
    );

  return xmlResponse(sitemapUrlSetXml(entries));
}
