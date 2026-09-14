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

            <h2 className="mt-8 text-xl font-semibold text-ink">Retention</h2>
            <p>
              Enquiry records are kept for as long as needed to manage active quotations
              and export orders, and for a reasonable period afterward for audit and
              repeat-order context. You may ask us to delete enquiry data that is no
              longer needed for an active business relationship.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-ink">Cookies and analytics</h2>
            <p>
              This site may use essential cookies for form security and, in a later phase,
              analytics cookies to understand which technical pages are most useful. We
              will update this section when analytics tooling is enabled and provide
              appropriate consent controls where required by law.
            </p>

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
