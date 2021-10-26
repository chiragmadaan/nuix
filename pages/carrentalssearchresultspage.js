var BaseClass = require ('../pages/baseclass');
const {By} = require('selenium-webdriver');

class CarRentalsSearchResultsPage extends BaseClass {

    searchButton = '//button[contains(.,"Search")]';
    seatsXpath = '//*[@data-testid="specs-seats-container"]';
    largeLuggageXpath = '//*[@data-testid="specs-large-bags-container"]';
    smallLuggageXpath = '//*[@data-testid="specs-small-bags-container"]';
    mileageXpath = '//*[@data-testid="specs-mileage-container"]';

    async click_top_result(){
        await this.clickByXPath(this.titleLinkXpath);
    }

    get_top_results_seats(){
        return driver.findElement(By.xpath(this.seatsXpath)).getText();
    }

    get_top_results_large_luggage(){
        return driver.findElement(By.xpath(this.largeLuggageXpath)).getText();
    }

    get_top_results_small_luggage(){
        return driver.findElement(By.xpath(this.smallLuggageXpath)).getText();
    }

    get_top_results_mileage(){
        return driver.findElement(By.xpath(this.mileageXpath)).getText();
    }

}

module.exports = new CarRentalsSearchResultsPage();