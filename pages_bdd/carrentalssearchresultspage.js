var BaseClass = require ('./baseclass');
const {By} = require('selenium-webdriver');

class CarRentalsSearchResultsPage extends BaseClass {

    searchButton = '//button[contains(.,"Search")]';
    seatsXpath = '//*[@data-testid="specs-seats-container"]';
    largeLuggageXpath = '//*[@data-testid="specs-large-bags-container"]';
    smallLuggageXpath = '//*[@data-testid="specs-small-bags-container"]';
    mileageXpath = '//*[@data-testid="specs-mileage-container"]';
    priceXpath = '//*[@data-testid="total-price"]';

    async click_top_result(driver){
        await this.clickByXPath(driver, this.titleLinkXpath);
    }

    get_top_results_seats(driver){
        return driver.findElement(By.xpath(driver, this.seatsXpath)).getText();
    }

    get_top_results_large_luggage(driver){
        return driver.findElement(By.xpath(driver, this.largeLuggageXpath)).getText();
    }

    get_top_results_small_luggage(driver){
        return driver.findElement(By.xpath(driver, this.smallLuggageXpath)).getText();
    }

    get_top_results_mileage(driver){
        return driver.findElement(By.xpath(driver, this.mileageXpath)).getText();
    }

    get_top_results_price(driver){
        return driver.findElement(By.xpath(driver, this.priceXpath)).getText();
    }

}

module.exports = new CarRentalsSearchResultsPage();