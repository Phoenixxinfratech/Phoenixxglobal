import { getLiveCountries } from "@/content";
import { isPublishableCountry } from "@/lib/publishable";
import { sitemapEntry, sitemapUrlSetXml, xmlResponse } from "@/lib/sitemap";

export async function GET() {
  const entries = getLiveCountries()
    .filter(isPublishableCountry)
    .map((country) =>
      sitemapEntry(`/export/${country.slug}/`, {
        lastModified: country.updatedAt,
        priority: 0.6,
        changeFrequency: "monthly",
      }),
    );

  return xmlResponse(sitemapUrlSetXml(entries));
}
