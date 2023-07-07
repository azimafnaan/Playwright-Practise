import { test, expect } from '@playwright/test';



/* 
page.getByRole() to locate by explicit and implicit accessibility attributes.

page.getByText() to locate by text content

page.getByLabel() to locate form control by associated label's text.

page.getByPlaceHolder() to locate an input by placeholder.

page.getByAllText() to locate an element, usually image, by its text alternative.

page.getByTitle() to locate an element by its title attribute.

page.getByTestId() to locate an element  based on its data-testing attribute 

*/
test('Built-inLocators', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    const logo = await page.getByAltText('company-branding')
    await expect(logo).toBeVisible();

    await page.getByPlaceholder('Username').fill("Admin")
    await page.getByPlaceholder('Password').fill("admin123")
    await page.getByRole('button', { type: 'submit' }).click();

    const textData = await page.getByText('Paul Collings')
    await expect(textData).toBeVisible();
    //Another Way 
    // await expect(await page.getByText('Paul Collings')).toBeVisible()
})