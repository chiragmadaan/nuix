const {Key} = require('selenium-webdriver');
var BaseClass = require ('../pages/baseclass');

class HomePage extends BaseClass {

    signInButton = 'Sign in';
    registerButton = 'Register';
    staysTab = 'Stays';
    carRentalsTab = 'Car rentals';
    locationbarID = 'ss';
    calendarCSS = 'div.xp__dates__checkin';
    today = 'bui-calendar__date--today';

    async enter_search_text(text){
        await this.enterTextById(this.locationbarID, text);
    }

    async click_sign_in_button(){
        await this.clickByPartialLinkText(this.signInButton);
    }

    async click_stays_button(){
        await this.clickByPartialLinkText(this.staysTab);
    }

    async click_car_rentals_button(){
        await this.clickByPartialLinkText(this.carRentalsTab);
    }

    async open_calendar(){
        await this.clickByCssSelector(this.calendarCSS);
    }
}

module.exports = new HomePage();