import {
  CtaBand,
  FaqAccordion,
  SolutionGrid,
} from "@/components/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Heading, Link, Section } from "@/components/ui";
import { solutions } from "@/content";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema, faqPageSchema, itemListSchema } from "@/lib/schema";

const PATH = "/solutions/";
const page = requirePageByPath(PATH);

const hubFaqs = [
  {
    question: "How do I pick the right industry solution page?",
    answer:
      "Start from your process temperature and hygiene class, not from a panel catalogue. Cold storage and dairy pages cover chilled envelopes; food and poultry pages cover washdown and zone separation; pharma and hospital pages cover classified partitions and regulated cold stores. If you span multiple zones, read two pages and send a layout — we quote by room anyway.",
  },
  {
    question: "Do solution pages replace product datasheets?",
    answer:
      "No — industry pages explain how we combine products for an application. Product pages carry core specs, joint types and thickness tables. Use both, then send drawings through the quotation form for a project-specific schedule.",
  },
  {
    question: "Can one project mix solutions — for example warehouse plus cold storage?",
    answer:
      "Yes — most logistics sites quote ambient shell cladding and an internal cold chamber separately. Send one layout with zones marked; we issue a single panel schedule with line items by area.",
  },
  {
    question: "What if my industry is not listed?",
    answer:
      "Send the application — breweries, floriculture and fish processing use the same engineering steps as food or cold storage. We map your temperatures and hygiene rules to the closest product set and say where local code needs verification.",
  },
  {
    question: "Are regulatory claims on solution pages valid in my country?",
    answer:
      "Pages describe typical engineering practice and flag where you must verify against your local authority — food hygiene, pharma GMP, hospital fire rules and data centre fire separation all vary. We do not substitute for your consultant or regulator.",
  },
  {
    question: "Do you export panel packages for all listed industries?",
    answer:
      "Yes — solutions pages apply to export orders from Ahmedabad. See the Kenya export page for port and documentation examples; other country pages expand over time. Destination port and Incoterm belong on every enquiry.",
  },
];

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function SolutionsHubPage() {
  const liveSolutions = solutions.filter((s) => !s.draft);
  const faqSchema = faqPageSchema(hubFaqs);

  const gridItems = liveSolutions.map((s) => ({
    slug: s.slug,
    name: s.name,
    summary: s.summary,
    href: routes.solution(s.slug),
  }));

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
          ...(faqSchema ? [faqSchema] : []),
        ]}
      />

      <Section background="paper" className="py-12 md:py-20">
        <Container>
          <Heading as="h1">{page.h1}</Heading>
          <p className="prose-body mt-4 max-w-3xl text-lg text-steel">
            {page.holdingCopy}
          </p>
          <p className="prose-body mt-4 max-w-3xl text-base text-steel">
            Each page maps panel thickness, joint type and door detail to a real
            industry — cold chain, food hygiene, pharma classification, warehouse
            programme or factory fire separation. Start from your process
            temperature, then open the closest match or browse{" "}
            <Link href={routes.products}>all panel products</Link> if you already
            know the core type.
          </p>
        </Container>
      </Section>

      <SolutionGrid heading="Solutions by industry" solutions={gridItems} />

      <Section background="white">
        <Container>
          <Heading as="h2" className="text-2xl md:text-3xl">
            How to choose a starting point
          </Heading>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-ink">
                Temperature-controlled storage
              </h3>
              <p className="mt-2 text-sm text-steel">
                Chiller and freezer work begins on the{" "}
                <Link href={routes.solution("cold-storage")}>
                  cold storage page
                </Link>
                . Dairy and poultry plants add hygiene zoning — see{" "}
                <Link href={routes.solution("dairy")}>dairy processing</Link> and{" "}
                <Link href={routes.solution("poultry-meat-processing")}>
                  poultry and meat processing
                </Link>
                . Hospital pharmacy stores follow the{" "}
                <Link href={routes.solution("hospitals")}>
                  healthcare solutions
                </Link>{" "}
                page for OT partitions and cold hold rooms.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-ink">
                Hygiene and classified rooms
              </h3>
              <p className="mt-2 text-sm text-steel">
                Food and pharma share washdown rules but different audit
                frameworks — compare{" "}
                <Link href={routes.solution("food-processing")}>
                  food processing
                </Link>{" "}
                with{" "}
                <Link href={routes.solution("pharmaceutical-cleanroom")}>
                  pharmaceutical cleanroom
                </Link>{" "}
                guidance.{" "}
                <Link href={routes.product("cleanroom-panels")}>
                  Cleanroom panel specs
                </Link>{" "}
                cover joint geometry; your validator confirms ISO class.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-ink">
                Large-span industrial shells
              </h3>
              <p className="mt-2 text-sm text-steel">
                Warehouses and factories prioritise programme and fire lines — read{" "}
                <Link href={routes.solution("warehousing-logistics")}>
                  warehousing and logistics
                </Link>{" "}
                and{" "}
                <Link href={routes.solution("manufacturing-plants")}>
                  manufacturing plants
                </Link>
                .{" "}
                <Link href={routes.product("peb-prefabricated-buildings")}>
                  PEB structures
                </Link>{" "}
                quote with roof and wall panels on one schedule when speed matters.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-ink">
                Technical infrastructure
              </h3>
              <p className="mt-2 text-sm text-steel">
                Data centre pages cover building envelope and fire separation only
                — not cooling redundancy or Tier claims. See{" "}
                <Link href={routes.solution("data-centres")}>
                  data centre envelope solutions
                </Link>
                . For export logistics common to all industries, review{" "}
                <Link href={routes.export}>export from India</Link> and{" "}
                <Link href={routes.exportCountry("kenya")}>Kenya port notes</Link>.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <FaqAccordion faqs={hubFaqs} heading="Questions on industry solutions" />

      <CtaBand
        heading="Send your layout for a panel schedule"
        copy="Mark room temperatures, door positions and delivery port on a PDF sketch — we reply with thickness, joint detail and export pricing by zone, not a generic brochure."
        className="pb-16 md:pb-24"
      />
    </>
  );
}
