import { test, expect } from '@playwright/test';

test('Handle Auto Suggest Dropdown', async ({ page }) => {
    await page.goto("https://www.redbus.in/")

    await page.waitForTimeout(5000)
})