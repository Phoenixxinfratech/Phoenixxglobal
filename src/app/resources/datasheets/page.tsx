import { DownloadBlock, InlineLink, LeadFormSection } from "@/components/blocks";
import { Breadcrumbs } from "@/components/layout";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Heading, Section } from "@/components/ui";
import { requirePageByPath } from "@/content/pages";
import { getAvailableDatasheets } from "@/lib/datasheets";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/resources/datasheets/";
const page = requirePageByPath(PATH);

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function DatasheetsPage() {
  const available = getAvailableDatasheets();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: routes.home },
          { name: "Resources", path: routes.resources },
          { name: "Datasheets", path: PATH },
        ])}
      />
      <Section background="white" className="py-12 md:py-20">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Home", href: routes.home },
              { name: "Resources", href: routes.resources },
              { name: "Datasheets", href: PATH },
            ]}
            className="mb-6"
          />

          <Heading as="h1">{page.h1}</Heading>

          {available.length > 0 ? (
            <>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-steel">
                Download current PDF datasheets from our library. Files listed
                below exist on this server — we do not show placeholder download
                buttons for missing documents.
              </p>
              <DownloadBlock
                heading="Available downloads"
                files={available}
                className="!bg-transparent !py-0"
              />
            </>
          ) : (
            <div className="mt-4 max-w-3xl space-y-4 text-base leading-relaxed text-steel">
              <p>
                No PDF datasheets are published in the online library yet. Product
                specifications on the website are indicative — request the current
                datasheet by email and we send the PDF the same working day when
                it exists for your panel type and thickness.
              </p>
              <p>
                Use the datasheet request form below or browse{" "}
                <InlineLink href={routes.product("puf-panels")}>
                  product pages
                </InlineLink>{" "}
                for specification summaries while PDFs are being prepared.
              </p>
            </div>
          )}

          <div className="mt-12">
            <h2 className="text-xl font-semibold text-ink">Related pages</h2>
            <ul className="mt-3 space-y-2">
              <li>
                <InlineLink href={routes.product("puf-panels")}>
                  PUF panel specifications
                </InlineLink>
              </li>
              <li>
                <InlineLink href={routes.product("pir-panels")}>
                  PIR panel specifications
                </InlineLink>
              </li>
              <li>
                <InlineLink href={routes.qualityAndTesting}>
                  Quality and test documentation
                </InlineLink>
              </li>
              <li>
                <InlineLink href={routes.comparisons}>Compare panel cores</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.glossary}>Specification terminology</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.faqs}>Are website specs final?</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.solution("cold-storage")}>
                  Cold storage application data
                </InlineLink>
              </li>
              <li>
                <InlineLink href={routes.contact}>Contact export team</InlineLink>
              </li>
            </ul>
          </div>
        </Container>
      </Section>

      <LeadFormSection variant="datasheet" heading="Request a datasheet by email" />
    </>
  );
}
