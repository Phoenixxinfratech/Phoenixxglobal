import { spawn, type ChildProcess } from "node:child_process";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");

export const DEFAULT_AUDIT_PORT = 3010;

export function auditBaseUrl(): string {
  return (process.env.AUDIT_BASE_URL ?? `http://127.0.0.1:${DEFAULT_AUDIT_PORT}`).replace(
    /\/$/,
    "",
  );
}

export async function isServerUp(base: string): Promise<boolean> {
  try {
    const response = await fetch(`${base}/`, { redirect: "manual", signal: AbortSignal.timeout(2000) });
    return response.status < 500;
  } catch {
    return false;
  }
}

export async function ensureAuditServer(): Promise<{ base: string; stop: () => void }> {
  const base = auditBaseUrl();
  if (await isServerUp(base)) {
    return { base, stop: () => undefined };
  }

  const port = new URL(base).port || String(DEFAULT_AUDIT_PORT);
  const child: ChildProcess = spawn("npx", ["next", "start", "-p", port, "-H", "127.0.0.1"], {
    cwd: ROOT,
    stdio: "pipe",
    env: { ...process.env, PORT: port },
  });

  const started = await waitForServer(base, 60_000);
  if (!started) {
    child.kill("SIGTERM");
    throw new Error(
      `Could not start next start on ${base}. Run npm run build first, or set AUDIT_BASE_URL to a running server.`,
    );
  }

  return {
    base,
    stop: () => {
      child.kill("SIGTERM");
    },
  };
}

async function waitForServer(base: string, timeoutMs: number): Promise<boolean> {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (await isServerUp(base)) return true;
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  return false;
}
