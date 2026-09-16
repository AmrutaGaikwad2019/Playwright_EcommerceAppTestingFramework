
export class LoginPage {

    constructor(page) {
        this.page = page;
        this.usernameInput = page.getByPlaceholder("Username");
        this.passwordInput = page.getByPlaceholder("Password");
        this.loginButton = page.locator('#login-button');
        this.errorMessagepasswordmissing = page.locator("//*[text()='Epic sadface: Password is required']");
        this.errorMessageUsernamemissing = page.locator("//*[text()='Epic sadface: Username is required']");
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async loginWithMissingPassword(username) {
        await this.usernameInput.fill(username);
        await this.loginButton.click();
    }

    async loginWithMissingUsername(password) {
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async getErrorMessagePasswordMissing() {
        return await this.errorMessagepasswordmissing;
    }

    async getErrorMessageUsernameMissing() {
        return await this.errorMessageUsernamemissing;
    }

}