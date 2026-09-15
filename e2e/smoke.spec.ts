import { expect, test } from "@playwright/test";
import { dismissConsent, expectNoSentinels } from "./helpers";

test.describe("site smoke", () => {
  test("robots and sitemap index are reachable", async ({ request }) => {
    const robots = await request.get("/robots.txt");
    expect(robots.ok()).toBeTruthy();
    const robotsBody = await robots.text();
    expect(robotsBody).toContain("Sitemap:");
    expect(robotsBody).toContain("GPTBot");

    const sitemap = await request.get("/sitemap-index.xml");
    expect(sitemap.ok()).toBeTruthy();
    const xml = await sitemap.text();
    expect(xml).toContain("/sitemap.xml");
    expect(xml).toContain("/sitemap-countries.xml");
  });

  test("404 page is usable", async ({ page }) => {
    const response = await page.goto("/this-path-does-not-exist/");
    expect(response?.status()).toBe(404);
    await expect(page.getByRole("heading", { name: "Page not found" })).toBeVisible();
    await expect(page.getByRole("link", { name: /Request a quotation/i }).first()).toBeVisible();
  });

  test("no sentinel strings render on live templates", async ({ page }) => {
    const paths = [
      "/",
      "/products/puf-panels/",
      "/export/kenya/",
      "/resources/panel-selection/",
      "/contact/",
      "/privacy-policy/",
    ];
    for (const path of paths) {
      await page.goto(path);
      await dismissConsent(page);
      expectNoSentinels(await page.content());
    }
  });

  test("footer is identical on home and a product page", async ({ page }) => {
    await page.goto("/");
    await dismissConsent(page);
    const homeFooter = (await page.locator("footer").innerText()).replace(/\s+/g, " ").trim();
    await page.goto("/products/puf-panels/");
    await dismissConsent(page);
    const productFooter = (await page.locator("footer").innerText()).replace(/\s+/g, " ").trim();
    expect(productFooter).toBe(homeFooter);
  });

  test("Call and WhatsApp are visible; email is not published", async ({ page }) => {
    await page.goto("/");
    await dismissConsent(page);
    await expect(page.getByRole("link", { name: /^WhatsApp$/i }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: /^Call$/i }).first()).toBeVisible();
    expect(await page.content()).not.toContain("info@phoenixxsmartbuild.com");
    await expect(page.getByRole("link", { name: /Get a panel specification and quote/i }).first()).toBeVisible();
  });
});
