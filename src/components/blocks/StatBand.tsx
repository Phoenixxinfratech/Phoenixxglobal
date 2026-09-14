import { Container, Section } from "@/components/ui";
import { cn } from "@/lib/cn";

type StatItem = {
  value: string;
  label: string;
  verified: boolean;
};

type StatBandProps = {
  stats: StatItem[];
  className?: string;
};

export function StatBand({ stats, className }: StatBandProps) {
  const verifiedCount = stats.filter((s) => s.verified).length;
  if (verifiedCount < 3) return null;

  return (
    <Section background="graphite" className={cn("py-12 md:py-16", className)}>
      <Container>
        <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-display text-3xl font-semibold text-white md:text-4xl">
                {stat.value}
              </dt>
              <dd className="mt-2 text-sm text-zinc">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
