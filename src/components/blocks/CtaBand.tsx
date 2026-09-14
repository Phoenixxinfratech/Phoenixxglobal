import { QuoteButton } from "@/components/conversion/QuoteButton";
import { Button, Container, Heading, Section } from "@/components/ui";
import { requestQuoteUrl } from "@/lib/links";
import { cn } from "@/lib/cn";

type CtaBandVariant = "quote" | "consult";

type CtaBandProps = {
  variant?: CtaBandVariant;
  heading?: string;
  copy?: string;
  productSlug?: string;
  quoteLabel?: string;
  background?: "graphite" | "paper";
  className?: string;
};

const VARIANT_DEFAULTS: Record<
  CtaBandVariant,
  { heading: string; copy: string; quoteLabel: string; background: "graphite" | "paper" }
> = {
  quote: {
    heading: "Ready to specify your project?",
    copy: "Send us your room dimensions, temperature target, and delivery port. We respond with panel recommendations and export pricing within one business day.",
    quoteLabel: "Get a quote",
    background: "paper",
  },
  consult: {
    heading: "Not sure which panel build-up fits?",
    copy: "Book a short consultation with our export team. Share your application and site constraints — we will recommend thickness, facing, and joint detail before you commit.",
    quoteLabel: "Book a consultation",
    background: "graphite",
  },
};

export function CtaBand({
  variant = "quote",
  heading,
  copy,
  productSlug,
  quoteLabel,
  background,
  className,
}: CtaBandProps) {
  const defaults = VARIANT_DEFAULTS[variant];
  const resolvedHeading = heading ?? defaults.heading;
  const resolvedCopy = copy ?? defaults.copy;
  const resolvedLabel = quoteLabel ?? defaults.quoteLabel;
  const resolvedBackground = background ?? defaults.background;
  const isGraphite = resolvedBackground === "graphite";

  return (
    <Section background={resolvedBackground} className={className}>
      <Container>
        <div
          className={cn(
            "rounded-[4px] border px-6 py-10 md:px-10",
            isGraphite ? "border-steel bg-graphite" : "border-line bg-paper",
          )}
        >
          <Heading
            as="h2"
            className={cn(
              "text-2xl md:text-3xl",
              isGraphite && "text-white",
            )}
          >
            {resolvedHeading}
          </Heading>
          <p
            className={cn(
              "mt-3 max-w-2xl text-base",
              isGraphite ? "text-zinc" : "text-steel",
            )}
          >
            {resolvedCopy}
          </p>
          <div className="mt-6">
            {variant === "consult" ? (
              <Button
                href={requestQuoteUrl({ product: productSlug, variant: "consultation" })}
                variant="primary"
                size="md"
              >
                {resolvedLabel}
              </Button>
            ) : (
              <QuoteButton productSlug={productSlug} label={resolvedLabel} />
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
