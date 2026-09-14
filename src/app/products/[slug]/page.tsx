import { notFound } from "next/navigation";
import { HoldingPage, RelatedContent, SpecTable } from "@/components/blocks";
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
import { getProduct, products } from "@/content";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  return buildMetadata({
    title: product.seoTitle,
    description: product.metaDescription,
    path: routes.product(slug),
    draft: product.draft,
  });
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const breadcrumbs = [
    { name: "Home", href: routes.home },
    { name: "Products", href: routes.products },
    { name: product.shortName, href: routes.product(slug) },
  ];

  if (product.draft) {
    return (
      <>
        <JsonLd
          data={breadcrumbSchema(
            breadcrumbs.map((item) => ({ name: item.name, path: item.href })),
          )}
        />
        <HoldingPage
          h1={product.h1}
          holdingCopy={product.holdingCopy ?? product.summary}
          breadcrumbs={[
            { label: "Home", href: routes.home },
            { label: "Products", href: routes.products },
            { label: product.shortName },
          ]}
          relatedLinks={[
            { slug: "puf-panels", name: "PUF sandwich panels", href: routes.product("puf-panels") },
            { slug: "pir-panels", name: "PIR sandwich panels", href: routes.product("pir-panels") },
            { slug: "cold-room-panels", name: "Cold room panel systems", href: routes.product("cold-room-panels") },
            { slug: "cold-storage", name: "Cold storage solutions", href: routes.solution("cold-storage") },
            { slug: "puf-vs-pir", name: "PUF vs PIR comparison", href: routes.comparison("puf-vs-pir-panels") },
            { slug: "export", name: "Export process overview", href: routes.export },
            { slug: "kenya", name: "Export to Kenya", href: routes.exportCountry("kenya") },
            { slug: "datasheets", name: "Request a datasheet", href: routes.datasheets },
            { slug: "request-quote", name: "Request a quotation", href: routes.requestQuote },
          ]}
          relatedEntityType="product"
          relatedEntitySlug={slug}
          productSlug={slug}
        />
      </>
    );
  }

  const faqSchema = faqPageSchema(product.faqs);

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

          <Heading as="h1">{product.h1}</Heading>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-steel">
            {product.summary}
          </p>

          {product.specs.length > 0 ? (
            <div className="mt-10">
              <Heading as="h2" className="text-2xl md:text-3xl">
                Technical specifications
              </Heading>
              <p className="mt-2 text-sm text-zinc">
                Values marked &ldquo;Confirmed before dispatch&rdquo; are verified against
                your approved project documentation before production.
              </p>
              <SpecTable specs={product.specs} className="mt-6" />
            </div>
          ) : null}

          {product.exportNotes ? (
            <div className="mt-10">
              <Heading as="h2" className="text-2xl md:text-3xl">
                Export and packing notes
              </Heading>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-steel">
                {product.exportNotes}
              </p>
            </div>
          ) : null}

          {product.faqs.length > 0 ? (
            <div className="mt-10">
              <Heading as="h2" className="text-2xl md:text-3xl">
                Frequently asked questions
              </Heading>
              <Accordion className="mt-6" type="single">
                {product.faqs.map((faq, index) => (
                  <AccordionItem key={faq.question} value={`faq-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionPanel>{faq.answer}</AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ) : null}

          <RelatedContent entityType="product" slug={slug} className="mt-12" />
        </Container>
      </Section>

      <CtaBar productSlug={slug} className="pb-16 md:pb-24" />
    </>
  );
}
