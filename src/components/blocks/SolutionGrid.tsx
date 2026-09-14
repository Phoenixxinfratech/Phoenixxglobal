import { Container, Heading, Link, Section } from "@/components/ui";
import { cn } from "@/lib/cn";

type SolutionGridItem = {
  slug: string;
  name: string;
  summary: string;
  href: string;
};

type SolutionGridProps = {
  solutions: SolutionGridItem[];
  heading?: string;
  className?: string;
};

export function SolutionGrid({ solutions, heading, className }: SolutionGridProps) {
  if (solutions.length === 0) return null;

  return (
    <Section background="paper" className={className}>
      <Container>
        {heading ? (
          <Heading as="h2" className="text-2xl md:text-3xl">
            {heading}
          </Heading>
        ) : null}
        <ul className={cn("mt-8 divide-y divide-line border-y border-line", !heading && "mt-0")}>
          {solutions.map((solution) => (
            <li key={solution.slug}>
              <Link
                href={solution.href}
                className="group flex gap-0 no-underline hover:no-underline"
              >
                <span
                  className="w-1 shrink-0 bg-graphite transition-colors group-hover:bg-ember"
                  aria-hidden="true"
                />
                <span className="flex flex-1 flex-col gap-2 px-5 py-6 md:flex-row md:items-start md:justify-between md:gap-8">
                  <span className="text-lg font-semibold text-ink group-hover:text-ember">
                    {solution.name}
                  </span>
                  <span className="max-w-xl text-sm text-steel md:text-right">
                    {solution.summary}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
