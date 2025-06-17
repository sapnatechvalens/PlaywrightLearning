const {test, expect} = require('@playwright/test')

test('pagination', ({page})=>{
    page.locator("//th[normalize-space()='Weightage (%)']")
})