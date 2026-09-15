import { NextResponse } from "next/server";
import { raiseInternalAlert } from "@/lib/integrations/alert";
import {
  buildDailyDigest,
  buildWeeklyDigest,
  markOwnerTouched,
  processDueFollowUps,
  processSlaBreaches,
  stopSequence,
} from "@/lib/leads/sequence";

export const dynamic = "force-dynamic";

function authorised(request: Request): boolean {
  const secret = process.env.CRON_SECRET?.trim();
  if (!secret) return false;
  const header = request.headers.get("authorization") ?? "";
  const bearer = header.startsWith("Bearer ") ? header.slice(7) : "";
  const query = new URL(request.url).searchParams.get("secret") ?? "";
  return bearer === secret || query === secret;
}

type CronJob = "follow-up" | "sla" | "digest-daily" | "digest-weekly" | "stop" | "touched";

function jobFrom(request: Request, body: Record<string, unknown> | null): CronJob | null {
  const fromQuery = new URL(request.url).searchParams.get("job");
  const fromBody = typeof body?.job === "string" ? body.job : null;
  const raw = fromQuery ?? fromBody;
  if (
    raw === "follow-up" ||
    raw === "sla" ||
    raw === "digest-daily" ||
    raw === "digest-weekly" ||
    raw === "stop" ||
    raw === "touched"
  ) {
    return raw;
  }
  return null;
}

async function readBody(request: Request): Promise<Record<string, unknown> | null> {
  if (request.method === "GET") return null;
  try {
    const json: unknown = await request.json();
    return json && typeof json === "object" && !Array.isArray(json)
      ? (json as Record<string, unknown>)
      : null;
  } catch {
    return null;
  }
}

async function run(job: CronJob, body: Record<string, unknown> | null) {
  switch (job) {
    case "follow-up":
      return processDueFollowUps();
    case "sla":
      return processSlaBreaches();
    case "digest-daily": {
      const digest = await buildDailyDigest();
      const alert = await raiseInternalAlert(digest.subject, digest.text);
      return { digest: digest.subject, alert };
    }
    case "digest-weekly": {
      const digest = await buildWeeklyDigest();
      const alert = await raiseInternalAlert(digest.subject, digest.text);
      return { digest: digest.subject, alert };
    }
    case "stop": {
      const leadId = typeof body?.leadId === "string" ? body.leadId : "";
      if (!leadId) return { ok: false, error: "leadId required" };
      const stopped = await stopSequence(leadId, typeof body?.reason === "string" ? body.reason : "manual");
      return { ok: stopped, leadId };
    }
    case "touched": {
      const leadId = typeof body?.leadId === "string" ? body.leadId : "";
      if (!leadId) return { ok: false, error: "leadId required" };
      const touched = await markOwnerTouched(leadId);
      return { ok: touched, leadId };
    }
  }
}

async function handle(request: Request) {
  if (!authorised(request)) {
    return NextResponse.json({ ok: false, error: "Unauthorised" }, { status: 401 });
  }

  const body = await readBody(request);
  const job = jobFrom(request, body);
  if (!job) {
    return NextResponse.json(
      { ok: false, error: "Unknown job. Use follow-up, sla, digest-daily, digest-weekly, stop or touched." },
      { status: 400 },
    );
  }

  try {
    const result = await run(job, body);
    console.info("[cron]", JSON.stringify({ job, result }));
    return NextResponse.json({ ok: true, job, result });
  } catch (error) {
    console.error(
      "[cron:error]",
      JSON.stringify({ job, detail: error instanceof Error ? error.message : String(error) }),
    );
    return NextResponse.json({ ok: false, error: "Job failed" }, { status: 500 });
  }
}

export async function GET(request: Request) {
  return handle(request);
}

export async function POST(request: Request) {
  return handle(request);
}
