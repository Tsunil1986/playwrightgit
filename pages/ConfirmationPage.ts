import {Page,expect} from '@playwright/test'

export class ConfirmationPage{
    private page : Page
    messageHeader;
    constructor(page: Page){
        this.page = page
        this.messageHeader = page.locator('.complete-header')
    }

    async verifyConfirmationMessage(){
            await expect(this.messageHeader).toHaveText('Thank you for your order!', { timeout: 5000 })
    }

}