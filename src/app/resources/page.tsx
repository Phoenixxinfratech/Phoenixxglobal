import { HoldingPage } from "@/components/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/resources/";
const page = requirePageByPath(PATH);


export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function ResourcesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: routes.home },
          { name: "Resources", path: PATH },
        ])}
      />
      <HoldingPage
        h1={page.h1}
        holdingCopy={page.holdingCopy}
        breadcrumbs={[
          { label: "Home", href: routes.home },
          { label: "Resources" },
        ]}
        relatedLinks={[
          { slug: "faqs", name: "Frequently asked questions", href: routes.faqs },
          { slug: "glossary", name: "Panel terminology glossary", href: routes.glossary },
          { slug: "comparisons", name: "PUF vs PIR and other comparisons", href: routes.comparisons },
          { slug: "puf-vs-pir", name: "PUF vs PIR comparison page", href: routes.comparison("puf-vs-pir-panels") },
          { slug: "guides", name: "Technical guides", href: routes.guides },
          { slug: "datasheets", name: "Panel datasheets", href: routes.datasheets },
          { slug: "panel-selection", name: "Panel selection guide", href: routes.panelSelection },
          { slug: "puf-panels", name: "PUF panel specifications", href: routes.product("puf-panels") },
          { slug: "request-quote", name: "Request a quotation", href: routes.requestQuote },
        ]}
      />
    </>
  );
}
