import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { formatIstTimestamp } from "@/lib/format";
import {
  isHoneypotFilled,
  isLeadSubmitTooFast,
  leadFormSchema,
  type LeadPayload,
} from "@/lib/validation";

const LEADS_FILE = "leads.json";

function normalizeLeadInput(input: Record<string, unknown>) {
  return {
    ...input,
    formStartedAt: input.formStartedAt,
    variant: input.variant,
    name: typeof input.name === "string" ? input.name.trim() : input.name,
    company: typeof input.company === "string" ? input.company.trim() : input.company,
    email: typeof input.email === "string" ? input.email.trim().toLowerCase() : input.email,
    phone: typeof input.phone === "string" ? input.phone.trim() : input.phone,
    country: typeof input.country === "string" ? input.country.trim() : input.country,
    city: typeof input.city === "string" ? input.city.trim() : input.city,
    productInterest:
      typeof input.productInterest === "string"
        ? input.productInterest.trim()
        : input.productInterest,
    application:
      typeof input.application === "string" ? input.application.trim() : input.application,
    quantity: typeof input.quantity === "string" ? input.quantity.trim() : input.quantity,
    requiredBy:
      typeof input.requiredBy === "string" ? input.requiredBy.trim() : input.requiredBy,
    message: typeof input.message === "string" ? input.message.trim() : input.message,
    sourcePage:
      typeof input.sourcePage === "string" ? input.sourcePage.trim() : input.sourcePage,
    website: typeof input.website === "string" ? input.website : input.website,
  };
}

async function appendLeadToDevFile(lead: LeadPayload): Promise<void> {
  const filePath = path.join(process.cwd(), LEADS_FILE);
  let existing: LeadPayload[] = [];

  try {
    const raw = await fs.readFile(filePath, "utf8");
    existing = JSON.parse(raw) as LeadPayload[];
    if (!Array.isArray(existing)) existing = [];
  } catch {
    existing = [];
  }

  existing.push(lead);
  await fs.writeFile(filePath, JSON.stringify(existing, null, 2), "utf8");
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, error: "Invalid request body" }, { status: 400 });
  }

  const normalized = normalizeLeadInput(body as Record<string, unknown>);

  if (isHoneypotFilled(typeof normalized.website === "string" ? normalized.website : undefined)) {
    return NextResponse.json({ ok: false, error: "Invalid submission" }, { status: 400 });
  }

  if (
    typeof normalized.formStartedAt !== "number" ||
    isLeadSubmitTooFast(normalized.formStartedAt)
  ) {
    return NextResponse.json(
      { ok: false, error: "Please review the form and try again" },
      { status: 400 },
    );
  }

  const parsed = leadFormSchema.safeParse(normalized);

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return NextResponse.json({ ok: false, error: "Validation failed", fieldErrors }, { status: 400 });
  }

  const lead: LeadPayload = {
    ...parsed.data,
    submittedAt: formatIstTimestamp(),
  };

  console.info("[lead]", JSON.stringify(lead));

  // PHASE 4 INTEGRATION POINT — email, CRM, or webhook dispatch

  if (process.env.NODE_ENV === "development") {
    try {
      await appendLeadToDevFile(lead);
    } catch (error) {
      console.warn("[lead] Failed to write leads.json:", error);
    }
  }

  return NextResponse.json({ ok: true });
}
