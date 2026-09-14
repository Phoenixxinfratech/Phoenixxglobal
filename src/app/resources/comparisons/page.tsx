import { InlineLink } from "@/components/blocks";
import { Breadcrumbs } from "@/components/layout";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Heading, Section } from "@/components/ui";
import { comparisons } from "@/content";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";

const PATH = "/resources/comparisons/";
const page = requirePageByPath(PATH);


export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function ComparisonsHubPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: routes.home },
            { name: "Resources", path: routes.resources },
            { name: "Comparisons", path: PATH },
          ]),
          itemListSchema(
            "Panel comparisons",
            comparisons.map((c) => ({
              name: c.name,
              path: routes.comparison(c.slug),
            })),
          ),
        ]}
      />
      <Section background="white" className="py-12 md:py-20">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Home", href: routes.home },
              { name: "Resources", href: routes.resources },
              { name: "Comparisons", href: PATH },
            ]}
            className="mb-6"
          />

          <Heading as="h1">{page.h1}</Heading>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-steel">
            {page.holdingCopy}
          </p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {comparisons.map((comparison) => (
              <li
                key={comparison.slug}
                className="rounded-[2px] border border-line p-5"
              >
                <InlineLink
                  href={routes.comparison(comparison.slug)}
                  className="text-lg font-semibold text-ink hover:text-ember"
                >
                  {comparison.name}
                </InlineLink>
                {comparison.summary ? (
                  <p className="mt-2 text-sm text-steel">{comparison.summary}</p>
                ) : null}
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <h2 className="text-xl font-semibold text-ink">Related pages</h2>
            <ul className="mt-3 space-y-2">
              <li>
                <InlineLink href={routes.product("puf-panels")}>PUF panels</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.product("pir-panels")}>PIR panels</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.product("rockwool-panels")}>Rockwool panels</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.panelSelection}>Panel selection guide</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.glossary}>Glossary</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.faqs}>FAQs</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.solution("cold-storage")}>
                  Cold storage solutions
                </InlineLink>
              </li>
              <li>
                <InlineLink href={routes.requestQuote}>Request a recommendation</InlineLink>
              </li>
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}
