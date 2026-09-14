import {
  CtaBand,
  FaqAccordion,
  LeadFormSection,
  InlineLink,
  PageHero,
  QuickAnswer,
} from "@/components/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Heading, Link, Section } from "@/components/ui";
import { countries } from "@/content";
import { exportHubContent } from "@/content/export";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema, faqPageSchema, itemListSchema } from "@/lib/schema";

const PATH = "/export/";
const page = requirePageByPath(PATH);
const content = exportHubContent;

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function ExportHubPage() {
  const liveCountries = countries.filter((c) => !c.draft);
  const breadcrumbs = [
    { name: "Home", href: routes.home },
    { name: "Export", href: PATH },
  ];
  const faqSchema = faqPageSchema(content.faqs);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs.map((item) => ({ name: item.name, path: item.href }))),
          itemListSchema(
            "Export markets",
            countries.map((c) => ({
              name: c.name,
              path: routes.exportCountry(c.slug),
            })),
          ),
          ...(faqSchema ? [faqSchema] : []),
        ]}
      />

      <PageHero
        breadcrumbs={breadcrumbs}
        h1={page.h1}
        intro={content.intro}
        keySpecs={content.keySpecs}
        primaryCta={{ label: "Request export quotation", href: routes.requestQuote }}
        secondaryCta={{ label: "Export process overview", href: routes.exportProcess }}
        image={content.heroImage}
      />

      <QuickAnswer heading={content.quickAnswer.heading}>
        {content.quickAnswer.text}
      </QuickAnswer>

      {content.sections.map((section, index) => (
        <Section
          key={section.heading}
          background={index % 2 === 0 ? "white" : "paper"}
        >
          <Container>
            <Heading as="h2" className="text-2xl md:text-3xl">
              {section.heading}
            </Heading>
            {section.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="prose-body mt-4 max-w-3xl text-base text-steel"
              >
                {paragraph}
              </p>
            ))}
            {section.heading === "What we export" ? (
              <p className="prose-body mt-4 max-w-3xl text-base text-steel">
                Start with{" "}
                <Link href={routes.product("puf-panels")}>PUF panels</Link>,{" "}
                <Link href={routes.product("pir-panels")}>PIR panels</Link> or{" "}
                <Link href={routes.product("cold-room-panels")}>cold room kits</Link>{" "}
                — full specs on the{" "}
                <Link href={routes.products}>products hub</Link>.
              </p>
            ) : null}
            {section.heading === "How orders run" ? (
              <p className="prose-body mt-4 max-w-3xl text-base text-steel">
                Step-by-step detail on the{" "}
                <Link href={routes.exportProcess}>export process page</Link>.
              </p>
            ) : null}
            {section.heading === "Packing and container loading" ? (
              <p className="prose-body mt-4 max-w-3xl text-base text-steel">
                Bundle construction and container selection:{" "}
                <Link href={routes.exportPackaging}>packaging and loading</Link>.
              </p>
            ) : null}
            {section.heading === "Documentation we prepare" ? (
              <p className="prose-body mt-4 max-w-3xl text-base text-steel">
                Full document list:{" "}
                <Link href={routes.exportDocumentation}>shipping documentation</Link>.
              </p>
            ) : null}
            {section.heading === "Freight and lead times" ? (
              <p className="prose-body mt-4 max-w-3xl text-base text-steel">
                Indicative transit and delay drivers:{" "}
                <Link href={routes.exportLeadTime}>lead time and freight</Link>.
              </p>
            ) : null}
            {section.heading === "Payment and commercial terms" ? (
              <p className="prose-body mt-4 max-w-3xl text-base text-steel">
                Incoterm and payment framing:{" "}
                <Link href={routes.exportIncoterms}>incoterms and payment terms</Link>.
              </p>
            ) : null}
            {section.heading === "Markets we ship to" ? (
              <p className="prose-body mt-4 max-w-3xl text-base text-steel">
                Regional overview:{" "}
                <Link href={routes.exportAfrica}>export to Africa</Link>. Kenya
                buyers:{" "}
                <Link href={routes.exportCountry("kenya")}>Kenya export page</Link>.
              </p>
            ) : null}
          </Container>
        </Section>
      ))}

      <Section background="white">
        <Container>
          <Heading as="h2" className="text-2xl md:text-3xl">
            Export support pages
          </Heading>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {content.supportLinks.map((link) => (
              <li
                key={link.href}
                className="rounded-[2px] border border-line p-5"
              >
                <InlineLink
                  href={link.href}
                  className="text-lg font-semibold text-ink hover:text-ember"
                >
                  {link.label}
                </InlineLink>
                <p className="mt-2 text-sm text-steel">{link.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {liveCountries.length > 0 ? (
        <Section background="paper">
          <Container>
            <Heading as="h2" className="text-2xl md:text-3xl">
              Country pages — live
            </Heading>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {liveCountries.map((country) => (
                <li
                  key={country.slug}
                  className="rounded-[2px] border border-line p-5"
                >
                  <InlineLink
                    href={routes.exportCountry(country.slug)}
                    className="text-lg font-semibold text-ink hover:text-ember"
                  >
                    {country.name}
                  </InlineLink>
                  <p className="mt-2 text-sm text-steel">{country.metaDescription}</p>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      <Section background="white">
        <Container>
          <Heading as="h2" className="text-2xl md:text-3xl">
            All export markets
          </Heading>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {countries.map((country) => (
              <li key={country.slug}>
                <InlineLink href={routes.exportCountry(country.slug)}>
                  {country.name}
                  {country.draft ? " (draft)" : ""}
                </InlineLink>
              </li>
            ))}
          </ul>
          <p className="prose-body mt-6 max-w-3xl text-base text-steel">
            Manufacturing context:{" "}
            <Link href={routes.manufacturing}>Ahmedabad plant overview</Link>.
            Application fit:{" "}
            <Link href={routes.solution("cold-storage")}>cold storage solutions</Link>.
            General buyer questions:{" "}
            <Link href={routes.faqs}>FAQs</Link>.
          </p>
        </Container>
      </Section>

      <FaqAccordion faqs={content.faqs} heading="Export hub FAQs" />

      <CtaBand heading={content.ctaHeading} copy={content.ctaCopy} />

      <LeadFormSection
        variant="quote"
        heading="Request an export quotation"
        background="white"
        className="pb-16 md:pb-24"
      />
    </>
  );
}
