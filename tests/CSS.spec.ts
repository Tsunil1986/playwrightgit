import {test, expect} from "@playwright/test"
// fixtures - page, browser
test ("Locators", async ({page})=>{

    await page.goto("https://bixitacademy.com/SeleniumPracticePage.html")

    // await page.locator("#password").click();
    
    const frame = page.frameLocator("iframe");
    const logo = frame.locator('[alt="Bix"]').first();
    console.log(await logo.isVisible());
    await frame.locator("[alt='Bix']").nth(0).click();
    // await frame.locator(".callme").click();
    // await page.locator(".loginBtn").click();
    // await page.locator("button").click();
    // await page.locator("[id='loginBtn']").click()

})