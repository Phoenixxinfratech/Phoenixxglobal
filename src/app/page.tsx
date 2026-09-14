import { HoldingPage } from "@/components/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema } from "@/lib/schema";

const page = requirePageByPath("/");


export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Home", path: routes.home }])}
      />
      <HoldingPage
        h1={page.h1}
        holdingCopy={page.holdingCopy}
        breadcrumbs={[{ label: "Home", href: routes.home }]}
        relatedLinks={[
          { slug: "products", name: "Browse all insulated panel products", href: routes.products },
          { slug: "puf-panels", name: "PUF sandwich panels for cold storage", href: routes.product("puf-panels") },
          { slug: "pir-panels", name: "PIR panels for thinner insulation build-ups", href: routes.product("pir-panels") },
          { slug: "solutions", name: "Industry solutions by application", href: routes.solutions },
          { slug: "cold-storage", name: "Cold storage building solutions", href: routes.solution("cold-storage") },
          { slug: "export", name: "Export process and African markets", href: routes.export },
          { slug: "kenya", name: "Sandwich panel export to Kenya", href: routes.exportCountry("kenya") },
          { slug: "contact", name: "Contact our export team", href: routes.contact },
          { slug: "request-quote", name: "Request a quotation with drawings", href: routes.requestQuote },
        ]}
      />
    </>
  );
}
