"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, Textarea } from "@/components/ui";
import { cn } from "@/lib/cn";
import {
  isLeadSubmitTooFast,
  leadFormSchema,
  MIN_LEAD_SUBMIT_MS,
  type LeadFormValues,
  type LeadVariant,
} from "@/lib/validation";

const PRODUCT_OPTIONS = [
  { slug: "puf-panels", name: "PUF Sandwich Panels" },
  { slug: "pir-panels", name: "PIR Sandwich Panels" },
  { slug: "rockwool-panels", name: "Rockwool Sandwich Panels" },
  { slug: "roofing-panels", name: "Roofing Sandwich Panels" },
  { slug: "wall-panels", name: "Wall Sandwich Panels" },
  { slug: "cold-room-panels", name: "Cold Room Panels" },
  { slug: "cleanroom-panels", name: "Cleanroom Sandwich Panels" },
  { slug: "fire-rated-panels", name: "Fire-Rated Sandwich Panels" },
  { slug: "industrial-doors", name: "Industrial Cold Room Doors" },
  { slug: "peb-prefabricated-buildings", name: "PEB and Prefabricated Buildings" },
] as const;

const COUNTRY_OPTIONS = [
  "Kenya",
  "Tanzania",
  "Uganda",
  "Rwanda",
  "Ghana",
  "Zambia",
  "Mozambique",
  "Namibia",
  "Botswana",
  "Angola",
  "Ethiopia",
  "Nigeria",
  "South Africa",
  "Zimbabwe",
  "Mauritius",
  "Democratic Republic of the Congo",
  "India",
  "Other",
] as const;

const VARIANT_COPY: Record<
  LeadVariant,
  { title: string; submit: string; success: string; messageLabel: string; messageHint?: string }
> = {
  quote: {
    title: "Request a quotation",
    submit: "Send quote request",
    success: "Thank you — we received your quote request and will reply within one business day.",
    messageLabel: "Project details",
    messageHint: "Room size, temperature target, delivery port, or any specs you already have.",
  },
  datasheet: {
    title: "Request a datasheet",
    submit: "Send datasheet request",
    success: "Thank you — we will email the datasheet to the address you provided.",
    messageLabel: "What do you need from the datasheet?",
    messageHint: "Thickness, facing type, or application helps us send the right document.",
  },
  consultation: {
    title: "Book a consultation",
    submit: "Request a call",
    success: "Thank you — our export team will contact you to schedule a consultation.",
    messageLabel: "What would you like to discuss?",
  },
  contact: {
    title: "Contact our export team",
    submit: "Send message",
    success: "Thank you — your message was sent. We will respond within one business day.",
    messageLabel: "Message",
  },
};

type LeadFormProps = {
  variant: LeadVariant;
  defaultProduct?: string;
  className?: string;
};

export function LeadForm({ variant, defaultProduct, className }: LeadFormProps) {
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formStartedAt] = useState(() => Date.now());

  const copy = VARIANT_COPY[variant];

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      variant,
      productInterest: defaultProduct ?? "",
      country: "",
      formStartedAt,
      website: "",
      sourcePage: typeof window !== "undefined" ? window.location.pathname : "",
    },
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      reset((current) => ({
        ...current,
        sourcePage: window.location.pathname,
        formStartedAt,
      }));
    }
  }, [formStartedAt, reset]);

  async function onSubmit(values: LeadFormValues) {
    setSubmitError(null);

    if (isLeadSubmitTooFast(values.formStartedAt)) {
      setSubmitError(`Please wait a moment before submitting — at least ${MIN_LEAD_SUBMIT_MS / 1000} seconds.`);
      return;
    }

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          sourcePage: values.sourcePage || window.location.pathname,
        }),
      });

      const data = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !data.ok) {
        setSubmitError(data.error ?? "Something went wrong. Please try again or contact us on WhatsApp.");
        return;
      }

      setIsSuccess(true);
    } catch {
      setSubmitError("Network error — check your connection and try again.");
    }
  }

  if (isSuccess) {
    return (
      <div
        className={cn(
          "rounded-[2px] border border-line bg-white p-6 md:p-8",
          className,
        )}
        role="status"
      >
        <p className="text-lg font-medium text-ink">{copy.success}</p>
        <p className="mt-2 text-sm text-steel">
          Working hours: Mon–Sat, 9:30 AM – 6:30 PM IST.
        </p>
      </div>
    );
  }

  return (
    <form
      data-lead-form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-5 rounded-[2px] border border-line bg-white p-6 md:p-8", className)}
      noValidate
    >
      <div>
        <h2 className="text-2xl font-semibold text-ink">{copy.title}</h2>
        <p className="mt-1 text-sm text-steel">
          Fields marked with <span className="text-ember">*</span> are required.
        </p>
      </div>

      <input type="hidden" {...register("variant")} />
      <input type="hidden" {...register("formStartedAt", { valueAsNumber: true })} />
      <input type="hidden" {...register("sourcePage")} />

      <div
        aria-hidden="true"
        tabIndex={-1}
        className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor="lead-website">Website</label>
        <input id="lead-website" type="text" autoComplete="off" tabIndex={-1} {...register("website")} />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Input
          label="Full name"
          required
          autoComplete="name"
          error={errors.name?.message}
          {...register("name")}
        />
        <Input
          label="Company"
          required
          autoComplete="organization"
          error={errors.company?.message}
          {...register("company")}
        />
        <Input
          label="Work email"
          required
          type="email"
          autoComplete="email"
          error={errors.email?.message}
          {...register("email")}
        />
        <Input
          label="Phone / WhatsApp"
          required
          type="tel"
          autoComplete="tel"
          hint="Include country code so we can reach you on WhatsApp."
          error={errors.phone?.message}
          {...register("phone")}
        />
        <Select
          label="Country"
          required
          defaultValue=""
          error={errors.country?.message}
          {...register("country")}
        >
          <option value="" disabled>
            Select country
          </option>
          {COUNTRY_OPTIONS.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </Select>
        <Select
          label="Product interest"
          defaultValue={defaultProduct ?? ""}
          error={errors.productInterest?.message}
          {...register("productInterest")}
        >
          <option value="">Select a product (optional)</option>
          {PRODUCT_OPTIONS.map((product) => (
            <option key={product.slug} value={product.slug}>
              {product.name}
            </option>
          ))}
        </Select>
      </div>

      <Textarea
        label={copy.messageLabel}
        rows={4}
        placeholder="Tell us about your project, quantities, or delivery port."
        hint={copy.messageHint}
        error={errors.message?.message}
        {...register("message")}
      />

      <div>
        <button
          type="button"
          className="text-sm font-medium text-ember underline-offset-4 hover:underline"
          onClick={() => setShowProjectDetails((open) => !open)}
          aria-expanded={showProjectDetails}
        >
          {showProjectDetails ? "Hide project details" : "Add project details (optional)"}
        </button>

        {showProjectDetails ? (
          <div className="mt-4 grid gap-5 md:grid-cols-2">
            <Input
              label="City / site location"
              autoComplete="address-level2"
              error={errors.city?.message}
              {...register("city")}
            />
            <Input
              label="Application"
              placeholder="e.g. freezer room, warehouse roof"
              error={errors.application?.message}
              {...register("application")}
            />
            <Input
              label="Estimated quantity"
              placeholder="e.g. 2,000 m² panels"
              error={errors.quantity?.message}
              {...register("quantity")}
            />
            <Input
              label="Required by"
              placeholder="e.g. Q3 2026"
              error={errors.requiredBy?.message}
              {...register("requiredBy")}
            />
          </div>
        ) : null}
      </div>

      {submitError ? (
        <p role="alert" className="text-sm text-ember">
          {submitError}
        </p>
      ) : null}

      <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
        {isSubmitting ? "Sending…" : copy.submit}
      </Button>
    </form>
  );
}
