import { expect, test } from "@playwright/test";
import {
  dismissConsent,
  fillRequiredLeadFields,
  postLead,
  readDeadLetters,
  readLocalLedger,
} from "./helpers";

const variants = [
  "quote",
  "datasheet",
  "consultation",
  "contact",
  "export",
  "selection-tool",
] as const;

test.describe("lead capture", () => {
  test("each variant is accepted by the API and returns a lead id", async ({ request }) => {
    for (const variant of variants) {
      const email = `e2e.${variant}.${Date.now()}@riftvalleyfoods.co.ke`;
      const response = await postLead(request, {
        variant,
        name: "Daniel Mwangi",
        company: variant === "datasheet" ? undefined : "Rift Valley Foods",
        email,
        phone: variant === "datasheet" ? undefined : "+254700000001",
        country: "Kenya",
        productInterest: "cold-room-panels",
        message: "Need 1,200 sqm of 100 mm PUF panels for a freezer at Athi River.",
        sourcePage: `/${variant}/`,
      });
      const json = (await response.json()) as { ok?: boolean; leadId?: string };
      expect(response.ok(), `${variant} ${response.status()}`).toBeTruthy();
      expect(json.ok).toBe(true);
      expect(json.leadId).toMatch(/^PSB-\d{8}-\d{4}$/);
    }
  });

  test("quote form shows success and a reference even when an adapter fails", async ({
    page,
  }) => {
    await page.goto("/request-a-quote/");
    await dismissConsent(page);
    await fillRequiredLeadFields(page, {
      name: "Amina Otieno",
      email: `e2e.ui.${Date.now()}@nairobi-cold.co.ke`,
    });
    await page.waitForTimeout(3500);
    await page.getByRole("button", { name: "Send quote request" }).click();
    await expect(page.getByRole("status")).toContainText(/we received your quote request/i);
    await expect(page.getByText(/Your reference is/)).toBeVisible();
    await expect(page.locator("text=/PSB-\\d{8}-\\d{4}/").first()).toBeVisible();
    const ref = (await page.getByText(/PSB-\d{8}-\d{4}/).first().textContent())?.trim();
    expect(ref).toMatch(/^PSB-\d{8}-\d{4}$/);

    const ledger = await readLocalLedger();
    expect(ledger.some((row) => ref && row.id === ref.trim())).toBeTruthy();

    const dead = await readDeadLetters();
    expect(dead.some((row) => ref && row.leadId === ref.trim())).toBeTruthy();
  });

  test("datasheet form is under-gated", async ({ page }) => {
    await page.goto("/resources/datasheets/");
    await dismissConsent(page);
    await fillRequiredLeadFields(page, {
      name: "Priya Shah",
      email: `e2e.ds.${Date.now()}@example.com`,
      datasheet: true,
    });
    await page.waitForTimeout(3500);
    await page.getByRole("button", { name: "Send datasheet request" }).click();
    await expect(page.getByRole("status")).toContainText(/datasheet/i);
  });

  test("contact form submits", async ({ page }) => {
    await page.goto("/contact/");
    await dismissConsent(page);
    await fillRequiredLeadFields(page, {
      name: "James Kariuki",
      email: `e2e.contact.${Date.now()}@example.co.ke`,
    });
    await page.waitForTimeout(3500);
    await page.getByRole("button", { name: "Send message" }).click();
    await expect(page.getByRole("status")).toContainText(/your message was sent/i);
  });

  test("consultation variant is available from the quote URL", async ({ page }) => {
    await page.goto("/request-a-quote/?variant=consultation");
    await dismissConsent(page);
    await expect(page.getByRole("heading", { name: "Book a consultation" })).toBeVisible();
    await fillRequiredLeadFields(page, {
      name: "Sara Mensah",
      email: `e2e.consult.${Date.now()}@goldenharvestgh.com`,
      country: "Ghana",
    });
    await page.waitForTimeout(3500);
    await page.getByRole("button", { name: "Request a call" }).click();
    await expect(page.getByRole("status")).toContainText(/consultation/i);
  });

  test("GET /api/lead is rejected", async ({ request }) => {
    const response = await request.get("/api/lead/");
    expect(response.status()).toBe(405);
  });
});
