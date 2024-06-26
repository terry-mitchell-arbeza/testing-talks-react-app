Feature: As a user I expect to be able to delete a new contact

  Background:
    Given I navigate to the "home" page
    And I am directed to the "home" page

  @smoke
  @regression
  Scenario: As a user I can delete a contact
    Given I click the "create" button
    And I am directed to the "create contact" page
    And the "create contact header" should contain the text "Create Contact"
    And I fill in the "name" input with "Tina Bradley"
    And I select the "Female" option from the "gender"
    And I fill in the "phone" input with "153-555-8113"
    And I fill in the "street" input with "730 Puma Terrace"
    And I fill in the "city" input with "Springfield"
    And I click the "save" button
    And I am directed to the "home" page
    And I fill in the "search" input with "Tina Bradley"
    Then the "contact" should be displayed
    #TODO: fix the order of dialog and button click
    And I click accept on the alert dialog
    And I click the "delete" button
    And I fill in the "search" input with "Tina Bradley"
    Then the "contact" should not be displayed
    And the "no items message" should contain the text "There are no items to display"


  @regression
  Scenario: As a user I can back out of deleting a new contact
    And I click the "create" button
    When I am directed to the "create contact" page
    And I fill in the "name" input with "Maude Flanders"
    Then I select the "Female" option from the "gender"
    And I fill in the "phone" input with "939-555-0113"
    And I fill in the "street" input with "740 Evergreen Terrace"
    And I fill in the "city" input with "Shelbyville"
    And I click the "save" button
    And I am directed to the "home" page

    And I fill in the "search" input with "Maude Flanders"
    And the "contact" should be displayed
    And the "full name label" should contain the text "Name:"
    And the "name" should contain the text "Maude Flanders"
    And the "gender label" should contain the text "Gender:"
    And the "gender" should contain the text "Female"
    And the "address label" should contain the text "Address:"
    And the "address" should contain the text "740 Evergreen Terrace, Shelbyville"
    And the "edit" should be displayed
    And the "delete" should be displayed

    And I click dismiss on the alert dialog
    And I click the "delete" button
    And I am directed to the "home" page
    And I fill in the "search" input with "Maude Flanders"
    And the "contact" should be displayed
    And the "full name label" should contain the text "Name:"
    And the "name" should contain the text "Maude Flanders"
    And the "gender label" should contain the text "Gender:"
    And the "gender" should contain the text "Female"
    And the "address label" should contain the text "Address:"
    And the "address" should contain the text "740 Evergreen Terrace, Shelbyville"
    And the "edit" should be displayed
    And the "delete" should be displayed

  @smoke
  @regression
  Scenario: As a user I can create delete the second searched contact
    And I click the "create" button
    When I am directed to the "create contact" page
    And I fill in the "name" input with "Patricia Bouvier"
    Then I select the "Female" option from the "gender"
    And I fill in the "phone" input with "976-555-0113"
    And I fill in the "street" input with "55 Evergreen Terrace"
    And I fill in the "city" input with "Springfield"
    And I click the "save" button
    And I am directed to the "home" page

    And I click the "create" button
    When I am directed to the "create contact" page
    And I fill in the "name" input with "Selma Bouvier"
    Then I select the "Female" option from the "gender"
    And I fill in the "phone" input with "876-555-0113"
    And I fill in the "street" input with "55 Evergreen Terrace"
    And I fill in the "city" input with "Springfield"
    And I click the "save" button
    And I am directed to the "home" page

    And I fill in the "search" input with "Patricia Bouvier"
    And the "contact" should be displayed
    And the "full name label" should contain the text "Name:"
    And the "name" should contain the text "Patricia Bouvier"
    And the "gender label" should contain the text "Gender:"
    And the "gender" should contain the text "Female"
    And the "address label" should contain the text "Address:"
    And the "address" should contain the text "55 Evergreen Terrace, Springfield"
    And the "edit" should be displayed
    And the "delete" should be displayed

    And I fill in the "search" input with "Selma Bouvier"
    And the "contact" should be displayed
    And the "full name label" should contain the text "Name:"
    And the "name" should contain the text "Selma Bouvier"
    And the "gender label" should contain the text "Gender:"
    And the "gender" should contain the text "Female"
    And the "address label" should contain the text "Address:"
    And the "address" should contain the text "55 Evergreen Terrace, Springfield"
    And the "edit" should be displayed
    And the "delete" should be displayed

    And I fill in the "search" input with "Bouvier"
    And the "1st" "contact" should be displayed
    And the "2nd" "contact" should be displayed

    And I click accept on the alert dialog
    And I click the "2nd" "delete" button
    And I am directed to the "home" page

    And I fill in the "search" input with "Bouvier"
    And the "1st" "contact" should be displayed
    And the "2nd" "contact" should not be displayed

