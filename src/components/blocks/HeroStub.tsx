import type { ReactNode } from "react";
import { Container, Heading, Section } from "@/components/ui";

type HeroStubProps = {
  h1: string;
  summary?: string;
  children?: ReactNode;
};

/** Phase 2 placeholder — replace with full hero layout when page templates ship. */
export function HeroStub({ h1, summary, children }: HeroStubProps) {
  return (
    <Section background="paper" className="py-16 md:py-24">
      <Container>
        <Heading as="h1">{h1}</Heading>
        {summary ? <p className="mt-4 max-w-3xl text-lg text-steel">{summary}</p> : null}
        {children}
      </Container>
    </Section>
  );
}
