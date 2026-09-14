import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Container({ className, children, ...rest }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1280px] px-6 md:px-12", className)}
      {...rest}
    >
      {children}
    </div>
  );
}
