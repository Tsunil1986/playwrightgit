import {Page} from '@playwright/test'

export class CheckoutPage{

    private page: Page
    firstName;
    lastName;
    postalCode; 
    continueBtn;
    finishBtn;
    

    constructor(page:Page){
        this.page = page
        this.firstName = page.locator('#first-name')
        this.lastName = page.locator('#last-name')
        this.postalCode = page.locator('#postal-code')
        this.continueBtn = page.locator('#continue')
        this.finishBtn = page.locator('#finish')
    }


    async fillForm(first: string, last : string, zip: string){
        await this.firstName.fill(first)
        await this.lastName.fill(last)
        await this.postalCode.fill(zip)
    }

    async continue(){
        await this.continueBtn.click()
    }

    async finish(){
        await this.finishBtn.click()
    }
}