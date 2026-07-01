import {test,expect} from '@playwright/test'

test('Login Page',async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await expect(page).toHaveURL(/inventory/)

    const product = page.locator('.inventory_item')
                    .filter(
                        {hasText:'Sauce Labs Backpack'}
                    )
    
    await product.locator('button').click();

    // await expect(page.locator('.shopping_cart_badge')).toHaveCount(1);
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    const product2 = page.locator('.inventory_item')
                    .filter(
                        {hasText:'Sauce Labs Bike Light'}
                    )
    
    await product2.locator('button').click();

    // await expect(page.locator('.shopping_cart_badge')).toHaveText(/2/); //RE
    await expect(page.locator('.shopping_cart_badge')).toHaveText(/^2$/);

    await page.locator('.shopping_cart_link').click();
    
    await page.getByRole('button',{name:'Checkout'}).click();

    await page.getByPlaceholder('First Name').fill('Sunil');
    await page.getByPlaceholder('Last Name').fill('Kumar');
    await page.getByPlaceholder('Zip/Postal Code').fill('600025');
    await page.locator('#continue').click();
    await page.getByRole('button',{name:'Finish'}).click();

    await expect(page.getByRole('heading',{name:'Thank you for your order!'}))
                .toHaveText('Thank you for your order!',
                {timeout:5000}
                );
    await page.getByRole('button',{name:'Open Menu'}).click();
    await page.locator('#logout_sidebar_link').click();

    // await expect(page).toHaveURL('https://www.saucedemo.com/')    
    await expect(page).toHaveURL(/saucedemo/)   //we are avoiding env issues here
    
})

