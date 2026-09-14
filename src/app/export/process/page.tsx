import { HoldingPage } from "@/components/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/export/process/";
const page = requirePageByPath(PATH);


export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function ExportProcessPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: routes.home },
          { name: "Export", path: routes.export },
          { name: "Process", path: PATH },
        ])}
      />
      <HoldingPage
        h1={page.h1}
        holdingCopy={page.holdingCopy}
        breadcrumbs={[
          { label: "Home", href: routes.home },
          { label: "Export", href: routes.export },
          { label: "Process" },
        ]}
        relatedLinks={[
          { slug: "export-docs", name: "Export documentation we prepare", href: routes.exportDocumentation },
          { slug: "packaging", name: "Packaging and container loading", href: routes.exportPackaging },
          { slug: "request-quote", name: "Start with a quote request", href: routes.requestQuote },
          { slug: "contact", name: "Contact export sales", href: routes.contact },
          { slug: "kenya", name: "Kenya port and clearance notes", href: routes.exportCountry("kenya") },
          { slug: "faqs", name: "Lead time and MOQ FAQs", href: routes.faqs },
          { slug: "puf-panels", name: "PUF panel export specifications", href: routes.product("puf-panels") },
          { slug: "cold-storage", name: "Cold storage project workflow", href: routes.solution("cold-storage") },
          { slug: "manufacturing", name: "Manufacturing lead times", href: routes.manufacturing },
        ]}
      />
    </>
  );
}
