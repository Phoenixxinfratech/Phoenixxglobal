import { notFound } from "next/navigation";
import {
  CtaBand,
  DownloadBlock,
  FaqAccordion,
  FeatureSplit,
  HoldingPage,
  ImageDetailGrid,
  PageHero,
  PerformanceBars,
  QuickAnswer,
  RelatedContent,
  SpecTable,
} from "@/components/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Heading, Link, Section } from "@/components/ui";
import { getProduct, products } from "@/content";
import type { Product, ThermalPerf } from "@/content/types";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema, faqPageSchema, productSchema } from "@/lib/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function thermalToPerformanceBars(thermal: ThermalPerf[]) {
  const parsed = thermal.map((row) => {
    const numeric = parseFloat(row.uValue.replace(/[^\d.]/g, ""));
    return { row, numeric: Number.isFinite(numeric) ? numeric : 0 };
  });
  const maxU = Math.max(...parsed.map((item) => item.numeric), 0.01);

  return parsed.map(({ row, numeric }) => ({
    label: row.thickness,
    value: numeric,
    max: maxU * 1.05,
    unit: "W/m²K",
  }));
}

const CONTEXTUAL_OVERVIEW_LINKS: Record<
  string,
  Array<{ href: string; label: string }>
> = {
  "puf-panels": [
    { href: routes.solution("cold-storage"), label: "cold storage building approach" },
    { href: routes.product("pir-panels"), label: "PIR sandwich panel specification" },
    { href: routes.comparison("puf-vs-pir-panels"), label: "PUF versus PIR panel comparison" },
  ],
  "pir-panels": [
    { href: routes.product("puf-panels"), label: "standard PUF panel build-up" },
    { href: routes.comparison("puf-vs-pir-panels"), label: "side-by-side PUF and PIR comparison" },
    { href: routes.solution("cold-storage"), label: "freezer room envelope guidance" },
  ],
  "rockwool-panels": [
    { href: routes.product("wall-panels"), label: "insulated wall cladding options" },
    { href: routes.comparison("puf-vs-rockwool-panels"), label: "PUF versus Rockwool trade-offs" },
    { href: routes.product("puf-panels"), label: "polyurethane foam panel range" },
  ],
  "roofing-panels": [
    { href: routes.product("wall-panels"), label: "matching wall sandwich panels" },
    { href: routes.product("puf-panels"), label: "PUF core roof build-ups" },
    { href: routes.exportPackaging, label: "roof sheet container loading notes" },
  ],
  "wall-panels": [
    { href: routes.product("roofing-panels"), label: "insulated roofing panel profiles" },
    { href: routes.product("rockwool-panels"), label: "fire-rated mineral wool walls" },
    { href: routes.solution("warehousing-logistics"), label: "warehouse envelope solutions" },
  ],
};

function ContextualLinkParagraph({ slug }: { slug: string }) {
  const links = CONTEXTUAL_OVERVIEW_LINKS[slug];
  if (!links?.length) return null;

  return (
    <p className="prose-body mt-4 max-w-3xl text-base text-steel">
      Related reading:{" "}
      <Link href={links[0].href}>{links[0].label}</Link>,{" "}
      <Link href={links[1].href}>{links[1].label}</Link>, and{" "}
      <Link href={links[2].href}>{links[2].label}</Link>.
    </p>
  );
}

function ProductBodySections({ product }: { product: Product }) {
  const slug = product.slug;

  return (
    <>
      {product.overview ? (
        <Section background="white">
          <Container>
            <Heading as="h2" className="text-2xl md:text-3xl">
              Overview
            </Heading>
            <p className="prose-body mt-4 max-w-3xl text-base text-steel">
              {product.overview}
            </p>
            <ContextualLinkParagraph slug={slug} />
          </Container>
        </Section>
      ) : null}

      {product.construction ? (
        <Section background="paper">
          <Container>
            <Heading as="h2" className="text-2xl md:text-3xl">
              Construction and build-up
            </Heading>
            <p className="prose-body mt-4 max-w-3xl text-base text-steel">
              {product.construction}
            </p>
          </Container>
        </Section>
      ) : null}

      {product.benefits && product.benefits.length > 0 ? (
        <Section background="white">
          <Container>
            <Heading as="h2" className="text-2xl md:text-3xl">
              Engineering outcomes
            </Heading>
            <ul className="mt-6 space-y-3">
              {product.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex gap-3 text-base text-steel before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-ember before:content-['']"
                >
                  {benefit}
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      {product.selectionGuidance ? (
        <Section background="paper">
          <Container>
            <Heading as="h2" className="text-2xl md:text-3xl">
              How to choose thickness and joint detail
            </Heading>
            <p className="prose-body mt-4 max-w-3xl text-base text-steel">
              {product.selectionGuidance}
            </p>
            <p className="prose-body mt-4 max-w-3xl text-base text-steel">
              Use the{" "}
              <Link href={routes.panelSelection}>
                panel selection walkthrough
              </Link>{" "}
              for a first-pass shortlist, then send drawings through the{" "}
              <Link href={routes.requestQuote}>project quotation form</Link> so
              we can confirm facing, joint and packing against your port.
            </p>
          </Container>
        </Section>
      ) : null}

      {product.thermalPerformance && product.thermalPerformance.length > 0 ? (
        <PerformanceBars
          heading="Indicative thermal transmittance (lower is better)"
          items={thermalToPerformanceBars(product.thermalPerformance)}
        />
      ) : null}

      {product.specs.length > 0 ? (
        <Section background="white">
          <Container>
            <Heading as="h2" className="text-2xl md:text-3xl">
              Technical specifications
            </Heading>
            <SpecTable
              specs={product.specs}
              className="mt-6"
              caption="Values are indicative until confirmed on your approved project documentation."
            />
          </Container>
        </Section>
      ) : null}

      {product.images.length >= 3 ? (
        <ImageDetailGrid
          heading="Panel and cladding details"
          images={product.images.slice(1)}
        />
      ) : null}

      {product.images.length >= 1 && product.installationNotes ? (
        <FeatureSplit
          imageSide="right"
          heading="Installation notes buyers ask about"
          prose={product.installationNotes}
          image={product.images[0]}
          href={routes.exportPackaging}
          linkLabel="Export packing and container loading"
        />
      ) : product.installationNotes ? (
        <Section background="white">
          <Container>
            <Heading as="h2" className="text-2xl md:text-3xl">
              Installation notes
            </Heading>
            <p className="prose-body mt-4 max-w-3xl text-base text-steel">
              {product.installationNotes}
            </p>
          </Container>
        </Section>
      ) : null}

      {product.comparisonNotes ? (
        <Section background="paper">
          <Container>
            <Heading as="h2" className="text-2xl md:text-3xl">
              How this compares to other cores
            </Heading>
            <p className="prose-body mt-4 max-w-3xl text-base text-steel">
              {product.comparisonNotes}
            </p>
            <p className="prose-body mt-4 max-w-3xl text-base text-steel">
              See how we{" "}
              <Link href={routes.export}>ship panels from India</Link>, review{" "}
              <Link href={routes.exportCountry("kenya")}>
                Kenya port and documentation notes
              </Link>
              , or request{" "}
              <Link href={routes.datasheets}>project datasheets</Link> if you
              need numbers in writing before tender submission.
            </p>
          </Container>
        </Section>
      ) : null}

      {product.exportNotes ? (
        <Section background="white">
          <Container>
            <Heading as="h2" className="text-2xl md:text-3xl">
              Export and packing
            </Heading>
            <p className="prose-body mt-4 max-w-3xl text-base text-steel">
              {product.exportNotes}
            </p>
            <p className="prose-body mt-4 max-w-3xl text-base text-steel">
              Questions on documentation or Incoterms sit on the{" "}
              <Link href={routes.exportDocumentation}>
                export documentation checklist
              </Link>
              . For general buyer questions, browse{" "}
              <Link href={routes.faqs}>product and export FAQs</Link>.
            </p>
          </Container>
        </Section>
      ) : null}

      {product.relatedProducts.length > 0 ? (
        <Section background="paper">
          <Container>
            <Heading as="h2" className="text-2xl md:text-3xl">
              Often specified together
            </Heading>
            <ul className="mt-4 space-y-2">
              {product.relatedProducts.slice(0, 3).map((relatedSlug) => {
                const related = getProduct(relatedSlug);
                if (!related) return null;
                return (
                  <li key={relatedSlug}>
                    <Link href={routes.product(relatedSlug)}>{related.name}</Link>
                  </li>
                );
              })}
            </ul>
          </Container>
        </Section>
      ) : null}
    </>
  );
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  return buildMetadata({
    title: product.seoTitle,
    description: product.metaDescription,
    path: routes.product(slug),
    draft: product.draft,
  });
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const breadcrumbs = [
    { name: "Home", href: routes.home },
    { name: "Products", href: routes.products },
    { name: product.shortName, href: routes.product(slug) },
  ];

  if (product.draft) {
    return (
      <>
        <JsonLd
          data={breadcrumbSchema(
            breadcrumbs.map((item) => ({ name: item.name, path: item.href })),
          )}
        />
        <HoldingPage
          h1={product.h1}
          holdingCopy={product.holdingCopy ?? product.summary}
          breadcrumbs={[
            { label: "Home", href: routes.home },
            { label: "Products", href: routes.products },
            { label: product.shortName },
          ]}
          relatedLinks={[
            { slug: "puf-panels", name: "PUF sandwich panels", href: routes.product("puf-panels") },
            { slug: "pir-panels", name: "PIR sandwich panels", href: routes.product("pir-panels") },
            { slug: "rockwool-panels", name: "Rockwool sandwich panels", href: routes.product("rockwool-panels") },
            { slug: "cold-storage", name: "Cold storage solutions", href: routes.solution("cold-storage") },
            { slug: "puf-vs-pir", name: "PUF vs PIR comparison", href: routes.comparison("puf-vs-pir-panels") },
            { slug: "export", name: "Export process overview", href: routes.export },
            { slug: "kenya", name: "Export to Kenya", href: routes.exportCountry("kenya") },
            { slug: "datasheets", name: "Request a datasheet", href: routes.datasheets },
            { slug: "request-quote", name: "Request a quotation", href: routes.requestQuote },
          ]}
          relatedEntityType="product"
          relatedEntitySlug={slug}
          productSlug={slug}
        />
      </>
    );
  }

  const faqSchema = faqPageSchema(product.faqs);
  const heroImage = product.images[0];
  const keySpecs = product.keySpec
    ? [{ label: "Key specification", value: product.keySpec }]
    : undefined;

  return (
    <>
      <JsonLd
        data={[
          productSchema(product),
          breadcrumbSchema(
            breadcrumbs.map((item) => ({ name: item.name, path: item.href })),
          ),
          ...(faqSchema ? [faqSchema] : []),
        ]}
      />

      <PageHero
        breadcrumbs={breadcrumbs}
        h1={product.h1}
        intro={product.summary}
        keySpecs={keySpecs}
        quoteProductSlug={slug}
        secondaryCta={{ label: "Request datasheet", href: routes.datasheets }}
        image={heroImage}
      />

      {product.quickAnswer ? (
        <QuickAnswer heading="Quick answer" text={product.quickAnswer} />
      ) : null}

      <ProductBodySections product={product} />

      {product.faqs.length > 0 ? (
        <FaqAccordion faqs={product.faqs} heading="Buyer questions on this panel type" />
      ) : null}

      <Section background="white">
        <Container>
          <RelatedContent entityType="product" slug={slug} />
        </Container>
      </Section>

      {product.datasheet ? (
        <DownloadBlock
          heading="Downloads"
          files={[
            {
              name: `${product.shortName} datasheet`,
              href: product.datasheet,
              exists: true,
            },
          ]}
        />
      ) : null}

      <CtaBand
        productSlug={slug}
        heading={`Specify ${product.shortName} for your project`}
        copy="Send room or building dimensions, target temperature if any, and destination port. We reply with thickness, joint detail and export pricing in writing."
        className="pb-16 md:pb-24"
      />
    </>
  );
}
