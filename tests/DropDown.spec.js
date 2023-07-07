


import { test, expect } from '@playwright/test';

test('Handle Drop Down Menu', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    // Multiple ways to select option from drop down menu
    //await page.locator('#country').selectOption({ label: 'India' })  //label/visible text
    //await page.locator('#country').selectOption({ value: 'India' })  //label/visible text
    //await page.locator('#country').selectOption({ index: 1 })  //label/visible text
    // await page.locator('#country').selectOption('India')  //visible text
    // await page.selectOption("#country", { index: 1 }) //label/visible text
    // await page.selectOption("#country", "India") //label/visible text
    // Assertions
    // 1) Check Number of Options in Dropdown-1
    // const options = await page.locator('#country option')
    // await expect(options).toHaveCount(10);

    // 2) Check Number of Options in Dropdown-2
    // const options = await page.$$('#country option')
    // console.log("Number of Options:", options.length);

    // Check Presence of value in the dropdown - 1
    //const content = await page.locator('#country').textContent();
    //await expect(content.includes('India')).toBeTruthy();
    // 4) check presence of value in the dropdown - 2 - using loop
    const options = await page.$$('#country option');
    let status = false;
    for (const option of options) {
        console.log(await option.textContent());
    }
    await page.waitForTimeout(500)
})