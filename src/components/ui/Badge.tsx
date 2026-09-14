import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

const variantStyles = {
  default: "bg-paper text-ink border-line",
  verify: "bg-verify/10 text-verify border-verify/30",
  signal: "bg-signal/10 text-ink border-signal/30",
} as const;

type BadgeVariant = keyof typeof variantStyles;

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
  children: ReactNode;
};

export function Badge({
  variant = "default",
  className,
  children,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[2px] border px-2 py-0.5 text-xs font-medium",
        variantStyles[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
