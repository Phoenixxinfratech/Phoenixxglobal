import { InlineLink } from "@/components/blocks";
import { Container, Heading, Section } from "@/components/ui";
import { routes } from "@/lib/links";

export default function NotFound() {
  return (
    <Section background="white" className="py-16 md:py-24">
      <Container className="max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-zinc">404</p>
        <Heading as="h1" className="mt-2">
          Page not found
        </Heading>
        <p className="mt-4 text-base leading-relaxed text-steel">
          That URL does not match a page on this site. The link may be outdated, or the
          page may still be in draft. Try one of the paths below or send us your enquiry
          directly.
        </p>
        <ul className="mt-8 space-y-2 text-left sm:mx-auto sm:max-w-md">
          <li>
            <InlineLink href={routes.products}>Browse all products</InlineLink>
          </li>
          <li>
            <InlineLink href={routes.product("puf-panels")}>PUF sandwich panels</InlineLink>
          </li>
          <li>
            <InlineLink href={routes.product("pir-panels")}>PIR sandwich panels</InlineLink>
          </li>
          <li>
            <InlineLink href={routes.export}>Export from India</InlineLink>
          </li>
          <li>
            <InlineLink href={routes.contact}>Contact our team</InlineLink>
          </li>
          <li>
            <InlineLink href={routes.requestQuote}>Request a quotation</InlineLink>
          </li>
          <li>
            <InlineLink href={routes.home}>Return to homepage</InlineLink>
          </li>
        </ul>
      </Container>
    </Section>
  );
}
