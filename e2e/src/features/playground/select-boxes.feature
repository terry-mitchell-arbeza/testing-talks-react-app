Feature: As a user I can interact with select boxes

  Background:
    Given I navigate to the "playground" page
    And I am directed to the "playground" page

  @smoke
  @regression
  Scenario: As a user I can interact with and assert on select boxes
    When I select the "10" option from the "age"
    Then the "age" should contain the value "10"
    When I select the "20" option from the "age"
    Then the "age" should contain the value "20"
    When I select the "30" option from the "age"
    Then the "age" should contain the value "30"