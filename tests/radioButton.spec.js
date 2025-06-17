//a[@href='/radio-buttons'][normalize-space()='Try it out']

const { test, expect } = require("@playwright/test");
import { blocker } from "../utility/blocker";

test.beforeEach(async ({ page }) => {
  await blocker(page);
});

test("radio button test", async ({ page }) => {
  //for radio button
  //   await page.locator(
  //     "//a[@href='/radio-buttons'][normalize-space()='Try it out']"
  //   );
  //   const radio = await page.getByText("Blue");
  //   await expect(radio).toBeChecked();
  //   await expect(radio).isChecked().toBeTruthy();
// this one is used to check th
  // for checkbox
  await page.locator(
    "//a[@href='/checkboxes'][normalize-space()='Try it out']"
  );
  const radio = await page.getByText("Checkbox 2");
  await expect(radio).toBeChecked();
  await expect(radio).isChecked().toBeTruthy();
});
