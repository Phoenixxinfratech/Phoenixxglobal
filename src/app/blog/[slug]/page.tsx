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
  getArticle,
  getAuthor,
  getComparison,
  getGuide,
  getLiveArticles,
  getProduct,
  getSolution,
} from "@/content";
import type { Article } from "@/content/types";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function renderContentBlock(block: string, key: string) {
  const trimmed = block.trim();
  if (!trimmed) return null;

  return (
    <p key={key} className="prose-body mt-4 max-w-3xl text-base text-steel">
      {trimmed}
    </p>
  );
}

function buildRelatedLinks(article: Article) {
  const links: Array<{ slug: string; name: string; href: string }> = [];

  for (const productSlug of article.relatedProducts) {
    const product = getProduct(productSlug);
    if (product && !product.draft) {
      links.push({
        slug: product.slug,
        name: product.name,
        href: routes.product(product.slug),
      });
    }
  }

  for (const solutionSlug of article.relatedSolutions) {
    const solution = getSolution(solutionSlug);
    if (solution && !solution.draft) {
      links.push({
        slug: solution.slug,
        name: solution.name,
        href: routes.solution(solution.slug),
      });
    }
  }

  for (const guideSlug of article.relatedGuides) {
    const guide = getGuide(guideSlug);
    if (guide && !guide.draft) {
      links.push({
        slug: guide.slug,
        name: guide.name,
        href: routes.guide(guide.slug),
      });
    }
  }

  const staticLinks = [
    { slug: "blog", name: "All blog articles", href: routes.blog },
    { slug: "guides", name: "Technical guides hub", href: routes.guides },
    { slug: "comparisons", name: "Panel comparisons", href: routes.comparisons },
    { slug: "faqs", name: "Export and panel FAQs", href: routes.faqs },
    { slug: "export", name: "Export from India", href: routes.export },
    { slug: "export-process", name: "Export process overview", href: routes.exportProcess },
    { slug: "export-packaging", name: "Container loading guidance", href: routes.exportPackaging },
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
  return getLiveArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return buildMetadata({
    title: article.seoTitle,
    description: article.metaDescription,
    path: routes.blogPost(slug),
    draft: article.draft,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article || article.draft) notFound();

  const author = getAuthor(article.authorSlug);
  if (!author) notFound();

  const breadcrumbs = [
    { name: "Home", href: routes.home },
    { name: "Blog", href: routes.blog },
    { name: article.title, href: routes.blogPost(slug) },
  ];

  const primaryProduct = article.relatedProducts.find((productSlug) => {
    const product = getProduct(productSlug);
    return product && !product.draft;
  });

  const gridProducts = article.relatedProducts
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

  const gridSolutions = article.relatedSolutions
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

  const relatedLinks = buildRelatedLinks(article);
  const comparisonSlug = article.relatedGuides
    .map((g) => getGuide(g))
    .find((g) => g?.relatedComparisons.length)?.relatedComparisons[0];
  const comparison = comparisonSlug ? getComparison(comparisonSlug) : undefined;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(
            breadcrumbs.map((item) => ({ name: item.name, path: item.href })),
          ),
          blogPostingSchema(article, author),
        ]}
      />

      <PageHero
        breadcrumbs={breadcrumbs}
        h1={article.h1}
        intro={article.excerpt}
        quoteProductSlug={primaryProduct}
        secondaryCta={{ label: "Send project details", href: "#lead-form" }}
      />

      <QuickAnswer heading="Quick answer" text={article.quickAnswer} />

      {article.bodySections.map((section, index) => (
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

      {article.keyTakeaways.length > 0 ? (
        <Section background="paper">
          <Container>
            <Heading as="h2" className="text-2xl md:text-3xl">
              Key takeaways
            </Heading>
            <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-base text-steel">
              {article.keyTakeaways.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      <Section background="white">
        <Container>
          <Heading as="h2" className="text-2xl md:text-3xl">
            Author
          </Heading>
          <div className="mt-4 max-w-3xl rounded-[2px] border border-line p-5">
            <p className="text-lg font-semibold text-ink">{author.name}</p>
            <p className="text-sm text-steel">{author.role}</p>
            <p className="prose-body mt-3 text-base text-steel">{author.bio}</p>
          </div>
          <p className="prose-body mt-6 max-w-3xl text-base text-steel">
            Published{" "}
            {new Date(article.datePublished).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
            {article.dateModified !== article.datePublished ? (
              <>
                {" "}
                · Updated{" "}
                {new Date(article.dateModified).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </>
            ) : null}
            . Cross-check technical numbers on our{" "}
            <Link href={routes.guides}>technical guides</Link>,{" "}
            <Link href={routes.comparisons}>panel comparisons</Link>, and{" "}
            <Link href={routes.product("puf-panels")}>PUF panel specifications</Link>{" "}
            before issuing a purchase order.
          </p>
        </Container>
      </Section>

      {gridProducts.length > 0 ? (
        <ProductGrid heading="Related panel products" products={gridProducts} />
      ) : null}

      {gridSolutions.length > 0 ? (
        <SolutionGrid heading="Related industry solutions" solutions={gridSolutions} />
      ) : null}

      <Section background="paper">
        <Container>
          <Heading as="h2" className="text-2xl md:text-3xl">
            Related content
          </Heading>
          <p className="prose-body mt-4 max-w-3xl text-base text-steel">
            Continue with linked{" "}
            <Link href={routes.guide(article.relatedGuides[0] ?? "cold-storage-panel-thickness")}>
              specification guides
            </Link>
            , the{" "}
            <Link href={routes.exportDocumentation}>export documentation hub</Link>, and{" "}
            <Link href={routes.exportLeadTime}>lead time notes</Link> for your corridor.
            {comparison ? (
              <>
                {" "}
                For core choice see{" "}
                <Link href={routes.comparison(comparison.slug)}>
                  {comparison.name}
                </Link>
                .
              </>
            ) : null}
          </p>
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
        heading="Apply this article to your enquiry"
        copy="Send room dimensions, destination port, and design temperatures. We reply with panel specification and export pricing in writing."
      />

      <LeadFormSection
        variant="quote"
        defaultProduct={primaryProduct}
        heading="Request a panel quotation"
        background="white"
        className="pb-16 md:pb-24"
      />
    </>
  );
}
