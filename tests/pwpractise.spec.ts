import {test, expect} from '@playwright/test'
/*
test('Text Box', async ({page}) =>{

    await page.goto('file:///C:/Users/91988/Desktop/Playwrightdemo/PlaywrightPracticePage.html')
    await page.getByPlaceholder("Username").fill('Sunil');
    await expect(page.getByPlaceholder("Username")).toHaveValue('Sunil');

    await page.getByPlaceholder("Password").fill('Sunil@123');
    
})

test('Check Box', async ({page}) =>{
    await page.goto('file:///C:/Users/91988/Desktop/Playwrightdemo/PlaywrightPracticePage.html')
    await page.locator('#java').check();
    await expect(page.locator('#java')).toBeChecked();
    await page.locator('#playwright').check();
    await page.locator('#playwright').uncheck();

})
   
test('Radio Buttons', async ({page}) =>{
    await page.goto('file:///C:/Users/91988/Desktop/Playwrightdemo/PlaywrightPracticePage.html')
    await page.locator('input[value="male"]').check();
    await expect(page.locator('input[value="male"]')).toBeChecked();
   
})  

test('Drop Down', async ({page}) =>{
    await page.goto('file:///C:/Users/91988/Desktop/Playwrightdemo/PlaywrightPracticePage.html')
    await page.waitForTimeout(3000);
    await page.locator('#country').selectOption('UK');
    await expect(page.locator('#country')).toHaveValue('UK');
   
    await page.locator('#skills').selectOption(['Java','Selenium']);
}) 

test('Buttons', async ({page}) =>{
    await page.goto('file:///C:/Users/91988/Desktop/Playwrightdemo/PlaywrightPracticePage.html')
    await page.getByRole("button",{name: 'Save'}).click();
    await page.getByRole("button",{name: 'Cancel'}).click();
    await page.getByRole("button",{name: 'Double Click Me'}).dblclick();
    await page.getByRole("button",{name: 'Right Click Me'}).click(
        {
              button: 'right'
        }
      
    )
}) 

test('Alerts', async ({page}) =>{
    await page.goto('file:///C:/Users/91988/Desktop/Playwrightdemo/PlaywrightPracticePage.html')
    // Alert
    

    page.once('dialog', async dialog=>{
        expect(dialog.message()).toContain('Simple Alert')
        await dialog.accept()
    })
    await page.getByRole("button",{name:'Alert'}).click();
    // confirm
    
    page.once('dialog', async dialog =>{
        expect(dialog.type()).toBe('confirm')
        await dialog.accept()
    })
    await page.getByRole("button",{name:'Confirm'}).click();
    // prompt
    page.once('dialog', async dialog =>{
        expect(dialog.type()).toBe('prompt')
        await dialog.accept('Sunil')
    })
    await page.getByRole("button",{name:'Prompt'}).click();
}) 

test('Hover', async ({page}) =>{
    await page.goto('file:///C:/Users/91988/Desktop/Playwrightdemo/PlaywrightPracticePage.html')
  
    await page.locator("#hoverBox").hover();
    await expect(page.locator('#hoverText')).toHaveText('Hover Successful');
}) 

test('Drag And Drop', async ({page}) =>{
    await page.goto('file:///C:/Users/91988/Desktop/Playwrightdemo/PlaywrightPracticePage.html')
  
    await page.locator("#dragItem").dragTo(page.locator('#dropZone'))
    await expect(page.locator('#dropZone')).toContainText('Dropped Successfully')
}) 

test('File Upload', async ({page}) =>{
    await page.goto('file:///C:/Users/91988/Desktop/Playwrightdemo/PlaywrightPracticePage.html')
    // const path = 'C:\\Users\\91988\\Desktop\\T Sunil Kumar_Playwright.pdf'
    const path = 'C:/Users/91988/Desktop/T Sunil Kumar_Playwright.pdf'
    await page.locator('#uploadFile').setInputFiles(path);

    // To remove FileSystem
    // await page.locator('#uploadFile').setInputFiles([]]);
    
})

// Web Table

test('File Upload', async ({page}) =>{
    await page.goto('file:///C:/Users/91988/Desktop/Playwrightdemo/PlaywrightPracticePage.html')
  
    //  const rows = page.locator('table tbody tr')
    // const Columns = page.locator('table tbody tr td')
     const rows = await page.locator('table tbody tr').count();
     console.log(rows)
     const columns = await page.locator('table tbody tr').count();
     console.log(columns)

     const data = await page.locator('table tbody tr').nth(2)
                    .locator('td')
                    .nth(2).textContent();
     console.log(data)
     
     })
*/
test('New Tab', async ({page,context}) =>{
    await page.goto('file:///C:/Users/91988/Desktop/Playwrightdemo/PlaywrightPracticePage.html')
    let name : string = "Sunil"
        const [newPage] = await Promise.all([

            context.waitForEvent('page'),
            page.locator('#newTabLink').click()
        ])
  
            await newPage.waitForLoadState();  //page is fully loaded or not
            console.log(await newPage.title())

            await page.bringToFront()
            console.log(await page.title())     
     })
