Feature: Dummy feature

  Scenario: Open login page
  	Given user is on "https://www.booking.com/"
  	When user clicks on "sign in" button
  	Then user is shown the login page
  
  Scenario: Missing username
  	Given user is on "https://www.booking.com/"
  	When user clicks on "sign in" button
  	And user clicks on "continue" button
  	Then user is shown "missing username" alert
  
  Scenario: Invalid username
  	Given user is on "https://www.booking.com/"
  	When user clicks on "sign in" button
  	And user enters "a" username
  	And user clicks on "continue" button
  	Then user is shown "invalid username" alert
  
  Scenario: Valid username
  	Given user is on "https://www.booking.com/"
  	When user clicks on Sign in button
  	And user enters "a@b.com" username
  	And user clicks on continue button
  	Then user is shown password page
  
  Scenario: Missing password
  	Given user is on "https://www.booking.com/"
  	When user clicks on "sign in" button
  	And user enters "a@b.com" username
  	And user clicks on "continue" button
  	And user clicks on "sign in" button
  	Then user is shown "missing password" alert
  
  Scenario: Incorrect password
  	Given user is on "https://www.booking.com/"
  	When user clicks on Sign in button
  	And user enters "a@b.com" username
  	And user clicks on "continue" button
  	And user enters "abc" password
  	And user clicks on "sign in" button
  	Then user is shown "incorrect password" alert