"use client";

import NextLink from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { primaryNav, type NavGroup } from "@/content/navigation";
import { site } from "@/config/site";
import { tokens } from "@/config/tokens";
import { confirmed } from "@/lib/confirmed";
import { cn } from "@/lib/cn";
import { Button, Container } from "@/components/ui";
import { MegaMenu } from "./MegaMenu";
import { MobileNav, MobileNavTrigger } from "./MobileNav";

const WHATSAPP_MESSAGE = `Hello, I have an enquiry about ${site.brandShort} insulated panels.`;

function buildWhatsAppHref(): string | null {
  const whatsapp = confirmed(site.contact.whatsapp);
  if (!whatsapp) return null;
  const digits = whatsapp.replace(/\D/g, "");
  if (!digits) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}

type SimpleDropdownProps = {
  group: NavGroup;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
};

function SimpleDropdown({ group, open, onOpen, onClose }: SimpleDropdownProps) {
  const intentRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const clearIntent = useCallback(() => {
    if (intentRef.current) {
      clearTimeout(intentRef.current);
      intentRef.current = null;
    }
  }, []);

  const scheduleOpen = useCallback(() => {
    clearIntent();
    intentRef.current = setTimeout(onOpen, tokens.motion.megaMenuIntentMs);
  }, [clearIntent, onOpen]);

  const scheduleClose = useCallback(() => {
    clearIntent();
    intentRef.current = setTimeout(onClose, tokens.motion.megaMenuIntentMs);
  }, [clearIntent, onClose]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!group.links?.length) {
    return (
      <NextLink
        href={group.href}
        className="hidden px-3 py-2 text-sm font-medium text-ink transition-colors hover:text-ember md:inline-flex"
      >
        {group.label}
      </NextLink>
    );
  }

  return (
    <div
      className="relative hidden md:block"
      onMouseEnter={scheduleOpen}
      onMouseLeave={scheduleClose}
    >
      <button
        ref={triggerRef}
        type="button"
        id={`nav-trigger-${group.label.toLowerCase()}`}
        className={cn(
          "inline-flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors",
          open ? "text-ember" : "text-ink hover:text-ember",
        )}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={`nav-panel-${group.label.toLowerCase()}`}
        onFocus={onOpen}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
            onClose();
          }
        }}
        onClick={() => (open ? onClose() : onOpen())}
      >
        {group.label}
        <ChevronDown className="size-3.5 opacity-60" aria-hidden="true" />
      </button>

      {open ? (
        <div
          id={`nav-panel-${group.label.toLowerCase()}`}
          role="navigation"
          aria-labelledby={`nav-trigger-${group.label.toLowerCase()}`}
          className="absolute left-0 top-full z-50 min-w-[220px] border border-line bg-white py-2 shadow-sticky"
          onMouseEnter={() => {
            clearIntent();
            onOpen();
          }}
          onMouseLeave={scheduleClose}
        >
          <ul role="list">
            {group.links.map((link) => (
              <li key={link.href}>
                <NextLink
                  href={link.href}
                  className="block px-4 py-2 text-sm text-ink transition-colors hover:bg-paper hover:text-ember focus-visible:outline focus-visible:outline-2 focus-visible:outline-ember focus-visible:outline-offset-[-2px]"
                  onClick={onClose}
                >
                  {link.label}
                </NextLink>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const whatsappHref = buildWhatsAppHref();
  const phone = confirmed(site.contact.phonePrimary);
  const callHref = phone ? `tel:${phone.replace(/\s/g, "")}` : null;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenus = useCallback(() => setOpenMenu(null), []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-[background-color,box-shadow,border-color]",
          scrolled
            ? "border-b border-line bg-white/95 shadow-sticky backdrop-blur-sm"
            : "border-b border-transparent bg-white",
        )}
      >
        <Container>
          <div
            className={cn(
              "relative flex items-center gap-6 transition-[height] lg:gap-10",
              scrolled ? "h-16" : "h-[88px]",
            )}
          >
            <NextLink
              href="/"
              className="shrink-0 font-display text-xl font-bold tracking-tight text-ink transition-colors hover:text-ember focus-visible:outline focus-visible:outline-2 focus-visible:outline-ember focus-visible:outline-offset-2"
            >
              {site.brandShort}
            </NextLink>

            <nav
              className="hidden min-w-0 flex-1 items-center gap-1 md:flex"
              aria-label="Primary"
              onMouseLeave={closeMenus}
            >
              {primaryNav.map((group) =>
                group.columns ? (
                  <MegaMenu
                    key={group.label}
                    group={group}
                    open={openMenu === group.label}
                    onOpen={() => setOpenMenu(group.label)}
                    onClose={closeMenus}
                  />
                ) : (
                  <SimpleDropdown
                    key={group.label}
                    group={group}
                    open={openMenu === group.label}
                    onOpen={() => setOpenMenu(group.label)}
                    onClose={closeMenus}
                  />
                ),
              )}
            </nav>

            <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
              {callHref ? (
                <Button href={callHref} variant="ghost" size="sm" className="hidden sm:inline-flex">
                  Call
                </Button>
              ) : null}
              {whatsappHref ? (
                <Button
                  href={whatsappHref}
                  variant="ghost"
                  size="sm"
                  external
                  className="hidden sm:inline-flex"
                >
                  WhatsApp
                </Button>
              ) : null}
              <Button
                href="/request-a-quote/"
                variant="primary"
                size="sm"
                className="hidden sm:inline-flex"
              >
                Request a Quote
              </Button>
              <MobileNavTrigger
                open={mobileOpen}
                onOpen={() => setMobileOpen((current) => !current)}
              />
            </div>
          </div>
        </Container>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
