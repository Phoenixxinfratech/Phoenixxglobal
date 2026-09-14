import type { ReactNode } from "react";
import {
  CtaBand,
  FeatureSplit,
  ImageDetailGrid,
  LeadFormSection,
  PageHero,
  ProcessTimeline,
} from "@/components/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Heading, Link, Section } from "@/components/ui";
import { manufacturingContent } from "@/content/company";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/manufacturing/";
const page = requirePageByPath(PATH);
const content = manufacturingContent;

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

function ProseBlock({
  block,
  background,
  footer,
}: {
  block: { heading: string; paragraphs: string[] };
  background: "white" | "paper";
  footer?: ReactNode;
}) {
  return (
    <Section background={background}>
      <Container>
        <Heading as="h2" className="text-2xl md:text-3xl">
          {block.heading}
        </Heading>
        {block.paragraphs.map((paragraph) => (
          <p
            key={paragraph.slice(0, 48)}
            className="prose-body mt-4 max-w-3xl text-base text-steel"
          >
            {paragraph}
          </p>
        ))}
        {footer}
      </Container>
    </Section>
  );
}

export default function ManufacturingPage() {
  const breadcrumbs = [
    { name: "Home", href: routes.home },
    { name: "Manufacturing", href: PATH },
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(
          breadcrumbs.map((item) => ({ name: item.name, path: item.href })),
        )}
      />

      <PageHero
        breadcrumbs={breadcrumbs}
        h1={page.h1}
        intro={content.intro}
        primaryCta={{ label: "Request plant notes", href: routes.contact }}
        secondaryCta={{ label: "Send BOQ for quote", href: routes.requestQuote }}
        image={content.featureSplit.image}
      />

      <ProcessTimeline
        heading="Manufacturing sequence"
        steps={content.processSteps}
      />

      <FeatureSplit
        heading={content.featureSplit.heading}
        prose={content.featureSplit.prose}
        bullets={content.featureSplit.bullets}
        image={content.featureSplit.image}
        href={routes.qualityAndTesting}
        linkLabel="Quality checks before dispatch"
        imageSide="left"
      />

      <ProseBlock
        block={content.rawMaterials}
        background="paper"
        footer={
          <p className="prose-body mt-4 max-w-3xl text-base text-steel">
            Core options are compared on{" "}
            <Link href={routes.product("puf-panels")}>PUF panel</Link> and{" "}
            <Link href={routes.product("pir-panels")}>PIR panel</Link> pages.
            Fire-rated walls use{" "}
            <Link href={routes.product("rockwool-panels")}>Rockwool panels</Link>
            .
          </p>
        }
      />

      <ProseBlock
        block={content.inProcessChecks}
        background="white"
        footer={
          <p className="prose-body mt-4 max-w-3xl text-base text-steel">
            Full check list on{" "}
            <Link href={routes.qualityAndTesting}>quality and testing</Link>.
            Compare core performance on the{" "}
            <Link href={routes.comparison("puf-vs-pir-panels")}>
              PUF vs PIR comparison
            </Link>
            .
          </p>
        }
      />

      <ProseBlock
        block={content.packing}
        background="paper"
        footer={
          <p className="prose-body mt-4 max-w-3xl text-base text-steel">
            Export packing and container loading are covered on the{" "}
            <Link href={routes.export}>export hub</Link> and the{" "}
            <Link href={routes.exportPackaging}>
              packaging and container loading
            </Link>{" "}
            page. Kenya buyers should read{" "}
            <Link href={routes.exportCountry("kenya")}>Kenya import notes</Link>
            .
          </p>
        }
      />

      <ImageDetailGrid
        heading="Process context — stock photography"
        images={content.detailImages}
      />

      <Section background="white">
        <Container>
          <Heading as="h2" className="text-2xl md:text-3xl">
            Related pages
          </Heading>
          <ul className="mt-4 space-y-2 text-base text-steel">
            <li>
              <Link href={routes.about}>About PHOENIXX SMARTBUILD</Link>
            </li>
            <li>
              <Link href={routes.products}>Full product range</Link>
            </li>
            <li>
              <Link href={routes.solution("cold-storage")}>
                Cold storage solutions
              </Link>
            </li>
            <li>
              <Link href={routes.exportProcess}>Export process overview</Link>
            </li>
            <li>
              <Link href={routes.faqs}>Specification and lead time FAQs</Link>
            </li>
            <li>
              <Link href={routes.contact}>Contact the export team</Link>
            </li>
          </ul>
        </Container>
      </Section>

      <CtaBand heading={content.ctaHeading} copy={content.ctaCopy} />

      <LeadFormSection
        variant="quote"
        heading="Send BOQ for a quotation"
        background="paper"
        className="pb-16 md:pb-24"
      />
    </>
  );
}
