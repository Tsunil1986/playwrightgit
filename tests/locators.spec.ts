// When command gives npx playwright test

// Test - here test is execution command not the folder name 
// Tests - tests folder containing Automation scripts

// Step 1: Playwright starts execution engine
// Step 2: reads configuration File
// Step 3: searches test directory
// Step 4: finds .spec.ts 

// ********Locators********

// getByText - Non interactyive Elements
// getByAltText - where text not directly visible Ex: Text inside image
// getByRole - Buttons, links
// getByPlaceholder- edit boxes
// getByLabel - 
// getByTitle - 
// getByTestId -


import {test, expect} from "@playwright/test"
// fixtures - page, browser
test ("Locators", async ({page})=>{

    await page.goto("https://bixitacademy.com/SeleniumPracticePage.html")
    // await expect(page.getByAltText("Selenium Online Training")).toBeVisible()
    // await expect(page.getByText("Book Store Application")).toBeVisible()
    // await expect(page.getByText(/book Store Application/i)).toBeVisible()
    // await expect(page.getByText(/Book store Application/i)).toBeVisible()
    // await expect(page.getByText(/book store/i)).toBeVisible()

    // getByRole
    // Browsers creates 2 trees 
    // DOM tree (used by developers) & 
    // Accessability tree (used by screen readers)

    // await page.getByRole("button", {name: 'Login'}).click()
    // await page.getByRole("link", {name: 'Go to Google'}).click()
    // await page.getByRole("button", {name:'Load Dynamic Content'}).click()

    // await expect(page.getByRole("heading",{name:'Dynamic Content Loaded!'})).toBeVisible() -- will get fail
    // await expect(page.locator("#dynamic")).toHaveText('Dynamic Content Loaded!') //CSS locator when we use #

    //  await page.getByRole("button", {name:'Load AJAX Data'}).click()
    //  await expect(page.locator("#ajax")).toHaveText('AJAX Content Loaded!')

    //  await page.locator("#country").selectOption('uk')
    //  await page.waitForTimeout(7000)
    
//   getByPlaceholder
    // await page.getByPlaceholder('username').fill('Sunil');
    // await page.getByPlaceholder('password').fill('Sunil@123');
    await page.getByRole("button", {name: 'Save'}).click();
    await page.getByTitle('Save Information').click();
    await page.getByTestId('save-btn').click();
    await page.locator("[title='Save Information']").click();
    await page.locator("//button[@title='Save Information']").click();
    await page.locator("//button[text()='Save']").click();
})


//td[text()='Developer']/preceding-sibling::td[text()='Sunil']
//td[text()='Sunil']/following-sibling::td/button