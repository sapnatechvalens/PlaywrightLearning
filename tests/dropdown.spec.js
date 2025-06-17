const { test, expect } = require("@playwright/test");
import { blocker } from "../utility/blocker";
test.beforeEach(async ({ page }) => {
  await blocker(page);
});
test("Handling dropdowns", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/#tools");
//---------Multiple ways to select dropdown if created using select tag

// await page.locator("//select[@id='country']").selectOption({label: 'India'})// By visible text
// await page.locator("//select[@id='country']").selectOption('India')// visible text
// await page.locator("//select[@id='country']").selectOption({value: 'India'})// By using value
// await page.locator("//select[@id='country']").selectOption({index: 1})// By visible text
// await page.selectOption("//select[@id='country']", 'India')// By visible text



  //------------approach-2-----------check the presence of options in the dropdown------approach-1

  // check the number of options in dropdown
  // await page
  //   .locator("//a[@href='/dropdown'][normalize-space()='Try it out']")
  //   .click();
  // const country = await page.locator("//select[@id='country']//child::option");// select all the available cild
  // await expect(country).toHaveCount(252);

  //------------approach-2-----------check the presence of options in the dropdown------approach-2

  // await page
  //   .locator("//a[@href='/dropdown'][normalize-space()='Try it out']")
  //   .click();
  // const country = await page.$$("//select[@id='country']//child::option"); // select all the available cild

  // console.log(country.length);
  // await expect(country.length).toBe(252);

  //------------approach-2-----------check the presence of values in the dropdown------approach-1
  // await page
  //   .locator("//a[@href='/dropdown'][normalize-space()='Try it out']")
  //   .click();
  // const country = await page.locator("//select[@id='country']").textContent(); // select all the available cild
  // await expect(country.includes("India")).toBeTruthy(); // received true

  //-----negative-------
  // await page
  //   .locator("//a[@href='/dropdown'][normalize-space()='Try it out']")
  //   .click();
  // const country1 = await page.locator("//select[@id='country']").textContent(); // select all the available cild
  // await expect(country1.includes("india")).toBeTruthy(); // received false

  //------------approach-3-----------check the presence of values in the dropdown------using loop
  // await page
  //   .locator("//a[@href='/dropdown'][normalize-space()='Try it out']")
  //   .click();
  // const country = await page.$$("//select[@id='country']"); // select all the available cild
  // for (option of country) {
  //   console.log(await option.textContent());
  // }

  let status = false;
  await page
    .locator("//a[@href='/dropdown'][normalize-space()='Try it out']")
    .click();
  const country = await page.$$("//select[@id='country']"); // select all the available cild
  //await expect(country.includes("India")).toBeTruthy(); // received true
  for (option of country) {
    let value = await option.textContent();
    if (value.includes("India")) {
      status = true;
      break;
    }
  }
  expect(status).toBeTruthy();
});
