import {
  CtaBand,
  InlineLink,
  QuickAnswer,
} from "@/components/blocks";
import { Breadcrumbs } from "@/components/layout";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Heading, Link, Section } from "@/components/ui";
import { getLiveGuides } from "@/content";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";

const PATH = "/resources/";
const page = requirePageByPath(PATH);

const HUB_CARDS = [
  {
    href: routes.guides,
    title: "Technical guides",
    description:
      "Thickness, joints, U-values, fire performance, coatings and supplier evaluation — written for project engineers.",
  },
  {
    href: routes.comparisons,
    title: "Panel comparisons",
    description:
      "Side-by-side notes on PUF, PIR, Rockwool and roof build-ups — where each core wins and where it does not.",
  },
  {
    href: routes.faqs,
    title: "FAQs",
    description:
      "Lead times, container loading, documentation, joints and commercial questions from sales calls.",
  },
  {
    href: routes.glossary,
    title: "Glossary",
    description:
      "U-value, cam-lock, cover width and other terms that show up on drawings and datasheets.",
  },
  {
    href: routes.panelSelection,
    title: "Panel selection",
    description:
      "Match core type and thickness to temperature, fire and hygiene requirements before you fix the BOQ.",
  },
  {
    href: routes.datasheets,
    title: "Datasheets",
    description:
      "Download links only when the PDF exists — otherwise request by email with your application.",
  },
  {
    href: routes.blog,
    title: "Blog",
    description:
      "Notes on specification, export logistics and industrial building practice from our team.",
  },
] as const;

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function ResourcesPage() {
  const liveGuides = getLiveGuides();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: routes.home },
            { name: "Resources", path: PATH },
          ]),
          itemListSchema(
            "Resource hubs",
            HUB_CARDS.map((card) => ({
              name: card.title,
              path: card.href,
            })),
          ),
        ]}
      />

      <Section background="white" className="py-12 md:py-20">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Home", href: routes.home },
              { name: "Resources", href: PATH },
            ]}
            className="mb-6"
          />

          <Heading as="h1">{page.h1}</Heading>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-steel">
            These pages exist so you can compare cores, pick thickness and read
            export packing notes before you call — the same standard as our product
            pages, with no invented test data. Start with a guide if you are sizing
            a cold room; use comparisons when the brief mentions fire or acoustic
            separation; open FAQs when the question is commercial or logistical.
            {liveGuides.length > 0
              ? ` ${liveGuides.length} technical guides are live today.`
              : ""}{" "}
            If a datasheet is not listed, email your application and we send the
            current PDF the same working day when it exists.
          </p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {HUB_CARDS.map((card) => (
              <li
                key={card.href}
                className="rounded-[2px] border border-line p-5"
              >
                <InlineLink
                  href={card.href}
                  className="text-lg font-semibold text-ink hover:text-ember"
                >
                  {card.title}
                </InlineLink>
                <p className="mt-2 text-sm text-steel">{card.description}</p>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <h2 className="text-xl font-semibold text-ink">Related links</h2>
            <ul className="mt-3 space-y-2">
              <li>
                <InlineLink href={routes.comparison("puf-vs-pir-panels")}>
                  PUF vs PIR comparison
                </InlineLink>
              </li>
              <li>
                <InlineLink href={routes.export}>Export hub</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.product("puf-panels")}>PUF panels</InlineLink>
              </li>
              <li>
                <InlineLink href={routes.requestQuote}>Request a quotation</InlineLink>
              </li>
            </ul>
          </div>
        </Container>
      </Section>

      <QuickAnswer heading="What are these resources for?">
        They answer specification and export questions without a sales call first —
        thickness for your temperature band, joint choice for modular cold rooms,
        how many panels fit a 40-foot HC at your profile, and what documents your
        clearing agent needs at Mombasa or Tema. Use them to tighten your BOQ, then
        send port, Incoterm and layout through the{" "}
        <Link href={routes.requestQuote}>quotation form</Link> when you want dated
        pricing.
      </QuickAnswer>

      <CtaBand
        heading="Need a datasheet or thickness recommendation?"
        copy="Send room dimensions, target temperature and destination port. We reply with panel schedule and missing inputs flagged — not generic brochure text."
      />
    </>
  );
}
