import { notFound } from "next/navigation";
import { HoldingPage } from "@/components/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { cities, getCity, getCountry } from "@/content";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema } from "@/lib/schema";

type PageProps = {
  params: Promise<{ country: string; city: string }>;
};

export function generateStaticParams() {
  return cities.map((city) => ({
    country: city.countrySlug,
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { country: countrySlug, city: citySlug } = await params;
  const city = getCity(citySlug);
  const country = getCountry(countrySlug);

  if (!city || !country || city.countrySlug !== countrySlug) return {};

  return buildMetadata({
    title: `${city.name} — Sandwich Panel Projects | PHOENIXX`,
    description: `Insulated sandwich panels for projects in ${city.name}, ${country.name}. Full city page coming soon.`,
    path: `${routes.exportCountry(countrySlug)}${citySlug}/`,
    draft: city.draft,
  });
}

export default async function ExportCityPage({ params }: PageProps) {
  const { country: countrySlug, city: citySlug } = await params;
  const city = getCity(citySlug);
  const country = getCountry(countrySlug);

  if (!city || !country || city.countrySlug !== countrySlug) notFound();

  const cityPath = `${routes.exportCountry(countrySlug)}${citySlug}/`;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: routes.home },
          { name: "Export", path: routes.export },
          { name: country.name, path: routes.exportCountry(countrySlug) },
          { name: city.name, path: cityPath },
        ])}
      />
      <HoldingPage
        h1={`Sandwich panels for ${city.name}, ${country.name}`}
        holdingCopy={
          city.holdingCopy ??
          `City-specific content for ${city.name} is being prepared. Send your project location and we will respond with delivery and panel recommendations.`
        }
        breadcrumbs={[
          { label: "Home", href: routes.home },
          { label: "Export", href: routes.export },
          { label: country.name, href: routes.exportCountry(countrySlug) },
          { label: city.name },
        ]}
        relatedLinks={[
          { slug: "country", name: `${country.name} export overview`, href: routes.exportCountry(countrySlug) },
          { slug: "kenya", name: "Kenya export page", href: routes.exportCountry("kenya") },
          { slug: "nairobi", name: "Nairobi city page", href: `${routes.exportCountry("kenya")}nairobi/` },
          { slug: "puf-panels", name: "PUF sandwich panels", href: routes.product("puf-panels") },
          { slug: "cold-storage", name: "Cold storage solutions", href: routes.solution("cold-storage") },
          { slug: "export-process", name: "Export process", href: routes.exportProcess },
          { slug: "faqs", name: "Export FAQs", href: routes.faqs },
          { slug: "contact", name: "Contact export team", href: routes.contact },
          { slug: "request-quote", name: "Request a quotation", href: routes.requestQuote },
        ]}
      />
    </>
  );
}
