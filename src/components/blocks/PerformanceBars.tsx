import { Container, Heading, Section } from "@/components/ui";
import { cn } from "@/lib/cn";

type PerformanceItem = {
  label: string;
  value: number;
  max: number;
  unit: string;
};

type PerformanceBarsProps = {
  items: PerformanceItem[];
  heading?: string;
  className?: string;
};

export function PerformanceBars({ items, heading, className }: PerformanceBarsProps) {
  if (items.length === 0) return null;

  return (
    <Section background="white" className={className}>
      <Container>
        {heading ? (
          <Heading as="h2" className="text-2xl md:text-3xl">
            {heading}
          </Heading>
        ) : null}
        <ul className={cn("space-y-5", heading && "mt-8")}>
          {items.map((item) => {
            const pct = Math.min(100, Math.max(0, (item.value / item.max) * 100));
            return (
              <li key={item.label}>
                <div className="flex items-baseline justify-between gap-4 text-sm">
                  <span className="font-medium text-ink">{item.label}</span>
                  <span className="font-spec text-steel">
                    {item.value} {item.unit}
                  </span>
                </div>
                <div
                  className="mt-2 h-2 w-full bg-paper"
                  role="meter"
                  aria-valuenow={item.value}
                  aria-valuemin={0}
                  aria-valuemax={item.max}
                  aria-label={`${item.label}: ${item.value} ${item.unit}`}
                >
                  <div
                    className="h-full bg-graphite transition-[width] duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
