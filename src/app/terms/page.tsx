import { Breadcrumbs } from "@/components/layout";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Heading, Section } from "@/components/ui";
import { site } from "@/config/site";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/terms/";
const page = requirePageByPath(PATH);


export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: routes.home },
          { name: "Terms of use", path: PATH },
        ])}
      />
      <Section background="white" className="py-12 md:py-20">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Home", href: routes.home },
              { name: "Terms of use", href: PATH },
            ]}
            className="mb-6"
          />

          <Heading as="h1">{page.h1}</Heading>

          <div className="prose prose-steel mt-8 max-w-3xl text-base leading-relaxed text-steel">
            <p className="rounded-[2px] border border-line bg-paper px-4 py-3 text-sm font-medium text-ink">
              Pending legal review — these website terms are a working draft. Supply
              contracts are governed by the terms issued with each formal quotation
              and purchase order.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-ink">Acceptance of terms</h2>
            <p>
              By accessing {site.domain}, you agree to these terms of use. If you do not
              agree, please do not use this website. These terms apply to browsing,
              downloading resources and submitting enquiry forms.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-ink">Website content</h2>
            <p>
              Technical specifications, photographs and descriptions on this site are
              provided for general information. Values marked as unverified or
              &ldquo;confirmed before dispatch&rdquo; are indicative until confirmed
              against your approved project documentation and the datasheet issued with
              your order.
            </p>
            <p>
              We aim to keep content accurate but do not warrant that every page reflects
              current stock, lead times or regulatory requirements in your destination
              country. Always confirm critical values in writing before placing an order.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-ink">Enquiries and quotations</h2>
            <p>
              Submitting a form does not create a binding contract. Quotations we send by
              email are valid for the period stated on the quotation document and are
              subject to material availability, production schedule and confirmed
              shipping rates. Export orders require written acceptance of our formal
              quotation and any proforma invoice terms.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-ink">Intellectual property</h2>
            <p>
              Text, layout, logos and downloadable materials on this site are owned by or
              licensed to {site.legalName} unless otherwise noted. You may print or
              download pages for internal project evaluation. You may not republish our
              content, datasheets or photographs on third-party sites without written
              permission.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-ink">Prohibited use</h2>
            <p>You agree not to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Use automated tools to scrape or overload the site</li>
              <li>Submit false or misleading enquiry information</li>
              <li>Attempt to gain unauthorised access to our systems or forms</li>
              <li>Reuse our product images to misrepresent another supplier</li>
            </ul>

            <h2 className="mt-8 text-xl font-semibold text-ink">Limitation of liability</h2>
            <p>
              To the fullest extent permitted by applicable law, {site.legalName} is not
              liable for indirect or consequential loss arising from reliance on website
              content alone. Liability for supplied products is governed by the contract
              terms agreed at order placement, not by this website page.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-ink">Governing law</h2>
            <p>
              These website terms are intended to be governed by the laws of India, subject
              to confirmation during legal review. Disputes relating to product supply
              follow the jurisdiction clause in your order documentation.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-ink">Contact</h2>
            <p>
              Questions about these terms: use our{" "}
              <a href={routes.contact} className="text-ember hover:underline">
                contact page
              </a>{" "}
              or refer to our{" "}
              <a href="/privacy-policy/" className="text-ember hover:underline">
                privacy policy
              </a>
              .
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
