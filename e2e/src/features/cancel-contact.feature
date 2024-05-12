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

  @regression
  Scenario: As a user I can cancel an edit to a new contact
    And I click the "create" button
    When I am directed to the "create contact" page
    And I fill in the "name" input with "Nelson Muntz"
    Then I select the "Male" option from the "gender"
    And I fill in the "phone" input with "664-555-0113"
    And I fill in the "street" input with "710 Evergreen Terrace"
    And I fill in the "city" input with "Springfield"
    And I click the "save" button
    And I am directed to the "home" page

    And I fill in the "search" input with "Nelson Muntz"
    And the "contact" should be displayed
    And the "full name label" should contain the text "Name:"
    And the "name" should contain the text "Nelson Muntz"
    And the "gender label" should contain the text "Gender:"
    And the "gender" should contain the text "Male"
    And the "address label" should contain the text "Address:"
    And the "address" should contain the text "710 Evergreen Terrace, Springfield"
    And the "edit" should be displayed
    And the "delete" should be displayed

    And I click the "edit" button
    And I am directed to the "edit contact" page
    And I fill in the "name" input with "Ned Flanders"
    Then I select the "Male" option from the "gender"
    And I fill in the "phone" input with "636-555-8904"
    And I fill in the "street" input with "740 Evergreen Terrace"
    And I fill in the "city" input with "Shelbyville"
    And I click the "cancel" button

    And I fill in the "search" input with "Nelson Muntz"
    And the "contact" should be displayed
    And the "full name label" should contain the text "Name:"
    And the "name" should contain the text "Nelson Muntz"
    And the "gender label" should contain the text "Gender:"
    And the "gender" should contain the text "Male"
    And the "address label" should contain the text "Address:"
    And the "address" should contain the text "710 Evergreen Terrace, Springfield"
    And the "edit" should be displayed
    And the "delete" should be displayed
