Feature: As a user I expect to be able to validate a new contact

  Background:
    Given I navigate to the "home" page
    And I am directed to the "home" page
    And I click the "create" button
    And I am directed to the "create contact" page
    And the "create contact header" should contain the text "Create Contact"

  @smoke
  @regression
  Scenario: As a user I can hit a validation error on each field then create a new contact
    When I click the "save" button
    Then the "error message" should contain the text "Error: The "name" field can't be empty."
    And I fill in the "name" input with "Bart Simpson"
    And I click the "save" button
    Then the "error message" should contain the text "Error: The "phone" field can't be empty."
    And I fill in the "phone" input with "153-555-8113"
    And I click the "save" button
    Then the "error message" should contain the text "Error: The "street" field can't be empty."
    And I fill in the "street" input with "742 Evergreen Terrace"
    And I click the "save" button
    Then the "error message" should contain the text "Error: The "city" field can't be empty."
    And I fill in the "city" input with "Springfield"
    And I click the "save" button
    And I am directed to the "home" page
    And I fill in the "search" input with "Bart Simpson"
    And the "search" should equal the value "Bart Simpson"
    And the "full name label" should contain the text "Name:"
    And the "name" should equal the text "Bart Simpson"
    And the "gender label" should contain the text "Gender:"
    And the "gender" should equal the text "Male"
    And the "address label" should contain the text "Address:"
    And the "address" should equal the text "742 Evergreen Terrace, Springfield"
    And the "edit" should be displayed
    And the "delete" should be displayed
