import {
  CtaBand,
  FaqAccordion,
  LeadFormSection,
  PageHero,
  ProcessTimeline,
} from "@/components/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Heading, Link, Section } from "@/components/ui";
import { exportProcessContent } from "@/content/export";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";

const PATH = "/export/process/";
const page = requirePageByPath(PATH);
const content = exportProcessContent;

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function ExportProcessPage() {
  const breadcrumbs = [
    { name: "Home", href: routes.home },
    { name: "Export", href: routes.export },
    { name: "Process", href: PATH },
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
        primaryCta={{ label: "Start with a quote", href: routes.requestQuote }}
        secondaryCta={{ label: "Documentation checklist", href: routes.exportDocumentation }}
      />

      <ProcessTimeline heading="Enquiry to installation" steps={content.processSteps} />

      <Section background="white">
        <Container>
          <Heading as="h2" className="text-2xl md:text-3xl">
            {content.buyerInputs.heading}
          </Heading>
          {content.buyerInputs.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="prose-body mt-4 max-w-3xl text-base text-steel"
            >
              {paragraph}
            </p>
          ))}
          <p className="prose-body mt-4 max-w-3xl text-base text-steel">
            Document requirements:{" "}
            <Link href={routes.exportDocumentation}>shipping documentation</Link>.
            Incoterm choice:{" "}
            <Link href={routes.exportIncoterms}>incoterms and payment</Link>.
          </p>
        </Container>
      </Section>

      <Section background="paper">
        <Container>
          <Heading as="h2" className="text-2xl md:text-3xl">
            {content.installationNote.heading}
          </Heading>
          {content.installationNote.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="prose-body mt-4 max-w-3xl text-base text-steel"
            >
              {paragraph}
            </p>
          ))}
          <p className="prose-body mt-4 max-w-3xl text-base text-steel">
            Packing detail:{" "}
            <Link href={routes.exportPackaging}>packaging and container loading</Link>.
            Indicative transit:{" "}
            <Link href={routes.exportLeadTime}>lead time and freight</Link>.
            Kenya port example:{" "}
            <Link href={routes.exportCountry("kenya")}>Kenya export page</Link>.
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
              <Link href={routes.export}>Export from India hub</Link>
            </li>
            <li>
              <Link href={routes.exportIncoterms}>Incoterms and payment terms</Link>
            </li>
            <li>
              <Link href={routes.product("puf-panels")}>PUF panel specifications</Link>
            </li>
            <li>
              <Link href={routes.solution("warehousing-logistics")}>Warehouse export projects</Link>
            </li>
            <li>
              <Link href={routes.manufacturing}>Manufacturing sequence</Link>
            </li>
            <li>
              <Link href={routes.faqs}>Buyer FAQs</Link>
            </li>
            <li>
              <Link href={routes.about}>About PHOENIXX SMARTBUILD</Link>
            </li>
          </ul>
        </Container>
      </Section>

      <FaqAccordion faqs={content.faqs} heading="Process FAQs" />

      <CtaBand heading={content.ctaHeading} copy={content.ctaCopy} />

      <LeadFormSection
        variant="quote"
        heading="Request a quotation"
        background="paper"
        className="pb-16 md:pb-24"
      />
    </>
  );
}
