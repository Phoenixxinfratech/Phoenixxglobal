"use client";

import {
  createContext,
  useCallback,
  useContext,
  useId,
  useMemo,
  useState,
  type HTMLAttributes,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/cn";

type AccordionType = "single" | "multiple";

type AccordionContextValue = {
  type: AccordionType;
  openItems: string[];
  toggleItem: (value: string) => void;
};

const AccordionContext = createContext<AccordionContextValue | null>(null);

function useAccordionContext() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used within Accordion");
  }
  return context;
}

type AccordionProps = HTMLAttributes<HTMLDivElement> & {
  type?: AccordionType;
  defaultValue?: string | string[];
  children: ReactNode;
};

export function Accordion({
  type = "single",
  defaultValue,
  className,
  children,
  ...rest
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>(() => {
    if (!defaultValue) return [];
    return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
  });

  const toggleItem = useCallback(
    (value: string) => {
      setOpenItems((current) => {
        const isOpen = current.includes(value);
        if (type === "single") {
          return isOpen ? [] : [value];
        }
        return isOpen
          ? current.filter((item) => item !== value)
          : [...current, value];
      });
    },
    [type],
  );

  const contextValue = useMemo(
    () => ({ type, openItems, toggleItem }),
    [type, openItems, toggleItem],
  );

  return (
    <AccordionContext.Provider value={contextValue}>
      <div className={cn("divide-y divide-line border-y border-line", className)} {...rest}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

type AccordionItemContextValue = {
  value: string;
  triggerId: string;
  panelId: string;
  isOpen: boolean;
};

const AccordionItemContext = createContext<AccordionItemContextValue | null>(
  null,
);

function useAccordionItemContext() {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error("AccordionItem components must be used within AccordionItem");
  }
  return context;
}

type AccordionItemProps = HTMLAttributes<HTMLDivElement> & {
  value: string;
  children: ReactNode;
};

export function AccordionItem({
  value,
  className,
  children,
  ...rest
}: AccordionItemProps) {
  const { openItems } = useAccordionContext();
  const baseId = useId();
  const triggerId = `${baseId}-trigger`;
  const panelId = `${baseId}-panel`;
  const isOpen = openItems.includes(value);

  const contextValue = useMemo(
    () => ({ value, triggerId, panelId, isOpen }),
    [value, triggerId, panelId, isOpen],
  );

  return (
    <AccordionItemContext.Provider value={contextValue}>
      <div className={cn("py-1", className)} {...rest}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

type AccordionTriggerProps = HTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function AccordionTrigger({
  className,
  children,
  onClick,
  onKeyDown,
  ...rest
}: AccordionTriggerProps) {
  const { toggleItem } = useAccordionContext();
  const { value, triggerId, panelId, isOpen } = useAccordionItemContext();

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleItem(value);
    }
    onKeyDown?.(event);
  };

  return (
    <button
      type="button"
      id={triggerId}
      aria-expanded={isOpen}
      aria-controls={panelId}
      className={cn(
        "flex w-full items-center justify-between gap-4 py-4 text-left text-base font-medium text-ink transition-colors hover:text-ember",
        className,
      )}
      onClick={(event) => {
        toggleItem(value);
        onClick?.(event);
      }}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      {children}
    </button>
  );
}

type AccordionPanelProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function AccordionPanel({
  className,
  children,
  ...rest
}: AccordionPanelProps) {
  const { triggerId, panelId, isOpen } = useAccordionItemContext();

  return (
    <div
      id={panelId}
      role="region"
      aria-labelledby={triggerId}
      hidden={!isOpen}
      className={cn("pb-4 text-steel", className)}
      {...rest}
    >
      {children}
    </div>
  );
}
