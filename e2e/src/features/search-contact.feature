Feature: As a user I expect to be able to search a contact

  Background:
    Given I navigate to the "home" page
    And I am directed to the "home" page

  @smoke
  @regression
  Scenario: As a user I don't expect to see a contact that does not exist
    When I fill in the "search" input with "Funky Name"
    Then the "contact" should not be displayed
    And the "no items message" should contain the text "There are no items to display"