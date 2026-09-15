import {
  CtaBand,
  FaqAccordion,
  LeadFormSection,
  PageHero,
} from "@/components/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Heading, Link, Section } from "@/components/ui";
import { qualityContent } from "@/content/company";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";

const PATH = "/quality-and-testing/";
const page = requirePageByPath(PATH);
const content = qualityContent;

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function QualityAndTestingPage() {
  const breadcrumbs = [
    { name: "Home", href: routes.home },
    { name: "Quality and testing", href: PATH },
  ];

  const faqSchema = faqPageSchema(content.faqs);

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
        h1={page.h1}
        intro={content.intro}
        primaryCta={{ label: "Send QA checklist", href: routes.contact }}
        secondaryCta={{ label: "Request a quotation", href: routes.requestQuote }}
      />

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
            {section.heading === "What we check before dispatch" ? (
              <p className="prose-body mt-4 max-w-3xl text-base text-steel">
                These checks run on the{" "}
                <Link href={routes.manufacturing}>manufacturing line</Link>{" "}
                before bundles are labelled for{" "}
                <Link href={routes.export}>export dispatch</Link>.
              </p>
            ) : null}
          </Container>
        </Section>
      ))}

      <Section background="white">
        <Container>
          <Heading as="h2" className="text-2xl md:text-3xl">
            In-house check summary
          </Heading>
          <p className="prose-body mt-4 max-w-3xl text-base text-steel">
            {content.certificationNote}
          </p>
          <div
            className="mt-8 overflow-x-auto"
            tabIndex={0}
            role="region"
            aria-label="Scrollable testing checks table"
          >
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-line">
                  <th className="py-3 pr-4 font-semibold text-ink">Check</th>
                  <th className="py-3 pr-4 font-semibold text-ink">Method</th>
                  <th className="py-3 font-semibold text-ink">Criteria</th>
                </tr>
              </thead>
              <tbody>
                {content.checks.map((check) => (
                  <tr key={check.name} className="border-b border-line">
                    <td className="py-3 pr-4 text-steel">{check.name}</td>
                    <td className="py-3 pr-4 text-steel">{check.method}</td>
                    <td className="py-3 text-steel">{check.criteria}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="prose-body mt-6 max-w-3xl text-base text-steel">
            Product-specific guidance:{" "}
            <Link href={routes.product("puf-panels")}>PUF panels</Link>,{" "}
            <Link href={routes.product("pir-panels")}>PIR panels</Link>,{" "}
            <Link href={routes.product("fire-rated-panels")}>
              fire-rated panels
            </Link>
            . Term definitions on the{" "}
            <Link href={routes.glossary}>panel glossary</Link>.
          </p>
        </Container>
      </Section>

      {content.faqs.length > 0 ? (
        <FaqAccordion
          faqs={content.faqs}
          heading="Questions on testing and certificates"
        />
      ) : null}

      <Section background="paper">
        <Container>
          <Heading as="h2" className="text-2xl md:text-3xl">
            Related pages
          </Heading>
          <ul className="mt-4 space-y-2 text-base text-steel">
            <li>
              <Link href={routes.manufacturing}>Manufacturing process</Link>
            </li>
            <li>
              <Link href={routes.exportDocumentation}>
                Export documentation
              </Link>
            </li>
            <li>
              <Link href={routes.datasheets}>Request datasheets</Link>
            </li>
            <li>
              <Link href={routes.comparison("puf-vs-pir-panels")}>
                PUF vs PIR comparison
              </Link>
            </li>
            <li>
              <Link href={routes.about}>About us</Link>
            </li>
          </ul>
        </Container>
      </Section>

      <CtaBand heading={content.ctaHeading} copy={content.ctaCopy} />

      <LeadFormSection
        variant="quote"
        heading="Request a project quotation"
        background="white"
        className="pb-16 md:pb-24"
      />
    </>
  );
}
