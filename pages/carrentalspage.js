var BaseClass = require ('../pages/baseclass');

class CarRentalsPage extends BaseClass {

    pageTitle = 'Car hire for any kind of trip';
    searchButton = '//button[contains(.,"Search")]';
    locationbarID = 'ss_origin';
    calendarCSS = 'div.xp__dates__checkin';
    today = 'c2-day-s-today';
    suggestionClass = 'c-autocomplete__item';
    // titleLinkXpath = '//a[@data-testid="title-link"]';

    async enter_search_text(text){
        await this.enterTextById(this.locationbarID, text);
    }

    async select_suggestion(){
        await this.clickByClassName(this.suggestionClass);
    }

    async enter_checkin_details(){
        await this.clickByClassName(this.today);
    }

    async click_search_button(){
        await this.clickByXPath(this.searchButton);
    }

    async open_calendar(){
        await this.clickByCssSelector(this.calendarCSS);
    }

}

module.exports = new CarRentalsPage();