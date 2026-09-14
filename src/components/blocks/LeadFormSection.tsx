import { LeadForm } from "@/components/conversion/LeadForm";
import { Container, Heading, Section } from "@/components/ui";
import type { LeadVariant } from "@/lib/validation";

type LeadFormSectionProps = {
  variant: LeadVariant;
  defaultProduct?: string;
  defaultMessage?: string;
  heading?: string;
  background?: "paper" | "white";
  className?: string;
};

const VARIANT_HEADINGS: Partial<Record<LeadVariant, string>> = {
  quote: "Request a quotation",
  datasheet: "Request a datasheet",
  consultation: "Book a consultation",
  contact: "Contact our export team",
};

export function LeadFormSection({
  variant,
  defaultProduct,
  defaultMessage,
  heading,
  background = "paper",
  className,
}: LeadFormSectionProps) {
  const resolvedHeading = heading ?? VARIANT_HEADINGS[variant] ?? "Get in touch";

  return (
    <Section background={background} className={className} id="lead-form">
      <Container>
        <Heading as="h2" className="mb-8 text-2xl md:text-3xl">
          {resolvedHeading}
        </Heading>
        <LeadForm
          variant={variant}
          defaultProduct={defaultProduct}
          defaultMessage={defaultMessage}
        />
      </Container>
    </Section>
  );
}
