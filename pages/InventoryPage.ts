import {Page, expect} from '@playwright/test'

export class InventoryPage{
    private page : Page;
    cartBadge;
    cartIcon;

    constructor(page:Page){
        this.page = page
        this.cartBadge = page.locator('.shopping_cart_badge')
        this.cartIcon = page.locator('.shopping_cart_link')
    }

    async addProduct(){
         const product = this.page.locator('.inventory_item')
                         .filter({ hasText: 'Sauce Labs Backpack' });

        await product.locator('button').click()
    }

    async veriyCartCount(){
        await expect(this.cartBadge).toHaveText('1')
    }

    async openCart(){
        await this.cartIcon.click()
    }

}