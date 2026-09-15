import { Container, Heading, Section } from "@/components/ui";
import { cn } from "@/lib/cn";

type Scenario = {
  question: string;
  answer: string;
};

type BuyerScenariosProps = {
  scenarios: Scenario[];
  heading?: string;
  className?: string;
};

/** High-intent project scenarios — direct answer blocks for GEO. */
export function BuyerScenarios({
  scenarios,
  heading = "Project scenarios",
  className,
}: BuyerScenariosProps) {
  if (!scenarios.length) return null;

  return (
    <Section background="paper" className={cn("py-10 md:py-12", className)}>
      <Container>
        <Heading as="h2" className="text-xl md:text-2xl">
          {heading}
        </Heading>
        <div className="mt-6 space-y-6">
          {scenarios.map((scenario) => (
            <div
              key={scenario.question}
              className="rounded-[4px] border border-line bg-paper px-5 py-4 md:px-6 md:py-5"
            >
              <h3 className="text-base font-semibold text-ink md:text-lg">
                {scenario.question}
              </h3>
              <p className="prose-body mt-2 text-base text-steel">
                {scenario.answer}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
