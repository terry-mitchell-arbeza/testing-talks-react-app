Feature: As a user I can interact with text boxes

  Background:
    Given I navigate to the "playground" page
    And I am directed to the "playground" page

  @smoke
  @regression
  Scenario: As a user I can interact and assert on text boxes
    When I fill in the "email" input with "test@fake.test"
    And the "email" should equal the value "test@fake.test"
    And the "email" should not equal the value "wrong@fake.test"
