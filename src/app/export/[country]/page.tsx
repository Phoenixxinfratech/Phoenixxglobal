import { notFound } from "next/navigation";
import {
  CtaBand,
  FaqAccordion,
  HoldingPage,
  InlineLink,
  InlineSpecCallout,
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
  countries,
  getAllCities,
  getAllIndustrialZones,
  getCountry,
  getProduct,
  getSolution,
} from "@/content";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { isPublishableCity, isPublishableCountry } from "@/lib/publishable";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import type { SpecRow } from "@/content/types";

type PageProps = {
  params: Promise<{ country: string }>;
};

const HOLDING_RELATED_LINKS = [
  { slug: "kenya", name: "Kenya export page (live)", href: routes.exportCountry("kenya") },
  { slug: "export-africa", name: "Export to Africa overview", href: routes.exportAfrica },
  { slug: "export-process", name: "Export process", href: routes.exportProcess },
  { slug: "puf-panels", name: "PUF panels for export", href: routes.product("puf-panels") },
  { slug: "cold-storage", name: "Cold storage solutions", href: routes.solution("cold-storage") },
  { slug: "export-docs", name: "Export documentation", href: routes.exportDocumentation },
  { slug: "faqs", name: "Export FAQs", href: routes.faqs },
  { slug: "contact", name: "Contact export team", href: routes.contact },
  { slug: "request-quote", name: "Request a quotation", href: routes.requestQuote },
];

export function generateStaticParams() {
  return countries.map((country) => ({ country: country.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { country: countrySlug } = await params;
  const country = getCountry(countrySlug);
  if (!country) return {};

  return buildMetadata({
    title: country.seoTitle,
    description: country.metaDescription,
    path: routes.exportCountry(countrySlug),
    draft: !isPublishableCountry(country),
  });
}

function buildLogisticsSpecs(country: NonNullable<ReturnType<typeof getCountry>>): SpecRow[] {
  const specs: SpecRow[] = [];

  if (country.keyPorts.length > 0) {
    specs.push({
      label: "Key ports",
      value: country.keyPorts.join("; "),
      verified: false,
    });
  } else if (country.portsOfEntry.length > 0) {
    specs.push({
      label: "Ports of entry",
      value: country.portsOfEntry.join("; "),
      verified: false,
    });
  }

  if (country.inlandRoutes.length > 0) {
    specs.push({
      label: "Inland routes",
      value: country.inlandRoutes.join("; "),
      verified: false,
    });
  }

  if (country.temperatureRange) {
    specs.push({
      label: "Typical temperature range",
      value: country.temperatureRange,
      verified: false,
    });
  }

  if (country.coastal !== undefined) {
    specs.push({
      label: "Coastal exposure",
      value: country.coastal ? "Yes — specify facing for salt air" : "No — inland climate drivers",
      verified: false,
    });
  }

  if (country.climateNotes) {
    specs.push({
      label: "Climate notes",
      value: country.climateNotes,
      verified: false,
    });
  }

  return specs;
}

export default async function ExportCountryPage({ params }: PageProps) {
  const { country: countrySlug } = await params;
  const country = getCountry(countrySlug);
  if (!country) notFound();

  const publishable = isPublishableCountry(country);

  const breadcrumbs = [
    { name: "Home", href: routes.home },
    { name: "Export", href: routes.export },
    { name: country.name, href: routes.exportCountry(countrySlug) },
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
          h1={country.h1}
          holdingCopy={country.holdingCopy ?? country.metaDescription}
          breadcrumbs={[
            { label: "Home", href: routes.home },
            { label: "Export", href: routes.export },
            { label: country.name },
          ]}
          relatedLinks={HOLDING_RELATED_LINKS}
        />
      </>
    );
  }

  const faqSchema = faqPageSchema(country.faqs);
  const logisticsSpecs = buildLogisticsSpecs(country);
  const zoneNameBySlug = new Map(
    getAllIndustrialZones().map((zone) => [zone.slug, zone.name]),
  );

  const primaryProduct = country.relevantProducts.find((slug) => {
    const product = getProduct(slug);
    return product && !product.draft;
  });

  const heroKeySpecs = [
    { label: "Region", value: country.region },
    ...(country.portsOfEntry[0]
      ? [{ label: "Primary port", value: country.portsOfEntry[0] }]
      : []),
    ...(country.temperatureRange
      ? [{ label: "Temperature range", value: country.temperatureRange }]
      : []),
  ];

  const gridProducts = country.relevantProducts
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

  const gridSolutions = country.relevantIndustries
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

  const relatedExportLinks = countries
    .filter((c) => c.slug !== countrySlug && isPublishableCountry(c))
    .slice(0, 4)
    .map((c) => ({
      slug: c.slug,
      name: `${c.name} export market`,
      href: routes.exportCountry(c.slug),
    }));

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
        h1={country.h1}
        intro={country.metaDescription}
        keySpecs={heroKeySpecs}
        quoteProductSlug={primaryProduct}
        secondaryCta={{ label: "Send project details", href: "#lead-form" }}
      />

      {country.quickAnswer ? (
        <QuickAnswer heading="Quick answer" text={country.quickAnswer} />
      ) : null}

      {country.marketContext ? (
        <Section background="white">
          <Container>
            <Heading as="h2" className="text-2xl md:text-3xl">
              Market context for {country.name}
            </Heading>
            <p className="prose-body mt-4 max-w-3xl text-base text-steel">
              {country.marketContext}
            </p>
            <p className="prose-body mt-4 max-w-3xl text-base text-steel">
              Panel selection for this corridor starts on the{" "}
              <Link href={routes.products}>products hub</Link> — compare{" "}
              <Link href={routes.product("puf-panels")}>PUF panel builds</Link>{" "}
              and{" "}
              <Link href={routes.product("pir-panels")}>PIR panel options</Link>{" "}
              before you lock thickness. For application-level guidance see{" "}
              <Link href={routes.solution("cold-storage")}>cold storage solutions</Link>{" "}
              and the{" "}
              <Link href={routes.exportProcess}>export process overview</Link>.
            </p>
          </Container>
        </Section>
      ) : null}

      {country.specificationNotes ? (
        <Section background="paper">
          <Container>
            <Heading as="h2" className="text-2xl md:text-3xl">
              Specification notes for {country.name}
            </Heading>
            <p className="prose-body mt-4 max-w-3xl text-base text-steel">
              {country.specificationNotes}
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

      {(logisticsSpecs.length > 0 ||
        country.industrialZones.length > 0 ||
        country.demandSectors.length > 0 ||
        country.typicalProjectTypes.length > 0) && (
        <Section background="white">
          <Container>
            <Heading as="h2" className="text-2xl md:text-3xl">
              Ports, routes and project sectors
            </Heading>
            {logisticsSpecs.length > 0 ? (
              <SpecTable
                specs={logisticsSpecs}
                className="mt-6"
                caption="Indicative logistics and climate context — confirm current port procedures with your clearing agent."
              />
            ) : null}

            {country.industrialZones.length > 0 ? (
              <div className="mt-10">
                <Heading as="h3" className="text-xl md:text-2xl">
                  Industrial zones
                </Heading>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-steel">
                  {country.industrialZones.map((zoneSlug) => (
                    <li key={zoneSlug}>{zoneNameBySlug.get(zoneSlug) ?? zoneSlug}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {country.demandSectors.length > 0 ? (
              <div className="mt-10">
                <Heading as="h3" className="text-xl md:text-2xl">
                  Demand sectors
                </Heading>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-steel">
                  {country.demandSectors.map((sector) => (
                    <li key={sector}>{sector}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {country.typicalProjectTypes.length > 0 ? (
              <div className="mt-10">
                <Heading as="h3" className="text-xl md:text-2xl">
                  Typical project types
                </Heading>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-steel">
                  {country.typicalProjectTypes.map((project) => (
                    <li key={project}>{project}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {country.demandDrivers.length > 0 ? (
              <div className="mt-10">
                <Heading as="h3" className="text-xl md:text-2xl">
                  What buyers are building
                </Heading>
                <ul className="mt-4 list-disc space-y-3 pl-5 text-base leading-relaxed text-steel">
                  {country.demandDrivers.map((driver) => (
                    <li key={driver.slice(0, 48)}>{driver}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {(() => {
              const publishableCities = getAllCities().filter(
                (c) => c.countrySlug === country.slug && isPublishableCity(c),
              );
              if (publishableCities.length === 0) return null;
              return (
                <div className="mt-10">
                  <Heading as="h3" className="text-xl md:text-2xl">
                    City export pages
                  </Heading>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-steel">
                    {publishableCities.map((c) => (
                      <li key={c.slug}>
                        <Link href={`${routes.exportCountry(country.slug)}${c.slug}/`}>
                          {c.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })()}
          </Container>
        </Section>
      )}

      {gridProducts.length > 0 ? (
        <ProductGrid
          heading={`Panel products commonly shipped to ${country.name}`}
          products={gridProducts}
        />
      ) : null}

      {gridSolutions.length > 0 ? (
        <SolutionGrid
          heading={`Industries we supply in ${country.name}`}
          solutions={gridSolutions}
        />
      ) : null}

      {(country.importConsiderations ||
        country.localInstallationNotes ||
        country.logisticsNotes ||
        country.documentationNotes) && (
        <Section background="paper">
          <Container>
            {country.importConsiderations ? (
              <>
                <Heading as="h2" className="text-2xl md:text-3xl">
                  Import considerations
                </Heading>
                <p className="prose-body mt-4 max-w-3xl text-base text-steel">
                  {country.importConsiderations}
                </p>
              </>
            ) : null}

            {country.logisticsNotes ? (
              <>
                <Heading
                  as="h2"
                  className={`text-2xl md:text-3xl ${country.importConsiderations ? "mt-10" : ""}`}
                >
                  Logistics and transit
                </Heading>
                <p className="prose-body mt-4 max-w-3xl text-base text-steel">
                  {country.logisticsNotes}
                </p>
              </>
            ) : null}

            {country.documentationNotes ? (
              <>
                <Heading as="h2" className="mt-10 text-2xl md:text-3xl">
                  Import documentation
                </Heading>
                <p className="prose-body mt-4 max-w-3xl text-base text-steel">
                  {country.documentationNotes}
                </p>
                <p className="prose-body mt-4 max-w-3xl text-base text-steel">
                  Full document list:{" "}
                  <Link href={routes.exportDocumentation}>shipping documentation</Link>.
                  Commercial terms:{" "}
                  <Link href={routes.exportIncoterms}>incoterms and payment</Link>.
                </p>
              </>
            ) : null}

            {country.localInstallationNotes ? (
              <>
                <Heading as="h2" className="mt-10 text-2xl md:text-3xl">
                  Local installation notes
                </Heading>
                <p className="prose-body mt-4 max-w-3xl text-base text-steel">
                  {country.localInstallationNotes}
                </p>
              </>
            ) : null}

            <InlineSpecCallout className="mt-8">
              We do not guarantee customs clearance outcomes, duty rates or import timelines
              at any destination. Verify current rules with your clearing agent or customs
              broker before dispatch — country-specific workflows change and only a licensed
              agent can confirm classification, IDF requirements and landed cost for your
              consignment.
            </InlineSpecCallout>
          </Container>
        </Section>
      )}

      {country.faqs.length > 0 ? (
        <FaqAccordion
          faqs={country.faqs}
          heading={`Export questions on ${country.name}`}
        />
      ) : null}

      <Section background="white">
        <Container>
          <Heading as="h2" className="text-2xl md:text-3xl">
            Related content
          </Heading>
          <p className="prose-body mt-4 max-w-3xl text-base text-steel">
            City-level export pages for {country.name} are publishing in the next
            content batch — for now use this country page and the{" "}
            <Link href={routes.export}>export hub</Link> for port and packing context.
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {relatedExportLinks.length > 0 ? (
              <div>
                <h3 className="text-lg font-semibold text-ink">Other export markets</h3>
                <ul className="mt-3 space-y-2">
                  {relatedExportLinks.map((link) => (
                    <li key={link.slug}>
                      <InlineLink href={link.href}>{link.name}</InlineLink>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div>
              <h3 className="text-lg font-semibold text-ink">Export support</h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <InlineLink href={routes.exportAfrica}>Export to Africa overview</InlineLink>
                </li>
                <li>
                  <InlineLink href={routes.exportProcess}>Order and dispatch process</InlineLink>
                </li>
                <li>
                  <InlineLink href={routes.qualityAndTesting}>Quality and testing</InlineLink>
                </li>
                <li>
                  <InlineLink href={routes.faqs}>Buyer FAQ page</InlineLink>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        productSlug={primaryProduct}
        heading={`Plan a panel shipment to ${country.name}`}
        copy="Send destination port, panel quantities, target temperature and Incoterm preference. We reply with CIF/FOB pricing and a document checklist for your clearing agent."
      />

      <LeadFormSection
        variant="quote"
        defaultProduct={primaryProduct}
        heading={`Request a ${country.name} export quotation`}
        background="white"
        className="pb-16 md:pb-24"
      />
    </>
  );
}
