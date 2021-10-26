var webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
const {By} = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({implicit: (10000)});

class BaseClass{
    constructor(){
        global.driver = driver;
    }

    async go_to_url(url){
        await driver.get(url);
    }

    async close(){
        await driver.quit();
    }

    async maximize(){
        await driver.manage().window().maximize();
    }

    getCurrentUrl(){
        return driver.getCurrentUrl();
    }

    async enterTextByCss(css, text){
        await driver.findElement(By.css(css)).sendKeys(text);
    }

    async enterTextById(id, text){
        await driver.findElement(By.id(id)).sendKeys(text);
    }

    async enterTextByName(name, text){
        await driver.findElement(By.name(name)).sendKeys(text);
    }

    async clickById(id){
        await driver.findElement(By.id(id)).click();
    }

    async clickByClassName(cls){
        await driver.findElement(By.className(cls)).click();
    }

    async clickByCssSelector(css){
        await driver.findElement(By.css(css)).click();
    }

    async clickByPartialLinkText(text){
        await driver.findElement(By.partialLinkText(text)).click();
    }

    async clickByLinkText(text){
        await driver.findElement(By.linkText(text)).click();
    }

    async clickByXPath(path){
        await driver.findElement(By.xpath(path)).click();
    }

    async scrollElementIntoViewById(id){
        await driver.executeScript(`document.getElementById('${id}').scrollIntoView();`);
    }

    getTitle(){
        return driver.getTitle();
    }

    getTextById(id){
        return driver.findElement(By.id(id)).getText();
    }

    getHeading(){
        return driver.findElement(By.xpath('//h1')).getText();
    }

    sleep(seconds){
        var e = new Date().getTime() + (seconds * 1000);
        while (new Date().getTime() <= e) {}
    }

}

module.exports = BaseClass;