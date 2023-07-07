import { test, expect } from "@playwright/test";



test('LocateMultipleElement', async ({ page }) => {

    await page.goto("https://www.demoblaze.com/index.html")
    /* const links = await page.$$('a') // This wll return all the links which are present in the page; 
 
     for (const link of links) {
         const linkText = await link.textContent(); //What is the testContent?=> the text content method will return the text of the element
         console.log(linkText);
     }
 */

    // Locate all the product displayed on home page
    await page.waitForSelector("//div[@id='tbodyid']//h4/a");
    const products = await page.$$("//div[@id='tbodyid']//h4/a")
    for (const product of products) {
        const productName = await product.textContent();
        console.log(productName);
    }

})