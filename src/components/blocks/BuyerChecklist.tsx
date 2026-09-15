import { Container, Heading, Section } from "@/components/ui";
import { cn } from "@/lib/cn";

type BuyerChecklistProps = {
  items: string[];
  heading?: string;
  className?: string;
};

/** Practical pre-order checks — same visual language as QuickAnswer. */
export function BuyerChecklist({
  items,
  heading = "What buyers should check",
  className,
}: BuyerChecklistProps) {
  if (!items.length) return null;

  return (
    <Section background="white" className={cn("py-10 md:py-12", className)}>
      <Container>
        <Heading as="h2" className="text-xl md:text-2xl">
          {heading}
        </Heading>
        <ol className="prose-body mt-4 list-decimal space-y-2 pl-5 text-base text-steel">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
