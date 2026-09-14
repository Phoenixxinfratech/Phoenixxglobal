import { HoldingPage } from "@/components/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { requirePageByPath } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";
import { breadcrumbSchema } from "@/lib/schema";

const PATH = "/blog/";
const page = requirePageByPath(PATH);


export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  draft: page.draft,
});

export default function BlogHubPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: routes.home },
          { name: "Blog", path: PATH },
        ])}
      />
      <HoldingPage
        h1={page.h1}
        holdingCopy={page.holdingCopy}
        breadcrumbs={[
          { label: "Home", href: routes.home },
          { label: "Blog" },
        ]}
        relatedLinks={[
          { slug: "resources", name: "Technical resources hub", href: routes.resources },
          { slug: "guides", name: "Technical guides", href: routes.guides },
          { slug: "faqs", name: "Export and panel FAQs", href: routes.faqs },
          { slug: "export-process", name: "Export process notes", href: routes.exportProcess },
          { slug: "packaging", name: "Packing damage prevention", href: routes.exportPackaging },
          { slug: "puf-panels", name: "PUF panel specifications", href: routes.product("puf-panels") },
          { slug: "cold-storage", name: "Cold storage solutions", href: routes.solution("cold-storage") },
          { slug: "about", name: "About PHOENIXX SMARTBUILD", href: routes.about },
          { slug: "contact", name: "Suggest a topic", href: routes.contact },
        ]}
      />
    </>
  );
}
