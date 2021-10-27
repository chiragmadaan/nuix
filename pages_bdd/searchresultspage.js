var BaseClass = require ('./baseclass');

class SearchResultsPage extends BaseClass {

    searchButton = '//button[contains(.,"Search")]';
    titleLinkXpath = '//a[@data-testid="title-link"]';

    async click_top_result(driver){
        await this.clickByXPath(driver, this.titleLinkXpath);
    }

}

module.exports = new SearchResultsPage();