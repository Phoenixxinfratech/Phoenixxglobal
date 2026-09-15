import { z } from "zod";

export const LEAD_VARIANTS = [
  "quote",
  "datasheet",
  "consultation",
  "contact",
  "export",
  "selection-tool",
] as const;
export type LeadVariant = (typeof LEAD_VARIANTS)[number];

export const MIN_LEAD_SUBMIT_MS = 3000;

/**
 * Datasheet requests are deliberately under-gated — company and phone are not
 * required for a PDF. Every other variant keeps the full qualification set.
 */
export const MINIMAL_GATE_VARIANTS: readonly LeadVariant[] = ["datasheet"];

const touchPointSchema = z.object({
  at: z.string(),
  source: z.string().max(120).optional(),
  medium: z.string().max(120).optional(),
  campaign: z.string().max(120).optional(),
  landingPage: z.string().max(300).optional(),
  referrer: z.string().max(300).optional(),
});

export const leadFormSchema = z
  .object({
    name: z.string().min(2, "Enter your full name"),
    company: z.string().optional(),
    email: z.string().email("Enter a valid work email"),
    phone: z.string().optional(),
    country: z.string().min(1, "Select your country"),
    city: z.string().optional(),
    productInterest: z.string().optional(),
    application: z.string().optional(),
    industry: z.string().optional(),
    quantity: z.string().optional(),
    thickness: z.string().optional(),
    temperature: z.string().optional(),
    requiredBy: z.string().optional(),
    message: z.string().max(4000).optional(),
    variant: z.enum(LEAD_VARIANTS),
    sourcePage: z.string().optional(),
    pageTitle: z.string().max(300).optional(),
    referrer: z.string().max(300).optional(),
    landingPage: z.string().max(300).optional(),
    pagesViewed: z.number().int().nonnegative().optional(),
    selectionToolCompleted: z.boolean().optional(),
    marketingConsent: z.boolean().optional(),
    firstTouch: touchPointSchema.optional(),
    lastTouch: touchPointSchema.optional(),
    website: z.string().max(0, "Invalid submission").optional(),
    formStartedAt: z.number(),
  })
  .superRefine((values, ctx) => {
    if (MINIMAL_GATE_VARIANTS.includes(values.variant)) return;

    if (!values.company?.trim()) {
      ctx.addIssue({
        code: "custom",
        path: ["company"],
        message: "Enter your company name",
      });
    }

    if (!values.phone?.trim() || values.phone.trim().length < 8) {
      ctx.addIssue({
        code: "custom",
        path: ["phone"],
        message: "Enter a phone number we can reach on WhatsApp",
      });
    }
  });

export type LeadFormValues = z.infer<typeof leadFormSchema>;

export type LeadPayload = LeadFormValues & {
  submittedAt: string;
};

export function isLeadSubmitTooFast(formStartedAt: number, now = Date.now()): boolean {
  return now - formStartedAt < MIN_LEAD_SUBMIT_MS;
}

export function isHoneypotFilled(website: string | undefined): boolean {
  return Boolean(website && website.trim().length > 0);
}
