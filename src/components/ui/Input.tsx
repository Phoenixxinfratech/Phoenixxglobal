"use client";

import { useId, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "id"> & {
  id?: string;
  label?: string;
  error?: string;
  hint?: string;
};

export function Input({
  id: idProp,
  label,
  error,
  hint,
  required,
  className,
  ...rest
}: InputProps) {
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
      <input
        id={id}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={cn(
          "w-full rounded-[2px] border border-line bg-white px-3 py-2 text-base text-ink transition-colors placeholder:text-zinc hover:border-steel focus:border-ember focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-ember focus-visible:outline-offset-0 disabled:cursor-not-allowed disabled:bg-paper disabled:text-zinc",
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
