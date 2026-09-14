import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

const levelStyles = {
  h1: "text-4xl md:text-5xl lg:text-6xl",
  h2: "text-3xl md:text-4xl",
  h3: "text-2xl md:text-3xl",
  h4: "text-xl md:text-2xl",
} as const;

type HeadingLevel = keyof typeof levelStyles;

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  as?: HeadingLevel;
  children: ReactNode;
};

export function Heading({
  as: Tag = "h2",
  className,
  children,
  ...rest
}: HeadingProps) {
  return (
    <Tag
      className={cn("font-display font-semibold text-ink", levelStyles[Tag], className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
