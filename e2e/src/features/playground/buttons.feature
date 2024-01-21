Feature: As a user I can interact with buttons

  Background:
    Given I navigate to the "playground" page
    And I am directed to the "playground" page

  @dev
  @smoke
  @regression
  Scenario: As a user I can interact and assert on buttons at index
    When I click the "1st" "my button" button
    And the "1st" "my button" should contain the text "One"
    When I click the "2nd" "my button" button
    And the "2nd" "my button" should contain the text "Two"




