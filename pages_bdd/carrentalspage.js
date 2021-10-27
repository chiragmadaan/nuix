var BaseClass = require ('./baseclass');

class CarRentalsPage extends BaseClass {

    pageTitle = 'Car hire for any kind of trip';
    searchButton = '//button[contains(.,"Search")]';
    locationbarID = 'ss_origin';
    calendarCSS = 'div.xp__dates__checkin';
    today = 'c2-day-s-today';
    suggestionClass = 'c-autocomplete__item';
    // titleLinkXpath = '//a[@data-testid="title-link"]';

    async enter_search_text(driver, text){
        await this.enterTextById(this.locationbarID, text);
    }

    async select_suggestion(driver){
        await this.clickByClassName(driver, this.suggestionClass);
    }

    async enter_checkin_details(driver){
        await this.clickByClassName(driver, this.today);
    }

    async click_search_button(driver){
        await this.clickByXPath(driver, this.searchButton);
    }

    async open_calendar(driver){
        await this.clickByCssSelector(driver, this.calendarCSS);
    }

}

module.exports = new CarRentalsPage();