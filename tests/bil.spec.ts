import {test, expect} from '@playwright/test'

test('Built-in Locators Practice', async ({page}) =>{

    await page.goto('file:///C:/Users/Admin/Documents/Built-inLocators.html')
    await page.waitForTimeout(1000)

    /*await page.getByRole('button', {name:'Login'}).nth(0).click()
    await page.getByRole('button', {name:'Login'}).first().click()

    await expect(page.getByText('Automation Testing Rocks')).toBeVisible()

    await page.getByLabel('Username').fill('Sunil')
    await page.waitForTimeout(2000)
    await page
        .getByPlaceholder('Enter your email')
        .fill('bix.itacademy@gmail.com')
    await page.waitForTimeout(2000)

    await expect(page.getByAltText('Company Logo')).toBeVisible()

    await page.getByRole('button', {name:'X'}).click()
    await page.getByTitle('Close Window').click()
    await page.waitForTimeout(2000)

    await page.getByTestId('login-btn').click()
    await page.getByTestId('search-box').fill('Playwright')
    await page.waitForTimeout(2000)
    await page.getByPlaceholder('Search Products').fill('JavaScript')
    await page.waitForTimeout(2000)
    await page.getByTestId('checkout-btn').click()
    */
   
    await page.getByRole("button", {name: 'Save'}).click();
    await page.getByTitle('Save Information').click();
    await page.getByTestId('save-btn').click();
    await page.locator("[title='Save Information']").click();
    await page.locator("//button[@title='Save Information']").click();
    // await page.locator("//button[text()='Save']").click();
    // await page.locator("//button[text()='Cancel']").click();
    await page.locator("//button[contains(normalize-space(),'Save')]").click()
    await page.locator("//button[contains(normalize-space(),'Cancel')]").click()
})