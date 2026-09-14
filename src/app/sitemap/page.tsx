import { InlineLink } from "@/components/blocks";
import { Breadcrumbs } from "@/components/layout";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Heading, Section } from "@/components/ui";
import {
  comparisons,
  getLiveArticles,
  getLiveCities,
  getLiveCountries,
  getLiveGuides,
  products,
  solutions,
} from "@/content";
import { pages, requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { isPublishableCity, isPublishableCountry } from "@/lib/publishable";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/sitemap/";
const page = requirePageByPath(PATH);

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function HtmlSitemapPage() {
  const corePages = pages.filter((p) => p.section === "core");
  const resourcePages = pages.filter((p) => p.section === "resources" && !p.draft);
  const exportPages = pages.filter((p) => p.section === "export" && !p.draft);
  const legalPages = pages.filter((p) => p.section === "legal");
  const liveCountries = getLiveCountries().filter(isPublishableCountry);
  const liveCities = getLiveCities().filter(isPublishableCity);
  const liveGuides = getLiveGuides();
  const liveComparisons = comparisons.filter((c) => !c.draft);
  const liveArticles = getLiveArticles();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: routes.home },
          { name: "Sitemap", path: PATH },
        ])}
      />
      <Section background="white" className="py-12 md:py-20">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Home", href: routes.home },
              { name: "Sitemap", href: PATH },
            ]}
            className="mb-6"
          />

          <Heading as="h1">{page.h1}</Heading>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-steel">
            {page.holdingCopy}
          </p>

          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <section>
              <h2 className="text-lg font-semibold text-ink">Company</h2>
              <ul className="mt-3 space-y-2">
                <li>
                  <InlineLink href={routes.home}>Home</InlineLink>
                </li>
                {corePages.map((entry) => (
                  <li key={entry.path}>
                    <InlineLink href={entry.path}>{entry.h1}</InlineLink>
                  </li>
                ))}
                <li>
                  <InlineLink href={routes.contact}>Contact</InlineLink>
                </li>
                <li>
                  <InlineLink href={routes.requestQuote}>Request a quote</InlineLink>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink">Products</h2>
              <ul className="mt-3 space-y-2">
                <li>
                  <InlineLink href={routes.products}>Products hub</InlineLink>
                </li>
                {products.map((product) => (
                  <li key={product.slug}>
                    <InlineLink href={routes.product(product.slug)}>
                      {product.name}
                    </InlineLink>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink">Solutions</h2>
              <ul className="mt-3 space-y-2">
                <li>
                  <InlineLink href={routes.solutions}>Solutions hub</InlineLink>
                </li>
                {solutions.map((solution) => (
                  <li key={solution.slug}>
                    <InlineLink href={routes.solution(solution.slug)}>
                      {solution.name}
                    </InlineLink>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink">Export</h2>
              <ul className="mt-3 space-y-2">
                <li>
                  <InlineLink href={routes.export}>Export hub</InlineLink>
                </li>
                {exportPages.map((entry) => (
                  <li key={entry.path}>
                    <InlineLink href={entry.path}>{entry.h1}</InlineLink>
                  </li>
                ))}
                {liveCountries.map((country) => (
                  <li key={country.slug}>
                    <InlineLink href={routes.exportCountry(country.slug)}>
                      {country.name}
                    </InlineLink>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink">Cities</h2>
              <ul className="mt-3 space-y-2">
                {liveCities.map((city) => (
                  <li key={`${city.countrySlug}-${city.slug}`}>
                    <InlineLink href={`/export/${city.countrySlug}/${city.slug}/`}>
                      {city.name}
                    </InlineLink>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink">Resources</h2>
              <ul className="mt-3 space-y-2">
                {resourcePages.map((entry) => (
                  <li key={entry.path}>
                    <InlineLink href={entry.path}>{entry.h1}</InlineLink>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink">Guides</h2>
              <ul className="mt-3 space-y-2">
                <li>
                  <InlineLink href={routes.guides}>Guides hub</InlineLink>
                </li>
                {liveGuides.map((guide) => (
                  <li key={guide.slug}>
                    <InlineLink href={routes.guide(guide.slug)}>{guide.name}</InlineLink>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink">Comparisons</h2>
              <ul className="mt-3 space-y-2">
                <li>
                  <InlineLink href={routes.comparisons}>Comparisons hub</InlineLink>
                </li>
                {liveComparisons.map((comparison) => (
                  <li key={comparison.slug}>
                    <InlineLink href={routes.comparison(comparison.slug)}>
                      {comparison.name}
                    </InlineLink>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink">Blog</h2>
              <ul className="mt-3 space-y-2">
                <li>
                  <InlineLink href={routes.blog}>Blog hub</InlineLink>
                </li>
                {liveArticles.map((article) => (
                  <li key={article.slug}>
                    <InlineLink href={routes.blogPost(article.slug)}>
                      {article.title}
                    </InlineLink>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink">Legal</h2>
              <ul className="mt-3 space-y-2">
                {legalPages.map((entry) => (
                  <li key={entry.path}>
                    <InlineLink href={entry.path}>{entry.h1}</InlineLink>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
}
