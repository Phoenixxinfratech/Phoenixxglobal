import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type InlineSpecCalloutProps = {
  children: ReactNode;
  className?: string;
};

export function InlineSpecCallout({ children, className }: InlineSpecCalloutProps) {
  return (
    <aside
      className={cn(
        "my-6 rounded-[2px] border border-line bg-paper px-4 py-3 text-sm text-steel",
        className,
      )}
    >
      {children}
    </aside>
  );
}
