const { test, expect } = require('@playwright/test');

test('HomePage', async ({ page }) => {

    await page.goto("https://www.demoblaze.com/")

    const pageTitle = await page.title();
    console.log("The Page Title:", pageTitle);
    await expect(page).toHaveTitle('STORE')

    const pageUrl = page.url();
    console.log("The Page URL:", pageUrl);
    await expect(page).toHaveURL("https://www.demoblaze.com/");

    await page.close();
})

