import { notFound } from "next/navigation";
import { HoldingPage } from "@/components/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { comparisons, getComparison, getProduct } from "@/content";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema } from "@/lib/schema";

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

  const breadcrumbs = [
    { name: "Home", path: routes.home },
    { name: "Resources", path: routes.resources },
    { name: "Comparisons", path: routes.comparisons },
    { name: comparison.name, path: routes.comparison(slug) },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <HoldingPage
        h1={comparison.h1}
        holdingCopy={comparison.holdingCopy ?? comparison.summary ?? comparison.metaDescription}
        breadcrumbs={[
          { label: "Home", href: routes.home },
          { label: "Resources", href: routes.resources },
          { label: "Comparisons", href: routes.comparisons },
          { label: comparison.name },
        ]}
        relatedLinks={[
          ...(productA
            ? [{ slug: productA.slug, name: productA.name, href: routes.product(productA.slug) }]
            : []),
          ...(productB
            ? [{ slug: productB.slug, name: productB.name, href: routes.product(productB.slug) }]
            : []),
          { slug: "comparisons", name: "All panel comparisons", href: routes.comparisons },
          { slug: "panel-selection", name: "Panel selection guide", href: routes.panelSelection },
          { slug: "glossary", name: "Glossary — U-value, cam-lock, etc.", href: routes.glossary },
          { slug: "cold-storage", name: "Cold storage solutions", href: routes.solution("cold-storage") },
          { slug: "faqs", name: "Specification FAQs", href: routes.faqs },
          { slug: "request-quote", name: "Request core recommendation with quote", href: routes.requestQuote },
        ].slice(0, 9)}
      />
    </>
  );
}
