import { test, expect } from '../fixtures/testLogin.fixture.js';
import loginData from '../test-data/loginData.json' ;

test.describe('Login Tests', () => {

    //data driven testing using for loop

    for (const data of loginData) {

        /*fixture is used to create a new instance of the LoginPage class for each test case, 
        and the myPage fixture is used to navigate to the login page before each test case.*/
        
        test(`Login with ${data.username} and ${data.password}`, async ({ myPage, loginPage }) => {

            if (data.username === 'standard_user' && data.password === 'secret_sauce') {
                await loginPage.login(data.username, data.password);
                await expect(myPage).toHaveURL(data.expected);
            } else if (data.username === 'wrong_user' && data.password === '') {
                await loginPage.loginWithMissingPassword(data.username);
                expect(await loginPage.getErrorMessagePasswordMissing()).toHaveText(data.expected);
            } else {
                await loginPage.loginWithMissingUsername(data.password);
                expect(await loginPage.getErrorMessageUsernameMissing()).toHaveText(data.expected);
            }
        })
    }
});
