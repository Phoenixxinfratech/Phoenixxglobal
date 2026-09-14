import { HoldingPage } from "@/components/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/projects/";
const page = requirePageByPath(PATH);


export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: routes.home },
          { name: "Projects", path: PATH },
        ])}
      />
      <HoldingPage
        h1={page.h1}
        holdingCopy={page.holdingCopy}
        breadcrumbs={[
          { label: "Home", href: routes.home },
          { label: "Projects" },
        ]}
        relatedLinks={[
          { slug: "cold-storage", name: "Cold storage solution reference", href: routes.solution("cold-storage") },
          { slug: "kenya", name: "Kenya export projects and ports", href: routes.exportCountry("kenya") },
          { slug: "puf-panels", name: "PUF panels for cold rooms", href: routes.product("puf-panels") },
          { slug: "cold-room-panels", name: "Modular cold room panels", href: routes.product("cold-room-panels") },
          { slug: "industrial-doors", name: "Cold room door options", href: routes.product("industrial-doors") },
          { slug: "about", name: "About our company", href: routes.about },
          { slug: "manufacturing", name: "How panels are manufactured", href: routes.manufacturing },
          { slug: "contact", name: "Share your project scope", href: routes.contact },
          { slug: "request-quote", name: "Request a quotation", href: routes.requestQuote },
        ]}
      />
    </>
  );
}
