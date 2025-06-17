const { test, expect } = require("@playwright/test");
import { blocker } from "../utility/blocker";

test.beforeEach(async ({ page }) => {
  await blocker(page);
});

test("assert", async ({ page }) => {
  //To check URL
  await page.goto("https://evluate.com/");
  await expect.soft(page).toHaveTitle("Evluat::Excellence in Action");
  await expect(page).toHaveURL("https://evluate.com/");

  //To assert the title
});
