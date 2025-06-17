const { test, expect } = require("@playwright/test");
import { blocker } from "../utility/blocker";
test.beforeEach(async ({ page }) => {
  await blocker(page);
});

test("Input box", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/#tools");
  const t = await page
    .locator("//a[@href='/inputs'][normalize-space()='Try it out']")
    .click();
  const i = await page.locator("//input[@id='input-number']");
  await expect(i).toBeVisible();
  await expect(i).toBeEmpty();
  await expect(i).toBeEditable();
  await expect(i).toBeEnabled();
  await i.fill("123");
  await expect(i).toHaveValue("123");
  await page.waitForTimeout(5000);
});
