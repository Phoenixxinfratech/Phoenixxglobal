import { InlineLink } from "@/components/blocks";
import { Breadcrumbs } from "@/components/layout";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Heading, Link, Section } from "@/components/ui";
import { glossaryTerms } from "@/content";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";

const PATH = "/resources/glossary/";
const page = requirePageByPath(PATH);

const liveTerms = glossaryTerms.filter((term) => !term.draft);

function groupByLetter(terms: typeof liveTerms) {
  const groups = new Map<string, typeof liveTerms>();
  for (const term of terms) {
    const letter = term.term.charAt(0).toUpperCase();
    const key = /[A-Z]/.test(letter) ? letter : "#";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(term);
  }
  return [...groups.entries()].sort(([a], [b]) => a.localeCompare(b));
}

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function GlossaryPage() {
  const letterGroups = groupByLetter(liveTerms);
  const letters = letterGroups.map(([letter]) => letter);

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
            liveTerms.map((term) => ({
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
            {liveTerms.length} definitions for terms on drawings, datasheets and
            export documents. Jump to a letter or scroll the list — each entry
            links to related product pages where relevant.
          </p>

          <nav
            aria-label="Glossary letter index"
            className="mt-8 flex flex-wrap gap-2"
          >
            {letters.map((letter) => (
              <Link
                key={letter}
                href={`#letter-${letter}`}
                className="flex h-9 min-w-9 items-center justify-center rounded-[2px] border border-line px-2 text-sm font-medium text-steel hover:border-ink hover:text-ink"
              >
                {letter}
              </Link>
            ))}
          </nav>

          <div className="mt-10 space-y-12">
            {letterGroups.map(([letter, terms]) => (
              <section key={letter} id={`letter-${letter}`}>
                <h2 className="border-b border-line pb-2 text-2xl font-semibold text-ink">
                  {letter}
                </h2>
                <dl className="mt-6 space-y-8">
                  {terms.map((term) => (
                    <div key={term.slug} id={term.slug} className="scroll-mt-24">
                      <dt className="text-lg font-semibold text-ink">{term.term}</dt>
                      <dd className="mt-2 max-w-3xl text-base leading-relaxed text-steel">
                        {term.definition}
                      </dd>
                      {term.relatedProducts.length > 0 ? (
                        <dd className="mt-2 text-sm">
                          Related:{" "}
                          {term.relatedProducts.map((slug, index) => (
                            <span key={slug}>
                              {index > 0 ? ", " : ""}
                              <InlineLink href={routes.product(slug)}>
                                {slug.replace(/-/g, " ")}
                              </InlineLink>
                            </span>
                          ))}
                        </dd>
                      ) : null}
                    </div>
                  ))}
                </dl>
              </section>
            ))}
          </div>

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
                <InlineLink href={routes.panelSelection}>Panel selection tool</InlineLink>
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
