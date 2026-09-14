import { InlineLink } from "@/components/blocks";
import { Breadcrumbs } from "@/components/layout";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Heading, Section } from "@/components/ui";
import { solutions } from "@/content";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";

const PATH = "/solutions/";
const page = requirePageByPath(PATH);


export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function SolutionsHubPage() {
  const liveSolutions = solutions.filter((s) => !s.draft);
  const draftSolutions = solutions.filter((s) => s.draft);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: routes.home },
            { name: "Solutions", path: PATH },
          ]),
          itemListSchema(
            "Industry solutions",
            solutions.map((s) => ({
              name: s.name,
              path: routes.solution(s.slug),
            })),
          ),
        ]}
      />
      <Section background="white" className="py-12 md:py-20">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Home", href: routes.home },
              { name: "Solutions", href: PATH },
            ]}
            className="mb-6"
          />

          <Heading as="h1">{page.h1}</Heading>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-steel">
            {page.holdingCopy}
          </p>

          {liveSolutions.length > 0 ? (
            <div className="mt-10">
              <h2 className="text-xl font-semibold text-ink">Live solution pages</h2>
              <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                {liveSolutions.map((solution) => (
                  <li
                    key={solution.slug}
                    className="rounded-[2px] border border-line p-5"
                  >
                    <InlineLink
                      href={routes.solution(solution.slug)}
                      className="text-lg font-semibold text-ink hover:text-ember"
                    >
                      {solution.name}
                    </InlineLink>
                    <p className="mt-2 text-sm text-steel">{solution.summary}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {draftSolutions.length > 0 ? (
            <div className="mt-10">
              <h2 className="text-xl font-semibold text-ink">Coming soon</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {draftSolutions.map((solution) => (
                  <li key={solution.slug}>
                    <InlineLink href={routes.solution(solution.slug)}>
                      {solution.name}
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
                <InlineLink href={routes.product("puf-panels")}>PUF sandwich panels</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.product("pir-panels")}>PIR sandwich panels</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.product("cold-room-panels")}>Cold room panels</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.exportCountry("kenya")}>Export to Kenya</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.comparison("puf-vs-pir-panels")}>
                  PUF vs PIR comparison
                </InlineLink>
              </li>
              <li>
                <InlineLink href={routes.panelSelection}>Panel selection guide</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.faqs}>Export and specification FAQs</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.requestQuote}>Request a project quotation</InlineLink>
              </li>
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}
