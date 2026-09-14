import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
  Container,
  Heading,
  Section,
} from "@/components/ui";
import { cn } from "@/lib/cn";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  faqs: FaqItem[];
  heading?: string;
  emitFaqSchema?: boolean;
  className?: string;
};

export function FaqAccordion({
  faqs,
  heading = "Frequently asked questions",
  className,
}: FaqAccordionProps) {
  if (faqs.length === 0) return null;

  return (
    <Section background="white" className={className}>
      <Container>
        <Heading as="h2" className="text-2xl md:text-3xl">
          {heading}
        </Heading>
        <Accordion type="single" className={cn("mt-8")}>
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`faq-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionPanel>{faq.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  );
}
