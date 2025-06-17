const { expect, test } = require("@playwright/test");
const { url } = require("inspector");
test("iframe functionality", async ({ page }) => {
  //   await page.goto("https://practice.expandtesting.com/#tools");
  //   await page
  //     .locator("//a[@href='/iframe'][normalize-space()='Try it out']")
  //     .click();

  await page.goto("https://ui.vision/demo/webtest/frames/");
  const alFrames = await page.frames();
  console.log("No. of iframes", alFrames.length);

  //approach-1
  const frame1 = await page.frames({
    url: "https://ui.vision/demo/webtest/frames/frame_1.html",
  });
  await frame1.fill('input[name="mytext1"]', "Hello");
  await page.waitForTimeout(3000);

  // approach-2

  const frame11 = await page
    .frameLocator("frame[src='frame_1.html']")
    .locator("input[name='mytext1']");
  await frame11.fill("hello");
 
  // approach-3

});
