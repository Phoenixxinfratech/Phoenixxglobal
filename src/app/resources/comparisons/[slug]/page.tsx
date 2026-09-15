import { notFound } from "next/navigation";
import {
  ComparisonTable,
  CtaBand,
  FaqAccordion,
  InlineLink,
  LeadFormSection,
  PageHero,
  QuickAnswer,
} from "@/components/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Heading, Link, Section } from "@/components/ui";
import {
  comparisons,
  getComparison,
  getGuide,
  getProduct,
  getSolution,
} from "@/content";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return comparisons.map((comparison) => ({ slug: comparison.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) return {};

  return buildMetadata({
    title: comparison.seoTitle,
    description: comparison.metaDescription,
    path: routes.comparison(slug),
    draft: comparison.draft,
  });
}

export default async function ComparisonPage({ params }: PageProps) {
  const { slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) notFound();

  const productA = getProduct(comparison.productA);
  const productB = getProduct(comparison.productB);
  const productC = comparison.productC
    ? getProduct(comparison.productC)
    : undefined;

  const breadcrumbs = [
    { name: "Home", path: routes.home },
    { name: "Resources", path: routes.resources },
    { name: "Comparisons", path: routes.comparisons },
    { name: comparison.name, path: routes.comparison(slug) },
  ];

  const optionALabel =
    comparison.optionALabel ?? productA?.shortName ?? "Option A";
  const optionBLabel =
    comparison.optionBLabel ?? productB?.shortName ?? "Option B";
  const optionCLabel =
    comparison.optionCLabel ?? productC?.shortName ?? "Option C";

  const hasThird =
    Boolean(comparison.productC) ||
    comparison.decisionTable.some((row) => Boolean(row.optionC));

  const columns = hasThird
    ? [optionALabel, optionBLabel, optionCLabel]
    : [optionALabel, optionBLabel];

  const tableRows =
    comparison.decisionTable?.map((row) => ({
      label: row.criterion,
      values: hasThird
        ? [row.optionA, row.optionB, row.optionC ?? "—"]
        : [row.optionA, row.optionB],
    })) ?? [];

  const faqSchema = comparison.faqs.length
    ? faqPageSchema(comparison.faqs)
    : null;

  const verdictCount = [
    comparison.chooseAWhen,
    comparison.chooseBWhen,
    comparison.chooseCWhen,
  ].filter(Boolean).length;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          ...(faqSchema ? [faqSchema] : []),
        ]}
      />

      <PageHero
        h1={comparison.h1}
        intro={comparison.summary ?? comparison.metaDescription}
        breadcrumbs={[
          { name: "Home", href: routes.home },
          { name: "Resources", href: routes.resources },
          { name: "Comparisons", href: routes.comparisons },
          { name: comparison.name, href: routes.comparison(slug) },
        ]}
        secondaryCta={{
          label: "Panel selection tool",
          href: routes.panelSelection,
        }}
      />

      {comparison.quickAnswer ? (
        <QuickAnswer text={comparison.quickAnswer} />
      ) : null}

      {tableRows.length > 0 ? (
        <ComparisonTable
          heading="Decision table"
          columns={columns}
          rows={tableRows}
        />
      ) : null}

      {verdictCount > 0 ? (
        <Section background="white">
          <Container>
            <Heading as="h2" className="text-2xl md:text-3xl">
              Verdict — when to choose each option
            </Heading>
            <div
              className={`mt-8 grid gap-8 ${
                verdictCount >= 3 ? "md:grid-cols-3" : "md:grid-cols-2"
              }`}
            >
              {comparison.chooseAWhen ? (
                <div className="rounded-[2px] border border-line p-6">
                  <h3 className="text-lg font-semibold text-ink">
                    Choose {optionALabel} when…
                  </h3>
                  <p className="prose-body mt-3 text-base text-steel">
                    {comparison.chooseAWhen}
                  </p>
                  {productA && !productA.draft ? (
                    <p className="mt-4">
                      <Link href={routes.product(productA.slug)}>
                        View {productA.name} specifications →
                      </Link>
                    </p>
                  ) : null}
                </div>
              ) : null}
              {comparison.chooseBWhen ? (
                <div className="rounded-[2px] border border-line p-6">
                  <h3 className="text-lg font-semibold text-ink">
                    Choose {optionBLabel} when…
                  </h3>
                  <p className="prose-body mt-3 text-base text-steel">
                    {comparison.chooseBWhen}
                  </p>
                  {productB && !productB.draft ? (
                    <p className="mt-4">
                      <Link href={routes.product(productB.slug)}>
                        View {productB.name} specifications →
                      </Link>
                    </p>
                  ) : null}
                </div>
              ) : null}
              {comparison.chooseCWhen ? (
                <div className="rounded-[2px] border border-line p-6">
                  <h3 className="text-lg font-semibold text-ink">
                    Choose {optionCLabel} when…
                  </h3>
                  <p className="prose-body mt-3 text-base text-steel">
                    {comparison.chooseCWhen}
                  </p>
                  {productC && !productC.draft ? (
                    <p className="mt-4">
                      <Link href={routes.product(productC.slug)}>
                        View {productC.name} specifications →
                      </Link>
                    </p>
                  ) : null}
                </div>
              ) : null}
            </div>
          </Container>
        </Section>
      ) : null}

      {comparison.costNotes ? (
        <Section background="paper">
          <Container>
            <Heading as="h2" className="text-2xl md:text-3xl">
              Cost and value notes
            </Heading>
            <p className="prose-body mt-4 max-w-3xl text-base text-steel">
              {comparison.costNotes}
            </p>
            <p className="prose-body mt-4 max-w-3xl text-sm text-zinc">
              Figures are indicative for export planning — confirm on your
              quotation. See our{" "}
              <InlineLink href={routes.exportIncoterms}>
                incoterms and payment terms
              </InlineLink>{" "}
              page for how FOB and CIF quotes are structured.
            </p>
          </Container>
        </Section>
      ) : null}

      <Section background="white">
        <Container>
          <Heading as="h2" className="text-2xl md:text-3xl">
            Related reading
          </Heading>
          <ul className="mt-6 space-y-2 text-base">
            {productA && !productA.draft ? (
              <li>
                <InlineLink href={routes.product(productA.slug)}>
                  {productA.name} — full specifications
                </InlineLink>
              </li>
            ) : null}
            {productB && !productB.draft ? (
              <li>
                <InlineLink href={routes.product(productB.slug)}>
                  {productB.name} — full specifications
                </InlineLink>
              </li>
            ) : null}
            {productC && !productC.draft ? (
              <li>
                <InlineLink href={routes.product(productC.slug)}>
                  {productC.name} — full specifications
                </InlineLink>
              </li>
            ) : null}
            {comparison.relatedSolutions.map((solutionSlug) => {
              const solution = getSolution(solutionSlug);
              if (!solution || solution.draft) return null;
              return (
                <li key={solutionSlug}>
                  <InlineLink href={routes.solution(solutionSlug)}>
                    {solution.name}
                  </InlineLink>
                </li>
              );
            })}
            {comparison.relatedGuides.map((guideSlug) => {
              const guide = getGuide(guideSlug);
              if (!guide || guide.draft) return null;
              return (
                <li key={guideSlug}>
                  <InlineLink href={routes.guide(guideSlug)}>
                    {guide.name}
                  </InlineLink>
                </li>
              );
            })}
            <li>
              <InlineLink href={routes.panelSelection}>
                Panel selection tool
              </InlineLink>
            </li>
            <li>
              <InlineLink href={routes.comparisons}>
                All panel comparisons
              </InlineLink>
            </li>
            <li>
              <InlineLink href={routes.glossary}>
                Glossary — U-value, λ, cam-lock
              </InlineLink>
            </li>
            <li>
              <InlineLink href={routes.faqs}>
                Export and specification FAQs
              </InlineLink>
            </li>
            <li>
              <InlineLink href={routes.export}>
                Export hub — ports and documentation
              </InlineLink>
            </li>
            <li>
              <InlineLink href={routes.datasheets}>
                Request datasheets
              </InlineLink>
            </li>
          </ul>
        </Container>
      </Section>

      {comparison.faqs.length > 0 ? (
        <FaqAccordion faqs={comparison.faqs} />
      ) : null}

      <CtaBand
        heading="Need a core recommendation for your project?"
        copy="Send room temperature, fire requirements and delivery port — we reply with a short shortlist and why each option fits."
        quoteLabel="Request a quotation"
      />

      <LeadFormSection variant="quote" />
    </>
  );
}
