import { HoldingPage } from "@/components/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/careers/";
const page = requirePageByPath(PATH);


export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function CareersPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: routes.home },
          { name: "Careers", path: PATH },
        ])}
      />
      <HoldingPage
        h1={page.h1}
        holdingCopy={page.holdingCopy}
        breadcrumbs={[
          { label: "Home", href: routes.home },
          { label: "Careers" },
        ]}
        relatedLinks={[
          { slug: "about", name: "About PHOENIXX SMARTBUILD", href: routes.about },
          { slug: "manufacturing", name: "Manufacturing operations", href: routes.manufacturing },
          { slug: "products", name: "Product range we manufacture", href: routes.products },
          { slug: "export", name: "Export operations overview", href: routes.export },
          { slug: "contact", name: "General enquiries", href: routes.contact },
          { slug: "quality", name: "Quality and testing team", href: routes.qualityAndTesting },
          { slug: "projects", name: "Project portfolio", href: routes.projects },
          { slug: "solutions", name: "Industry solutions we support", href: routes.solutions },
          { slug: "blog", name: "Technical blog (coming soon)", href: routes.blog },
        ]}
      />
    </>
  );
}
