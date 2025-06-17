const { test, expect } = require("@playwright/test");
test("Multiselect", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  // Select multiple options from multiselect dropdown
  await page.locator("#colors", ["Blue", "Red", "Green"]);

  //to check the number of options
  const options = await page.locator("#colors option"); // here multiple options so the ption tag is specified so this colors locator get all the options from the dropdown
  await expect(options).toHaveCount(7);

  //to check the no. of options using JS array
  const options1 = await page.$$("#colors option");
  await expect(options1.length).toBe(7);

  //to validate by text
  const options2 = await page.locator("#colors").textContent();
  await expect(options2.includes("Blue")).toBeTruthy();
});
