import NextLink from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/config/site";
import { getFooterData, footerCompanyDescription } from "@/content/footer";
import { confirmed } from "@/lib/confirmed";
import { currentYear } from "@/lib/format";
import { Container } from "@/components/ui";

const WHATSAPP_MESSAGE = `Hello, I have an enquiry about ${site.brandShort} insulated panels.`;

function buildWhatsAppHref(): string | null {
  const whatsapp = confirmed(site.contact.whatsapp);
  if (!whatsapp) return null;
  const digits = whatsapp.replace(/\D/g, "");
  if (!digits) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}

type FooterColumnProps = {
  title: string;
  links: Array<{ label: string; href: string }>;
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-zinc">
        {title}
      </h3>
      <ul className="space-y-2" role="list">
        {links.map((link) => (
          <li key={link.href}>
            <NextLink
              href={link.href}
              className="text-sm text-zinc transition-colors hover:text-white"
            >
              {link.label}
            </NextLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterLinkList({
  links,
  className,
}: {
  links: Array<{ label: string; href: string }>;
  className?: string;
}) {
  return (
    <ul className={className} role="list">
      {links.map((link) => (
        <li key={link.href}>
          <NextLink
            href={link.href}
            className="text-sm text-zinc transition-colors hover:text-white"
          >
            {link.label}
          </NextLink>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  const {
    productLinks,
    solutionLinks,
    countryLinks,
    resourceLinks,
    popularSearches,
  } = getFooterData();

  const exportEmail = confirmed(site.contact.exportEmail);
  const salesEmail = confirmed(site.contact.salesEmail);
  const phone = confirmed(site.contact.phonePrimary);
  const whatsappHref = buildWhatsAppHref();
  const hours = confirmed(site.contact.workingHours);
  const mapsUrl = confirmed(site.address.mapsUrl);
  const line1 = confirmed(site.address.line1);
  const postalCode = confirmed(site.address.postalCode);
  const gstin = confirmed(site.registrations.gstin);
  const iec = confirmed(site.registrations.iec);

  const linkedin = confirmed(site.social.linkedin);
  const youtube = confirmed(site.social.youtube);
  const instagram = confirmed(site.social.instagram);
  const facebook = confirmed(site.social.facebook);
  const indiamart = confirmed(site.social.indiamart);

  const socialLinks = [
    linkedin ? { href: linkedin, label: "LinkedIn" } : null,
    youtube ? { href: youtube, label: "YouTube" } : null,
    instagram ? { href: instagram, label: "Instagram" } : null,
    facebook ? { href: facebook, label: "Facebook" } : null,
    indiamart ? { href: indiamart, label: "IndiaMART" } : null,
  ].filter((item): item is { href: string; label: string } => Boolean(item));

  const registrationParts = [
    gstin ? `GSTIN ${gstin}` : null,
    iec ? `IEC ${iec}` : null,
  ].filter(Boolean);

  const contactEmail = exportEmail ?? salesEmail;
  const hasContactStrip = Boolean(
    phone || contactEmail || whatsappHref || hours || mapsUrl,
  );

  const addressParts = [
    line1,
    `${site.address.city}, ${site.address.state}`,
    postalCode,
    site.address.country,
  ].filter(Boolean);

  return (
    <footer className="bg-graphite text-white">
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="lg:col-span-1">
            <NextLink
              href="/"
              className="font-display text-xl font-bold tracking-tight text-white transition-colors hover:text-ember"
            >
              {site.brandShort}
            </NextLink>
            <p className="mt-4 text-sm leading-relaxed text-zinc">
              {footerCompanyDescription}
            </p>
            <address className="mt-4 not-italic text-sm leading-relaxed text-zinc">
              {addressParts.map((part, index) => (
                <span key={`${part}-${index}`}>
                  {index > 0 ? <br /> : null}
                  {part}
                </span>
              ))}
            </address>
            {registrationParts.length ? (
              <p className="mt-3 text-xs text-zinc">{registrationParts.join(" · ")}</p>
            ) : null}
            {socialLinks.length ? (
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                {socialLinks.map(({ href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="text-xs text-zinc transition-colors hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <FooterColumn title="Products" links={productLinks} />
          <FooterColumn title="Solutions" links={solutionLinks} />
          <FooterColumn title="Export" links={countryLinks} />
          <FooterColumn title="Resources & Company" links={resourceLinks} />
        </div>
      </Container>

      {hasContactStrip ? (
        <>
          <div className="border-t border-white/10" />
          <Container className="py-6">
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc">
              {phone ? (
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Phone className="size-4 shrink-0" aria-hidden="true" />
                  {phone}
                </a>
              ) : null}
              {contactEmail ? (
                <a
                  href={`mailto:${contactEmail}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Mail className="size-4 shrink-0" aria-hidden="true" />
                  {contactEmail}
                </a>
              ) : null}
              {whatsappHref ? (
                <a
                  href={whatsappHref}
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              ) : null}
              {hours ? (
                <span className="inline-flex items-center gap-2">
                  <Clock className="size-4 shrink-0" aria-hidden="true" />
                  {hours}
                </span>
              ) : null}
              {mapsUrl ? (
                <a
                  href={mapsUrl}
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="size-4 shrink-0" aria-hidden="true" />
                  View on map
                </a>
              ) : null}
            </div>
          </Container>
        </>
      ) : null}

      <div className="border-t border-white/10" />
      <Container className="py-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc">
          Popular technical searches
        </p>
        <FooterLinkList
          links={popularSearches}
          className="flex flex-wrap gap-x-4 gap-y-2"
        />
      </Container>

      <div className="border-t border-white/10" />
      <Container className="flex flex-col gap-4 py-6 text-sm text-zinc md:flex-row md:items-center md:justify-between">
        <p>
          © {currentYear()} {site.legalName}. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <NextLink href="/privacy/" className="transition-colors hover:text-white">
            Privacy
          </NextLink>
          <NextLink href="/terms/" className="transition-colors hover:text-white">
            Terms
          </NextLink>
          <NextLink href="/sitemap/" className="transition-colors hover:text-white">
            Sitemap
          </NextLink>
          <span className="text-zinc">Made in India</span>
        </div>
      </Container>
    </footer>
  );
}
