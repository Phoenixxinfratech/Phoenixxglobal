import Image from "next/image";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/layout/Breadcrumbs";
import { QuoteButton } from "@/components/conversion/QuoteButton";
import { Button, Container, Heading, Section } from "@/components/ui";
import type { ImageRef } from "@/content/types";
import { cn } from "@/lib/cn";

type KeySpec = {
  label: string;
  value: string;
};

type PageHeroProps = {
  breadcrumbs: BreadcrumbItem[];
  h1: string;
  intro: string;
  keySpecs?: KeySpec[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  quoteProductSlug?: string;
  image?: ImageRef;
  className?: string;
};

export function PageHero({
  breadcrumbs,
  h1,
  intro,
  keySpecs,
  primaryCta,
  secondaryCta,
  quoteProductSlug,
  image,
  className,
}: PageHeroProps) {
  return (
    <Section background="paper" className={cn("py-12 md:py-20", className)}>
      <Container>
        <div
          className={cn(
            "grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16",
            !image && "lg:grid-cols-1",
          )}
        >
          <div>
            <Breadcrumbs items={breadcrumbs} className="mb-6" />
            <Heading as="h1">{h1}</Heading>
            <p className="prose-body mt-4 text-lg text-steel">{intro}</p>

            {keySpecs && keySpecs.length > 0 ? (
              <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6">
                {keySpecs.map((spec) => (
                  <div key={spec.label}>
                    <dt className="text-xs text-zinc">{spec.label}</dt>
                    <dd className="font-spec text-sm font-medium text-ink">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}

            <div className="mt-8 flex flex-wrap gap-3">
              {primaryCta ? (
                <Button href={primaryCta.href} variant="primary" size="md">
                  {primaryCta.label}
                </Button>
              ) : (
                <QuoteButton productSlug={quoteProductSlug} size="md" />
              )}
              {secondaryCta ? (
                <Button href={secondaryCta.href} variant="secondary" size="md">
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          </div>

          {image ? (
            <div className="relative aspect-[4/3] w-full bg-paper lg:aspect-[16/11]">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
