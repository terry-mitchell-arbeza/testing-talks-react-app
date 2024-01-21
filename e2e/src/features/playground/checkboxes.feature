Feature: As a user I can interact with checkboxes

  Background:
    Given I navigate to the "playground" page
    And I am directed to the "playground" page

  @smoke
  @regression
  Scenario: As a user I can interact with and assert on checkboxes
    Then the "blue" check box should not be checked
    And the "green" check box should not be checked
    And the "grey" check box should not be checked
    When I check the "green" check box
    And I check the "grey" check box
    Then the "blue" check box should not be checked
    And the "green" check box should be checked
    And the "grey" check box should be checked
    When I uncheck the "green" check box
    Then the "blue" check box should not be checked
    And the "green" check box should not be checked
    And the "grey" check box should be checked