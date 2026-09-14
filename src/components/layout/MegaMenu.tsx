"use client";

import NextLink from "next/link";
import { useCallback, useEffect, useRef } from "react";
import type { NavGroup } from "@/content/navigation";
import { tokens } from "@/config/tokens";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui";

type MegaMenuProps = {
  group: NavGroup;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
};

function truncateWords(text: string | undefined, maxWords: number): string | undefined {
  if (!text) return undefined;
  const words = text.trim().split(/\s+/);
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ");
}

export function MegaMenu({ group, open, onOpen, onClose }: MegaMenuProps) {
  const intentRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
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

  const cancelClose = useCallback(() => {
    clearIntent();
    onOpen();
  }, [clearIntent, onOpen]);

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

  const categoryColumns =
    group.columns?.filter((column) => column.title !== "Applications") ?? [];
  const applicationsColumn = group.columns?.find(
    (column) => column.title === "Applications",
  );

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
      </button>

      {open ? (
        <div
          ref={panelRef}
          id={`nav-panel-${group.label.toLowerCase()}`}
          role="navigation"
          aria-labelledby={`nav-trigger-${group.label.toLowerCase()}`}
          className="absolute left-1/2 top-full z-50 w-screen max-w-none -translate-x-1/2 border-t border-line bg-white shadow-sticky"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <Container className="py-8">
            <div
              className={cn(
                "grid gap-8",
                group.promo
                  ? "lg:grid-cols-[1fr_minmax(220px,280px)]"
                  : "grid-cols-1",
              )}
            >
              <div
                className={cn(
                  "grid gap-8",
                  applicationsColumn
                    ? "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                    : "sm:grid-cols-2 lg:grid-cols-3",
                )}
              >
                {categoryColumns.map((column) => (
                  <div key={column.title}>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc">
                      {column.title}
                    </p>
                    <ul className="space-y-3" role="list">
                      {column.links.map((link) => (
                        <li key={link.href}>
                          <NextLink
                            href={link.href}
                            className="group block rounded-[2px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-ember focus-visible:outline-offset-2"
                            onClick={onClose}
                          >
                            <span className="block text-sm font-medium text-ink transition-colors group-hover:text-ember">
                              {link.label}
                            </span>
                            {link.description ? (
                              <span className="mt-0.5 block text-xs text-zinc">
                                {truncateWords(link.description, 6)}
                              </span>
                            ) : null}
                          </NextLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {applicationsColumn ? (
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc">
                      {applicationsColumn.title}
                    </p>
                    <ul className="space-y-3" role="list">
                      {applicationsColumn.links.map((link) => (
                        <li key={link.href}>
                          <NextLink
                            href={link.href}
                            className="group block rounded-[2px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-ember focus-visible:outline-offset-2"
                            onClick={onClose}
                          >
                            <span className="block text-sm font-medium text-ink transition-colors group-hover:text-ember">
                              {link.label}
                            </span>
                            {link.description ? (
                              <span className="mt-0.5 block text-xs text-zinc">
                                {truncateWords(link.description, 6)}
                              </span>
                            ) : null}
                          </NextLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>

              {group.promo ? (
                <aside className="border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                  <p className="font-display text-lg font-semibold text-ink">
                    {group.promo.title}
                  </p>
                  <p className="mt-2 text-sm text-steel">{group.promo.description}</p>
                  <NextLink
                    href={group.promo.href}
                    className="mt-4 inline-flex text-sm font-medium text-ember transition-colors hover:text-ember-deep"
                    onClick={onClose}
                  >
                    {group.promo.cta}
                  </NextLink>
                </aside>
              ) : null}
            </div>

            <div className="mt-6 border-t border-line pt-4">
              <NextLink
                href={group.href}
                className="text-sm font-medium text-steel transition-colors hover:text-ember"
                onClick={onClose}
              >
                View all {group.label.toLowerCase()}
              </NextLink>
            </div>
          </Container>
        </div>
      ) : null}
    </div>
  );
}
