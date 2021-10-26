var BaseClass = require ('../pages/baseclass');
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

    async enter_username(user){
        await this.enterTextById(this.usernameID, user);
    }

    async enter_password(password){
        await this.enterTextById(this.passwordID, password);
    }

    async click_continue_button(){
        await this.clickByXPath(this.continueWithEmailButton);
    }

    async click_sign_in_button(){
        await this.clickByXPath(this.signinButton);
    }

    async click_sign_in_verification_link_button(){
        await this.clickByXPath(this.signinVerificationLinkButton);
    }

    async click_back_to_sign_in_button(){
        await this.clickByXPath(this.backToSigninButton);
    }

    async verify_username_alert(){
        const msg = await this.getTextById(this.usernameAlert);
        expect(msg).to.include(this.usernameAlertMessage);
    }

    async verify_missing_password_alert(){
        const msg = await this.getTextById(this.passwordAlert);
        expect(msg).to.include(this.passwordAlertMessage);
    }

    async verify_incorrect_password_alert(){
        const msg = await this.getTextById(this.passwordAlert);
        expect(msg).to.include(this.incorrectPasswordAlertMessage);
    }
}

module.exports = new SignInPage();