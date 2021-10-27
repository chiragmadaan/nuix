var BaseClass = require ('./baseclass');
const expect = require('chai').expect;

class SignInPage extends BaseClass {

    usernameID = 'username';
    usernameAlert = 'username-note';
    usernameAlertMessage = 'email address';
    passwordID = 'password';
    passwordAlert = 'password-note';
    passwordAlertMessage = 'nter your Booking.com password';
    incorrectPasswordAlertMessage = "The email and password combination you entered doesn't match";
    continueWithEmailButton = '//button[contains(.,"Continue with email")]';
    signinButton = '//button[contains(.,"Sign in")]';
    signinVerificationLinkButton = '//button[contains(.,"Sign in with a verification link")]';
    forgotPasswordButton = '//button[contains(.,"Forgotten your password?")]';
    backToSigninButton = '//button[contains(.,"Back to sign-in")]';

    async enter_username(driver, user){
        await this.enterTextById(driver, this.usernameID, user);
    }

    async enter_password(driver, password){
        await this.enterTextById(driver, this.passwordID, password);
    }

    async click_continue_button(driver){
        await this.clickByXPath(driver, this.continueWithEmailButton);
    }

    async click_sign_in_button(driver){
        await this.clickByXPath(driver, this.signinButton);
    }

    async click_sign_in_verification_link_button(driver){
        await this.clickByXPath(driver, this.signinVerificationLinkButton);
    }

    async click_back_to_sign_in_button(driver){
        await this.clickByXPath(driver, this.backToSigninButton);
    }

    async verify_username_alert(driver){
        const msg = await this.getTextById(driver, this.usernameAlert);
        expect(msg).to.include(this.usernameAlertMessage);
    }

    async verify_missing_password_alert(driver){
        const msg = await this.getTextById(driver, this.passwordAlert);
        expect(msg).to.include(this.passwordAlertMessage);
    }

    async verify_incorrect_password_alert(driver){
        const msg = await this.getTextById(driver, this.passwordAlert);
        expect(msg).to.include(this.incorrectPasswordAlertMessage);
    }
}

module.exports = new SignInPage();