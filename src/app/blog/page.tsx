import { Suspense } from "react";
import { BlogCategoryFilter } from "@/components/blog/BlogCategoryFilter";
import { InlineLink } from "@/components/blocks";
import { Breadcrumbs } from "@/components/layout";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Heading, Section } from "@/components/ui";
import { ARTICLE_CATEGORIES } from "@/content/articles";
import { getLiveArticles } from "@/content";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";

const PATH = "/blog/";
const page = requirePageByPath(PATH);

type PageProps = {
  searchParams: Promise<{ category?: string }>;
};

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default async function BlogHubPage({ searchParams }: PageProps) {
  const { category } = await searchParams;
  const activeCategory =
    category && ARTICLE_CATEGORIES.includes(category as (typeof ARTICLE_CATEGORIES)[number])
      ? category
      : null;

  const articles = activeCategory
    ? getLiveArticles().filter((a) => a.category === activeCategory)
    : getLiveArticles();

  const sorted = [...articles].sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime(),
  );

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: routes.home },
            { name: "Blog", path: PATH },
          ]),
          itemListSchema(
            "Blog articles",
            sorted.map((article) => ({
              name: article.title,
              path: routes.blogPost(article.slug),
            })),
          ),
        ]}
      />
      <Section background="white" className="py-12 md:py-20">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Home", href: routes.home },
              { name: "Blog", href: PATH },
            ]}
            className="mb-6"
          />

          <Heading as="h1">{page.h1}</Heading>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-steel">
            Field notes on panel specification, export logistics, and site problems
            — written for procurement and project engineers, not generic industry news.
          </p>

          <Suspense fallback={null}>
            <BlogCategoryFilter
              categories={ARTICLE_CATEGORIES}
              activeCategory={activeCategory}
            />
          </Suspense>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {sorted.map((article) => (
              <li
                key={article.slug}
                className="rounded-[2px] border border-line p-5"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-steel">
                  {article.category} ·{" "}
                  {new Date(article.datePublished).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
                <InlineLink
                  href={routes.blogPost(article.slug)}
                  className="mt-2 block text-lg font-semibold text-ink hover:text-ember"
                >
                  {article.title}
                </InlineLink>
                <p className="mt-2 text-sm text-steel">{article.excerpt}</p>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <h2 className="text-xl font-semibold text-ink">Related resources</h2>
            <ul className="mt-3 space-y-2">
              <li>
                <InlineLink href={routes.guides}>Technical guides</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.comparisons}>Panel comparisons</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.faqs}>Specification FAQs</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.exportProcess}>Export process</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.exportPackaging}>
                  Packaging and container loading
                </InlineLink>
              </li>
              <li>
                <InlineLink href={routes.product("cold-room-panels")}>
                  Cold room panels
                </InlineLink>
              </li>
              <li>
                <InlineLink href={routes.solution("cold-storage")}>
                  Cold storage solutions
                </InlineLink>
              </li>
              <li>
                <InlineLink href={routes.contact}>Contact export team</InlineLink>
              </li>
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}
