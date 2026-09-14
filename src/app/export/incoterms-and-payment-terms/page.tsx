import {
  ComparisonTable,
  CtaBand,
  FaqAccordion,
  InlineSpecCallout,
  LeadFormSection,
  PageHero,
} from "@/components/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Heading, Link, Section } from "@/components/ui";
import { exportIncotermsContent } from "@/content/export";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";

const PATH = "/export/incoterms-and-payment-terms/";
const page = requirePageByPath(PATH);
const content = exportIncotermsContent;

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function ExportIncotermsPage() {
  const breadcrumbs = [
    { name: "Home", href: routes.home },
    { name: "Export", href: routes.export },
    { name: "Incoterms and payment", href: PATH },
  ];
  const faqSchema = faqPageSchema(content.faqs);

  const incotermTable = {
    columns: ["What we typically arrange", "What buyer typically arranges", "When it is chosen"],
    rows: content.incotermRows.map((row) => ({
      label: row.label,
      values: row.values,
    })),
  };

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
        primaryCta={{ label: "State Incoterm on RFQ", href: routes.requestQuote }}
        secondaryCta={{ label: "Lead time notes", href: routes.exportLeadTime }}
      />

      <ComparisonTable
        heading="Incoterms — practical responsibility split"
        columns={incotermTable.columns}
        rows={incotermTable.rows}
      />

      <Section background="white">
        <Container>
          <InlineSpecCallout>{content.proformaNote}</InlineSpecCallout>
        </Container>
      </Section>

      <Section background="paper">
        <Container>
          <Heading as="h2" className="text-2xl md:text-3xl">
            {content.paymentSection.heading}
          </Heading>
          {content.paymentSection.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="prose-body mt-4 max-w-3xl text-base text-steel"
            >
              {paragraph}
            </p>
          ))}
          <p className="prose-body mt-4 max-w-3xl text-base text-steel">
            Full order sequence:{" "}
            <Link href={routes.exportProcess}>export process</Link>.
            Document presentation under L/C:{" "}
            <Link href={routes.exportDocumentation}>commercial document set</Link>.
            Export hub: <Link href={routes.export}>export from India</Link>.
          </p>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <Heading as="h2" className="text-2xl md:text-3xl">
            Related pages
          </Heading>
          <ul className="mt-4 space-y-2 text-base text-steel">
            <li>
              <Link href={routes.exportPackaging}>Packaging and container loading</Link>
            </li>
            <li>
              <Link href={routes.exportLeadTime}>Lead time and freight</Link>
            </li>
            <li>
              <Link href={routes.exportCountry("kenya")}>Kenya export notes</Link>
            </li>
            <li>
              <Link href={routes.product("cold-room-panels")}>Cold room panel kits</Link>
            </li>
            <li>
              <Link href={routes.solution("cold-storage")}>Cold storage solutions</Link>
            </li>
            <li>
              <Link href={routes.faqs}>Export and lead time FAQs</Link>
            </li>
            <li>
              <Link href={routes.contact}>Contact export sales</Link>
            </li>
          </ul>
        </Container>
      </Section>

      <FaqAccordion faqs={content.faqs} heading="Incoterms and payment FAQs" />

      <CtaBand heading={content.ctaHeading} copy={content.ctaCopy} />

      <LeadFormSection
        variant="quote"
        heading="Request a quotation with your Incoterm"
        background="white"
        className="pb-16 md:pb-24"
      />
    </>
  );
}
