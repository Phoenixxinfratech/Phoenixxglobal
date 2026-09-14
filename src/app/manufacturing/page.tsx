import { HoldingPage } from "@/components/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/manufacturing/";
const page = requirePageByPath(PATH);


export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function ManufacturingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: routes.home },
          { name: "Manufacturing", path: PATH },
        ])}
      />
      <HoldingPage
        h1={page.h1}
        holdingCopy={page.holdingCopy}
        breadcrumbs={[
          { label: "Home", href: routes.home },
          { label: "Manufacturing" },
        ]}
        relatedLinks={[
          { slug: "quality", name: "Quality checks before dispatch", href: routes.qualityAndTesting },
          { slug: "about", name: "About PHOENIXX SMARTBUILD", href: routes.about },
          { slug: "puf-panels", name: "PUF panel specifications", href: routes.product("puf-panels") },
          { slug: "pir-panels", name: "PIR panel specifications", href: routes.product("pir-panels") },
          { slug: "export-process", name: "Export process from enquiry to loading", href: routes.exportProcess },
          { slug: "packaging", name: "Panel packaging for ocean freight", href: routes.exportPackaging },
          { slug: "cold-storage", name: "Cold storage solution overview", href: routes.solution("cold-storage") },
          { slug: "contact", name: "Request plant capacity notes", href: routes.contact },
          { slug: "request-quote", name: "Send BOQ for a quotation", href: routes.requestQuote },
        ]}
      />
    </>
  );
}
