const { test, expect } = require("@playwright/test");
test("alerts handling", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //Enabling alerts
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("alert");
    expect(dialog.message()).toContain("I am an alert box!");
    await dialog.accept();
  });

  await page.click("//button[@id='alertBtn']");
  await page.waitForTimeout(3000);
});

test("confirmation popup", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //Enabling alerts
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("confirm");
    expect(dialog.message()).toContain("Press a button!");
    // await dialog.accept();
    await dialog.dismiss();
  });

  await page.click("//button[@id='confirmBtn']");
  await page.waitForTimeout(3000);
});

test("Prompt", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //Enabling alerts
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("prompt");
    expect(dialog.message()).toContain("Please enter your name:");
    expect(dialog.defaultValue()).toContain("Harry Potter");
    await dialog.accept("test");
    //await dialog.dismiss();
  });

  await page.click("//button[@id='promptBtn']");
  await page.waitForTimeout(3000);
});

