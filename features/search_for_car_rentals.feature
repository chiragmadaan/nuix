Feature: Dummy feature

  Scenario: Open login page
  	Given user is on "https://www.booking.com/"
  	When user clicks on "car rentals" button
  	Then user is shown the "car rentals" page

  Scenario: Open login page
    Given user is on "https://www.booking.com/"
    When user clicks on "car rentals" button
    And user enters "London" in search bar
    And user selects first suggestion
    And user enters checkin date as "15/01/2022"
    And user enters checkout date as "20/01/2022"
    And user clicks on "search" button
    Then user is shown the "car rentals search results" page