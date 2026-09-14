import { HoldingPage } from "@/components/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/export/africa/";
const page = requirePageByPath(PATH);


export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function ExportAfricaPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: routes.home },
          { name: "Export", path: routes.export },
          { name: "Africa", path: PATH },
        ])}
      />
      <HoldingPage
        h1={page.h1}
        holdingCopy={page.holdingCopy}
        breadcrumbs={[
          { label: "Home", href: routes.home },
          { label: "Export", href: routes.export },
          { label: "Africa" },
        ]}
        relatedLinks={[
          { slug: "kenya", name: "Sandwich panel export to Kenya", href: routes.exportCountry("kenya") },
          { slug: "tanzania", name: "Export to Tanzania via Dar es Salaam", href: routes.exportCountry("tanzania") },
          { slug: "uganda", name: "Export to Uganda (transit routes)", href: routes.exportCountry("uganda") },
          { slug: "ghana", name: "Export to Ghana via Tema port", href: routes.exportCountry("ghana") },
          { slug: "export-process", name: "Export process step by step", href: routes.exportProcess },
          { slug: "export-docs", name: "Export documentation checklist", href: routes.exportDocumentation },
          { slug: "packaging", name: "Panel packaging for ocean freight", href: routes.exportPackaging },
          { slug: "cold-storage", name: "Cold storage solutions for Africa", href: routes.solution("cold-storage") },
          { slug: "request-quote", name: "Request CIF or FOB pricing", href: routes.requestQuote },
        ]}
      />
    </>
  );
}
