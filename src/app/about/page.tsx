import { HoldingPage } from "@/components/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/about/";
const page = requirePageByPath(PATH);


export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: routes.home },
          { name: "About", path: PATH },
        ])}
      />
      <HoldingPage
        h1={page.h1}
        holdingCopy={page.holdingCopy}
        breadcrumbs={[
          { label: "Home", href: routes.home },
          { label: "About" },
        ]}
        relatedLinks={[
          { slug: "manufacturing", name: "Panel manufacturing in Ahmedabad", href: routes.manufacturing },
          { slug: "quality", name: "Quality and testing practices", href: routes.qualityAndTesting },
          { slug: "products", name: "Insulated sandwich panel range", href: routes.products },
          { slug: "puf-panels", name: "PUF panels — core export product", href: routes.product("puf-panels") },
          { slug: "export", name: "How we export to African ports", href: routes.export },
          { slug: "kenya", name: "Kenya export market overview", href: routes.exportCountry("kenya") },
          { slug: "projects", name: "Published project references", href: routes.projects },
          { slug: "contact", name: "Speak with our export team", href: routes.contact },
          { slug: "careers", name: "Open roles at our plant", href: routes.careers },
        ]}
      />
    </>
  );
}
