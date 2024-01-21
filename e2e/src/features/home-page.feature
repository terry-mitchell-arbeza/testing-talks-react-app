Feature: As a user I expect to be able to navigate to the home page

  Background:
    Given I navigate to the "home" page
    And I am directed to the "home" page

  @smoke
  @regression
  Scenario: As a user I expect to be able to see contacts
    Then the "header logo" should be displayed
    And the "contacts header" should contain the text "Contacts"

  @smoke
  @regression
  Scenario: As a user I don't expect to see a contact that does not exist
    When I fill in the "search" input with "Funky Name"
    Then the "contact" should not be displayed
