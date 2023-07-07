import { test, expect } from '@playwright/test';

test("iFrame", async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/")
    //Total frames
    const allFrames = await page.frames()
    console.log("Total Number of Frames: " + allFrames.length)

    // approach 1: using name or URL
    // const var = await page.frame('name'); // if name is present
    // const frame1 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' })
    // await frame1.fill("[name='mytext1']", 'Hello')
    // await page.waitForTimeout(5000)

    // approach 2 : using frame locator
    const inputBox = await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']")
    await inputBox.fill("Hello world!")
    await page.waitForTimeout(5000)
})
