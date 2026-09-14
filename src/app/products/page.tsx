import {
  ComparisonTable,
  CtaBand,
  FaqAccordion,
  ProductGrid,
} from "@/components/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Heading, Link, Section } from "@/components/ui";
import { getLiveProducts, products } from "@/content";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema, faqPageSchema, itemListSchema } from "@/lib/schema";

const PATH = "/products/";
const page = requirePageByPath(PATH);

const hubFaqs = [
  {
    question: "Should I start with PUF, PIR or Rockwool?",
    answer:
      "For most cold rooms and general industrial insulation, PUF is the usual starting point on cost per m². Choose PIR when you need lower thermal conductivity at the same thickness or better fire behaviour than standard PUF. Specify Rockwool when the wall must be non-combustible or carry a fire period — accept the weight and slightly higher thermal transmittance.",
  },
  {
    question: "Do you supply both wall and roof panels from one enquiry?",
    answer:
      "Yes. Many warehouse and cold store projects quote wall cladding, roof sheets and flashings together. Send elevation and roof layout drawings so we can align joint direction, fixing centres and packing in one container plan.",
  },
  {
    question: "What information do you need for a panel quotation?",
    answer:
      "Square metres by elevation, target internal temperature if any, preferred core, facing colour, joint type, destination port and Incoterm. A PDF sketch is enough for a first pass — we will ask follow-up questions rather than guess.",
  },
  {
    question: "Are datasheets available before I place an order?",
    answer:
      "We issue build-up summaries and specification tables with quotations. Formal datasheets for your approved thickness and facing are confirmed against project documentation before dispatch — not generic marketing PDFs.",
  },
  {
    question: "Can I mix panel types on one building?",
    answer:
      "You can use different cores on different zones — for example PUF on a chiller and Rockwool on a fire wall — but do not mix core types on the same continuous envelope. Joint details and thermal movement differ.",
  },
  {
    question: "How do export lead times compare to domestic supply?",
    answer:
      "Production time is similar; export adds packing, documentation and port booking days. Sea freight to East African ports is typically 18–25 days from Indian west coast sailings after gate-in. We state the production window on the order acknowledgement.",
  },
];

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function ProductsHubPage() {
  const liveProducts = getLiveProducts();
  const draftProducts = products.filter((p) => p.draft);
  const faqSchema = faqPageSchema(hubFaqs);

  const gridItems = liveProducts.map((p) => ({
    slug: p.slug,
    name: p.name,
    shortName: p.shortName,
    keySpec: p.keySpec ?? p.coreOfType,
    href: routes.product(p.slug),
    image: p.images[0]
      ? {
          src: p.images[0].src,
          alt: p.images[0].alt,
          width: p.images[0].width,
          height: p.images[0].height,
        }
      : undefined,
  }));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: routes.home },
            { name: "Products", path: PATH },
          ]),
          itemListSchema(
            "Insulated sandwich panel products",
            products.map((p) => ({
              name: p.name,
              path: routes.product(p.slug),
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
            Five panel families carry full technical pages today — PUF, PIR,
            Rockwool, roofing and wall systems. Cold room kits, cleanroom
            panels, fire-rated builds, doors and PEB structures follow in the
            next batch. Start from the{" "}
            <Link href={routes.solution("cold-storage")}>
              cold storage solution overview
            </Link>{" "}
            if you are sizing a chiller or freezer, or jump to{" "}
            <Link href={routes.export}>export packing and ports</Link> when the
            BOQ is already fixed.
          </p>
        </Container>
      </Section>

      <ProductGrid heading="Live product pages" products={gridItems} />

      <Section background="paper">
        <Container>
          <Heading as="h2" className="text-2xl md:text-3xl">
            Selection guidance by application
          </Heading>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-ink">
                Temperature-controlled rooms
              </h3>
              <p className="mt-2 text-sm text-steel">
                Chiller and freezer rooms usually start with{" "}
                <Link href={routes.product("puf-panels")}>
                  polyurethane foam sandwich panels
                </Link>
                . Where headroom is tight or fire behaviour must beat standard
                PUF, move to{" "}
                <Link href={routes.product("pir-panels")}>
                  polyisocyanurate core panels
                </Link>
                . Cam-lock cold room kits publish separately — until then, quote
                wall and ceiling panels with your room drawing.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-ink">
                Industrial sheds and warehouses
              </h3>
              <p className="mt-2 text-sm text-steel">
                Long-span roofs need the right profile and purlin spacing — see{" "}
                <Link href={routes.product("roofing-panels")}>
                  insulated roofing sandwich panels
                </Link>
                . Perimeter walls and internal partitions use{" "}
                <Link href={routes.product("wall-panels")}>
                  tongue-and-groove wall cladding
                </Link>
                . Fire-rated separations call for{" "}
                <Link href={routes.product("rockwool-panels")}>
                  mineral wool core panels
                </Link>{" "}
                even when thermal performance is not the driver.
              </p>
            </div>
          </div>
          <p className="prose-body mt-6 max-w-3xl text-base text-steel">
            Still comparing cores? Use the table below, then open the{" "}
            <Link href={routes.comparison("puf-vs-pir-panels")}>
              PUF versus PIR comparison page
            </Link>{" "}
            or the{" "}
            <Link href={routes.panelSelection}>
              panel selection resource
            </Link>{" "}
            before you freeze thickness on the GA drawing. When ready,{" "}
            <Link href={routes.requestQuote}>send the BOQ for a quotation</Link>.
          </p>
        </Container>
      </Section>

      <ComparisonTable
        heading="PUF, PIR and Rockwool at a glance"
        columns={["PUF", "PIR", "Rockwool"]}
        rows={[
          {
            label: "Core type",
            values: ["Polyurethane foam", "Polyisocyanurate", "Mineral wool"],
          },
          {
            label: "Typical thermal use",
            values: [
              "Cold rooms and general insulation",
              "Thinner walls at same U-value",
              "Fire-rated walls and partitions",
            ],
          },
          {
            label: "Weight (indicative)",
            values: [
              "Lightest foam option",
              "Slightly denser than PUF",
              "Heaviest — plan structure loads",
            ],
          },
          {
            label: "Trade-off",
            values: [
              "Not for fire compartmentation",
              "Higher m² cost than PUF",
              "Higher λ than foam cores",
            ],
          },
          {
            label: "Start here",
            values: [
              "Most −18 °C freezer rooms",
              "Premium when space is limited",
              "When non-combustible core is specified",
            ],
          },
        ]}
      />

      {draftProducts.length > 0 ? (
        <Section background="white">
          <Container>
            <Heading as="h2" className="text-2xl md:text-3xl">
              Publishing next
            </Heading>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {draftProducts.map((product) => (
                <li key={product.slug}>
                  <Link href={routes.product(product.slug)}>{product.name}</Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-steel">
              Need a datasheet for a draft product now? Use the{" "}
              <Link href={routes.datasheets}>datasheet request form</Link> with
              the slug in the message body.
            </p>
          </Container>
        </Section>
      ) : null}

      <FaqAccordion faqs={hubFaqs} heading="Questions on choosing panel type" />

      <CtaBand
        variant="quote"
        heading="Send drawings for a panel quotation"
        copy="Attach elevations, temperature targets and destination port. We respond with core recommendation, thickness and export packing notes — not a generic brochure."
        className="pb-16 md:pb-24"
      />
    </>
  );
}
