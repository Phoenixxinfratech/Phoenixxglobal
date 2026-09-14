import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  padding?: "sm" | "md" | "lg";
};

const paddingStyles = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
} as const;

export function Card({
  padding = "md",
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[4px] border border-line bg-white",
        paddingStyles[padding],
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
