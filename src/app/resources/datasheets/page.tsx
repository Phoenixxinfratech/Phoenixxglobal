import { HoldingPage } from "@/components/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/resources/datasheets/";
const page = requirePageByPath(PATH);


export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function DatasheetsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: routes.home },
          { name: "Resources", path: routes.resources },
          { name: "Datasheets", path: PATH },
        ])}
      />
      <HoldingPage
        h1={page.h1}
        holdingCopy={page.holdingCopy}
        breadcrumbs={[
          { label: "Home", href: routes.home },
          { label: "Resources", href: routes.resources },
          { label: "Datasheets" },
        ]}
        relatedLinks={[
          { slug: "puf-panels", name: "PUF panel specifications", href: routes.product("puf-panels") },
          { slug: "pir-panels", name: "PIR panel specifications", href: routes.product("pir-panels") },
          { slug: "request-quote", name: "Request datasheet via quote form", href: routes.requestQuote },
          { slug: "contact", name: "Email datasheet request", href: routes.contact },
          { slug: "quality", name: "Quality and test documentation", href: routes.qualityAndTesting },
          { slug: "comparisons", name: "Compare panel cores", href: routes.comparisons },
          { slug: "glossary", name: "Specification terminology", href: routes.glossary },
          { slug: "faqs", name: "Are website specs final?", href: routes.faqs },
          { slug: "cold-storage", name: "Cold storage application data", href: routes.solution("cold-storage") },
        ]}
      />
    </>
  );
}
