Feature: As a user I can interact with switches

  Background:
    Given I navigate to the "playground" page
    And I am directed to the "playground" page

  @smoke
  @regression
  Scenario: As a user I can interact and assert on switches
    Then the "switch one" switch should be checked
    When I uncheck the "switch one" switch
    And the "switch one" switch should not be checked
    And I check the "switch one" switch
    And the "switch one" switch should be checked
    And the "switch two" should not be enabled