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

    async enter_search_text(text){
        await this.enterTextById(this.locationbarID, text);
    }

    async enter_checkin_details(){
        await this.clickByClassName(this.today);
    }

    async enter_checkout_details(d,m,y){
        await this.enterTextByName(this.checkoutYearName, y);
        await this.enterTextByName(this.checkoutMonthName, m);
        await this.enterTextByName(this.checkoutDayName, d);
    }

    async click_search_button(){
        await this.clickByXPath(this.searchButton);
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