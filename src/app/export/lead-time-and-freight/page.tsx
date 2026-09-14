import {
  CtaBand,
  FaqAccordion,
  FeatureSplit,
  InlineSpecCallout,
  LeadFormSection,
  PageHero,
  SpecTable,
} from "@/components/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Heading, Link, Section } from "@/components/ui";
import { exportLeadTimeContent } from "@/content/export";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";

const PATH = "/export/lead-time-and-freight/";
const page = requirePageByPath(PATH);
const content = exportLeadTimeContent;

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function ExportLeadTimePage() {
  const breadcrumbs = [
    { name: "Home", href: routes.home },
    { name: "Export", href: routes.export },
    { name: "Lead time and freight", href: PATH },
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
        primaryCta={{ label: "Ask for production window", href: routes.requestQuote }}
        secondaryCta={{ label: "Incoterms and payment", href: routes.exportIncoterms }}
      />

      <Section background="white">
        <Container>
          <Heading as="h2" className="text-2xl md:text-3xl">
            {content.productionDrivers.heading}
          </Heading>
          {content.productionDrivers.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="prose-body mt-4 max-w-3xl text-base text-steel"
            >
              {paragraph}
            </p>
          ))}
          <p className="prose-body mt-4 max-w-3xl text-base text-steel">
            Manufacturing detail:{" "}
            <Link href={routes.manufacturing}>Ahmedabad production sequence</Link>.
          </p>
        </Container>
      </Section>

      <FeatureSplit
        heading={content.transitSection.heading}
        prose={content.transitSection.paragraphs.join(" ")}
        bullets={[
          "Indian west coast ports (e.g. Mundra / Nhava Sheva — confirm per shipment)",
          "East Africa often roughly 18–28 days — indicative, not guaranteed",
          "West and Southern Africa typically wider range — confirm with forwarder",
        ]}
        image={{
          src: "/images/solutions/port-cargo.jpg",
          alt: "Cargo ship with containers at a port — indicative ocean freight context",
          width: 2560,
          height: 1707,
          caption: "Stock photo — port transit context; not a Phoenixx sailing schedule.",
          isStock: true,
        }}
        href={routes.exportCountry("kenya")}
        linkLabel="Kenya port and transit notes"
        imageSide="left"
      />

      <Section background="paper">
        <Container>
          <Heading as="h2" className="text-2xl md:text-3xl">
            Indicative timeline ranges
          </Heading>
          <div className="mt-6 max-w-4xl">
            <SpecTable
              specs={content.transitTable}
              caption="Planning ranges — confirm on your proforma invoice"
            />
          </div>
          <InlineSpecCallout className="mt-6">
            Transit and clearance durations are indicative planning aids only. Vessel
            schedules, transshipment and destination customs processing are outside our
            control — build buffer into critical-path programmes.
          </InlineSpecCallout>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <Heading as="h2" className="text-2xl md:text-3xl">
            {content.delaySection.heading}
          </Heading>
          {content.delaySection.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="prose-body mt-4 max-w-3xl text-base text-steel"
            >
              {paragraph}
            </p>
          ))}
          <p className="prose-body mt-4 max-w-3xl text-base text-steel">
            Reduce documentation delays:{" "}
            <Link href={routes.exportDocumentation}>export document checklist</Link>.
            Packing and loading schedule:{" "}
            <Link href={routes.exportPackaging}>container loading</Link>.
            Process overview: <Link href={routes.exportProcess}>export process</Link>.
          </p>
        </Container>
      </Section>

      <Section background="paper">
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
              <Link href={routes.exportAfrica}>Export to Africa overview</Link>
            </li>
            <li>
              <Link href={routes.product("cold-room-panels")}>Cold room panel lead times</Link>
            </li>
            <li>
              <Link href={routes.contact}>Contact export team</Link>
            </li>
          </ul>
        </Container>
      </Section>

      <FaqAccordion faqs={content.faqs} heading="Lead time and freight FAQs" />

      <CtaBand heading={content.ctaHeading} copy={content.ctaCopy} />

      <LeadFormSection
        variant="quote"
        heading="Request a dated quotation"
        background="paper"
        className="pb-16 md:pb-24"
      />
    </>
  );
}
