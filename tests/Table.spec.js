import { test, expect } from '@playwright/test';

test('Table', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")

    const table = await page.locator("#productTable")

    //total number of row and column
    //const columns = await table.locator("thead tr th");
    //console.log("Number of columns:", await columns.count());
    //expect(await columns.count()).toBe(4)

    //const rows = await table.locator("tbody tr");
    //  console.log("Number of rows:", await rows.count());
    // expect(await rows.count()).toBe(5)

    //2) Select checkbox for project 4
    /*
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Product 4'
    })
    matchedRow.locator('input').check();
    
    */

    //3) Select Multiple products by re-usable function

    // const rows = await table.locator("tbody tr");
    // await selectMultipleProducts(rows, page, 'Product 4')
    // await selectMultipleProducts(rows, page, 'Product 2')
    // await selectMultipleProducts(rows, page, 'Product 1')


    // 3) print all product details using loop

    /* 
    const rows = await table.locator("tbody tr");
    for (let i = 0; i < await rows.count(); i++) {
        const row = rows.nth(i);
        const tds = row.locator('td')
        for (let j = 0; j < await tds.count() - 1; j++) {
            console.log(await tds.nth(j).textContent());
        }
    }
    */

    const rows = await table.locator("tbody tr");
    const pages = await page.locator(".pagination li a")
    console.log("Number of Pages", await pages.count());

    for (let p = 0; p < await pages.count(); p++) {
        if (p > 0) {
            await pages.nth(p).click();
        }
        for (let i = 0; i < await rows.count(); i++) {
            const row = rows.nth(i);
            const tds = row.locator('td')
            for (let j = 0; j < await tds.count() - 1; j++) {
                console.log(await tds.nth(j).textContent());
            }
        }
    }
    // await page.waitForTimeout(5000);


})

async function selectMultipleProducts (rows, page, name) {
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await matchedRow.locator('input').check();
}