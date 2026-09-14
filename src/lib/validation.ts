import { z } from "zod";

export const LEAD_VARIANTS = ["quote", "datasheet", "consultation", "contact"] as const;
export type LeadVariant = (typeof LEAD_VARIANTS)[number];

export const MIN_LEAD_SUBMIT_MS = 3000;

export const leadFormSchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  company: z.string().min(1, "Enter your company name"),
  email: z.string().email("Enter a valid work email"),
  phone: z.string().min(8, "Enter a phone number we can reach on WhatsApp"),
  country: z.string().min(1, "Select your country"),
  city: z.string().optional(),
  productInterest: z.string().optional(),
  application: z.string().optional(),
  quantity: z.string().optional(),
  requiredBy: z.string().optional(),
  message: z.string().optional(),
  variant: z.enum(LEAD_VARIANTS),
  sourcePage: z.string().optional(),
  website: z.string().max(0, "Invalid submission").optional(),
  formStartedAt: z.number(),
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
