import { LeadForm } from "@/components/conversion";
import { Breadcrumbs } from "@/components/layout";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Heading, Section } from "@/components/ui";
import { site } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";
import { confirmed } from "@/lib/confirmed";
import { routes } from "@/lib/links";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/contact/";

export const metadata = buildMetadata({
  title: "Contact PHOENIXX SMARTBUILD — Export Enquiries",
  description:
    "Contact our export team in Ahmedabad for sandwich panel quotations, datasheets and shipping enquiries to African ports.",
  path: PATH,
});

export default function ContactPage() {
  const addressLine1 = confirmed(site.address.line1);
  const postalCode = confirmed(site.address.postalCode);
  const salesEmail = confirmed(site.contact.salesEmail);
  const exportEmail = confirmed(site.contact.exportEmail);
  const phone = confirmed(site.contact.phonePrimary);
  const mapsUrl = confirmed(site.address.mapsUrl);

  const addressParts = [
    addressLine1,
    site.address.city,
    site.address.state,
    postalCode,
    site.address.country,
  ].filter(Boolean);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: routes.home },
          { name: "Contact", path: PATH },
        ])}
      />
      <Section background="white" className="py-12 md:py-20">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Home", href: routes.home },
              { name: "Contact", href: PATH },
            ]}
            className="mb-6"
          />

          <Heading as="h1">Contact our export team</Heading>

          <div className="mt-6 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="prose prose-steel max-w-none text-base leading-relaxed text-steel">
              <p>
                Send your enquiry from this page or use the request-a-quote form if you
                already have drawings. We reply during working hours with a clear next
                step — not an automated brochure.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-ink">
                What to include for a 24-hour quote
              </h2>
              <p>
                To respond within one business day with a useful quotation pack, include
                as many of the following as you have:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-ink">Drawings or sketch</strong> — room
                  dimensions (L × W × H), door positions, or a roof plan
                </li>
                <li>
                  <strong className="text-ink">Temperature target</strong> — chiller
                  (+2 to +8 °C), freezer (−18 °C), or ambient envelope
                </li>
                <li>
                  <strong className="text-ink">Preferred core</strong> — PUF, PIR, or
                  open to our recommendation
                </li>
                <li>
                  <strong className="text-ink">Destination port</strong> — e.g. Mombasa,
                  Dar es Salaam, Tema
                </li>
                <li>
                  <strong className="text-ink">Incoterm</strong> — FOB, CIF, or your
                  buyer&apos;s requirement
                </li>
                <li>
                  <strong className="text-ink">Quantity in m²</strong> — approximate
                  panel area or number of rooms
                </li>
              </ul>

              <h2 className="mt-8 text-xl font-semibold text-ink">Working hours</h2>
              <p>{site.contact.workingHours}</p>

              {addressParts.length > 0 ? (
                <>
                  <h2 className="mt-8 text-xl font-semibold text-ink">Address</h2>
                  <address className="not-italic">
                    {addressParts.map((line, index) => (
                      <span key={index}>
                        {line}
                        {index < addressParts.length - 1 ? <br /> : null}
                      </span>
                    ))}
                  </address>
                </>
              ) : null}

              {(salesEmail || exportEmail || phone) ? (
                <>
                  <h2 className="mt-8 text-xl font-semibold text-ink">Direct contact</h2>
                  <ul className="mt-2 space-y-1">
                    {salesEmail ? (
                      <li>
                        Sales:{" "}
                        <a href={`mailto:${salesEmail}`} className="text-ember hover:underline">
                          {salesEmail}
                        </a>
                      </li>
                    ) : null}
                    {exportEmail ? (
                      <li>
                        Export:{" "}
                        <a href={`mailto:${exportEmail}`} className="text-ember hover:underline">
                          {exportEmail}
                        </a>
                      </li>
                    ) : null}
                    {phone ? (
                      <li>
                        Phone:{" "}
                        <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-ember hover:underline">
                          {phone}
                        </a>
                      </li>
                    ) : null}
                  </ul>
                </>
              ) : null}

              {mapsUrl ? (
                <div className="mt-8">
                  <h2 className="text-xl font-semibold text-ink">Location</h2>
                  <div className="mt-4 aspect-video overflow-hidden rounded-[2px] border border-line">
                    <iframe
                      title="PHOENIXX SMARTBUILD location map"
                      src={mapsUrl}
                      loading="lazy"
                      className="h-full w-full border-0"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                </div>
              ) : null}
            </div>

            <LeadForm variant="contact" />
          </div>
        </Container>
      </Section>
    </>
  );
}
