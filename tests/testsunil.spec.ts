// test() expect()
import {test, expect} from "@playwright/test"
// fixtures - page, browser
test ("verify page title", async ({page})=>{

    await page.goto("https://www.amazon.in/");
    await expect(page).toHaveTitle(/Amazon.in/)

})

// import {test, expect} from "@playwright/test"
// // fixtures - page, browser
// test ("verify page title", async ({page/browser/context/respond})=>{
//     await page.
// })