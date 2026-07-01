import {Page,expect} from '@playwright/test'

export class CartPage{

    private page : Page

    constructor(page : Page){
        this.page = page
    }

    async verifyProduct(productName: string){
        await expect(this.page.locator('.inventory_item_name')).toHaveText(productName)
    }

    async clickCheckout(){
        await this.page.locator('#checkout').click()
    }
}