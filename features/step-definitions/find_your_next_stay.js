const {Given, When, Then, Before, After, And, setDefaultTimeout} = require('@cucumber/cucumber');
const webdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');
const chromedriver = require('chromedriver');
const expect = require('chai').expect;
const homepage = require ('../../pages_bdd/homepage');

// chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build())
var driver = null;

setDefaultTimeout(20 * 1000);


Before(async () => {
    driver = await new webdriver.Builder().forBrowser('chrome').build();
    driver.manage().setTimeouts({implicit: (10000)});
    driver.manage().window().maximize();
});

After(async () => {
    await driver.quit();
});

When('user enters {string} in search bar', async (text) => {
    await homepage.enter_search_text(text);
});

When('user enters checkin date as {string}', async (date) => {
    await homepage.enter_checkin_details();
});

When('user enters checkout date as {string}', async (date) => {
    await homepage.enter_checkout_details();
});