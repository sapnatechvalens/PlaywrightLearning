const { test, expect } = require("@playwright/test");

test("login", async ({ page }) => {
  await page.goto("https://company.evluate.com");

  await page
    .locator('[placeholder="Registered email *"]')
    .fill("evluate.dev@gmail.com");
  await page.locator(".textInput.passwordInput.form-control").fill("test@1234");
  await page.locator(".submitBtn.btn.btn-primary").click();

  const create = await page.locator("//button[text()='Create Assessment']");
  // await expect(create).toBeVisible();
});

test("login with invalid credentials", async ({ page }) => {
  await page.goto("https://company.evluate.com");

  // await page
  //   .locator('[placeholder="Registered email *"]')
  //   .fill("evluate.dev@gmail.com");
  // await page.locator(".textInput.passwordInput.form-control").fill("test@1234");
  await page.locator(".submitBtn.btn.btn-primary").click();
  //page.waitForSelector(".errorMessage");
  const error = await page.locator(
    "//div[normalize-space()='Email is required']"
  );
  await expect(error).toBeVisible();

  const error1 = await page.locator(
    "//div[normalize-space()='Password is required']"
  );
  await expect(error1).toBeVisible();

  // const create = await page.locator("//button[text()='Create Assessment']");
  // await expect(create).toBeVisible();
});
