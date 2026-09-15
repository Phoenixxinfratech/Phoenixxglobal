import { expect, test } from "@playwright/test";
import { dismissConsent } from "./helpers";

test("selection tool prefills the quote form", async ({ page }) => {
  await page.goto("/resources/panel-selection/");
  await dismissConsent(page);
  await page.getByRole("button", { name: "Request quote with this recommendation" }).click();
  const message = page.getByLabel("Project details");
  await expect(message).toHaveValue(/Panel selection tool recommendation/);
  await expect(page.getByLabel("Product interest")).not.toHaveValue("");
});
