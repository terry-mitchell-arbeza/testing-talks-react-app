Feature: As a user I can interact with login forms

  Background:
    Given I navigate to the "playground" page
    And I am directed to the "playground" page

  @smoke
  @regression
  Scenario: As a user I can populate login details leveraging environment variables
    When I fill in the "email" input with "$.TEST_EMAIL"
    And I fill in the "password" input with "$.TEST_PASSWORD"
    Then the "email" should contain the value "admin@testingtalkshub.com.au"
    And the "password" should contain the value "Password123"