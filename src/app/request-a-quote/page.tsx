import { LeadForm } from "@/components/conversion";
import { Breadcrumbs } from "@/components/layout";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Heading, Section } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/request-a-quote/";

export const metadata = buildMetadata({
  title: "Request a Quotation — Sandwich Panels Export",
  description:
    "Request a sandwich panel quotation with specs, lead time and Incoterms options. Our engineers reply the same working day when drawings are attached.",
  path: PATH,
});

type PageProps = {
  searchParams: Promise<{ product?: string; variant?: string }>;
};

export default async function RequestAQuotePage({ searchParams }: PageProps) {
  const params = await searchParams;
  const defaultProduct = params.product ?? undefined;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: routes.home },
          { name: "Request a quote", path: PATH },
        ])}
      />
      <Section background="white" className="py-12 md:py-20">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Home", href: routes.home },
              { name: "Request a quote", href: PATH },
            ]}
            className="mb-6"
          />

          <Heading as="h1">Request a quotation</Heading>

          <div className="mt-6 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="prose prose-steel max-w-none text-base leading-relaxed text-steel">
              <p>
                Complete the form with your project details. A project engineer — not a
                generic sales inbox — reviews your enquiry and replies with a quotation
                pack tailored to your application.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-ink">
                What happens after you submit
              </h2>
              <ol className="mt-3 list-decimal space-y-3 pl-5">
                <li>
                  <strong className="text-ink">Engineer review</strong> — we check your
                  temperature target, panel area and delivery port against our current
                  production schedule.
                </li>
                <li>
                  <strong className="text-ink">Same working day reply (IST)</strong> —
                  when drawings or a clear sketch are attached, we typically respond
                  within one business day during Mon–Sat, 9:30 AM – 6:30 PM IST.
                </li>
                <li>
                  <strong className="text-ink">Quotation pack</strong> — you receive a
                  dated quotation with recommended panel thickness, core type, accessory
                  list, manufacturing lead time, and FOB/CIF options with named ports.
                </li>
                <li>
                  <strong className="text-ink">Missing inputs</strong> — if something
                  essential is absent (e.g. destination port or quantity), we list exactly
                  what we need rather than sending a generic price list.
                </li>
              </ol>

              <h2 className="mt-8 text-xl font-semibold text-ink">
                Attach these for the fastest response
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Layout drawing or sketch with dimensions</li>
                <li>Target room temperature and ambient design temperature</li>
                <li>Preferred core (PUF, PIR) or ask us to recommend</li>
                <li>Destination port and preferred Incoterm</li>
                <li>Approximate quantity in m²</li>
              </ul>

              <p className="mt-6">
                Prefer to discuss first?{" "}
                <a href={routes.contact} className="text-ember hover:underline">
                  Contact our export team
                </a>{" "}
                or browse{" "}
                <a href={routes.product("puf-panels")} className="text-ember hover:underline">
                  PUF panel specifications
                </a>{" "}
                and{" "}
                <a href={routes.product("pir-panels")} className="text-ember hover:underline">
                  PIR panel specifications
                </a>{" "}
                before submitting.
              </p>
            </div>

            <LeadForm variant="quote" defaultProduct={defaultProduct} />
          </div>
        </Container>
      </Section>
    </>
  );
}
