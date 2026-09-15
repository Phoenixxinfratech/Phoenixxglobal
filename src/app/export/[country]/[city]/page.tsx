import { notFound } from "next/navigation";
import {
  CtaBand,
  FaqAccordion,
  HoldingPage,
  LeadFormSection,
  PageHero,
  ProductGrid,
  QuickAnswer,
  SolutionGrid,
  SpecTable,
} from "@/components/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Heading, Link, Section } from "@/components/ui";
import {
  cities,
  getCity,
  getCountry,
  getProduct,
  getSolution,
} from "@/content";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { isPublishableCity } from "@/lib/publishable";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import type { SpecRow } from "@/content/types";

type PageProps = {
  params: Promise<{ country: string; city: string }>;
};

function cityPath(countrySlug: string, citySlug: string): string {
  return `${routes.exportCountry(countrySlug)}${citySlug}/`;
}

function buildCityTitle(cityName: string, countryName: string): string {
  const title = `${cityName} Sandwich Panels | ${countryName} | PHOENIXX`;
  return title.length <= 70 ? title : `${cityName} Panels | ${countryName} | PHOENIXX`.slice(0, 70);
}

function buildCityDescription(
  city: NonNullable<ReturnType<typeof getCity>>,
  country: NonNullable<ReturnType<typeof getCountry>>,
): string {
  if (city.quickAnswer) {
    const trimmed = city.quickAnswer.trim();
    if (trimmed.length <= 170) return trimmed;
    const cut = trimmed.slice(0, 167);
    const lastSpace = cut.lastIndexOf(" ");
    return `${cut.slice(0, lastSpace > 100 ? lastSpace : 167)}…`;
  }
  return `Insulated sandwich panels for ${city.name}, ${country.name}. Cold storage, warehousing and industrial builds. Request a quote.`;
}

const HOLDING_RELATED_LINKS = [
  { slug: "kenya", name: "Kenya export overview", href: routes.exportCountry("kenya") },
  { slug: "export", name: "Export hub", href: routes.export },
  { slug: "export-process", name: "Export process", href: routes.exportProcess },
  { slug: "puf-panels", name: "PUF sandwich panels", href: routes.product("puf-panels") },
  { slug: "cold-storage", name: "Cold storage solutions", href: routes.solution("cold-storage") },
  { slug: "export-docs", name: "Export documentation", href: routes.exportDocumentation },
  { slug: "faqs", name: "Export FAQs", href: routes.faqs },
  { slug: "contact", name: "Contact export team", href: routes.contact },
  { slug: "request-quote", name: "Request a quotation", href: routes.requestQuote },
];

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
    title: buildCityTitle(city.name, country.name),
    description: buildCityDescription(city, country),
    path: cityPath(countrySlug, citySlug),
    draft: !isPublishableCity(city),
  });
}

function buildLocationSpecs(city: NonNullable<ReturnType<typeof getCity>>): SpecRow[] {
  const specs: SpecRow[] = [];

  if (city.nearestPort) {
    specs.push({ label: "Nearest port", value: city.nearestPort, verified: false });
  }
  if (city.climateNotes) {
    specs.push({ label: "Climate notes", value: city.climateNotes, verified: false });
  }
  if (city.roadAccessNotes) {
    specs.push({ label: "Road access", value: city.roadAccessNotes, verified: false });
  }
  if (city.portRelevance) {
    specs.push({ label: "Port relevance", value: city.portRelevance, verified: false });
  }

  return specs;
}

export default async function ExportCityPage({ params }: PageProps) {
  const { country: countrySlug, city: citySlug } = await params;
  const city = getCity(citySlug);
  const country = getCountry(countrySlug);

  if (!city || !country || city.countrySlug !== countrySlug) notFound();

  const publishable = isPublishableCity(city);
  const path = cityPath(countrySlug, citySlug);

  const breadcrumbs = [
    { name: "Home", href: routes.home },
    { name: "Export", href: routes.export },
    { name: country.name, href: routes.exportCountry(countrySlug) },
    { name: city.name, href: path },
  ];

  if (!publishable) {
    return (
      <>
        <JsonLd
          data={breadcrumbSchema(
            breadcrumbs.map((item) => ({ name: item.name, path: item.href })),
          )}
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
            {
              slug: "country",
              name: `${country.name} export overview`,
              href: routes.exportCountry(countrySlug),
            },
            ...HOLDING_RELATED_LINKS,
          ]}
        />
      </>
    );
  }

  const faqSchema = faqPageSchema(city.faqs);
  const locationSpecs = buildLocationSpecs(city);

  const primaryProduct = city.relevantProducts.find((slug) => {
    const product = getProduct(slug);
    return product && !product.draft;
  });

  const heroKeySpecs = [
    ...(city.nearestPort ? [{ label: "Nearest port", value: city.nearestPort }] : []),
    ...(city.industrialEstates[0]
      ? [{ label: "Industrial area", value: city.industrialEstates[0] }]
      : []),
    ...(city.localIndustries[0]
      ? [{ label: "Local demand", value: city.localIndustries[0] }]
      : []),
  ];

  const gridProducts = city.relevantProducts
    .map((productSlug) => {
      const product = getProduct(productSlug);
      if (!product || product.draft) return null;
      return {
        slug: product.slug,
        name: product.name,
        shortName: product.shortName,
        keySpec: product.keySpec ?? product.coreOfType,
        href: routes.product(productSlug),
        image: product.images[0]
          ? {
              src: product.images[0].src,
              alt: product.images[0].alt,
              width: product.images[0].width,
              height: product.images[0].height,
            }
          : undefined,
      };
    })
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const gridSolutions = city.relevantIndustries
    .map((solutionSlug) => {
      const solution = getSolution(solutionSlug);
      if (!solution || solution.draft) return null;
      return {
        slug: solution.slug,
        name: solution.name,
        summary: solution.summary,
        href: routes.solution(solutionSlug),
      };
    })
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const secondaryProduct = city.relevantProducts.find(
    (slug) => slug !== primaryProduct && getProduct(slug) && !getProduct(slug)?.draft,
  );

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(
            breadcrumbs.map((item) => ({ name: item.name, path: item.href })),
          ),
          ...(faqSchema ? [faqSchema] : []),
        ]}
      />

      <PageHero
        breadcrumbs={breadcrumbs}
        h1={`Sandwich panels for ${city.name}, ${country.name}`}
        intro={city.quickAnswer ?? buildCityDescription(city, country)}
        keySpecs={heroKeySpecs}
        quoteProductSlug={primaryProduct}
        secondaryCta={{ label: "Send project details", href: "#lead-form" }}
      />

      {city.quickAnswer ? (
        <QuickAnswer heading="Quick answer" text={city.quickAnswer} />
      ) : null}

      {city.marketContext ? (
        <Section background="white">
          <Container>
            <Heading as="h2" className="text-2xl md:text-3xl">
              Market context for {city.name}
            </Heading>
            <p className="prose-body mt-4 max-w-3xl text-base text-steel">
              {city.marketContext}
            </p>
            <p className="prose-body mt-4 max-w-3xl text-base text-steel">
              Country-level port and import notes sit on the{" "}
              <Link href={routes.exportCountry(countrySlug)}>
                {country.name} export page
              </Link>
              . Compare panel types on the{" "}
              <Link href={routes.products}>products hub</Link> —{" "}
              <Link href={routes.product("puf-panels")}>PUF panel builds</Link>
              {secondaryProduct ? (
                <>
                  {" "}
                  and{" "}
                  <Link href={routes.product(secondaryProduct)}>
                    {getProduct(secondaryProduct)?.shortName ?? secondaryProduct}
                  </Link>
                </>
              ) : null}{" "}
              — before you lock thickness. For application guidance see{" "}
              <Link href={routes.solution(city.relevantIndustries[0] ?? "cold-storage")}>
                {getSolution(city.relevantIndustries[0] ?? "cold-storage")?.name ??
                  "cold storage solutions"}
              </Link>{" "}
              and the{" "}
              <Link href={routes.exportProcess}>export process overview</Link>.
            </p>
          </Container>
        </Section>
      ) : null}

      {(city.industrialEstates.length > 0 ||
        city.localIndustries.length > 0 ||
        city.projectProfiles.length > 0 ||
        locationSpecs.length > 0) && (
        <Section background="paper">
          <Container>
            <Heading as="h2" className="text-2xl md:text-3xl">
              Industrial areas and project types in {city.name}
            </Heading>

            {locationSpecs.length > 0 ? (
              <SpecTable
                specs={locationSpecs}
                className="mt-6"
                caption="Indicative logistics and climate context for this city — confirm current port and haulage procedures with your clearing agent."
              />
            ) : null}

            {city.industrialEstates.length > 0 ? (
              <div className="mt-10">
                <Heading as="h3" className="text-xl md:text-2xl">
                  Industrial estates and zones
                </Heading>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-steel">
                  {city.industrialEstates.map((estate) => (
                    <li key={estate}>{estate}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {city.localIndustries.length > 0 ? (
              <div className="mt-10">
                <Heading as="h3" className="text-xl md:text-2xl">
                  Local industries
                </Heading>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-steel">
                  {city.localIndustries.map((industry) => (
                    <li key={industry}>{industry}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {city.projectProfiles.length > 0 ? (
              <div className="mt-10">
                <Heading as="h3" className="text-xl md:text-2xl">
                  Typical project profiles
                </Heading>
                <ul className="mt-4 list-disc space-y-3 pl-5 text-base leading-relaxed text-steel">
                  {city.projectProfiles.map((profile) => (
                    <li key={profile.slice(0, 48)}>{profile}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </Container>
        </Section>
      )}

      {city.roadAccessNotes ? (
        <Section background="white">
          <Container>
            <Heading as="h2" className="text-2xl md:text-3xl">
              Road access and site delivery in {city.name}
            </Heading>
            <p className="prose-body mt-4 max-w-3xl text-base text-steel">
              {city.roadAccessNotes}
            </p>
          </Container>
        </Section>
      ) : null}

      {city.portRelevance ? (
        <Section background="paper">
          <Container>
            <Heading as="h2" className="text-2xl md:text-3xl">
              Port and inland logistics for {city.name}
            </Heading>
            <p className="prose-body mt-4 max-w-3xl text-base text-steel">
              {city.portRelevance}
            </p>
            <p className="prose-body mt-4 max-w-3xl text-base text-steel">
              Packing and bundle layout for long transit:{" "}
              <Link href={routes.exportPackaging}>container loading guidance</Link>.
              Indicative freight timing:{" "}
              <Link href={routes.exportLeadTime}>lead time and freight</Link>.
            </p>
          </Container>
        </Section>
      ) : null}

      {city.climateNotes ? (
        <Section background="white">
          <Container>
            <Heading as="h2" className="text-2xl md:text-3xl">
              Climate considerations for {city.name}
            </Heading>
            <p className="prose-body mt-4 max-w-3xl text-base text-steel">
              {city.climateNotes}
            </p>
          </Container>
        </Section>
      ) : null}

      {city.specificationNotes ? (
        <Section background="paper">
          <Container>
            <Heading as="h2" className="text-2xl md:text-3xl">
              Specification notes for {city.name}
            </Heading>
            <p className="prose-body mt-4 max-w-3xl text-base text-steel">
              {city.specificationNotes}
            </p>
            <p className="prose-body mt-4 max-w-3xl text-base text-steel">
              Need a formal quotation? Use the{" "}
              <Link href={routes.requestQuote}>request-a-quote form</Link> or{" "}
              <Link href={routes.contact}>contact the export team</Link> with room
              dimensions and target temperature. Full document list:{" "}
              <Link href={routes.exportDocumentation}>shipping documentation</Link>.
            </p>
          </Container>
        </Section>
      ) : null}

      {gridProducts.length > 0 ? (
        <ProductGrid
          heading={`Panel products commonly specified in ${city.name}`}
          products={gridProducts}
        />
      ) : null}

      {gridSolutions.length > 0 ? (
        <SolutionGrid
          heading={`Industries we supply in ${city.name}`}
          solutions={gridSolutions}
        />
      ) : null}

      {city.faqs.length > 0 ? (
        <FaqAccordion
          faqs={city.faqs}
          heading={`Export questions on ${city.name}`}
        />
      ) : null}

      <CtaBand
        productSlug={primaryProduct}
        heading={`Plan a panel shipment to ${city.name}`}
        copy={`Send destination city, panel quantities, target temperature and Incoterm preference. We reply with CIF/FOB pricing and a document checklist for your clearing agent.`}
      />

      <LeadFormSection
        variant="quote"
        defaultProduct={primaryProduct}
        defaultCountry={country.name}
        defaultCity={city.name}
        heading={`Request a ${city.name} export quotation`}
        background="white"
        className="pb-16 md:pb-24"
      />
    </>
  );
}
