import { Heading } from "@/components/ui";
import {
  getRelatedForProduct,
  getRelatedForSolution,
  type RelatedContentBundle,
  type RelatedLink,
} from "@/lib/links";
import { InlineLink } from "./InlineLink";

type EntityType = "product" | "solution";

type RelatedContentProps = {
  entityType: EntityType;
  slug: string;
  className?: string;
};

const SECTION_LABELS: Record<keyof RelatedContentBundle, string> = {
  products: "Related products",
  solutions: "Related solutions",
  guides: "Guides and comparisons",
  exports: "Export markets",
};

function RelatedGroup({
  title,
  links,
}: {
  title: string;
  links: RelatedLink[];
}) {
  if (links.length === 0) return null;

  return (
    <div>
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={`${title}-${link.slug}`}>
            <InlineLink href={link.href}>{link.name}</InlineLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

function getRelated(entityType: EntityType, slug: string): RelatedContentBundle {
  if (entityType === "product") return getRelatedForProduct(slug);
  return getRelatedForSolution(slug);
}

export function RelatedContent({ entityType, slug, className }: RelatedContentProps) {
  const related = getRelated(entityType, slug);
  const hasLinks = Object.values(related).some((group) => group.length > 0);

  if (!hasLinks) return null;

  return (
    <aside className={className}>
      <Heading as="h2" className="text-2xl md:text-3xl">
        Related content
      </Heading>
      <div className="mt-6 grid gap-8 md:grid-cols-2">
        {(Object.keys(SECTION_LABELS) as Array<keyof RelatedContentBundle>).map((key) => (
          <RelatedGroup key={key} title={SECTION_LABELS[key]} links={related[key]} />
        ))}
      </div>
    </aside>
  );
}
