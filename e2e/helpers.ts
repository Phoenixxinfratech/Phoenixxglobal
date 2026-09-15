import { expect, type APIRequestContext, type Page } from "@playwright/test";
import { readFile } from "node:fs/promises";
import path from "node:path";

export async function dismissConsent(page: Page) {
  const reject = page.getByRole("button", { name: "Reject analytics" });
  if (await reject.isVisible().catch(() => false)) {
    await reject.click();
  }
}

export async function fillRequiredLeadFields(
  page: Page,
  input: {
    name: string;
    email: string;
    country?: string;
    company?: string;
    phone?: string;
    datasheet?: boolean;
  },
) {
  await page.getByLabel("Full name").fill(input.name);
  await page.getByLabel("Work email").fill(input.email);
  await page.getByLabel("Country").selectOption(input.country ?? "Kenya");
  if (!input.datasheet) {
    await page.getByLabel("Company").fill(input.company ?? "Rift Valley Foods");
    await page.getByLabel("Phone / WhatsApp").fill(input.phone ?? "+254700000001");
  }
}

export async function postLead(
  request: APIRequestContext,
  body: Record<string, unknown>,
) {
  return request.post("/api/lead/", {
    data: {
      formStartedAt: Date.now() - 4000,
      sourcePage: "/request-a-quote/",
      website: "",
      ...body,
    },
  });
}

export async function readLocalLedger(): Promise<Array<{ id: string; variant: string }>> {
  try {
    const raw = await readFile(path.join(process.cwd(), "leads.json"), "utf8");
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Array<{ id: string; variant: string }>) : [];
  } catch {
    return [];
  }
}

export async function readDeadLetters(): Promise<Array<{ leadId: string }>> {
  try {
    const raw = await readFile(path.join(process.cwd(), "leads-failed.json"), "utf8");
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Array<{ leadId: string }>) : [];
  } catch {
    return [];
  }
}

export function expectNoSentinels(html: string) {
  expect(html).not.toContain("[CONFIRM]");
  expect(html).not.toContain("VERIFY_REQUIRED");
}
