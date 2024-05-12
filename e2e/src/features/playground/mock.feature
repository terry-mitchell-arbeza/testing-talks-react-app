Feature: As a user I can intercept a REST api and mock the response

  Background:
    Given I navigate to the "playground" page
    And I am directed to the "playground" page

  @dev
  @smoke
  @regression
  Scenario: As a user I expect to see the REST users
    Then the "1st" "full name" should contain the text "Leanne Graham"

