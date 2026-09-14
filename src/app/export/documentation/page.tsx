import {
  CtaBand,
  FaqAccordion,
  InlineSpecCallout,
  LeadFormSection,
  PageHero,
  SpecTable,
} from "@/components/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Heading, Link, Section } from "@/components/ui";
import { exportDocumentationContent } from "@/content/export";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";

const PATH = "/export/documentation/";
const page = requirePageByPath(PATH);
const content = exportDocumentationContent;

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function ExportDocumentationPage() {
  const breadcrumbs = [
    { name: "Home", href: routes.home },
    { name: "Export", href: routes.export },
    { name: "Documentation", href: PATH },
  ];
  const faqSchema = faqPageSchema(content.faqs);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs.map((item) => ({ name: item.name, path: item.href }))),
          ...(faqSchema ? [faqSchema] : []),
        ]}
      />

      <PageHero
        breadcrumbs={breadcrumbs}
        h1={page.h1}
        intro={content.intro}
        primaryCta={{ label: "Share agent checklist", href: routes.contact }}
        secondaryCta={{ label: "Export process", href: routes.exportProcess }}
      />

      <Section background="white">
        <Container>
          <Heading as="h2" className="text-2xl md:text-3xl">
            {content.standardDocs.heading}
          </Heading>
          {content.standardDocs.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="prose-body mt-4 max-w-3xl text-base text-steel"
            >
              {paragraph}
            </p>
          ))}
        </Container>
      </Section>

      <Section background="paper">
        <Container>
          <Heading as="h2" className="text-2xl md:text-3xl">
            {content.buyerAgentNote.heading}
          </Heading>
          {content.buyerAgentNote.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="prose-body mt-4 max-w-3xl text-base text-steel"
            >
              {paragraph}
            </p>
          ))}
          <InlineSpecCallout>
            We do not guarantee customs clearance outcomes, duty rates or import timelines
            at any destination. Country pages such as{" "}
            <Link href={routes.exportCountry("kenya")}>Kenya</Link> describe common
            workflows — verify current rules with your clearing agent before dispatch.
          </InlineSpecCallout>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <Heading as="h2" className="text-2xl md:text-3xl">
            {content.optionalDocs.heading}
          </Heading>
          {content.optionalDocs.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="prose-body mt-4 max-w-3xl text-base text-steel"
            >
              {paragraph}
            </p>
          ))}
          <p className="prose-body mt-4 max-w-3xl text-base text-steel">
            Quality practices:{" "}
            <Link href={routes.qualityAndTesting}>quality and testing</Link>.
            Packing list alignment:{" "}
            <Link href={routes.exportPackaging}>packaging and loading</Link>.
          </p>
        </Container>
      </Section>

      <Section background="paper">
        <Container>
          <Heading as="h2" className="text-2xl md:text-3xl">
            Document responsibility split
          </Heading>
          <div className="mt-6 max-w-4xl">
            <SpecTable
              specs={content.docTable}
              caption="Who prepares what — standard export panel shipment"
            />
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <Heading as="h2" className="text-2xl md:text-3xl">
            Related pages
          </Heading>
          <ul className="mt-4 space-y-2 text-base text-steel">
            <li>
              <Link href={routes.exportProcess}>Export process overview</Link>
            </li>
            <li>
              <Link href={routes.exportIncoterms}>Incoterms and payment terms</Link>
            </li>
            <li>
              <Link href={routes.exportPackaging}>Packing list and bundle labels</Link>
            </li>
            <li>
              <Link href={routes.exportLeadTime}>Lead time and freight</Link>
            </li>
            <li>
              <Link href={routes.export}>Export from India hub</Link>
            </li>
            <li>
              <Link href={routes.exportCountry("kenya")}>Kenya import documentation notes</Link>
            </li>
            <li>
              <Link href={routes.manufacturing}>Manufacturing and dispatch checks</Link>
            </li>
            <li>
              <Link href={routes.requestQuote}>Request a quotation</Link>
            </li>
          </ul>
        </Container>
      </Section>

      <FaqAccordion faqs={content.faqs} heading="Documentation FAQs" />

      <CtaBand heading={content.ctaHeading} copy={content.ctaCopy} />

      <LeadFormSection
        variant="quote"
        heading="Request a quotation with document requirements"
        background="white"
        className="pb-16 md:pb-24"
      />
    </>
  );
}
