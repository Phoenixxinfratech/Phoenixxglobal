import { InlineLink } from "@/components/blocks";
import { Breadcrumbs } from "@/components/layout";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Heading, Section } from "@/components/ui";
import { countries } from "@/content";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";

const PATH = "/export/";
const page = requirePageByPath(PATH);


export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function ExportHubPage() {
  const liveCountries = countries.filter((c) => !c.draft);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: routes.home },
            { name: "Export", path: PATH },
          ]),
          itemListSchema(
            "Export markets",
            countries.map((c) => ({
              name: c.name,
              path: routes.exportCountry(c.slug),
            })),
          ),
        ]}
      />
      <Section background="white" className="py-12 md:py-20">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Home", href: routes.home },
              { name: "Export", href: PATH },
            ]}
            className="mb-6"
          />

          <Heading as="h1">{page.h1}</Heading>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-steel">
            {page.holdingCopy}
          </p>

          <div className="mt-10">
            <h2 className="text-xl font-semibold text-ink">Export topics</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              <li>
                <InlineLink href={routes.exportAfrica}>Export to Africa overview</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.exportProcess}>Enquiry to container loading</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.exportDocumentation}>Shipping documentation</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.exportPackaging}>
                  Packaging and container loading
                </InlineLink>
              </li>
            </ul>
          </div>

          {liveCountries.length > 0 ? (
            <div className="mt-10">
              <h2 className="text-xl font-semibold text-ink">Country pages — live</h2>
              <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                {liveCountries.map((country) => (
                  <li
                    key={country.slug}
                    className="rounded-[2px] border border-line p-5"
                  >
                    <InlineLink
                      href={routes.exportCountry(country.slug)}
                      className="text-lg font-semibold text-ink hover:text-ember"
                    >
                      {country.name}
                    </InlineLink>
                    <p className="mt-2 text-sm text-steel">{country.metaDescription}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="mt-10">
            <h2 className="text-xl font-semibold text-ink">All export markets</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {countries.map((country) => (
                <li key={country.slug}>
                  <InlineLink href={routes.exportCountry(country.slug)}>
                    {country.name}
                    {country.draft ? " (draft)" : ""}
                  </InlineLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-semibold text-ink">Related pages</h2>
            <ul className="mt-3 space-y-2">
              <li>
                <InlineLink href={routes.product("puf-panels")}>PUF panels for export</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.product("pir-panels")}>PIR panels for export</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.solution("cold-storage")}>Cold storage solutions</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.faqs}>Export FAQs</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.comparison("puf-vs-pir-panels")}>
                  PUF vs PIR comparison
                </InlineLink>
              </li>
              <li>
                <InlineLink href={routes.contact}>Contact export team</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.requestQuote}>Request a quotation</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.manufacturing}>Manufacturing in Ahmedabad</InlineLink>
              </li>
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}
