const { test, expect } = require("@playwright/test");
//
test("BuiltIn functions", async ({ page }) => {
  await page.goto("https://company.evluate.com");
  await page
    .getByPlaceholder("Registered email *")
    .fill("evluate.dev@gmail.com");
  await page.getByPlaceholder("Password *").fill("test@1234");
  // when we have roles type such as buttons links, or can say actionable things there we use role
  await page.getByRole("button", { type: "submit" }).click();
});


//getByAltText()
//getByPlaceholder()
//getByRole()
//getByText()
//getByLabel():-  to loacate by label
//getByTitle():- loacte the elements which are created by title tag
//getByTestId():- to locate by test-id(some attributes are )

