"use client";

import { useEffect, type ComponentPropsWithoutRef } from "react";
import { Link } from "@/components/ui/Link";
import { isDraftPath } from "@/lib/links";

type InlineLinkProps = ComponentPropsWithoutRef<typeof Link>;

export function InlineLink({ href, children, ...rest }: InlineLinkProps) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development" && isDraftPath(href)) {
      console.warn(
        `[InlineLink] href "${href}" points to draft content. Link may 404 or show a holding page until published.`,
      );
    }
  }, [href]);

  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}
