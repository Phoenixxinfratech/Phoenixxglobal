import NextLink from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

const variantStyles = {
  primary:
    "bg-ember text-white border border-ember hover:bg-ember-deep hover:border-ember-deep",
  secondary:
    "bg-transparent text-ink border border-line hover:border-steel hover:text-steel",
  ghost:
    "bg-transparent text-ink border border-transparent hover:bg-paper hover:text-steel",
  whatsapp:
    "bg-graphite text-white border border-graphite hover:bg-ink hover:border-ink",
} as const;

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
} as const;

type ButtonVariant = keyof typeof variantStyles;
type ButtonSize = keyof typeof sizeStyles;

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<"a">, keyof ButtonBaseProps> & {
    href: string;
    external?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-[2px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ember focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50";

function getButtonClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string,
) {
  return cn(baseStyles, variantStyles[variant], sizeStyles[size], className);
}

export function Button(props: ButtonAsButton): ReactNode;
export function Button(props: ButtonAsLink): ReactNode;
export function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary";
  const size = props.size ?? "md";
  const classes = getButtonClasses(variant, size, props.className);

  if (props.href) {
    const { href, external, children, ...linkRest } = props;
    // Strip style props already applied via classes
    delete (linkRest as { className?: string }).className;
    delete (linkRest as { variant?: ButtonVariant }).variant;
    delete (linkRest as { size?: ButtonSize }).size;

    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...linkRest}
        >
          {children}
        </a>
      );
    }

    return (
      <NextLink href={href} className={classes} {...linkRest}>
        {children}
      </NextLink>
    );
  }

  const { children, ...buttonRest } = props as ButtonAsButton;
  delete (buttonRest as { className?: string }).className;
  delete (buttonRest as { variant?: ButtonVariant }).variant;
  delete (buttonRest as { size?: ButtonSize }).size;

  return (
    <button type="button" className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
