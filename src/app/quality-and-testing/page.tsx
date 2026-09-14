import { HoldingPage } from "@/components/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/quality-and-testing/";
const page = requirePageByPath(PATH);


export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function QualityAndTestingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: routes.home },
          { name: "Quality and testing", path: PATH },
        ])}
      />
      <HoldingPage
        h1={page.h1}
        holdingCopy={page.holdingCopy}
        breadcrumbs={[
          { label: "Home", href: routes.home },
          { label: "Quality and testing" },
        ]}
        relatedLinks={[
          { slug: "manufacturing", name: "Manufacturing process overview", href: routes.manufacturing },
          { slug: "puf-panels", name: "PUF panel technical data", href: routes.product("puf-panels") },
          { slug: "pir-panels", name: "PIR panel technical data", href: routes.product("pir-panels") },
          { slug: "puf-vs-pir", name: "Compare PUF and PIR cores", href: routes.comparison("puf-vs-pir-panels") },
          { slug: "datasheets", name: "Request panel datasheets", href: routes.datasheets },
          { slug: "export-docs", name: "Export documentation we provide", href: routes.exportDocumentation },
          { slug: "faqs", name: "FAQs on specifications and lead times", href: routes.faqs },
          { slug: "contact", name: "Send your QA checklist", href: routes.contact },
          { slug: "request-quote", name: "Request a project quotation", href: routes.requestQuote },
        ]}
      />
    </>
  );
}
