Feature: As a user I can interact with checkboxes

  @smoke
  @regression
  Scenario: As a user I can interact and assert on checkboxes
    Given I am on the "playground" page
    And the "blue" check box should not be checked
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