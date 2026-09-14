import { HoldingPage } from "@/components/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/resources/panel-selection/";
const page = requirePageByPath(PATH);


export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function PanelSelectionPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: routes.home },
          { name: "Resources", path: routes.resources },
          { name: "Panel selection", path: PATH },
        ])}
      />
      <HoldingPage
        h1={page.h1}
        holdingCopy={page.holdingCopy}
        breadcrumbs={[
          { label: "Home", href: routes.home },
          { label: "Resources", href: routes.resources },
          { label: "Panel selection" },
        ]}
        relatedLinks={[
          { slug: "puf-vs-pir", name: "PUF vs PIR comparison", href: routes.comparison("puf-vs-pir-panels") },
          { slug: "puf-vs-rockwool", name: "PUF vs Rockwool for fire rating", href: routes.comparison("puf-vs-rockwool-panels") },
          { slug: "pir-vs-rockwool", name: "PIR vs Rockwool comparison", href: routes.comparison("pir-vs-rockwool-panels") },
          { slug: "puf-panels", name: "PUF panel page", href: routes.product("puf-panels") },
          { slug: "pir-panels", name: "PIR panel page", href: routes.product("pir-panels") },
          { slug: "cold-storage", name: "Cold storage thickness guidance", href: routes.solution("cold-storage") },
          { slug: "glossary", name: "U-value and cam-lock definitions", href: routes.glossary },
          { slug: "faqs", name: "Thickness and core FAQs", href: routes.faqs },
          { slug: "request-quote", name: "Get a core recommendation with your quote", href: routes.requestQuote },
        ]}
      />
    </>
  );
}
