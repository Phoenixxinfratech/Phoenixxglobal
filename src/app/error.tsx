"use client";

import { useEffect } from "react";
import { Button, Container, Heading, Section } from "@/components/ui";
import { routes } from "@/lib/links";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section background="white" className="py-16 md:py-24">
      <Container className="max-w-2xl text-center">
        <Heading as="h1">Something went wrong</Heading>
        <p className="mt-4 text-base leading-relaxed text-steel">
          An unexpected error stopped this page from loading. You can try again, or
          contact us if the problem continues.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button type="button" variant="primary" onClick={reset}>
            Try again
          </Button>
          <Button href={routes.contact} variant="secondary">
            Contact support
          </Button>
        </div>
      </Container>
    </Section>
  );
}
