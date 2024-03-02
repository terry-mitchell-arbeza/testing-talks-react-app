Feature: As a user I can interact with tooltips

  Background:
    Given I navigate to the "playground" page
    And I am directed to the "playground" page

  @smoke
  @regression
  Scenario: As a user I can interact and assert on tooltips
    Then the "tooltip" "title" attribute should contain the text "This is a tooltip"
    Then the "tooltip" "title" attribute should not contain the text "This not is a tooltip"
