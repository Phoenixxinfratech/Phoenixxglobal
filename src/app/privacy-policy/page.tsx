import { Breadcrumbs } from "@/components/layout";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Heading, Section } from "@/components/ui";
import { site } from "@/config/site";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/privacy-policy/";
const page = requirePageByPath(PATH);


export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: routes.home },
          { name: "Privacy policy", path: PATH },
        ])}
      />
      <Section background="white" className="py-12 md:py-20">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Home", href: routes.home },
              { name: "Privacy policy", href: PATH },
            ]}
            className="mb-6"
          />

          <Heading as="h1">{page.h1}</Heading>

          <div className="prose prose-steel mt-8 max-w-3xl text-base leading-relaxed text-steel">
            <p className="rounded-[2px] border border-line bg-paper px-4 py-3 text-sm font-medium text-ink">
              Pending legal review — this draft describes our intended data practices
              but should not be treated as final counsel until reviewed by qualified
              legal advisers.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-ink">Who we are</h2>
            <p>
              This website is operated by {site.legalName} ({site.brandShort}), based
              in {site.address.city}, {site.address.state}, {site.address.country}. When
              this policy refers to &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;,
              it means {site.legalName} in connection with this website and enquiry
              handling.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-ink">Information we collect</h2>
            <p>
              When you submit a contact form, quotation request or datasheet enquiry, we
              collect the details you provide — typically your name, company, email,
              phone number, country, product interest and project message. We also record
              the page you submitted from and a timestamp for spam prevention.
            </p>
            <p>
              We do not require you to create an account to browse this site. Standard
              web server logs (IP address, browser type, pages visited) may be processed
              by our hosting provider for security and performance.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-ink">How we use your information</h2>
            <p>We use enquiry data to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Respond to your quotation, datasheet or general enquiry</li>
              <li>Prepare technical recommendations and export pricing</li>
              <li>Follow up on open projects you have discussed with us</li>
              <li>Improve how we answer common specification questions</li>
            </ul>
            <p className="mt-4">
              We do not sell enquiry data to third-party marketing lists. We may share
              information with freight forwarders or clearing agents only when you ask us
              to coordinate shipping and documentation for an active order.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-ink">Where enquiry data is stored</h2>
            <p>
              Form submissions are processed by our hosting provider and then written to a
              Google Sheet that our export team uses as the lead ledger. Copies may also be
              sent by email (Resend) to you and to our sales inbox, and — once configured —
              to a CRM (Zoho or HubSpot) or an automation webhook. WhatsApp Cloud API
              templates, when approved, send an acknowledgement to the number you gave us.
            </p>
            <p>
              Retention: lead records are kept for 24 months in the live ledger, then
              archived. To request deletion, use the contact page and quote the enquiry
              reference if you have one. We verify identity before deleting the sheet row
              and any CRM record, and we reply within 30 days. This is our working procedure
              under India&apos;s Digital Personal Data Protection Act, 2023; visitors in the
              EEA/UK may also request access, correction, deletion or restriction along
              GDPR-style lines through the same contact path.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-ink">Cookies and analytics</h2>
            <p>
              Essential cookies store first-touch attribution (no personal data) and your
              analytics choice. Optional analytics cookies (Google Analytics 4, Google Tag
              Manager, Microsoft Clarity) load only after you accept the bottom-bar consent
              notice. Reject is a real reject — those scripts do not load. We honour Do Not
              Track. Clarity is configured to mask form fields. You can change your choice
              by clearing site cookies.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-ink">Third parties</h2>
            <p>Processors we use, only when the matching integration is switched on:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Google (Sheets ledger; Analytics 4 and Tag Manager after you accept cookies)</li>
              <li>Microsoft Clarity (session replay after consent; form fields masked)</li>
              <li>Resend (buyer auto-reply and internal lead brief)</li>
              <li>Meta WhatsApp Cloud API (acknowledgement templates, once approved)</li>
              <li>Zoho or HubSpot, only if a CRM is configured later</li>
              <li>An automation webhook (n8n / Make / Zapier) only if you enable one</li>
            </ul>

            <h2 className="mt-8 text-xl font-semibold text-ink">How to request deletion</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5">
              <li>Write to us from the email used on the enquiry, via the contact page.</li>
              <li>Quote the enquiry reference (PSB-…) if you have it.</li>
              <li>We confirm identity, delete the ledger row and any CRM record, and reply within 30 days.</li>
            </ol>

            <h2 className="mt-8 text-xl font-semibold text-ink">Your rights</h2>
            <p>
              Depending on your jurisdiction, you may have rights to access, correct or
              delete personal data we hold about you, or to object to certain processing.
              Contact us through the{" "}
              <a href={routes.contact} className="text-ember hover:underline">
                contact page
              </a>{" "}
              to exercise these rights. We will verify your identity before releasing or
              changing records.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-ink">Changes to this policy</h2>
            <p>
              We may update this draft as our website features and legal obligations
              evolve. Material changes will be noted on this page with an updated date
              once legal review is complete.
            </p>

            <p className="mt-8 text-sm text-zinc">
              Last updated (draft): {page.updatedAt ?? "2026-04-13"} · Pending legal
              review
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
