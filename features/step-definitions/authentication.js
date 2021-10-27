const {Given, When, Then, Before, After, And} = require('@cucumber/cucumber');
var webdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');
const chromedriver = require('chromedriver');
var {setDefaultTimeout} = require('@cucumber/cucumber');
setDefaultTimeout(20 * 1000);
const expect = require('chai').expect;

var homepage = require ('../../pages_bdd/homepage');
var signinpage = require ('../../pages_bdd/signinpage');
var searchresultspage = require ('../../pages_bdd/searchresultspage');
const carrentalspage = require ('../../pages_bdd/carrentalspage');
const carrentalssearchresultspage = require ('../../pages_bdd/carrentalssearchresultspage');

// chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build())
var driver = null;


Before(async () => {
    driver = await new webdriver.Builder().forBrowser('chrome').build();
    driver.manage().setTimeouts({implicit: (10000)});
    driver.manage().window().maximize();
});

After(async () => {
    await driver.quit();
    driver = null;
});


Given('user is on {string}', async (url) => {
    await homepage.go_to_url(driver, url);
});

When('user clicks on {string} button', async (button_name) => {
    if (button_name === 'Sign in') {
        await homepage.click_sign_in_button(driver);
    }
    else if (button_name === 'continue') {
        await signinpage.click_continue_button();
    }
    else if (button_name === 'search') {
        await homepage.click_search_button();
    }
    else if (button_name === 'car rentals') {
        await homepage.click_car_rentals_button();
    }
});

When('user enters {string} username', async (username) => {
    await signinpage.enter_username(username);
});

When('user enters {string} password', async (password) => {
    await signinpage.enter_password(password);
});

Then('user is shown the {string} page', async (page_name) => {
    if (page_name === 'login') {
        expect(await signinpage.getHeading()).to.be.equal('Sign in or create an account');;
    } else if (page_name === 'password') {
        expect(await signinpage.getHeading()).to.be.equal('Enter your password');;
    } else if (page_name === 'hotel search results') {
        expect(await searchresultspage.getHeading()).to.include('properties found');
    } else if (page_name === 'car rentals') {
        expect(await searchresultspage.getHeading()).to.include('cars found');
    } else if (page_name === 'car rentals search results') {
        expect(await carrentalssearchresultspage.get_top_results_seats()).to.include('seats');
        expect(await carrentalssearchresultspage.get_top_results_large_luggage()).to.include('Large bag');
        expect(await carrentalssearchresultspage.get_top_results_small_luggage()).to.include('Small bag');
        expect(await carrentalssearchresultspage.get_top_results_mileage()).to.be.equal('Unlimited mileage');
        expect(await carrentalssearchresultspage.get_top_results_price()).to.include('$');
    }
});

Then('user is shown the {string} alert', async (alert_name) => {
    if (alert_name === 'missing username') {
        await signinpage.verify_username_alert();
    } else if (alert_name === 'missing password') {
        await signinpage.verify_missing_password_alert();
    } else if (alert_name === 'invalid username') {
        await signinpage.verify_username_alert();
    } else if (alert_name === 'invalid password') {
        await signinpage.verify_incorrect_password_alert();
    }
});