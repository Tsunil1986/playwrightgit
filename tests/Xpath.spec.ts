import {test, expect} from "@playwright/test"
// fixtures - page, browser
test ("Locators", async ({page})=>{

    await page.goto("https://bixitacademy.com/SeleniumPracticePage.html")

    await page.locator("//password").click();
    await page.locator("//input[@id='password'].loginBtn").click();
    
})