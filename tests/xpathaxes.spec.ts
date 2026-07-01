import {test, expect} from '@playwright/test'

test('Xpath Axes Locators Practice', async ({page}) =>{

    await page.goto('file:///C:/Users/Admin/Documents/Playwright-learning.html')

    await page.waitForTimeout(1000)

    await page.locator("//td[text()='Sunil']/following-sibling::td/button").click()
    await page.waitForTimeout(2000)
    await page.locator("//td[text()='Hassain']/following-sibling::td/button").click()

    await page.waitForTimeout(10000)

})
