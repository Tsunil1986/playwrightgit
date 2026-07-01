import {test, expect} from '@playwright/test'

import { LoginPage } from '../pages/LoginPage'
import { InventoryPage } from '../pages/InventoryPage'
import { CartPage } from '../pages/CartPage'
import { CheckoutPage } from '../pages/CheckoutPage'
import { ConfirmationPage } from '../pages/ConfirmationPage'
import { LogoutPage } from '../pages/LogoutPage'

import testData from '../test-data/userData.json';

test('End to End Checkout Flow - POM' , async ({page}) => {
        const loginPage = new LoginPage(page)
        const inventoryPage = new InventoryPage(page)
        const cartPage = new CartPage(page)
        const checkoutPage = new CheckoutPage(page)
        const confirmationPage = new ConfirmationPage(page)
        const logoutPage = new LogoutPage(page)

        await loginPage.goto(testData.url.prod)
        await loginPage.login(testData.user.username,testData.user.password)
        await expect(page).toHaveURL(/inventory/);

        await inventoryPage.addProduct()
        await inventoryPage.openCart()
        await expect(page).toHaveURL(/cart/);

        await cartPage.verifyProduct(testData.product.name)
        await cartPage.clickCheckout()

        await checkoutPage.fillForm(testData.customer.firstName,testData.customer.lastName,testData.customer.postalCode)
        await checkoutPage.continue()
        await checkoutPage.finish()

        await confirmationPage.verifyConfirmationMessage()

        await logoutPage.logout()       
        await expect(page).toHaveURL(/saucedemo/); 

})