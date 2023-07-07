import { test, expect } from "@playwright/test";


test("Locators", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/")

    // click on login button -property
    await page.locator('id=login2').click()
    //another way
    //await page.click('id=login2')
    //================================================================

    // Provide Username  --CSS
    await page.locator('#loginusername').fill('pavalon')
    // Another way
    // await page.fill('#loginusername', 'pavalon')
    // await page.type('#loginusername', 'pavalon')

    //================================================================
    // provide Password --CSS
    await page.locator("input[id='loginpassword']").fill('test@123')

    //================================================================
    // Click on Login Button --XPath
    await page.click("//button[@onclick='logIn()']")

    //================================================================
    // Verify Logout Link Present --XPath
    await page.locator("(//a[normalize-space()='Log out'])").click();


    await page.close();

})