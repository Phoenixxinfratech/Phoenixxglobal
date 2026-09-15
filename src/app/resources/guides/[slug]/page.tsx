import { notFound } from "next/navigation";
import {
  CtaBand,
  LeadFormSection,
  PageHero,
  ProductGrid,
  QuickAnswer,
  SolutionGrid,
} from "@/components/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Heading, Link, Section } from "@/components/ui";
import {
  getComparison,
  getGuide,
  getLiveGuides,
  getProduct,
  getSolution,
} from "@/content";
import type { Guide } from "@/content/types";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema } from "@/lib/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function renderContentBlock(block: string, key: string) {
  const trimmed = block.trim();
  if (!trimmed) return null;

  if (trimmed.startsWith("|")) {
    const rows = trimmed.split("\n").filter((line) => line.trim().startsWith("|"));
    if (rows.length < 2) {
      return (
        <p key={key} className="prose-body mt-4 max-w-3xl text-base text-steel">
          {trimmed}
        </p>
      );
    }

    const parseRow = (line: string) =>
      line
        .split("|")
        .slice(1, -1)
        .map((cell) => cell.trim());

    const header = parseRow(rows[0]!);
    const bodyRows = rows.slice(2).map(parseRow);

    return (
      <div
        key={key}
        className="mt-6 max-w-3xl overflow-x-auto"
        tabIndex={0}
        role="region"
        aria-label="Scrollable comparison table"
      >
        <table className="w-full border-collapse text-left text-sm text-steel">
          <thead>
            <tr className="border-b border-line bg-paper">
              {header.map((cell) => (
                <th key={cell} className="px-4 py-3 font-semibold text-ink">
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bodyRows.map((row) => (
              <tr key={row.join("-")} className="border-b border-line">
                {row.map((cell) => (
                  <td key={`${row[0]}-${cell}`} className="px-4 py-3 align-top">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <p key={key} className="prose-body mt-4 max-w-3xl text-base text-steel">
      {trimmed}
    </p>
  );
}

function buildRelatedLinks(guide: Guide) {
  const links: Array<{ slug: string; name: string; href: string }> = [];

  for (const productSlug of guide.relatedProducts) {
    const product = getProduct(productSlug);
    if (product && !product.draft) {
      links.push({
        slug: product.slug,
        name: product.name,
        href: routes.product(product.slug),
      });
    }
  }

  for (const solutionSlug of guide.relatedSolutions) {
    const solution = getSolution(solutionSlug);
    if (solution && !solution.draft) {
      links.push({
        slug: solution.slug,
        name: solution.name,
        href: routes.solution(solution.slug),
      });
    }
  }

  for (const comparisonSlug of guide.relatedComparisons) {
    const comparison = getComparison(comparisonSlug);
    if (comparison) {
      links.push({
        slug: comparison.slug,
        name: comparison.name,
        href: routes.comparison(comparison.slug),
      });
    }
  }

  const staticLinks = [
    { slug: "guides", name: "All technical guides", href: routes.guides },
    { slug: "comparisons", name: "Panel comparisons", href: routes.comparisons },
    { slug: "glossary", name: "Panel glossary", href: routes.glossary },
    { slug: "faqs", name: "Specification FAQs", href: routes.faqs },
    { slug: "panel-selection", name: "Panel selection overview", href: routes.panelSelection },
    { slug: "export", name: "Export from India", href: routes.export },
    { slug: "request-quote", name: "Request a quotation", href: routes.requestQuote },
  ];

  for (const link of staticLinks) {
    if (!links.some((item) => item.slug === link.slug)) {
      links.push(link);
    }
  }

  return links.slice(0, 12);
}

export function generateStaticParams() {
  return getLiveGuides().map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};

  return buildMetadata({
    title: guide.seoTitle,
    description: guide.metaDescription,
    path: routes.guide(slug),
    draft: guide.draft,
  });
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide || guide.draft) notFound();

  const breadcrumbs = [
    { name: "Home", href: routes.home },
    { name: "Resources", href: routes.resources },
    { name: "Guides", href: routes.guides },
    { name: guide.name, href: routes.guide(slug) },
  ];

  const primaryProduct = guide.relatedProducts.find((productSlug) => {
    const product = getProduct(productSlug);
    return product && !product.draft;
  });

  const gridProducts = guide.relatedProducts
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

  const gridSolutions = guide.relatedSolutions
    .map((solutionSlug) => {
      const solution = getSolution(solutionSlug);
      if (!solution || solution.draft) return null;
      return {
        slug: solution.slug,
        name: solution.name,
        summary: solution.summary,
        href: routes.solution(solutionSlug),
      };
    })
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const relatedLinks = buildRelatedLinks(guide);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(
          breadcrumbs.map((item) => ({ name: item.name, path: item.href })),
        )}
      />

      <PageHero
        breadcrumbs={breadcrumbs}
        h1={guide.h1}
        intro={guide.metaDescription}
        quoteProductSlug={primaryProduct}
        secondaryCta={{ label: "Send project details", href: "#lead-form" }}
      />

      {guide.quickAnswer ? (
        <QuickAnswer heading="Quick answer" text={guide.quickAnswer} />
      ) : null}

      {guide.bodySections.map((section, index) => (
        <Section key={section.h2} background={index % 2 === 0 ? "paper" : "white"}>
          <Container>
            <Heading as="h2" className="text-2xl md:text-3xl">
              {section.h2}
            </Heading>
            {section.content.split(/\n\n+/).map((block, blockIndex) =>
              renderContentBlock(block, `${section.h2}-${blockIndex}`),
            )}
          </Container>
        </Section>
      ))}

      {guide.limitations ? (
        <Section background="paper">
          <Container>
            <Heading as="h2" className="text-2xl md:text-3xl">
              Limitations and scope
            </Heading>
            <p className="prose-body mt-4 max-w-3xl text-base text-steel">
              {guide.limitations}
            </p>
            <p className="prose-body mt-4 max-w-3xl text-base text-steel">
              Cross-check numbers on the{" "}
              <Link href={routes.products}>products hub</Link>, related{" "}
              <Link href={routes.comparisons}>panel comparisons</Link>, and your
              project heat load or fire engineer before issuing a purchase order.
            </p>
          </Container>
        </Section>
      ) : null}

      {gridProducts.length > 0 ? (
        <ProductGrid heading="Related panel products" products={gridProducts} />
      ) : null}

      {gridSolutions.length > 0 ? (
        <SolutionGrid heading="Related industry solutions" solutions={gridSolutions} />
      ) : null}

      <Section background="white">
        <Container>
          <Heading as="h2" className="text-2xl md:text-3xl">
            Related content
          </Heading>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {relatedLinks.map((link) => (
              <li key={link.slug}>
                <Link href={link.href} className="text-base font-medium text-ink hover:text-ember">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand
        productSlug={primaryProduct}
        heading={`Apply this guide to your ${guide.name.toLowerCase()} enquiry`}
        copy="Send room dimensions, design temperatures, and delivery port. We reply with panel thickness, joint detail, and export pricing in writing."
      />

      <LeadFormSection
        variant="quote"
        defaultProduct={primaryProduct}
        heading="Request a panel quotation"
        background="paper"
        className="pb-16 md:pb-24"
      />
    </>
  );
}
