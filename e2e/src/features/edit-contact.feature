Feature: As a user I expect to be able to edit a contact

  Background:
    Given I navigate to the "home" page
    And I am directed to the "home" page

  @smoke
  @regression
  Scenario: As a user I can edit a contact
    Given I click the "create" button
    And I am directed to the "create contact" page
    And the "create contact header" should contain the text "Create Contact"
    And I fill in the "name" input with "Evelyn Brady"
    And I select the "Female" option from the "gender"
    And I fill in the "phone" input with "987-555-8113"
    And I fill in the "street" input with "780 Puma Terrace"
    And I fill in the "city" input with "Springfield"
    And I click the "save" button
    And I am directed to the "home" page
    And I fill in the "search" input with "Evelyn Brady"
    Then the "contact" should be displayed
    When I click the "edit" button
    And I am directed to the "edit contact" page
    And I fill in the "name" input with "Ned Brady"
    And I select the "Male" option from the "gender"
    And I fill in the "phone" input with "654-555-8113"
    And I fill in the "street" input with "800 Puma Terrace"
    And I fill in the "city" input with "Shelbyville"
    And I click the "save" button
    And I am directed to the "home" page
    And I fill in the "search" input with "Ned Brady"
    And the "contact" should be displayed
    And the "full name label" should contain the text "Name:"
    And the "name" should equal the text "Ned Brady"
    And the "gender label" should contain the text "Gender:"
    And the "gender" should equal the text "Male"
    And the "address label" should contain the text "Address:"
    And the "address" should equal the text "800 Puma Terrace, Shelbyville"
    And the "edit" should be displayed
    And the "delete" should be displayed
