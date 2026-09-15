"use client";

import { useEffect, useState } from "react";
import { site } from "@/config/site";
import { Button } from "@/components/ui";
import { confirmed } from "@/lib/confirmed";
import { track } from "@/lib/analytics/track";
import { whatsAppUrl } from "@/lib/links";
import { cn } from "@/lib/cn";

type WhatsAppButtonProps = {
  className?: string;
  prefilledMessage?: string;
};

function buildWhatsAppMessage(prefilledMessage?: string): string {
  if (prefilledMessage) return prefilledMessage;
  const pageTitle = typeof document !== "undefined" ? document.title : "your website";
  return `Hello PHOENIXX SMARTBUILD — I am enquiring from ${pageTitle}. Please share pricing and export details.`;
}

export function WhatsAppButton({ className, prefilledMessage }: WhatsAppButtonProps) {
  const whatsapp = confirmed(site.contact.whatsapp);
  const [hiddenByForm, setHiddenByForm] = useState(false);

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

  if (!whatsapp) return null;
  if (hiddenByForm) return null;

  return (
    <div
      className={cn(
        "fixed bottom-20 right-4 z-40 md:hidden",
        className,
      )}
    >
      <Button
        variant="whatsapp"
        size="md"
        aria-label="Chat on WhatsApp"
        className="shadow-lg"
        onClick={() => {
          track("whatsapp_click", { location: "floating" });
          const url = whatsAppUrl(buildWhatsAppMessage(prefilledMessage), whatsapp);
          window.open(url, "_blank", "noopener,noreferrer");
        }}
      >
        WhatsApp
      </Button>
    </div>
  );
}
