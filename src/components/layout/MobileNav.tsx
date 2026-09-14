"use client";

import NextLink from "next/link";
import { useCallback, useEffect, useRef, type MouseEvent } from "react";
import { Menu, X } from "lucide-react";
import { primaryNav } from "@/content/navigation";
import { site } from "@/config/site";
import { confirmed } from "@/lib/confirmed";
import { cn } from "@/lib/cn";
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
  Button,
} from "@/components/ui";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

const WHATSAPP_MESSAGE = `Hello, I have an enquiry about ${site.brandShort} insulated panels.`;

function buildWhatsAppHref(): string | null {
  const whatsapp = confirmed(site.contact.whatsapp);
  if (!whatsapp) return null;
  const digits = whatsapp.replace(/\D/g, "");
  if (!digits) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function MobileNav({ open, onClose }: MobileNavProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const whatsappHref = buildWhatsAppHref();

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const drawer = drawerRef.current;
    const focusable = drawer?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
    const firstFocusable = focusable?.[0];
    const lastFocusable = focusable?.[focusable.length - 1];

    firstFocusable?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !focusable?.length) return;

      if (event.shiftKey) {
        if (document.activeElement === firstFocusable) {
          event.preventDefault();
          lastFocusable?.focus();
        }
      } else if (document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  const handleBackdropClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    },
    [onClose],
  );

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      onClick={handleBackdropClick}
    >
      <div className="absolute inset-0 bg-ink/40" aria-hidden="true" />

      <div
        ref={drawerRef}
        className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-white shadow-lg"
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-4">
          <span className="font-display text-lg font-bold tracking-tight text-ink">
            {site.brandShort}
          </span>
          <button
            type="button"
            className="rounded-[2px] p-2 text-steel transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-ember focus-visible:outline-offset-2"
            aria-label="Close menu"
            onClick={onClose}
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6">
          <Accordion type="single" className="border-0">
            {primaryNav.map((group) =>
              group.columns || group.links ? (
                <AccordionItem key={group.label} value={group.label}>
                  <AccordionTrigger className="text-base">{group.label}</AccordionTrigger>
                  <AccordionPanel>
                    <ul className="space-y-2 pb-2" role="list">
                      {(group.columns
                        ? group.columns.flatMap((column) => column.links)
                        : group.links ?? []
                      ).map((link) => (
                        <li key={link.href}>
                          <NextLink
                            href={link.href}
                            className="block py-1 text-sm text-steel transition-colors hover:text-ember"
                            onClick={onClose}
                          >
                            {link.label}
                          </NextLink>
                        </li>
                      ))}
                      <li>
                        <NextLink
                          href={group.href}
                          className="block py-1 text-sm font-medium text-ember"
                          onClick={onClose}
                        >
                          View all {group.label.toLowerCase()}
                        </NextLink>
                      </li>
                    </ul>
                  </AccordionPanel>
                </AccordionItem>
              ) : (
                <div key={group.label} className="border-b border-line py-4">
                  <NextLink
                    href={group.href}
                    className="text-base font-medium text-ink transition-colors hover:text-ember"
                    onClick={onClose}
                  >
                    {group.label}
                  </NextLink>
                </div>
              ),
            )}
          </Accordion>
        </div>

        <div className="sticky bottom-0 border-t border-line bg-white p-4">
          <div className="flex flex-col gap-2">
            <Button href="/request-a-quote/" variant="primary" size="md" className="w-full">
              Request a Quote
            </Button>
            {whatsappHref ? (
              <Button
                href={whatsappHref}
                variant="whatsapp"
                size="md"
                external
                className="w-full"
              >
                WhatsApp
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export function MobileNavTrigger({
  open,
  onOpen,
  className,
}: {
  open: boolean;
  onOpen: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={cn(
        "rounded-[2px] p-2 text-ink transition-colors hover:text-ember md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-ember focus-visible:outline-offset-2",
        className,
      )}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      onClick={onOpen}
    >
      <Menu className="size-6" aria-hidden="true" />
    </button>
  );
}
