// const {Key} = require('selenium-webdriver');
var BaseClass = require ('./baseclass');

class HomePage extends BaseClass {

    signInButton = 'Sign in';
    registerButton = 'Register';
    staysTab = 'Stays';
    carRentalsTab = 'Car rentals';
    locationbarID = 'ss';
    calendarCSS = 'div.xp__dates__checkin';
    today = 'bui-calendar__date--today';
    checkinMonthName = 'checkin_month';
    checkinDayName = 'checkin_monthday';
    checkinYearName = 'checkin_year';
    checkoutMonthName = 'checkout_month';
    checkoutDayName = 'checkout_monthday';
    checkoutYearName = 'checkout_year';
    searchButton = '//button[contains(.,"Search")]';

    async enter_search_text(driver, text){
        await this.enterTextById(driver, this.locationbarID, text);
    }

    async enter_checkin_details(driver, d,m,y){
        // await this.enterTextByName(this.checkinYearName, y);
        // await this.enterTextByName(this.checkinMonthName, m);
        // await this.enterTextByName(this.checkinDayName, d);
        await this.clickByClassName(driver, this.today);
    }

    async enter_checkout_details(driver, d,m,y){
        await this.enterTextByName(driver, this.checkoutYearName, y);
        await this.enterTextByName(driver, this.checkoutMonthName, m);
        await this.enterTextByName(driver, this.checkoutDayName, d);
    }

    async click_search_button(driver){
        await this.clickByXPath(driver, this.searchButton);
    }

    async click_sign_in_button(driver){
        await this.clickByPartialLinkText(driver, this.signInButton);
    }

    async click_stays_button(driver){
        await this.clickByPartialLinkText(driver, this.staysTab);
    }

    async click_car_rentals_button(driver){
        await this.clickByPartialLinkText(driver, this.carRentalsTab);
    }

    async open_calendar(driver){
        await this.clickByCssSelector(driver, this.calendarCSS);
    }
}

module.exports = new HomePage();