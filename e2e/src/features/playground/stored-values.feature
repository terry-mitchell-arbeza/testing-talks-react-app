Feature: As a user I can interact with stored values

  Background:
    Given I navigate to the "playground" page
    And I am directed to the "playground" page

  @smoke
  @regression
  Scenario: As a user I can interact and assert on stored values
    Given I retrieve the "first value" text and store it as "first value" in global variables
    Then the "second value" should equal the "first value" stored in global variables
    And the "fourth value" should not equal the "first value" stored in global variables
    And the "fourth value" should contain the "first value" stored in global variables
    And the "fifth value" should contain the "first value" stored in global variables
    And the "third value" should not contain the "first value" stored in global variables
