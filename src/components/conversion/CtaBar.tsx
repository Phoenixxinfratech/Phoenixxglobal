import { site } from "@/config/site";
import { Container, Heading, Button } from "@/components/ui";
import { confirmed } from "@/lib/confirmed";
import { whatsAppUrl } from "@/lib/links";
import { QuoteButton } from "./QuoteButton";

type CtaBarProps = {
  heading?: string;
  copy?: string;
  productSlug?: string;
  showWhatsApp?: boolean;
  quoteLabel?: string;
  className?: string;
};

export function CtaBar({
  heading = "Ready to specify your project?",
  copy = "Send us your room dimensions, temperature target, and delivery port. We respond with panel recommendations and export pricing within one business day.",
  productSlug,
  showWhatsApp = true,
  quoteLabel,
  className,
}: CtaBarProps) {
  const whatsapp = showWhatsApp ? confirmed(site.contact.whatsapp) : null;
  const whatsappMessage = `Hello ${site.brandShort} — I would like a quotation for sandwich panels.`;

  return (
    <section className={className}>
      <Container className="rounded-[2px] border border-line bg-paper px-6 py-10 md:px-10">
        <Heading as="h2" className="text-2xl md:text-3xl">
          {heading}
        </Heading>
        <p className="mt-3 max-w-2xl text-base text-steel">{copy}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <QuoteButton productSlug={productSlug} label={quoteLabel} />
          {whatsapp ? (
            <Button
              href={whatsAppUrl(whatsappMessage, whatsapp)}
              external
              variant="whatsapp"
              size="md"
            >
              WhatsApp
            </Button>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
