import { HoldingPage } from "@/components/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/resources/guides/";
const page = requirePageByPath(PATH);


export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function GuidesHubPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: routes.home },
          { name: "Resources", path: routes.resources },
          { name: "Guides", path: PATH },
        ])}
      />
      <HoldingPage
        h1={page.h1}
        holdingCopy={page.holdingCopy}
        breadcrumbs={[
          { label: "Home", href: routes.home },
          { label: "Resources", href: routes.resources },
          { label: "Guides" },
        ]}
        relatedLinks={[
          { slug: "panel-selection", name: "Panel selection overview", href: routes.panelSelection },
          { slug: "comparisons", name: "Core type comparisons", href: routes.comparisons },
          { slug: "puf-vs-pir", name: "PUF vs PIR panels", href: routes.comparison("puf-vs-pir-panels") },
          { slug: "glossary", name: "Glossary of panel terms", href: routes.glossary },
          { slug: "faqs", name: "Specification FAQs", href: routes.faqs },
          { slug: "cold-storage", name: "Cold storage thickness guidance", href: routes.solution("cold-storage") },
          { slug: "export-packaging", name: "Export packing practices", href: routes.exportPackaging },
          { slug: "puf-panels", name: "PUF panel data", href: routes.product("puf-panels") },
          { slug: "datasheets", name: "Request datasheets", href: routes.datasheets },
        ]}
      />
    </>
  );
}
