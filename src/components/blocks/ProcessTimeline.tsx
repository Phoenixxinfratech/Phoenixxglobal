import { Container, Heading, Section } from "@/components/ui";
import { cn } from "@/lib/cn";

type ProcessStep = {
  title: string;
  body: string;
  duration?: string;
};

type ProcessTimelineProps = {
  steps: ProcessStep[];
  heading?: string;
  className?: string;
};

export function ProcessTimeline({ steps, heading, className }: ProcessTimelineProps) {
  if (steps.length === 0) return null;

  return (
    <Section background="paper" className={className}>
      <Container>
        {heading ? (
          <Heading as="h2" className="text-2xl md:text-3xl">
            {heading}
          </Heading>
        ) : null}
        <ol className={cn("space-y-0", heading && "mt-8")}>
          {steps.map((step, index) => (
            <li key={step.title} className="relative flex gap-5 pb-8 last:pb-0">
              {index < steps.length - 1 ? (
                <span
                  className="absolute left-[15px] top-8 h-[calc(100%-2rem)] w-px bg-line"
                  aria-hidden="true"
                />
              ) : null}
              <span
                className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-white font-spec text-sm font-medium text-ink"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <div className="min-w-0 pt-0.5">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                  {step.duration ? (
                    <span className="font-spec text-sm text-zinc">{step.duration}</span>
                  ) : null}
                </div>
                <p className="mt-2 text-base text-steel">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
