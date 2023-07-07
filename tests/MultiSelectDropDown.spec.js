import { test, expect } from '@playwright/test';

test('Handle Drop Down Menu', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    // Select Multi option from multi select drop down 
    // await page.selectOption('#colors', ['Blue', 'Green', 'Yellow']);

    // Assertions
    // 1) Check Number of Option in Drop Down
    //const options = await page.locator("#colors option");
    //await expect(options).toHaveCount(5);

    // 2) Check Number of Option
    const options = await page.$$('#colors option')
    console.log(options.length);

    await page.waitForTimeout(500)
})