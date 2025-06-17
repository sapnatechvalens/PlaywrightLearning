const { test, expect } = require("@playwright/test");
test("auto suggestion", async ({ page }) => {
  //   await page.goto("https://www.google.com/");
  //   await page.locator("//textarea[@id='APjFqb']").fill("testing");

  await page.goto("https://www.redbus.in/");
  await page.locator("//input[@id='src']").fill("Delhi");
  await page.waitForSelector("//li[contains(@class,'sc-iwsKbI jTMXri')]");
  // await page.waitForSelector(".erkvQe .sbl1");

  //   const options = await page.$$(
  //     "//div[@class='erkvQe']//ul[@role='listbox']//child::li"
  //   );

  const options = await page.$$("//li[contains(@class,'sc-iwsKbI jTMXri')]");
  console.log(options);
  for (let o of options) {
    const value = await o.textContent();
    //console.log(value);
  }
});
