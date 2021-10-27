Feature: Dummy feature

  Scenario: Open login page
  	Given user is on "https://www.booking.com/"
  	When user enters "London" in search bar
    And user enters checkin date as "15/01/2022"
    And user enters checkout date as "20/01/2022"
    And user clicks on "search" button
  	Then user is shown the "hotel search results" page