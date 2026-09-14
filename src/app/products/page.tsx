import { InlineLink } from "@/components/blocks";
import { Breadcrumbs } from "@/components/layout";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Heading, Section } from "@/components/ui";
import { products } from "@/content";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";

const PATH = "/products/";
const page = requirePageByPath(PATH);


export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function ProductsHubPage() {
  const liveProducts = products.filter((p) => !p.draft);
  const draftProducts = products.filter((p) => p.draft);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: routes.home },
            { name: "Products", path: PATH },
          ]),
          itemListSchema(
            "Insulated sandwich panel products",
            products.map((p) => ({
              name: p.name,
              path: routes.product(p.slug),
            })),
          ),
        ]}
      />
      <Section background="white" className="py-12 md:py-20">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Home", href: routes.home },
              { name: "Products", href: PATH },
            ]}
            className="mb-6"
          />

          <Heading as="h1">{page.h1}</Heading>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-steel">
            {page.holdingCopy}
          </p>

          {liveProducts.length > 0 ? (
            <div className="mt-10">
              <h2 className="text-xl font-semibold text-ink">Full product pages</h2>
              <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                {liveProducts.map((product) => (
                  <li
                    key={product.slug}
                    className="rounded-[2px] border border-line p-5"
                  >
                    <InlineLink
                      href={routes.product(product.slug)}
                      className="text-lg font-semibold text-ink hover:text-ember"
                    >
                      {product.name}
                    </InlineLink>
                    <p className="mt-2 text-sm text-steel">{product.summary}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {draftProducts.length > 0 ? (
            <div className="mt-10">
              <h2 className="text-xl font-semibold text-ink">Coming soon</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {draftProducts.map((product) => (
                  <li key={product.slug}>
                    <InlineLink href={routes.product(product.slug)}>
                      {product.name}
                    </InlineLink>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="mt-12">
            <h2 className="text-xl font-semibold text-ink">Related pages</h2>
            <ul className="mt-3 space-y-2">
              <li>
                <InlineLink href={routes.solution("cold-storage")}>
                  Cold storage solutions
                </InlineLink>
              </li>
              <li>
                <InlineLink href={routes.comparison("puf-vs-pir-panels")}>
                  PUF vs PIR panel comparison
                </InlineLink>
              </li>
              <li>
                <InlineLink href={routes.export}>Export from India</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.exportCountry("kenya")}>
                  Export to Kenya
                </InlineLink>
              </li>
              <li>
                <InlineLink href={routes.panelSelection}>Panel selection guide</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.datasheets}>Request datasheets</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.faqs}>Product and export FAQs</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.requestQuote}>Request a quotation</InlineLink>
              </li>
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}
