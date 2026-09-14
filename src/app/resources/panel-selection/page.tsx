import { InlineLink } from "@/components/blocks";
import { PanelSelectionPageClient } from "@/components/tools/PanelSelectionPageClient";
import { Breadcrumbs } from "@/components/layout";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Heading, Section } from "@/components/ui";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/resources/panel-selection/";
const page = requirePageByPath(PATH);

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function PanelSelectionPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: routes.home },
          { name: "Resources", path: routes.resources },
          { name: "Panel selection", path: PATH },
        ])}
      />
      <Section background="white" className="py-12 md:py-20">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Home", href: routes.home },
              { name: "Resources", href: routes.resources },
              { name: "Panel selection", href: PATH },
            ]}
            className="mb-6"
          />

          <Heading as="h1">{page.h1}</Heading>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-steel">
            Match core type, thickness band and facing to your application. The
            tool below runs in your browser — no account required. If JavaScript
            is disabled, use the static guidance and{" "}
            <InlineLink href={routes.comparisons}>comparison pages</InlineLink>{" "}
            instead.
          </p>

          <noscript>
            <div className="mt-8 rounded-[2px] border border-line bg-paper p-6">
              <h2 className="text-lg font-semibold text-ink">
                Static selection guidance
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-steel">
                <li>
                  Chillers (+0 °C to +8 °C): 80–100 mm PUF cam-lock panels — see{" "}
                  <InlineLink href={routes.product("cold-room-panels")}>
                    cold room panels
                  </InlineLink>
                  .
                </li>
                <li>
                  Freezers (−18 °C to −25 °C): 120–150 mm PUF or 100–120 mm PIR —{" "}
                  <InlineLink href={routes.comparison("puf-vs-pir-cold-storage")}>
                    cold storage comparison
                  </InlineLink>
                  .
                </li>
                <li>
                  Fire-rated walls: rockwool or fire-rated systems —{" "}
                  <InlineLink href={routes.comparison("pir-vs-rockwool-panels")}>
                    PIR vs Rockwool
                  </InlineLink>
                  .
                </li>
                <li>
                  Coastal sites: specify PPGL facings —{" "}
                  <InlineLink href={routes.glossaryTerm("ppgl")}>PPGL glossary</InlineLink>
                  .
                </li>
              </ul>
            </div>
          </noscript>

          <div className="mt-10">
            <PanelSelectionPageClient />
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
                <InlineLink href={routes.comparison("puf-vs-pir-cold-storage")}>
                  PUF vs PIR for cold storage
                </InlineLink>
              </li>
              <li>
                <InlineLink href={routes.comparison("pir-vs-rockwool-panels")}>
                  PIR vs Rockwool comparison
                </InlineLink>
              </li>
              <li>
                <InlineLink href={routes.product("puf-panels")}>PUF panels</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.product("pir-panels")}>PIR panels</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.solution("cold-storage")}>
                  Cold storage solutions
                </InlineLink>
              </li>
              <li>
                <InlineLink href={routes.glossary}>Glossary</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.faqs}>FAQs</InlineLink>
              </li>
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}
