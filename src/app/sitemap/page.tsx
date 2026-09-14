import { InlineLink } from "@/components/blocks";
import { Breadcrumbs } from "@/components/layout";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Heading, Section } from "@/components/ui";
import { countries, products, solutions } from "@/content";
import { pages, requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
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
  const resourcePages = pages.filter((p) => p.section === "resources");
  const exportPages = pages.filter((p) => p.section === "export");
  const legalPages = pages.filter((p) => p.section === "legal");

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
                {countries.map((country) => (
                  <li key={country.slug}>
                    <InlineLink href={routes.exportCountry(country.slug)}>
                      {country.name}
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
                <li>
                  <InlineLink href={routes.guides}>Technical guides</InlineLink>
                </li>
                <li>
                  <InlineLink href={routes.comparisons}>Comparisons</InlineLink>
                </li>
                <li>
                  <InlineLink href={routes.blog}>Blog</InlineLink>
                </li>
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
