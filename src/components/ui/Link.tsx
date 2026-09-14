import NextLink from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type LinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href: string;
  external?: boolean;
  className?: string;
  children: ReactNode;
};

export function Link({
  href,
  external = false,
  className,
  children,
  ...rest
}: LinkProps) {
  const classes = cn(
    "text-ink underline-offset-4 transition-colors hover:text-ember hover:underline",
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={classes} {...rest}>
      {children}
    </NextLink>
  );
}
