Feature: As a user I can interact with hidden and displayed text


  Background:
    Given I navigate to the "playground" page
    And I am directed to the "playground" page

  @smoke
  @regression
  Scenario: As a user I can interact and assert on hidden and displayed text
    Then the "show hide text" should be displayed
    And the "show hide text" should contain the text "This is visible"
    When I click the "show hide button" button
    And the "show hide text" should not be displayed