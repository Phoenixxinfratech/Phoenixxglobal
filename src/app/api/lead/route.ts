import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { dispatchLead } from "@/lib/integrations";
import { sendGenerateLead } from "@/lib/analytics/measurementProtocol";
import { ANTI_SPAM } from "@/lib/leads/config";
import { buildLead } from "@/lib/leads/build";
import {
  checkRateLimit,
  idempotencyKey,
  isDuplicateSubmission,
} from "@/lib/leads/spam";
import type { Lead } from "@/lib/leads/types";
import {
  isHoneypotFilled,
  isLeadSubmitTooFast,
  leadFormSchema,
} from "@/lib/validation";

const LEADS_FILE = "leads.json";

/** Generic reply for anything we reject as automated traffic. */
const SPAM_REJECTION = { ok: false, error: "Invalid submission" } as const;

function normalizeLeadInput(input: Record<string, unknown>): Record<string, unknown> {
  const str = (value: unknown) => (typeof value === "string" ? value.trim() : value);

  return {
    ...input,
    name: str(input.name),
    company: str(input.company),
    email:
      typeof input.email === "string" ? input.email.trim().toLowerCase() : input.email,
    phone: str(input.phone),
    country: str(input.country),
    city: str(input.city),
    productInterest: str(input.productInterest),
    application: str(input.application),
    industry: str(input.industry),
    quantity: str(input.quantity),
    thickness: str(input.thickness),
    temperature: str(input.temperature),
    requiredBy: str(input.requiredBy),
    message: str(input.message),
    sourcePage: str(input.sourcePage),
    pageTitle: str(input.pageTitle),
    website: input.website,
  };
}

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return (
    request.headers.get("x-nf-client-connection-ip") ??
    request.headers.get("x-real-ip") ??
    "unknown"
  );
}

/** Same-origin check. Absent headers are allowed so server-to-server tests work. */
function originAllowed(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  const allowed = new Set<string>();
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (configured) allowed.add(configured.replace(/\/$/, ""));

  const host = request.headers.get("host");
  if (host) {
    allowed.add(`https://${host}`);
    allowed.add(`http://${host}`);
  }

  return allowed.has(origin.replace(/\/$/, ""));
}

async function appendLeadToDevFile(lead: Lead): Promise<void> {
  const filePath = path.join(process.cwd(), LEADS_FILE);
  let existing: Lead[] = [];

  try {
    const raw = await fs.readFile(filePath, "utf8");
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) existing = parsed as Lead[];
  } catch {
    existing = [];
  }

  existing.push(lead);
  await fs.writeFile(filePath, JSON.stringify(existing, null, 2), "utf8");
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      { ok: false, error: "Unsupported content type" },
      { status: 415 },
    );
  }

  if (!originAllowed(request)) {
    return NextResponse.json({ ok: false, error: "Origin not allowed" }, { status: 403 });
  }

  const declaredLength = Number(request.headers.get("content-length") ?? "0");
  if (declaredLength > ANTI_SPAM.maxBodyBytes) {
    return NextResponse.json({ ok: false, error: "Request too large" }, { status: 413 });
  }

  const ip = clientIp(request);
  if (process.env.LEAD_LOCAL_LEDGER !== "true") {
    const rate = checkRateLimit(ip);
    if (!rate.allowed) {
      return NextResponse.json(
        { ok: false, error: "Too many submissions. Try again shortly or message us on WhatsApp." },
        { status: 429, headers: { "Retry-After": String(rate.retryAfterSeconds) } },
      );
    }
  }

  let raw: string;
  try {
    raw = await request.text();
  } catch {
    return NextResponse.json({ ok: false, error: "Could not read request" }, { status: 400 });
  }

  if (raw.length > ANTI_SPAM.maxBodyBytes) {
    return NextResponse.json({ ok: false, error: "Request too large" }, { status: 413 });
  }

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ ok: false, error: "Invalid request body" }, { status: 400 });
  }

  const normalized = normalizeLeadInput(body as Record<string, unknown>);

  if (isHoneypotFilled(typeof normalized.website === "string" ? normalized.website : undefined)) {
    return NextResponse.json(SPAM_REJECTION, { status: 400 });
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
    return NextResponse.json(
      { ok: false, error: "Validation failed", fieldErrors },
      { status: 400 },
    );
  }

  const values = parsed.data;

  // Kill double submissions from impatient clicks and retried fetches.
  if (isDuplicateSubmission(idempotencyKey(values.email, values.sourcePage ?? "/"))) {
    return NextResponse.json({ ok: true, duplicate: true });
  }

  const lead = buildLead(values, {
    userAgent: request.headers.get("user-agent") ?? "",
  });

  console.info(
    "[lead:received]",
    JSON.stringify({
      leadId: lead.id,
      variant: lead.variant,
      band: lead.band,
      score: lead.score,
      country: lead.country,
      pagePath: lead.source.pagePath,
      device: lead.source.device,
    }),
  );

  const writeLocalLedger =
    process.env.NODE_ENV === "development" || process.env.LEAD_LOCAL_LEDGER === "true";
  if (writeLocalLedger) {
    try {
      await appendLeadToDevFile(lead);
    } catch (error) {
      console.warn("[lead] Failed to write leads.json:", error);
    }
  }

  // Integrations run after validation but must never turn a good enquiry into
  // a user-facing error. Failures dead-letter and alert internally instead.
  let dispatchOk = true;
  try {
    const summary = await dispatchLead(lead);
    dispatchOk = summary.failed.length === 0;
    console.info("[lead:dispatched]", JSON.stringify(summary));
  } catch (error) {
    dispatchOk = false;
    console.error(
      "[lead:dispatch-error]",
      JSON.stringify({
        leadId: lead.id,
        detail: error instanceof Error ? error.message : String(error),
      }),
    );
  }

  if (lead.band !== "spam") {
    void sendGenerateLead(lead);
  }

  return NextResponse.json({
    ok: true,
    leadId: lead.id,
    band: lead.band,
    // Surfaced for observability only — the buyer sees success either way.
    delivery: dispatchOk ? "complete" : "queued",
  });
}

export async function GET() {
  return NextResponse.json({ ok: false, error: "Method not allowed" }, { status: 405 });
}
