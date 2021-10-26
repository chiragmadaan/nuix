var BaseClass = require ('../pages/baseclass');

class SearchResultsPage extends BaseClass {

    searchButton = '//button[contains(.,"Search")]';
    titleLinkXpath = '//a[@data-testid="title-link"]';

    async click_top_result(){
        await this.clickByXPath(this.titleLinkXpath);
    }

}

module.exports = new SearchResultsPage();