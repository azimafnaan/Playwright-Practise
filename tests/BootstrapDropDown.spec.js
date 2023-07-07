



import { test, expect } from '@playwright/test';

test("Handle Drop Down in Bootstrap", async ({ page }) => {
    await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2")
    await page.locator(".multiselect").click();
    //1
    //const options = await page.locator("ul>li label input")
    //await expect(options).toHaveCount(11)
    //2
    // const options = await page.$$("ul>li label input")
    //console.log(options.length)
    //3 Select option on drop down
    const options = await page.$$("ul>li label")
    for (let option of options) {
        const value = await option.textContent();
        // Get option
        //console.log("Value is: ", value)
        if (value.includes('MySQL') || value.includes('Oracle')) {

            await option.click();

        }
    }
    await page.waitForTimeout(5000)

})