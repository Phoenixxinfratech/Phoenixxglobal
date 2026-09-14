import { InlineLink } from "@/components/blocks";
import { Breadcrumbs } from "@/components/layout";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Heading, Section } from "@/components/ui";
import { getLiveGuides } from "@/content";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";

const PATH = "/resources/guides/";
const page = requirePageByPath(PATH);

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function GuidesHubPage() {
  const liveGuides = getLiveGuides();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: routes.home },
            { name: "Resources", path: routes.resources },
            { name: "Guides", path: PATH },
          ]),
          itemListSchema(
            "Technical guides",
            liveGuides.map((guide) => ({
              name: guide.name,
              path: routes.guide(guide.slug),
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
              { name: "Guides", href: PATH },
            ]}
            className="mb-6"
          />

          <Heading as="h1">{page.h1}</Heading>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-steel">
            Practical specification notes for cold storage thickness, joint choice,
            U-values, fire performance, coating selection, and supplier evaluation.
            Each guide is written for project engineers — no filler, no invented test
            data.
          </p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {liveGuides.map((guide) => (
              <li
                key={guide.slug}
                className="rounded-[2px] border border-line p-5"
              >
                <InlineLink
                  href={routes.guide(guide.slug)}
                  className="text-lg font-semibold text-ink hover:text-ember"
                >
                  {guide.name}
                </InlineLink>
                <p className="mt-2 text-sm text-steel">{guide.metaDescription}</p>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <h2 className="text-xl font-semibold text-ink">Related pages</h2>
            <ul className="mt-3 space-y-2">
              <li>
                <InlineLink href={routes.comparisons}>Panel comparisons</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.product("puf-panels")}>PUF panels</InlineLink>
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
                <InlineLink href={routes.panelSelection}>Panel selection</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.glossary}>Glossary</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.faqs}>FAQs</InlineLink>
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
