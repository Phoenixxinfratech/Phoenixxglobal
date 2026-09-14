import {
  CtaBand,
  FaqAccordion,
  LeadFormSection,
  PageHero,
} from "@/components/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Heading, Link, Section } from "@/components/ui";
import { aboutContent } from "@/content/company";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";

const PATH = "/about/";
const page = requirePageByPath(PATH);
const content = aboutContent;

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function AboutPage() {
  const breadcrumbs = [
    { name: "Home", href: routes.home },
    { name: "About", href: PATH },
  ];

  const faqSchema = faqPageSchema(content.faqs);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(
            breadcrumbs.map((item) => ({ name: item.name, path: item.href })),
          ),
          ...(faqSchema ? [faqSchema] : []),
        ]}
      />

      <PageHero
        breadcrumbs={breadcrumbs}
        h1={page.h1}
        intro={content.intro}
        keySpecs={content.keySpecs}
        primaryCta={{ label: "Request a quotation", href: routes.requestQuote }}
        secondaryCta={{ label: "Contact export team", href: routes.contact }}
        image={content.heroImage}
      />

      {content.sections.map((section) => (
        <Section
          key={section.heading}
          background={section.heading === "Who we are" ? "white" : "paper"}
        >
          <Container>
            <Heading as="h2" className="text-2xl md:text-3xl">
              {section.heading}
            </Heading>
            {section.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="prose-body mt-4 max-w-3xl text-base text-steel"
              >
                {paragraph}
              </p>
            ))}
            {section.heading === "What we make" ? (
              <p className="prose-body mt-4 max-w-3xl text-base text-steel">
                Browse the full range on our{" "}
                <Link href={routes.products}>product hub</Link> —{" "}
                <Link href={routes.product("puf-panels")}>PUF panels</Link>,{" "}
                <Link href={routes.product("cold-room-panels")}>
                  cold room kits
                </Link>{" "}
                and{" "}
                <Link href={routes.product("peb-prefabricated-buildings")}>
                  PEB structures
                </Link>{" "}
                carry full technical pages.
              </p>
            ) : null}
            {section.heading === "How we work with buyers" ? (
              <p className="prose-body mt-4 max-w-3xl text-base text-steel">
                See{" "}
                <Link href={routes.manufacturing}>
                  how panels are manufactured
                </Link>
                , review{" "}
                <Link href={routes.export}>export from India</Link> for packing
                and documentation, or send drawings through the{" "}
                <Link href={routes.requestQuote}>quotation form</Link>.
              </p>
            ) : null}
          </Container>
        </Section>
      ))}

      <Section background="white">
        <Container>
          <Heading as="h2" className="text-2xl md:text-3xl">
            What we deliberately are not
          </Heading>
          <p className="prose-body mt-4 max-w-3xl text-base text-steel">
            Positioning matters on export tenders. These lines save both sides
            time when scope is unclear.
          </p>
          <ul className="mt-6 max-w-3xl space-y-4">
            {content.notList.map((item) => (
              <li
                key={item.slice(0, 40)}
                className="flex gap-3 text-base text-steel before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-ember before:content-['']"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="prose-body mt-6 max-w-3xl text-base text-steel">
            Quality practices are on the{" "}
            <Link href={routes.qualityAndTesting}>quality and testing page</Link>
            . Published installations — only with client consent — would appear
            on{" "}
            <Link href={routes.projects}>projects</Link>.
          </p>
        </Container>
      </Section>

      {content.faqs.length > 0 ? (
        <FaqAccordion faqs={content.faqs} heading="Common questions about us" />
      ) : null}

      <CtaBand
        heading={content.ctaHeading}
        copy={content.ctaCopy}
      />

      <LeadFormSection
        variant="quote"
        heading="Request a quotation"
        background="white"
        className="pb-16 md:pb-24"
      />
    </>
  );
}
