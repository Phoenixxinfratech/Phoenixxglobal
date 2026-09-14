import type { Metadata } from "next";
import {
  ComparisonTable,
  CtaBand,
  FaqAccordion,
  FeatureSplit,
  HeroSlider,
  LeadFormSection,
  ProcessTimeline,
  ProductGrid,
  QuickAnswer,
  SolutionGrid,
  TrustStrip,
} from "@/components/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Heading, Link, Section } from "@/components/ui";
import { heroSlides } from "@/content/hero";
import { getAllProducts, getAllSolutions } from "@/content";
import { trustItems } from "@/content/trust";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Insulated Sandwich Panels & PEB Export from India",
  description:
    "PUF, PIR and Rockwool sandwich panels plus PEB systems from Ahmedabad. Quoted for cold storage, warehouses and industrial plants shipping to African ports.",
  path: "/",
  draft: false,
});

const homepageFaqs = [
  {
    question: "What is your minimum order quantity for sandwich panels?",
    answer:
      "MOQ depends on thickness, profile and whether the order is domestic or export. For export, we usually need enough square metres to fill a container sensibly — often one 40-foot HC load. Tell us your BOQ and we will say if the quantity is workable.",
  },
  {
    question: "How long does production take after I confirm an order?",
    answer:
      "Lead time is tied to foam chemistry, facing colour and current line load. We quote a production window in writing with the order confirmation — not a verbal guess. Export orders also need packing and documentation days after production finishes.",
  },
  {
    question: "Can you customise thickness, colour and joint type?",
    answer:
      "Yes within the ranges we run. Thickness, facing colour (RAL where available), joint system and coating class are set against your drawings before we cut. We do not invent a build-up that we cannot produce.",
  },
  {
    question: "What export documents do you prepare?",
    answer:
      "As standard we prepare the commercial invoice, packing list and certificate of origin paperwork your buyer or agent specifies. Destination-specific extras (IDF, PVoC and similar) need to be flagged early so nothing sits at the port for missing paperwork.",
  },
  {
    question: "Do you supervise installation on site abroad?",
    answer:
      "We issue installation notes with the supply. On-site supervision is available on request for larger envelopes — it is not automatic on every order. Most African projects use a local cladding contractor; we stay available on drawings and joint details.",
  },
  {
    question: "How do I get an accurate quotation?",
    answer:
      "Send room or building dimensions, temperature target if any, preferred core (PUF, PIR or Rockwool), destination port, Incoterm preference and approximate square metres. Attach a sketch or drawing if you have one. We reply in working hours with a dated pack — not a brochure dump.",
  },
];

const processSteps = [
  {
    title: "Enquiry and drawings",
    body: "You send dimensions, temperature, port and Incoterm preference. We return questions on anything missing before we price.",
    duration: "Same working day response target",
  },
  {
    title: "Quotation pack",
    body: "Panel build-up, indicative lead time and commercial terms go out in writing. We do not quote from a drawing we have not reviewed.",
    duration: "Typically 1–2 working days once inputs are complete",
  },
  {
    title: "Production",
    body: "Facing coils and foam systems are allocated to your order. In-process checks cover density sampling and dimensional tolerances.",
    duration: "As confirmed on the order acknowledgement",
  },
  {
    title: "Packing and dispatch",
    body: "Panels are edge-protected and loaded for 40-foot HC containers where export applies. Packing list is matched to the invoice before gate-in.",
    duration: "After production clearance",
  },
  {
    title: "Installation support",
    body: "You receive joint and handling notes. Optional site support can be scoped if the project needs it.",
    duration: "As agreed",
  },
];

const productKeySpecs: Record<string, string> = {
  "puf-panels": "Typical λ 0.022–0.024 W/m·K (indicative)",
  "pir-panels": "Higher fire performance than standard PUF",
  "rockwool-panels": "Mineral wool core for fire-rated walls",
  "roofing-panels": "Trapezoidal roof profiles for sheds",
  "wall-panels": "Exterior and partition wall cladding",
  "cold-room-panels": "Cam-lock joints for modular cold rooms",
  "cleanroom-panels": "Smooth facings for hygiene zones",
  "fire-rated-panels": "Specified fire resistance periods",
  "industrial-doors": "Cold room and cleanroom door sets",
  "peb-prefabricated-buildings": "Steel frame with panel cladding",
};

export default function HomePage() {
  const products = getAllProducts().map((p) => ({
    slug: p.slug,
    name: p.name,
    shortName: p.shortName,
    keySpec: productKeySpecs[p.slug] ?? p.coreOfType,
    href: routes.product(p.slug),
  }));

  const solutions = getAllSolutions().map((s) => ({
    slug: s.slug,
    name: s.name,
    summary: s.summary,
    href: routes.solution(s.slug),
  }));

  return (
    <>
      <JsonLd data={faqPageSchema(homepageFaqs)!} />

      <HeroSlider slides={heroSlides} />

      <TrustStrip items={trustItems.map((label) => ({ label }))} />

      <QuickAnswer heading="What we make and who we ship to">
        PHOENIXX SMARTBUILD manufactures insulated sandwich panels and
        pre-engineered building systems in Ahmedabad, India. We supply PUF,
        PIR and Rockwool cores, cold room and cleanroom panels, industrial
        doors and PEB cladding packages to project buyers who need drawings,
        packing lists and containers that clear without drama — across India
        and export markets in Africa and beyond.
      </QuickAnswer>

      <Section background="white" className="!pt-0">
        <Container>
          <p className="prose-body text-steel">
            Start with the{" "}
            <Link href={routes.products}>full panel range</Link>, jump to{" "}
            <Link href={routes.solution("cold-storage")}>cold storage envelopes</Link>,
            or read how we{" "}
            <Link href={routes.export}>handle export from India</Link>. When you
            are ready,{" "}
            <Link href={routes.requestQuote}>request a quotation</Link> with
            drawings attached.
          </p>
        </Container>
      </Section>

      <ProductGrid
        heading="Panel and structure range"
        products={products}
      />

      <FeatureSplit
        imageSide="left"
        heading="How we work with project buyers"
        prose="Procurement teams compare suppliers on paperwork as much as foam density. We review drawings before we price, name the build-up we can actually produce, and pack for ocean voyages — not for a factory-floor photo. One thing we deliberately do not do: quote a full BOQ from a sketch we have never opened."
        bullets={[
          "Drawings and temperature target reviewed before pricing",
          "Facing, joint and thickness stated on the quotation",
          "Export packing planned for 40-foot HC containers",
          "Installation notes issued with supply",
        ]}
        href={routes.about}
        linkLabel="About the company"
        image={{
          src: "/images/plant/industrial-warehouse-exterior.jpg",
          alt: "Large industrial warehouse exterior with metal cladding",
          width: 1600,
          height: 1067,
        }}
      />

      <SolutionGrid
        heading="Industries we specify for"
        solutions={solutions}
      />

      <FeatureSplit
        imageSide="right"
        heading="Manufacturing before the pack list is signed"
        prose="Panels leave the line only after the facing, foam and joint detail match what was confirmed on the order. We will publish plant photography and process steps on the manufacturing page as soon as own shots are cleared — stock images on this site are stand-ins, not our floor."
        bullets={[
          "PPGI and PPGL facing options",
          "Cam-lock and tongue-and-groove joints",
          "Dimensional and density checks before dispatch",
        ]}
        href={routes.manufacturing}
        linkLabel="Manufacturing overview"
        image={{
          src: "/images/solutions/steel-sheet-storage.jpg",
          alt: "Stacked steel and metal sheets in an industrial warehouse",
          width: 1600,
          height: 1068,
        }}
      />

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
              "Where fire performance must beat PUF",
              "Fire-rated walls and partitions",
            ],
          },
          {
            label: "Trade-off",
            values: [
              "Usually the lower-cost cold-chain option",
              "Costs more than PUF for similar thickness",
              "Heavier; thermal conductivity higher than PUF/PIR",
            ],
          },
          {
            label: "Start here",
            values: [
              "Most −18 °C freezer rooms",
              "Projects asking for better fire behaviour",
              "Compartment walls with fire periods",
            ],
          },
        ]}
      />

      <Section background="white">
        <Container>
          <Heading as="h2" className="text-2xl md:text-3xl">
            Compare cores in more detail
          </Heading>
          <p className="mt-4 max-w-3xl text-steel">
            Full side-by-side pages are still being written. Until then, open the{" "}
            <Link href={routes.product("puf-panels")}>PUF panel page</Link>, the{" "}
            <Link href={routes.product("pir-panels")}>PIR panel page</Link>, or the{" "}
            <Link href={routes.product("rockwool-panels")}>Rockwool panel page</Link>{" "}
            and send your fire rating and temperature target with the enquiry.
          </p>
        </Container>
      </Section>

      <ProcessTimeline
        heading="From enquiry to delivery"
        steps={processSteps}
      />

      <Section background="graphite">
        <Container>
          <Heading as="h2" className="text-2xl text-white md:text-3xl">
            Export packing and documentation
          </Heading>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/85">
            We manufacture in Ahmedabad and ship through Indian ports with packing
            suited to long ocean voyages. Edge protection, banding and dunnage are
            chosen for the container — not for the factory floor. We do not claim
            offices or warehouses abroad; destination clearing stays with your
            agent. See the{" "}
            <Link href={routes.export} className="text-white underline hover:text-ember">
              export hub
            </Link>{" "}
            and the live{" "}
            <Link
              href={routes.exportCountry("kenya")}
              className="text-white underline hover:text-ember"
            >
              Kenya market page
            </Link>{" "}
            for how we work a destination in practice.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="border border-white/15 p-6">
              <h3 className="font-display text-lg text-white">Container planning</h3>
              <p className="mt-2 text-sm text-white/80">
                Loading plans for 40-foot HC containers are shared before you confirm
                — square metres depend on thickness and profile.
              </p>
            </div>
            <div className="border border-white/15 p-6">
              <h3 className="font-display text-lg text-white">Paperwork</h3>
              <p className="mt-2 text-sm text-white/80">
                Commercial invoice, packing list and origin documents as standard.
                Flag destination extras early so cargo is not delayed at discharge.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <FaqAccordion faqs={homepageFaqs} heading="Questions buyers ask first" />

      <CtaBand variant="quote" />

      <LeadFormSection variant="quote" heading="Send project details for a quotation" />
    </>
  );
}
