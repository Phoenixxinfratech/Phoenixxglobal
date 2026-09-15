"use client";

import { useEffect, useState } from "react";
import { site } from "@/config/site";
import { Button } from "@/components/ui";
import { confirmed } from "@/lib/confirmed";
import { requestQuoteUrl } from "@/lib/links";
import { track } from "@/lib/analytics/track";
import { cn } from "@/lib/cn";

type StickyCtaBarProps = {
  productSlug?: string;
  className?: string;
};

export function StickyCtaBar({ productSlug, className }: StickyCtaBarProps) {
  const phone = confirmed(site.contact.phonePrimary);
  const [visible, setVisible] = useState(false);
  const [hiddenByForm, setHiddenByForm] = useState(false);

  useEffect(() => {
    function onScroll() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) {
        setVisible(false);
        return;
      }
      const progress = window.scrollY / scrollable;
      setVisible(progress >= 0.4);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const form = document.querySelector("[data-lead-form]");
    if (!form) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHiddenByForm(entry?.isIntersecting ?? false);
      },
      { threshold: 0.15 },
    );
    observer.observe(form);
    return () => observer.disconnect();
  }, []);

  if (!visible || hiddenByForm) return null;

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white/95 p-3 shadow-[0_-4px_24px_rgba(0,0,0,0.08)] backdrop-blur md:hidden",
        className,
      )}
    >
      <div className="mx-auto flex max-w-[1280px] gap-3 px-3">
        <Button
          href={requestQuoteUrl({ product: productSlug, variant: "quote" })}
          variant="primary"
          size="md"
          className="flex-1"
          onClick={() => track("cta_click", { location: "sticky_mobile", product: productSlug })}
        >
          Get a panel specification and quote
        </Button>
        {phone ? (
          <Button
            href={`tel:${phone.replace(/\s/g, "")}`}
            variant="secondary"
            size="md"
            className="flex-1"
            onClick={() => track("call_click", { location: "sticky_mobile" })}
          >
            Call
          </Button>
        ) : null}
      </div>
    </div>
  );
}
