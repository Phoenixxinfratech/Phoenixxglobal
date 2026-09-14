import {
  CtaBand,
  LeadFormSection,
  PageHero,
  ProcessTimeline,
  ProjectCards,
} from "@/components/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Heading, Link, Section } from "@/components/ui";
import { projectsContent } from "@/content/company";
import { getProduct, getSolution } from "@/content";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/projects/";
const page = requirePageByPath(PATH);
const content = projectsContent;

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function ProjectsPage() {
  const breadcrumbs = [
    { name: "Home", href: routes.home },
    { name: "Projects", href: PATH },
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(
          breadcrumbs.map((item) => ({ name: item.name, path: item.href })),
        )}
      />

      <PageHero
        breadcrumbs={breadcrumbs}
        h1={page.h1}
        intro={content.intro}
        primaryCta={{ label: "Request a quotation", href: routes.requestQuote }}
        secondaryCta={{ label: "Contact export team", href: routes.contact }}
      />

      {content.sections.map((section, index) => (
        <Section
          key={section.heading}
          background={index % 2 === 0 ? "white" : "paper"}
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
          </Container>
        </Section>
      ))}

      <ProcessTimeline
        heading="How reference sharing works"
        steps={content.referenceProcess}
      />

      <ProjectCards projects={content.projects} heading="Published projects" />

      <Section background="white">
        <Container>
          <Heading as="h2" className="text-2xl md:text-3xl">
            Products for typical project scopes
          </Heading>
          <ul className="mt-6 space-y-3">
            {content.productLinks.map((item) => {
              const product = getProduct(item.slug);
              if (!product || product.draft) return null;
              return (
                <li key={item.slug}>
                  <Link
                    href={routes.product(item.slug)}
                    className="text-base font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <Section background="paper">
        <Container>
          <Heading as="h2" className="text-2xl md:text-3xl">
            Solutions by industry
          </Heading>
          <ul className="mt-6 space-y-3">
            {content.solutionLinks.map((item) => {
              const solution = getSolution(item.slug);
              if (!solution || solution.draft) return null;
              return (
                <li key={item.slug}>
                  <Link
                    href={routes.solution(item.slug)}
                    className="text-base font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="prose-body mt-6 max-w-3xl text-base text-steel">
            Export context:{" "}
            <Link href={routes.export}>shipping from India</Link>,{" "}
            <Link href={routes.exportCountry("kenya")}>Kenya market notes</Link>
            , and{" "}
            <Link href={routes.manufacturing}>manufacturing in Ahmedabad</Link>
            . General questions on{" "}
            <Link href={routes.faqs}>FAQs</Link>.
          </p>
        </Container>
      </Section>

      <CtaBand heading={content.ctaHeading} copy={content.ctaCopy} />

      <LeadFormSection
        variant="quote"
        heading="Send your project scope"
        background="white"
        className="pb-16 md:pb-24"
      />
    </>
  );
}
