const {By} = require('selenium-webdriver');

class BaseClass{

    async go_to_url(driver, url){
        await driver.get(url);
    }

    async close(driver){
        await driver.quit();
    }

    async maximize(driver){
        await driver.manage().window().maximize();
    }

    getCurrentUrl(driver){
        return driver.getCurrentUrl();
    }

    async enterTextByCss(driver, css, text){
        await driver.findElement(By.css(css)).sendKeys(text);
    }

    async enterTextById(driver, id, text){
        await driver.findElement(By.id(id)).sendKeys(text);
    }

    async enterTextByName(driver, name, text){
        await driver.findElement(By.name(name)).sendKeys(text);
    }

    async clickById(driver, id){
        await driver.findElement(By.id(id)).click();
    }

    async clickByClassName(driver, cls){
        await driver.findElement(By.className(cls)).click();
    }

    async clickByCssSelector(driver, css){
        await driver.findElement(By.css(css)).click();
    }

    async clickByPartialLinkText(driver, text){
        await driver.findElement(By.partialLinkText(text)).click();
    }

    async clickByLinkText(driver, text){
        await driver.findElement(By.linkText(text)).click();
    }

    async clickByXPath(driver, path){
        await driver.findElement(By.xpath(path)).click();
    }

    async scrollElementIntoViewById(driver, id){
        await driver.executeScript(`document.getElementById('${id}').scrollIntoView();`);
    }

    getTitle(driver){
        return driver.getTitle();
    }

    getTextById(driver, id){
        return driver.findElement(By.id(id)).getText();
    }

    getHeading(driver){
        return driver.findElement(By.xpath('//h1')).getText();
    }

    sleep(seconds){
        var e = new Date().getTime() + (seconds * 1000);
        while (new Date().getTime() <= e) {}
    }

}

module.exports = BaseClass;