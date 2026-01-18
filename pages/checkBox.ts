import { expect, Locator, Page } from "@playwright/test";

export class checkBox {
    private readonly page: Page;
    private readonly checkbox1: Locator;
    private readonly checkbox2: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkbox1 = page.locator('//form[@id="checkboxes"]/input[1]');
        this.checkbox2 = page.locator('//form[@id="checkboxes"]/input[2]');
    }

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/checkboxes');
    }

    async clickCheckBoxes() {
        await this.checkbox1.check();
        await this.checkbox2.uncheck();
        await this.checkbox2.check();
    }

    async assertCheckBoxes() {
        await expect(this.checkbox1).toBeChecked();
        await expect(this.checkbox2).toBeChecked();
    }

}