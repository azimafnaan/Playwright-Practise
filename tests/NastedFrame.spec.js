import { test, expect } from '@playwright/test';

test("Handle Inner Frame", async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/")
})