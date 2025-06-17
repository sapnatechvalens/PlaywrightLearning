const { test, expect } = require("@playwright/test");
import { blocker } from "../utility/blocker";

test.beforeEach(async ({ page }) => {
  await blocker(page);
});

test("assert", async ({ page }) => {
  // To check URL
  // await page.goto("https://evluate.com/");
  // await expect(page).toHaveURL("https://evluate.com/");

  // To assert the title
  // await expect(page).toHaveTitle("Evluate::Excellence in Action");

  // To assert the visible elements
  // const logo = await page.locator(".logoDelay");
  // await expect(logo).toBeVisible();

  // const langButton = await page.locator(
  //   ".btn btn-primary dropdown-toggle commonBtn show"
  // );

  // To assert the element is enable
  // const ppage = await page.getByText("Product");
  // await expect(ppage).toBeEnabled();

  // to check the checkbox enabled or not
  //await page.goto("https://practice.expandtesting.com/checkboxes");
  // const check = page.getByText("Checkbox 2");
  // await expect(check).toBeChecked();

  // const check1 = page.getByText("Checkbox 1").check();
  // await expect(check1).toBeChecked();

  // To check attribute
  // const attr = page.locator("//input[@id='checkbox1']");
  // await expect(attr).toHaveAttribute("type", "checkbox");

  // To validate text this will find out the exact matched text
  // await expect(
  //   await page.locator(
  //     "//h1[contains(text(),'Sample Checkboxes page for practice test automatio')]"
  //   )
  // ).toHaveText("Sample Checkboxes page for practice test automation");

  // // To validate the partial text

  // await expect(
  //   await page.locator(
  //     "//h1[contains(text(),'Sample Checkboxes page for practice test automatio')]"
  //   )
  // ).toContainText("Sample Checkboxes page");

  // To check that field have value

  await page.goto("https://practice.expandtesting.com/#tools");
  const t = await page
    .locator("//a[@href='/inputs'][normalize-space()='Try it out']")
    .click();
  const i = await page.locator("//input[@id='input-number']");
  await i.fill("123");
  await expect(i).toHaveValue("123");

  // One more is their toHaveCount // list of elements has given length
  // This is dummy code
  //  await expect(options).toHaveCount(40)
});
