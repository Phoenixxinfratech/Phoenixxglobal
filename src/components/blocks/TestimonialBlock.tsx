import { Card, Container, Heading, Section } from "@/components/ui";
import { cn } from "@/lib/cn";

type Testimonial = {
  quote: string;
  author: string;
  role?: string;
  company?: string;
};

type TestimonialBlockProps = {
  quotes: Testimonial[];
  heading?: string;
  className?: string;
};

export function TestimonialBlock({ quotes, heading, className }: TestimonialBlockProps) {
  if (quotes.length === 0) return null;

  return (
    <Section background="white" className={className}>
      <Container>
        {heading ? (
          <Heading as="h2" className="text-2xl md:text-3xl">
            {heading}
          </Heading>
        ) : null}
        <ul
          className={cn(
            "grid gap-6 md:grid-cols-2",
            heading && "mt-8",
          )}
        >
          {quotes.map((item) => (
            <li key={`${item.author}-${item.quote.slice(0, 24)}`}>
              <Card padding="lg" className="h-full bg-paper">
                <blockquote className="text-base text-steel">&ldquo;{item.quote}&rdquo;</blockquote>
                <footer className="mt-4 border-t border-line pt-4">
                  <cite className="not-italic">
                    <span className="font-medium text-ink">{item.author}</span>
                    {item.role || item.company ? (
                      <span className="mt-0.5 block text-sm text-zinc">
                        {[item.role, item.company].filter(Boolean).join(", ")}
                      </span>
                    ) : null}
                  </cite>
                </footer>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
