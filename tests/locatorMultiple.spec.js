const { test, expect } = require("@playwright/test");
// locate multiple elements
test("locate multiple elements", async ({ page }) => {
  await page.goto("https://demoblaze.com/");
  const links = await page.$$("a");

  for (const link of links) {
    const linkText = await link.textContent();
    console.log(linkText);
  }
});

test("Locate the names of product", async ({ page }) => {
  await page.goto("https://demoblaze.com/");
  //const links = await page.$$('[//a[@class=hrefch"]]');
  const name = await page.$$("//div[@id='tbodyid']//div//div//h4/a");
  for (const link of name) {
    const productNames = await link.textContent();
    console.log(productNames);
  }
});

test("locate product price", async ({ page }) => {
    //method is used to wait for the elements
    //page.waitForSelector('//div[@id='tbodyid']//div//div//h5')
  await page.goto("https://demoblaze.com/");
  const product = await page.$$("//div[@id='tbodyid']//div//div//h5");
  for (const priceName of product) {
    const price = await product.textContent();
    console.log(price);
  }
});
