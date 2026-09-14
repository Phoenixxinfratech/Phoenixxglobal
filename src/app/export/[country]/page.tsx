import { notFound } from "next/navigation";
import { HoldingPage } from "@/components/blocks";
import { InlineLink } from "@/components/blocks";
import { CtaBar } from "@/components/conversion";
import { Breadcrumbs } from "@/components/layout";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
  Container,
  Heading,
  Section,
} from "@/components/ui";
import { cities, getCountry, getProduct, getSolution, countries } from "@/content";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";

type PageProps = {
  params: Promise<{ country: string }>;
};

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
    draft: country.draft,
  });
}

export default async function ExportCountryPage({ params }: PageProps) {
  const { country: countrySlug } = await params;
  const country = getCountry(countrySlug);
  if (!country) notFound();

  const breadcrumbs = [
    { name: "Home", href: routes.home },
    { name: "Export", href: routes.export },
    { name: country.name, href: routes.exportCountry(countrySlug) },
  ];

  const countryCities = cities.filter((city) => city.countrySlug === countrySlug);

  if (country.draft) {
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
          relatedLinks={[
            { slug: "kenya", name: "Kenya export page (live)", href: routes.exportCountry("kenya") },
            { slug: "export-africa", name: "Export to Africa overview", href: routes.exportAfrica },
            { slug: "export-process", name: "Export process", href: routes.exportProcess },
            { slug: "puf-panels", name: "PUF panels for export", href: routes.product("puf-panels") },
            { slug: "cold-storage", name: "Cold storage solutions", href: routes.solution("cold-storage") },
            { slug: "export-docs", name: "Export documentation", href: routes.exportDocumentation },
            { slug: "faqs", name: "Export FAQs", href: routes.faqs },
            { slug: "contact", name: "Contact export team", href: routes.contact },
            { slug: "request-quote", name: "Request a quotation", href: routes.requestQuote },
          ]}
        />
      </>
    );
  }

  const faqSchema = faqPageSchema(country.faqs);

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
      <Section background="white" className="py-12 md:py-20">
        <Container>
          <Breadcrumbs items={breadcrumbs} className="mb-6" />

          <Heading as="h1">{country.h1}</Heading>

          {country.portsOfEntry.length > 0 ? (
            <p className="mt-4 text-base text-steel">
              Primary ports: {country.portsOfEntry.join(", ")} · Region: {country.region}
            </p>
          ) : null}

          {country.demandDrivers.length > 0 ? (
            <div className="mt-10">
              <Heading as="h2" className="text-2xl md:text-3xl">
                Market demand
              </Heading>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-base leading-relaxed text-steel">
                {country.demandDrivers.map((driver) => (
                  <li key={driver}>{driver}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {country.logisticsNotes ? (
            <div className="mt-10">
              <Heading as="h2" className="text-2xl md:text-3xl">
                Logistics and transit
              </Heading>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-steel">
                {country.logisticsNotes}
              </p>
            </div>
          ) : null}

          {country.documentationNotes ? (
            <div className="mt-10">
              <Heading as="h2" className="text-2xl md:text-3xl">
                Import documentation
              </Heading>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-steel">
                {country.documentationNotes}
              </p>
            </div>
          ) : null}

          {country.relevantProducts.length > 0 ? (
            <div className="mt-10">
              <Heading as="h2" className="text-2xl md:text-3xl">
                Products commonly ordered
              </Heading>
              <ul className="mt-4 space-y-2">
                {country.relevantProducts.map((productSlug) => {
                  const product = getProduct(productSlug);
                  if (!product) return null;
                  return (
                    <li key={productSlug}>
                      <InlineLink href={routes.product(productSlug)}>
                        {product.name}
                      </InlineLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}

          {country.relevantIndustries.length > 0 ? (
            <div className="mt-10">
              <Heading as="h2" className="text-2xl md:text-3xl">
                Relevant industries
              </Heading>
              <ul className="mt-4 space-y-2">
                {country.relevantIndustries.map((solutionSlug) => {
                  const solution = getSolution(solutionSlug);
                  if (!solution) return null;
                  return (
                    <li key={solutionSlug}>
                      <InlineLink href={routes.solution(solutionSlug)}>
                        {solution.name}
                      </InlineLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}

          {countryCities.length > 0 ? (
            <div className="mt-10">
              <Heading as="h2" className="text-2xl md:text-3xl">
                Major cities
              </Heading>
              <ul className="mt-4 space-y-2">
                {countryCities.map((city) => (
                  <li key={city.slug}>
                    <InlineLink
                      href={`${routes.exportCountry(countrySlug)}${city.slug}/`}
                    >
                      {city.name}
                    </InlineLink>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {country.faqs.length > 0 ? (
            <div className="mt-10">
              <Heading as="h2" className="text-2xl md:text-3xl">
                Frequently asked questions
              </Heading>
              <Accordion className="mt-6" type="single">
                {country.faqs.map((faq, index) => (
                  <AccordionItem key={faq.question} value={`faq-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionPanel>{faq.answer}</AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ) : null}
        </Container>
      </Section>

      <CtaBar
        heading="Planning a panel shipment to this market?"
        copy="Send destination port, panel quantities and target temperature. We reply with CIF/FOB pricing and a document checklist for your clearing agent."
        className="pb-16 md:pb-24"
      />
    </>
  );
}
