import type { ReactNode } from "react";
import { Container, Heading, Section } from "@/components/ui";
import { CtaBar } from "@/components/conversion";
import type { RelatedLink } from "@/lib/links";
import { InlineLink } from "./InlineLink";
import { RelatedContent } from "./RelatedContent";

type Breadcrumb = {
  label: string;
  href?: string;
};

type HoldingPageProps = {
  h1: string;
  holdingCopy: string;
  breadcrumbs?: Breadcrumb[];
  children?: ReactNode;
  relatedLinks?: RelatedLink[];
  relatedEntityType?: "product" | "solution";
  relatedEntitySlug?: string;
  productSlug?: string;
};

export function HoldingPage({
  h1,
  holdingCopy,
  breadcrumbs,
  children,
  relatedLinks,
  relatedEntityType,
  relatedEntitySlug,
  productSlug,
}: HoldingPageProps) {
  return (
    <>
      <Section background="white" className="py-12 md:py-20">
        <Container>
          {breadcrumbs && breadcrumbs.length > 0 ? (
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-zinc">
              <ol className="flex flex-wrap items-center gap-2">
                {breadcrumbs.map((crumb, index) => (
                  <li key={`${crumb.label}-${index}`} className="flex items-center gap-2">
                    {index > 0 ? <span aria-hidden="true">/</span> : null}
                    {crumb.href ? (
                      <InlineLink href={crumb.href} className="text-steel hover:text-ember">
                        {crumb.label}
                      </InlineLink>
                    ) : (
                      <span className="text-ink">{crumb.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}

          <Heading as="h1">{h1}</Heading>

          <div className="prose prose-steel mt-6 max-w-3xl text-base leading-relaxed text-steel">
            <p>{holdingCopy}</p>
          </div>

          {children}

          {relatedLinks && relatedLinks.length > 0 ? (
            <div className="mt-10">
              <h2 className="text-xl font-semibold text-ink">You may also need</h2>
              <ul className="mt-3 space-y-2">
                {relatedLinks.map((link) => (
                  <li key={link.slug}>
                    <InlineLink href={link.href}>{link.name}</InlineLink>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {relatedEntityType && relatedEntitySlug ? (
            <RelatedContent
              entityType={relatedEntityType}
              slug={relatedEntitySlug}
              className="mt-12"
            />
          ) : null}
        </Container>
      </Section>

      <CtaBar
        productSlug={productSlug ?? relatedEntitySlug}
        heading="Need specifications before the full page is live?"
        copy="Send your application and delivery port — we will email the datasheet or quotation outline the same business day."
        quoteLabel="Request datasheet"
        className="pb-16 md:pb-24"
      />
    </>
  );
}
