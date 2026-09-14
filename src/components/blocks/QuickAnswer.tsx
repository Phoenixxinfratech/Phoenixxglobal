import type { ReactNode } from "react";
import { Container, Heading, Section } from "@/components/ui";
import { cn } from "@/lib/cn";

type QuickAnswerProps = {
  children?: ReactNode;
  text?: string;
  heading?: string;
  className?: string;
};

export function QuickAnswer({
  children,
  text,
  heading = "In short",
  className,
}: QuickAnswerProps) {
  const content = children ?? text;
  if (!content) return null;

  return (
    <Section background="paper" className={cn("py-10 md:py-12", className)}>
      <Container>
        <div className="rounded-[4px] border border-line bg-paper px-6 py-5 md:px-8 md:py-6">
          <Heading as="h2" className="text-lg md:text-xl">
            {heading}
          </Heading>
          <div className="prose-body mt-3 text-base text-steel">{content}</div>
        </div>
      </Container>
    </Section>
  );
}
