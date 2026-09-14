import { HoldingPage } from "@/components/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/export/documentation/";
const page = requirePageByPath(PATH);


export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function ExportDocumentationPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: routes.home },
          { name: "Export", path: routes.export },
          { name: "Documentation", path: PATH },
        ])}
      />
      <HoldingPage
        h1={page.h1}
        holdingCopy={page.holdingCopy}
        breadcrumbs={[
          { label: "Home", href: routes.home },
          { label: "Export", href: routes.export },
          { label: "Documentation" },
        ]}
        relatedLinks={[
          { slug: "export-process", name: "Full export process overview", href: routes.exportProcess },
          { slug: "kenya", name: "Kenya import documentation (IDF, PVoC)", href: routes.exportCountry("kenya") },
          { slug: "packaging", name: "Packing list and container details", href: routes.exportPackaging },
          { slug: "faqs", name: "Export document FAQs", href: routes.faqs },
          { slug: "tanzania", name: "Tanzania export page (draft)", href: routes.exportCountry("tanzania") },
          { slug: "uganda", name: "Uganda transit documentation", href: routes.exportCountry("uganda") },
          { slug: "contact", name: "Share your clearing agent requirements", href: routes.contact },
          { slug: "request-quote", name: "Request a quotation", href: routes.requestQuote },
          { slug: "quality", name: "Quality and test reports on request", href: routes.qualityAndTesting },
        ]}
      />
    </>
  );
}
