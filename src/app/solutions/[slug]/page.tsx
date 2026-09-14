import { notFound } from "next/navigation";
import { HoldingPage, InlineLink, RelatedContent } from "@/components/blocks";
import { CtaBar } from "@/components/conversion";
import { Breadcrumbs } from "@/components/layout";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
  Container,
  Heading,
  Section,
} from "@/components/ui";
import { getProduct, getSolution, solutions } from "@/content";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};

  return buildMetadata({
    title: solution.seoTitle,
    description: solution.metaDescription,
    path: routes.solution(slug),
    draft: solution.draft,
  });
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  const breadcrumbs = [
    { name: "Home", href: routes.home },
    { name: "Solutions", href: routes.solutions },
    { name: solution.name, href: routes.solution(slug) },
  ];

  if (solution.draft) {
    return (
      <>
        <JsonLd
          data={breadcrumbSchema(
            breadcrumbs.map((item) => ({ name: item.name, path: item.href })),
          )}
        />
        <HoldingPage
          h1={solution.h1}
          holdingCopy={solution.holdingCopy ?? solution.summary}
          breadcrumbs={[
            { label: "Home", href: routes.home },
            { label: "Solutions", href: routes.solutions },
            { label: solution.name },
          ]}
          relatedLinks={[
            { slug: "cold-storage", name: "Cold storage solutions", href: routes.solution("cold-storage") },
            { slug: "puf-panels", name: "PUF sandwich panels", href: routes.product("puf-panels") },
            { slug: "pir-panels", name: "PIR sandwich panels", href: routes.product("pir-panels") },
            { slug: "cold-room-panels", name: "Cold room panel kits", href: routes.product("cold-room-panels") },
            { slug: "food-processing", name: "Food processing facilities", href: routes.solution("food-processing") },
            { slug: "export", name: "Export from India", href: routes.export },
            { slug: "kenya", name: "Kenya export market", href: routes.exportCountry("kenya") },
            { slug: "request-quote", name: "Request a quotation", href: routes.requestQuote },
          ]}
          relatedEntityType="solution"
          relatedEntitySlug={slug}
        />
      </>
    );
  }

  const faqSchema = faqPageSchema(solution.faqs);

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
      <Section background="white" className="py-12 md:py-20">
        <Container>
          <Breadcrumbs items={breadcrumbs} className="mb-6" />

          <Heading as="h1">{solution.h1}</Heading>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-steel">
            {solution.summary}
          </p>

          {solution.relevantProducts.length > 0 ? (
            <div className="mt-10">
              <Heading as="h2" className="text-2xl md:text-3xl">
                Relevant products
              </Heading>
              <ul className="mt-4 space-y-2">
                {solution.relevantProducts.map((productSlug) => {
                  const product = getProduct(productSlug);
                  if (!product) return null;
                  return (
                    <li key={productSlug}>
                      <InlineLink href={routes.product(productSlug)}>
                        {product.name}
                      </InlineLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}

          {solution.faqs.length > 0 ? (
            <div className="mt-10">
              <Heading as="h2" className="text-2xl md:text-3xl">
                Frequently asked questions
              </Heading>
              <Accordion className="mt-6" type="single">
                {solution.faqs.map((faq, index) => (
                  <AccordionItem key={faq.question} value={`faq-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionPanel>{faq.answer}</AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ) : null}

          <RelatedContent entityType="solution" slug={slug} className="mt-12" />
        </Container>
      </Section>

      <CtaBar className="pb-16 md:pb-24" />
    </>
  );
}
