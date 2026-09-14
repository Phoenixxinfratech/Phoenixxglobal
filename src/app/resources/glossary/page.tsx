import { InlineLink } from "@/components/blocks";
import { Breadcrumbs } from "@/components/layout";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Heading, Section } from "@/components/ui";
import { glossaryTerms } from "@/content";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";

const PATH = "/resources/glossary/";
const page = requirePageByPath(PATH);


export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function GlossaryPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: routes.home },
            { name: "Resources", path: routes.resources },
            { name: "Glossary", path: PATH },
          ]),
          itemListSchema(
            "Panel glossary",
            glossaryTerms.map((term) => ({
              name: term.term,
              path: `${PATH}#${term.slug}`,
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
              { name: "Glossary", href: PATH },
            ]}
            className="mb-6"
          />

          <Heading as="h1">{page.h1}</Heading>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-steel">
            {page.holdingCopy}
          </p>

          <dl className="mt-10 space-y-8">
            {glossaryTerms.map((term) => (
              <div key={term.slug} id={term.slug}>
                <dt className="text-lg font-semibold text-ink">{term.term}</dt>
                <dd className="mt-2 text-base leading-relaxed text-steel">
                  {term.definition}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-12">
            <h2 className="text-xl font-semibold text-ink">Related pages</h2>
            <ul className="mt-3 space-y-2">
              <li>
                <InlineLink href={routes.comparison("puf-vs-pir-panels")}>
                  PUF vs PIR comparison
                </InlineLink>
              </li>
              <li>
                <InlineLink href={routes.product("puf-panels")}>PUF panels</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.product("pir-panels")}>PIR panels</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.panelSelection}>Panel selection</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.faqs}>FAQs</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.comparisons}>All comparisons</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.solution("cold-storage")}>
                  Cold storage solutions
                </InlineLink>
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
