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

type TabsContextValue = {
  activeValue: string;
  setActiveValue: (value: string) => void;
  baseId: string;
};

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within Tabs");
  }
  return context;
}

type TabsProps = HTMLAttributes<HTMLDivElement> & {
  defaultValue: string;
  children: ReactNode;
};

export function Tabs({
  defaultValue,
  className,
  children,
  ...rest
}: TabsProps) {
  const baseId = useId();
  const [activeValue, setActiveValue] = useState(defaultValue);

  const contextValue = useMemo(
    () => ({ activeValue, setActiveValue, baseId }),
    [activeValue, baseId],
  );

  return (
    <TabsContext.Provider value={contextValue}>
      <div className={cn("w-full", className)} {...rest}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

type TabsListProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function TabsList({ className, children, ...rest }: TabsListProps) {
  return (
    <div
      role="tablist"
      className={cn("flex flex-wrap gap-1 border-b border-line", className)}
      {...rest}
    >
      {children}
    </div>
  );
}

type TabProps = HTMLAttributes<HTMLButtonElement> & {
  value: string;
  children: ReactNode;
};

export function Tab({
  value,
  className,
  children,
  onClick,
  onKeyDown,
  ...rest
}: TabProps) {
  const { activeValue, setActiveValue, baseId } = useTabsContext();
  const isActive = activeValue === value;
  const tabId = `${baseId}-tab-${value}`;
  const panelId = `${baseId}-panel-${value}`;

  const focusTabByOffset = useCallback(
    (offset: number, current: HTMLButtonElement) => {
      const tablist = current.closest('[role="tablist"]');
      if (!tablist) return;
      const tabs = Array.from(
        tablist.querySelectorAll<HTMLButtonElement>('[role="tab"]'),
      );
      const currentIndex = tabs.indexOf(current);
      const nextIndex =
        (currentIndex + offset + tabs.length) % tabs.length;
      tabs[nextIndex]?.focus();
    },
    [],
  );

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const current = event.currentTarget;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        event.preventDefault();
        focusTabByOffset(1, current);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        event.preventDefault();
        focusTabByOffset(-1, current);
        break;
      case "Home":
        event.preventDefault();
        current
          .closest('[role="tablist"]')
          ?.querySelector<HTMLButtonElement>('[role="tab"]')
          ?.focus();
        break;
      case "End": {
        event.preventDefault();
        const tabs = current
          .closest('[role="tablist"]')
          ?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
        tabs?.[tabs.length - 1]?.focus();
        break;
      }
      default:
        break;
    }

    onKeyDown?.(event);
  };

  return (
    <button
      type="button"
      role="tab"
      id={tabId}
      aria-selected={isActive}
      aria-controls={panelId}
      tabIndex={isActive ? 0 : -1}
      className={cn(
        "rounded-t-[2px] border-b-2 px-4 py-3 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ember focus-visible:outline-offset-2",
        isActive
          ? "border-ember text-ink"
          : "border-transparent text-zinc hover:border-line hover:text-steel",
        className,
      )}
      onClick={(event) => {
        setActiveValue(value);
        onClick?.(event);
      }}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      {children}
    </button>
  );
}

type TabPanelProps = HTMLAttributes<HTMLDivElement> & {
  value: string;
  children: ReactNode;
};

export function TabPanel({
  value,
  className,
  children,
  ...rest
}: TabPanelProps) {
  const { activeValue, baseId } = useTabsContext();
  const isActive = activeValue === value;
  const tabId = `${baseId}-tab-${value}`;
  const panelId = `${baseId}-panel-${value}`;

  return (
    <div
      role="tabpanel"
      id={panelId}
      aria-labelledby={tabId}
      hidden={!isActive}
      tabIndex={0}
      className={cn("py-6 text-steel", !isActive && "hidden", className)}
      {...rest}
    >
      {children}
    </div>
  );
}
