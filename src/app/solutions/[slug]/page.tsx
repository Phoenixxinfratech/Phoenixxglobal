import { notFound } from "next/navigation";
import {
  CtaBand,
  FaqAccordion,
  HoldingPage,
  LeadFormSection,
  PageHero,
  ProcessTimeline,
  ProductGrid,
  QuickAnswer,
  RelatedContent,
  SpecTable,
} from "@/components/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Heading, Link, Section } from "@/components/ui";
import { getProduct, getSolution, solutions } from "@/content";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const LIVE_RELATED_LINKS = [
  { slug: "puf-panels", name: "PUF sandwich panels", href: routes.product("puf-panels") },
  { slug: "pir-panels", name: "PIR sandwich panels", href: routes.product("pir-panels") },
  { slug: "cold-room-panels", name: "Cold room panel kits", href: routes.product("cold-room-panels") },
  { slug: "cold-storage", name: "Cold storage solutions", href: routes.solution("cold-storage") },
  { slug: "export", name: "Export from India", href: routes.export },
  { slug: "kenya", name: "Kenya export market", href: routes.exportCountry("kenya") },
  { slug: "faqs", name: "Export and specification FAQs", href: routes.faqs },
  { slug: "request-quote", name: "Request a quotation", href: routes.requestQuote },
];

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};

  return buildMetadata({
    title: solution.seoTitle,
    description: solution.metaDescription,
    path: routes.solution(slug),
    draft: solution.draft,
  });
}

function FailurePointsSection({
  failurePoints,
}: {
  failurePoints: Array<{ problem: string; prevention: string }>;
}) {
  if (!failurePoints.length) return null;

  return (
    <Section background="paper">
      <Container>
        <Heading as="h2" className="text-2xl md:text-3xl">
          Field failures we design against
        </Heading>
        <p className="prose-body mt-4 max-w-3xl text-base text-steel">
          These are the callbacks we hear after panels leave the factory — not
          theoretical risks. Each pair below maps a site problem to the detail
          we specify on drawings before dispatch.
        </p>
        <ul className="mt-8 space-y-6">
          {failurePoints.map((point) => (
            <li
              key={point.problem.slice(0, 40)}
              className="rounded-[2px] border border-line bg-white p-6"
            >
              <h3 className="text-base font-semibold text-ink">Problem</h3>
              <p className="mt-2 text-base text-steel">{point.problem}</p>
              <h3 className="mt-4 text-base font-semibold text-ink">Prevention</h3>
              <p className="mt-2 text-base text-steel">{point.prevention}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

function ProductRationaleSection({
  slug,
  items,
}: {
  slug: string;
  items: Array<{ slug: string; why: string }>;
}) {
  if (!items.length) return null;

  return (
    <Section background="white">
      <Container>
        <Heading as="h2" className="text-2xl md:text-3xl">
          Products matched to this application
        </Heading>
        <ul className="mt-6 space-y-6">
          {items.map((item) => {
            const product = getProduct(item.slug);
            if (!product || product.draft) return null;
            return (
              <li key={item.slug} className="border-b border-line pb-6 last:border-0">
                <Link href={routes.product(item.slug)} className="text-lg font-semibold">
                  {product.name}
                </Link>
                <p className="mt-2 max-w-3xl text-base text-steel">{item.why}</p>
              </li>
            );
          })}
        </ul>
        <p className="prose-body mt-6 max-w-3xl text-base text-steel">
          Compare core options on the{" "}
          <Link href={routes.products}>product hub</Link>, review{" "}
          <Link href={routes.exportCountry("kenya")}>Kenya port and packing notes</Link>{" "}
          if you are importing, or send drawings through the{" "}
          <Link href={routes.requestQuote}>quotation form</Link> for a panel
          schedule tied to {slug.replace(/-/g, " ")} duty.
        </p>
      </Container>
    </Section>
  );
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  const breadcrumbs = [
    { name: "Home", href: routes.home },
    { name: "Solutions", href: routes.solutions },
    { name: solution.name, href: routes.solution(slug) },
  ];

  if (solution.draft) {
    return (
      <>
        <JsonLd
          data={breadcrumbSchema(
            breadcrumbs.map((item) => ({ name: item.name, path: item.href })),
          )}
        />
        <HoldingPage
          h1={solution.h1}
          holdingCopy={solution.holdingCopy ?? solution.summary}
          breadcrumbs={[
            { label: "Home", href: routes.home },
            { label: "Solutions", href: routes.solutions },
            { label: solution.name },
          ]}
          relatedLinks={LIVE_RELATED_LINKS}
          relatedEntityType="solution"
          relatedEntitySlug={slug}
        />
      </>
    );
  }

  const faqSchema = faqPageSchema(solution.faqs);
  const heroImage = solution.images[0];
  const primaryProduct = solution.relevantProducts.find((s) => {
    const p = getProduct(s);
    return p && !p.draft;
  });
  const keySpecs = solution.recommendedSpec?.slice(0, 3).map((row) => ({
    label: row.label,
    value: row.unit ? `${row.value} ${row.unit}` : row.value,
  }));

  const gridProducts = solution.relevantProducts
    .map((productSlug) => {
      const product = getProduct(productSlug);
      if (!product || product.draft) return null;
      return {
        slug: product.slug,
        name: product.name,
        shortName: product.shortName,
        keySpec: product.keySpec ?? product.coreOfType,
        href: routes.product(productSlug),
        image: product.images[0]
          ? {
              src: product.images[0].src,
              alt: product.images[0].alt,
              width: product.images[0].width,
              height: product.images[0].height,
            }
          : undefined,
      };
    })
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(solution),
          breadcrumbSchema(
            breadcrumbs.map((item) => ({ name: item.name, path: item.href })),
          ),
          ...(faqSchema ? [faqSchema] : []),
        ]}
      />

      <PageHero
        breadcrumbs={breadcrumbs}
        h1={solution.h1}
        intro={solution.summary}
        keySpecs={keySpecs}
        quoteProductSlug={primaryProduct}
        secondaryCta={{ label: "Send project details", href: "#lead-form" }}
        image={heroImage}
      />

      {solution.quickAnswer ? (
        <QuickAnswer heading="Quick answer" text={solution.quickAnswer} />
      ) : null}

      {solution.engineeringRequirement ? (
        <Section background="white">
          <Container>
            <Heading as="h2" className="text-2xl md:text-3xl">
              Engineering requirements
            </Heading>
            <p className="prose-body mt-4 max-w-3xl text-base text-steel">
              {solution.engineeringRequirement}
            </p>
            <p className="prose-body mt-4 max-w-3xl text-base text-steel">
              Regulatory limits vary by country — verify cleanliness class, fire
              period and food hygiene rules against your local authority before
              you lock panel thickness. Our{" "}
              <Link href={routes.glossary}>panel glossary</Link> defines terms
              used on drawings; for export packing see{" "}
              <Link href={routes.export}>how we ship from Ahmedabad</Link>.
            </p>
          </Container>
        </Section>
      ) : null}

      {solution.recommendedSpec && solution.recommendedSpec.length > 0 ? (
        <Section background="paper">
          <Container>
            <Heading as="h2" className="text-2xl md:text-3xl">
              Recommended specification starting points
            </Heading>
            <p className="prose-body mt-4 max-w-3xl text-base text-steel">
              Numbers below are indicative for budgeting — confirmed against
              approved project documentation before dispatch. Cross-check core
              choice with{" "}
              <Link href={routes.product("puf-panels")}>PUF panel guidance</Link>{" "}
              or{" "}
              <Link href={routes.product("pir-panels")}>PIR panel guidance</Link>{" "}
              when headroom or fire behaviour drives the decision.
            </p>
            <SpecTable
              specs={solution.recommendedSpec}
              className="mt-6"
              caption="Indicative values for quotation — not a substitute for project-specific heat load or hygiene validation."
            />
          </Container>
        </Section>
      ) : null}

      <FailurePointsSection failurePoints={solution.failurePoints ?? []} />

      {gridProducts.length > 0 ? (
        <ProductGrid
          heading="Panel and door products for this industry"
          products={gridProducts}
        />
      ) : null}

      {solution.productRationale && solution.productRationale.length > 0 ? (
        <ProductRationaleSection slug={slug} items={solution.productRationale} />
      ) : null}

      {solution.processSteps && solution.processSteps.length > 0 ? (
        <ProcessTimeline
          heading="Typical project sequence"
          steps={solution.processSteps}
        />
      ) : null}

      {solution.estimatingGuidance ? (
        <Section background="white">
          <Container>
            <Heading as="h2" className="text-2xl md:text-3xl">
              Estimating and quotation inputs
            </Heading>
            <p className="prose-body mt-4 max-w-3xl text-base text-steel">
              {solution.estimatingGuidance}
            </p>
            <p className="prose-body mt-4 max-w-3xl text-base text-steel">
              Include destination port and Incoterm preference on the enquiry —
              see{" "}
              <Link href={routes.exportCountry("kenya")}>
                Kenya import notes
              </Link>{" "}
              as a reference for East African clearance. General buyer questions
              sit on the{" "}
              <Link href={routes.faqs}>FAQ page</Link>.
            </p>
          </Container>
        </Section>
      ) : null}

      {solution.faqs.length > 0 ? (
        <FaqAccordion
          faqs={solution.faqs}
          heading={`Questions on ${solution.name.toLowerCase()} projects`}
        />
      ) : null}

      <Section background="paper">
        <Container>
          <RelatedContent entityType="solution" slug={slug} />
        </Container>
      </Section>

      <CtaBand
        productSlug={primaryProduct}
        heading={`Specify panels for ${solution.name.toLowerCase()}`}
        copy="Send room or building dimensions, process temperature, hygiene class if applicable, and delivery port. We reply with thickness, joint detail and export pricing in writing."
      />

      <LeadFormSection
        variant="quote"
        defaultProduct={primaryProduct}
        heading={`Request a ${solution.name.toLowerCase()} quotation`}
        background="white"
        className="pb-16 md:pb-24"
      />
    </>
  );
}
