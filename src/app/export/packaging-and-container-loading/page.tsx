import { HoldingPage } from "@/components/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/export/packaging-and-container-loading/";
const page = requirePageByPath(PATH);


export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function ExportPackagingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: routes.home },
          { name: "Export", path: routes.export },
          { name: "Packaging", path: PATH },
        ])}
      />
      <HoldingPage
        h1={page.h1}
        holdingCopy={page.holdingCopy}
        breadcrumbs={[
          { label: "Home", href: routes.home },
          { label: "Export", href: routes.export },
          { label: "Packaging" },
        ]}
        relatedLinks={[
          { slug: "puf-panels", name: "PUF panel container loading notes", href: routes.product("puf-panels") },
          { slug: "pir-panels", name: "PIR panel packing advantages", href: routes.product("pir-panels") },
          { slug: "export-process", name: "Export process timeline", href: routes.exportProcess },
          { slug: "export-docs", name: "Packing list documentation", href: routes.exportDocumentation },
          { slug: "kenya", name: "Mombasa port delivery", href: routes.exportCountry("kenya") },
          { slug: "faqs", name: "Container MOQ and m² per box FAQs", href: routes.faqs },
          { slug: "cold-storage", name: "Cold room kit packing", href: routes.solution("cold-storage") },
          { slug: "manufacturing", name: "Factory dispatch checks", href: routes.manufacturing },
          { slug: "request-quote", name: "Request loading schedule with quote", href: routes.requestQuote },
        ]}
      />
    </>
  );
}
