# Nuix QA Tech Assessment

## Summary
Project for assessment by Nuix  
Selenium framework using JavaScript and Mocha.  
Design pattern: Page Object Model, for maintenance, reusability, and readability.

## Set-up
### Install Dependencies
```
npm install
```

## To Run the frontend tests using mocha
```
npm test
```

## To Run the frontend tests using cucumber
```
npm run bdd_test
```

## CI Setup
[https://github.com/chiragmadaan/nuix/actions](https://github.com/chiragmadaan/nuix/actions)

## Assumptions

* Website will be show in English
* No A/B tests are being run
  * Sometimes a different search result page is shown, which fails the tests
* Website doesn't detect the user as a bot
  * Sometimes booking.com is detects that the user is a bot and asks to verify that user's not a bot, which fails the authentication tests
* The test machine has all the required setup for cucumber
  * There are some issues with running the cucumber tests, mocha tests are running fine

## Bonus points

* What more scenarios should be automated?
  1. For end-to-end UI tests, full journeys should be automated instead of small scenarios
  1. Airport taxis happy path
  1. Attractions happy path
  1. Register flow
  1. Discover page
* If the source code was available, more emphasis will be on unit tests and integration tests because those tests are faster, have less feedback time, and are cost effective overall
  1. Unit tests will be written using supertest+mocha+chai libraries
  1. Integration tests will be written using Cypress
  1. Remaining untested scenarios will be automated using Selenium, making sure there is no overlap or redundancy in all 3 frameworks
* How would the tests and test suite be structured
  1. One way to structure the test suite is to categorize the tests based on their types, i.e. smoke tests, regression tests, system tests etc
  1. Another way to categorize them would be based on the modules they test, e.g. user account module, flights module, cars module etc.