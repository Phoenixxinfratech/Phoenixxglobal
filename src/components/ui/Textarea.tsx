"use client";

import { useId, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type TextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "id"> & {
  id?: string;
  label?: string;
  error?: string;
  hint?: string;
};

export function Textarea({
  id: idProp,
  label,
  error,
  hint,
  required,
  className,
  ...rest
}: TextareaProps) {
  const generatedId = useId();
  const id = idProp ?? generatedId;
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className="flex flex-col gap-1.5">
      {label ? (
        <label htmlFor={id} className="text-sm font-medium text-ink">
          {label}
          {required ? (
            <span className="ml-0.5 text-ember" aria-hidden="true">
              *
            </span>
          ) : null}
        </label>
      ) : null}
      <textarea
        id={id}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={cn(
          "min-h-32 w-full resize-y rounded-[2px] border border-line bg-white px-3 py-2 text-base text-ink transition-colors placeholder:text-zinc hover:border-steel focus:border-ember focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-ember focus-visible:outline-offset-0 disabled:cursor-not-allowed disabled:bg-paper disabled:text-zinc",
          error && "border-ember",
          className,
        )}
        {...rest}
      />
      {hint ? (
        <p id={hintId} className="text-sm text-zinc">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} role="alert" className="text-sm text-ember">
          {error}
        </p>
      ) : null}
    </div>
  );
}
