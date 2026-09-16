import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

const test = base.extend({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    myPage: async ({ page }, use) => {
        await page.goto('https://www.saucedemo.com/');
        await use(page);
    }
});

export { test, expect };