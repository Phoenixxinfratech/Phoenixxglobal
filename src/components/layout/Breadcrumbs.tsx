import NextLink from "next/link";
import { cn } from "@/lib/cn";

export type BreadcrumbItem = {
  name: string;
  href: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  if (!items.length) return null;

  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm text-zinc", className)}>
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.href}-${index}`} className="flex items-center gap-1">
              {index > 0 ? (
                <span className="text-line select-none" aria-hidden="true">
                  /
                </span>
              ) : null}
              {isLast ? (
                <span className="text-steel" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <NextLink
                  href={item.href}
                  className="text-zinc transition-colors hover:text-ember"
                >
                  {item.name}
                </NextLink>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
