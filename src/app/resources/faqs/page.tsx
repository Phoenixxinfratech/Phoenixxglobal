import { InlineLink } from "@/components/blocks";
import { FaqHubClient } from "@/components/resources/FaqHubClient";
import { Breadcrumbs } from "@/components/layout";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Heading, Section } from "@/components/ui";
import { faqCategories } from "@/content/faqs";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/resources/faqs/";
const page = requirePageByPath(PATH);

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function FaqsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: routes.home },
          { name: "Resources", path: routes.resources },
          { name: "FAQs", path: PATH },
        ])}
      />
      <Section background="white" className="py-12 md:py-20">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Home", href: routes.home },
              { name: "Resources", href: routes.resources },
              { name: "FAQs", href: PATH },
            ]}
            className="mb-6"
          />

          <Heading as="h1">{page.h1}</Heading>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-steel">
            Practical answers on product choice, export logistics, quoting and
            site installation. Filter by topic or search — each answer links to a
            page with more detail. Still stuck?{" "}
            <InlineLink href={routes.requestQuote}>Request a quotation</InlineLink>{" "}
            with your project constraints.
          </p>

          <FaqHubClient categories={faqCategories} />

          <div className="mt-12">
            <h2 className="text-xl font-semibold text-ink">Related resources</h2>
            <ul className="mt-3 space-y-2">
              <li>
                <InlineLink href={routes.comparisons}>Panel comparisons</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.glossary}>Glossary</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.panelSelection}>Panel selection tool</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.export}>Export hub</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.datasheets}>Datasheets</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.solution("cold-storage")}>
                  Cold storage solutions
                </InlineLink>
              </li>
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}
