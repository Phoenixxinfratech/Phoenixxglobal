import {
  BuyerChecklist,
  CtaBand,
  FaqAccordion,
  InlineLink,
  LeadFormSection,
  QuickAnswer,
} from "@/components/blocks";
import { Breadcrumbs } from "@/components/layout";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Heading, Link, Section } from "@/components/ui";
import { countries } from "@/content";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { isPublishableCountry } from "@/lib/publishable";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import type { FaqItem } from "@/content/types";

const PATH = "/export/africa/";
const page = requirePageByPath(PATH);

const BUYER_CHECKLIST = [
  "Name destination port and inland city — Mombasa versus Dar changes routing and transit time",
  "State ambient design temperature for your site band (coastal humid, arid inland or highland)",
  "Send target room temperature per zone and door schedule — thickness follows load, not product name",
  "Confirm Incoterm preference and whether your clearing agent is appointed",
  "Specify facing grade if the site is coastal salt air or strong equatorial UV",
  "Attach layout PDF or internal dimensions — floor area alone is not enough for a panel schedule",
];

const AFRICA_FAQS: FaqItem[] = [
  {
    question: "Which panel core suits hot arid climates in West and East Africa?",
    answer:
      "PUF or PIR foam cores are typical for cold chain and insulated sheds. Thickness increases with temperature delta — a −18 °C freezer in +45 °C ambient often starts at 100–120 mm PUF before door losses. Facing colour and coating class matter on external walls in strong sun; dark roof colours chalk faster than wall panels.",
  },
  {
    question: "Do humid coastal sites need different facings than inland warehouses?",
    answer:
      "Coastal salt air favours higher-grade galvalume or AZ-coated outer sheet and sealed endlaps. Humidity drives condensation risk at roof soffits in ambient warehouses — size roof U-value for peak RH, not average annual weather. We note coastal exposure on the quotation when you name the port.",
  },
  {
    question: "How do I import sandwich panels from India to an African port?",
    answer:
      "Find a manufacturer who quotes thickness, joint type and m² per container against your layout, then confirm port, Incoterm and clearing-agent document list before production. We manufacture in Ahmedabad, pack for ocean freight and issue commercial invoice, packing list, bill of lading and certificate of origin as standard. Import declaration and duty sit with your agent at destination.",
  },
  {
    question: "Which ports do most East and West Africa orders use?",
    answer:
      "East Africa: Mombasa (Kenya), Dar es Salaam (Tanzania), often with inland haulage to Kampala or Kigali. West Africa: Tema (Ghana), Lagos (Nigeria). Southern corridor: Durban for regional distribution. We confirm port of loading in India and port of discharge on your proforma — do not assume from an old shipment.",
  },
  {
    question: "Should I add extra thickness for African heat?",
    answer:
      "Yes when ambient design peaks above +35 °C external or when door traffic is high. Ceiling panels often match or exceed wall thickness because roof solar load adds heat. Read the cold storage thickness guide for starting bands, then send room dimensions for a load-based recommendation tied to your quotation.",
  },
  {
    question: "Can you clear customs in my African country?",
    answer:
      "No. We prepare export documents from India. IDF, PVoC, import declaration and inland haulage after clearance are your licensed agent's work. Share their checklist at enquiry so invoice wording matches what they file.",
  },
];

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function ExportAfricaPage() {
  const publishableCountries = countries.filter(isPublishableCountry);
  const faqSchema = faqPageSchema(AFRICA_FAQS);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: routes.home },
            { name: "Export", path: routes.export },
            { name: "Africa", path: PATH },
          ]),
          ...(faqSchema ? [faqSchema] : []),
        ]}
      />

      <Section background="white" className="py-12 md:py-20">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Home", href: routes.home },
              { name: "Export", href: routes.export },
              { name: "Africa", href: PATH },
            ]}
            className="mb-6"
          />

          <Heading as="h1">{page.h1}</Heading>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-steel">
            African projects span hot arid interiors, humid Indian Ocean coasts and
            cooler highland corridors — each shifts panel thickness, facing choice
            and how aggressively you detail joints against condensation. We ship
            PUF and PIR cold room kits, warehouse roofing and PEB shells from
            Ahmedabad through Indian ports; country pages below add port names and
            documentation notes where we have enough verified detail to publish.
          </p>
        </Container>
      </Section>

      <QuickAnswer heading="Which panels for African weather — and how do I import?">
        Match core and thickness to your temperature band and ambient peak, not to
        a generic catalogue. Chiller rooms at +2 to +8 °C often start at 80–100 mm
        PUF; freezers at −18 °C commonly need 100–120 mm on coastal sites before
        door losses. Import from India by confirming destination port, Incoterm,
        layout PDF and clearing-agent document list before production release — we
        pack flat bundles for Mombasa, Dar, Tema, Lagos and Durban routing as
        typical examples, with dates on your proforma rather than website promises.
      </QuickAnswer>

      <Section background="paper">
        <Container>
          <Heading as="h2" className="text-2xl md:text-3xl">
            Climate bands — specification starting points
          </Heading>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-[2px] border border-line p-5">
              <h3 className="font-semibold text-ink">Hot arid inland</h3>
              <p className="mt-2 text-sm text-steel">
                Sahel and interior East Africa — large diurnal swing, low RH daytime.
                Roof solar load dominates; lighter external colours reduce soffit heat.
                Cold stores still sized on −18 °C hold against +40 °C+ design ambient.
              </p>
            </div>
            <div className="rounded-[2px] border border-line p-5">
              <h3 className="font-semibold text-ink">Humid coastal</h3>
              <p className="mt-2 text-sm text-steel">
                Mombasa, Dar es Salaam, Lagos, Tema — salt air and high RH. Specify
                facing grade for coastal exposure; vapor-barrier continuity at joints
                matters more than an extra 10 mm foam if doors leak humid air.
              </p>
            </div>
            <div className="rounded-[2px] border border-line p-5">
              <h3 className="font-semibold text-ink">Highland and temperate nodes</h3>
              <p className="mt-2 text-sm text-steel">
                Nairobi, Addis Ababa, Kigali — milder ambient peaks but still size
                freezers on worst-case pull-down days. Inland haulage from port adds
                time; start import paperwork when production begins, not when the vessel
                docks.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <Heading as="h2" className="text-2xl md:text-3xl">
            Typical projects we quote
          </Heading>
          <ul className="prose-body mt-4 max-w-3xl list-disc space-y-2 pl-5 text-base text-steel">
            <li>
              Cold storage and food processing — cam-lock chill and freezer rooms,
              blast hold zones, insulated dispatch docks
            </li>
            <li>
              Warehouses and logistics sheds — PEB frame with 40–80 mm roof and wall
              panels, optional internal cold chamber
            </li>
            <li>
              Food, dairy and meat plants — washdown walls, carcass chill at +2 to
              +4 °C, frozen hold at −18 °C with traffic-rated doors
            </li>
          </ul>
        </Container>
      </Section>

      <Section background="paper">
        <Container>
          <Heading as="h2" className="text-2xl md:text-3xl">
            Port corridors — where containers land
          </Heading>
          <ul className="mt-4 grid gap-4 sm:grid-cols-3">
            <li className="rounded-[2px] border border-line p-5">
              <h3 className="font-semibold text-ink">East Africa</h3>
              <p className="mt-2 text-sm text-steel">
                Mombasa (Kenya), Dar es Salaam (Tanzania) — inland routes to Uganda,
                Rwanda and Zambia vary by agent and road season.
              </p>
            </li>
            <li className="rounded-[2px] border border-line p-5">
              <h3 className="font-semibold text-ink">West Africa</h3>
              <p className="mt-2 text-sm text-steel">
                Tema (Ghana), Lagos (Nigeria) — longer ocean legs from India; allow
                wider transit range on the project plan.
              </p>
            </li>
            <li className="rounded-[2px] border border-line p-5">
              <h3 className="font-semibold text-ink">Southern Africa</h3>
              <p className="mt-2 text-sm text-steel">
                Durban — regional hub for southern distribution; confirm inland
                permits with your agent before dispatch.
              </p>
            </li>
          </ul>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <Heading as="h2" className="text-2xl md:text-3xl">
            Thickness in hot climates
          </Heading>
          <p className="prose-body mt-4 max-w-3xl text-base text-steel">
            Hot ambient adds load on chill and freezer envelopes — ceiling panels
            often need equal or greater thickness than walls because roof solar gain
            stacks on door infiltration. Starting bands and worked examples are on
            the{" "}
            <Link href={routes.guide("cold-storage-panel-thickness")}>
              cold storage panel thickness guide
            </Link>
            . Send your room dimensions and we tie thickness to your quotation — not
            a website table alone.
          </p>
        </Container>
      </Section>

      <BuyerChecklist items={BUYER_CHECKLIST} heading="African export buyer checklist" />

      {publishableCountries.length > 0 ? (
        <Section background="paper">
          <Container>
            <Heading as="h2" className="text-2xl md:text-3xl">
              Country pages — live detail
            </Heading>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {publishableCountries.map((country) => (
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
          </Container>
        </Section>
      ) : null}

      <Section background="white">
        <Container>
          <Heading as="h2" className="text-2xl md:text-3xl">
            Export process and depth example
          </Heading>
          <ul className="mt-4 space-y-2">
            <li>
              <InlineLink href={routes.exportProcess}>Export process step by step</InlineLink>
            </li>
            <li>
              <InlineLink href={routes.exportPackaging}>
                Packaging and container loading
              </InlineLink>
            </li>
            <li>
              <InlineLink href={routes.exportCountry("kenya")}>
                Kenya export page — Mombasa port and documentation notes
              </InlineLink>
            </li>
            <li>
              <InlineLink href={routes.export}>Main export hub</InlineLink>
            </li>
          </ul>
        </Container>
      </Section>

      <FaqAccordion faqs={AFRICA_FAQS} heading="African climate, panels and import FAQs" />

      <CtaBand
        heading="Request export pricing for your African port"
        copy="Attach layout PDF, BOQ or room dimensions with destination port and Incoterm. We return CIF/FOB line items, indicative container load and the document set your clearing agent should expect."
      />

      <LeadFormSection
        variant="export"
        heading="Request an Africa export quotation"
        background="white"
        className="pb-16 md:pb-24"
      />
    </>
  );
}
