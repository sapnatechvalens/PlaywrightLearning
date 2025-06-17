const { test, expect } = require("@playwright/test");
test("first test", async ({ page }) => {
  await page.goto("https://evluate.com");

  const pageTitle = page.title;
  console.log(pageTitle);

  //expect(page).toHaveTitle("Evluate::Excellence in Action");
  //expect(page).toHaveTitle("");
  page.close();
});
