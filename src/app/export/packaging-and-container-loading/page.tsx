import {
  ComparisonTable,
  CtaBand,
  FaqAccordion,
  FeatureSplit,
  ImageDetailGrid,
  LeadFormSection,
  PageHero,
} from "@/components/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Heading, Link, Section } from "@/components/ui";
import { exportPackagingContent } from "@/content/export";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";

const PATH = "/export/packaging-and-container-loading/";
const page = requirePageByPath(PATH);
const content = exportPackagingContent;

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

function ContainerLoadingDiagram() {
  return (
    <figure className="mx-auto max-w-lg">
      <svg
        viewBox="0 0 420 200"
        role="img"
        aria-label="Schematic side view of panel bundles stacked inside a 40-foot high-cube container"
        className="w-full text-graphite"
      >
        <title>Panel bundle stacking inside a container — schematic</title>
        <rect
          x="20"
          y="30"
          width="380"
          height="150"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-line"
        />
        <rect x="30" y="140" width="360" height="30" fill="currentColor" className="text-graphite" opacity="0.15" />
        <rect x="40" y="110" width="340" height="28" fill="currentColor" className="text-graphite" opacity="0.25" />
        <rect x="40" y="80" width="340" height="28" fill="currentColor" className="text-graphite" opacity="0.25" />
        <rect x="40" y="50" width="340" height="28" fill="currentColor" className="text-graphite" opacity="0.25" />
        <line x1="30" y1="138" x2="390" y2="138" stroke="currentColor" strokeWidth="1" className="text-ember" strokeDasharray="4 3" />
        <text x="200" y="22" textAnchor="middle" className="fill-ink text-[11px] font-medium">
          40-foot HC — schematic bundle stack (not to scale)
        </text>
        <text x="200" y="185" textAnchor="middle" className="fill-steel text-[10px]">
          Edge protectors + spreader boards on bottom layer
        </text>
      </svg>
      <figcaption className="mt-2 text-center text-sm text-steel">
        Concept diagram — actual load plan varies by panel length, thickness and profile.
      </figcaption>
    </figure>
  );
}

export default function ExportPackagingPage() {
  const breadcrumbs = [
    { name: "Home", href: routes.home },
    { name: "Export", href: routes.export },
    { name: "Packaging", href: PATH },
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
        primaryCta={{ label: "Request loading estimate", href: routes.requestQuote }}
        secondaryCta={{ label: "Export process", href: routes.exportProcess }}
      />

      <Section background="white">
        <Container>
          <Heading as="h2" className="text-2xl md:text-3xl">
            {content.bundleSection.heading}
          </Heading>
          {content.bundleSection.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="prose-body mt-4 max-w-3xl text-base text-steel"
            >
              {paragraph}
            </p>
          ))}
        </Container>
      </Section>

      <FeatureSplit
        heading={content.containerSection.heading}
        prose={content.containerSection.paragraphs.join(" ")}
        bullets={[
          "Longest panel length sets minimum internal container length",
          "40-foot HC adds headroom for tall stacks without crushing lower layers",
          "m² per box confirmed on proforma — not assumed from another project",
        ]}
        image={content.detailImages[0]!}
        href={routes.exportLeadTime}
        linkLabel="Lead time and freight notes"
        imageSide="right"
      />

      <Section background="paper">
        <Container>
          <Heading as="h2" className="text-2xl md:text-3xl">
            Loading concept
          </Heading>
          <p className="prose-body mt-4 max-w-3xl text-base text-steel">
            Bottom layers carry compressive load from the stack above — spreader boards
            and limited layer count protect thin panels. Panel length drives whether
            sheets lie flat along the container floor or need shorter cut lengths from
            engineering.
          </p>
          <div className="mt-8">
            <ContainerLoadingDiagram />
          </div>
        </Container>
      </Section>

      <ComparisonTable
        heading="Container type comparison (indicative)"
        columns={content.containerComparison.columns}
        rows={content.containerComparison.rows}
      />

      <Section background="white">
        <Container>
          <Heading as="h2" className="text-2xl md:text-3xl">
            {content.damageSection.heading}
          </Heading>
          {content.damageSection.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="prose-body mt-4 max-w-3xl text-base text-steel"
            >
              {paragraph}
            </p>
          ))}
          <p className="prose-body mt-4 max-w-3xl text-base text-steel">
            Factory checks:{" "}
            <Link href={routes.manufacturing}>manufacturing and packing</Link>.
            Document alignment:{" "}
            <Link href={routes.exportDocumentation}>packing list documentation</Link>.
            Product-specific notes:{" "}
            <Link href={routes.product("puf-panels")}>PUF sandwich panels</Link>,{" "}
            <Link href={routes.product("roofing-panels")}>roofing panel profiles</Link>.
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
              <Link href={routes.exportLeadTime}>Lead time and freight</Link>
            </li>
            <li>
              <Link href={routes.solution("cold-storage")}>Cold storage packing context</Link>
            </li>
            <li>
              <Link href={routes.faqs}>Container MOQ FAQs</Link>
            </li>
          </ul>
        </Container>
      </Section>

      <ImageDetailGrid
        heading="Port and warehouse context — stock photography"
        images={content.detailImages}
      />

      <FaqAccordion faqs={content.faqs} heading="Packaging and loading FAQs" />

      <CtaBand heading={content.ctaHeading} copy={content.ctaCopy} />

      <LeadFormSection
        variant="quote"
        heading="Request m² per container on your quote"
        background="paper"
        className="pb-16 md:pb-24"
      />
    </>
  );
}
