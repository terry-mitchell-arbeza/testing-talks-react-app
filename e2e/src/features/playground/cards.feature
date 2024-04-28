Feature: As a user I can interact with cards

  Background:
    Given I navigate to the "playground" page
    And I am directed to the "playground" page

  @smoke
  @regression
  Scenario: As a user I can interact with and assert on cards
    Then the "card header" should contain the text "Word of the Day"
    And the "card main" should contain the text "Automation"
    And the "card type" should contain the text "noun"
    And the "card overview" should contain the text "Automate the execution of tests"
    And the "card overview" should contain the text ""compares actual with expected""
    And the "card action" should contain the text "Learn More"