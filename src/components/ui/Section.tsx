import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

const backgroundStyles = {
  paper: "bg-paper",
  white: "bg-white",
  graphite: "bg-graphite text-white",
} as const;

type SectionBackground = keyof typeof backgroundStyles;

type SectionProps = HTMLAttributes<HTMLElement> & {
  background?: SectionBackground;
  children: ReactNode;
};

export function Section({
  background,
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-[112px]",
        background && backgroundStyles[background],
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  );
}
