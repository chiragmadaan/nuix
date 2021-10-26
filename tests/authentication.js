const homepage = require('../pages/homepage');
const signinpage = require('../pages/signinpage');
const expect = require('chai').expect;

describe('Authentication', () => {

    after(() => {
        // signinpage.close();
    })

    it('Go to authentication page', async () => {
        var baseurl = 'https://www.booking.com/';
        await homepage.go_to_url(baseurl);
        await homepage.click_sign_in_button();
    })

    it('Check missing username error', async () => {
        await signinpage.click_continue_button();
        await signinpage.verify_username_alert();
    })

    it('Check invalid username alert', async () => {
        await signinpage.enter_username('a');
        await signinpage.click_continue_button();
        await signinpage.verify_username_alert();
    })

    it('Enter valid username', async () => {
        await signinpage.enter_username('@b.com');
        await signinpage.click_continue_button();
        await signinpage.sleep(2);
        expect(await signinpage.getHeading()).to.be.equal('Enter your password');
    })

    it('Check missing password error', async () => {
        await signinpage.click_sign_in_button();
        await signinpage.verify_missing_password_alert();
    })

    it('Check incorrect password error', async () => {
        await signinpage.enter_password('a');
        await signinpage.click_sign_in_button();
        await signinpage.verify_incorrect_password_alert();
    })

    it('Check verification link flow', async () => {
        await signinpage.click_sign_in_verification_link_button();
        await signinpage.sleep(2);
        expect(await signinpage.getHeading()).to.be.equal('Check your inbox');
        await signinpage.click_back_to_sign_in_button();
        await signinpage.sleep(1);
        expect(await signinpage.getHeading()).to.be.equal('Sign in or create an account');
    })
})