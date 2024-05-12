Feature: As a user I expect to be able to cancel the creation of a new contact

  Background:
    Given I navigate to the "home" page
    And I am directed to the "home" page

  @smoke
  @regression
  Scenario: As a user I can cancel creating a new contact
    Given I click the "create" button
    And I am directed to the "create contact" page
    And the "create contact header" should contain the text "Create Contact"
    And I fill in the "name" input with "Tony Bongo"
    And I select the "Male" option from the "gender"
    And I fill in the "phone" input with "121-555-8113"
    And I fill in the "street" input with "730 Puma Terrace"
    And I fill in the "city" input with "Springfield"
    And I click the "cancel" button
    And I am directed to the "home" page
    And I fill in the "search" input with "Tony Bongo"
    Then the "contact" should not be displayed

