"use client";

import { Button } from "@/components/ui";
import { requestQuoteUrl } from "@/lib/links";

type QuoteButtonProps = {
  productSlug?: string;
  label?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
};

export function QuoteButton({
  productSlug,
  label = "Get a panel specification and quote",
  className,
  size = "md",
}: QuoteButtonProps) {
  const href = requestQuoteUrl({ product: productSlug, variant: "quote" });

  return (
    <Button href={href} variant="primary" size={size} className={className}>
      {label}
    </Button>
  );
}
