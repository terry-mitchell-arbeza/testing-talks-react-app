Feature: As a user I expect to be able to create contacts

  Background:
    Given I navigate to the "home" page
    And I am directed to the "home" page

  @smoke
  @regression
  Scenario: As a user I expect to be able to create a new contact
    Given I click the "create" button
    Then I am directed to the "create contact" page
    And the "create contact header" should contain the text "Create Contact"
    And I fill in the "name" input with "Ted Smith"
    And I select the "Male" option from the "gender"
    And I fill in the "phone" input with "0403929282"
    And I fill in the "street" input with "123 Fake St"
    And I fill in the "city" input with "Melbourne"
    And I click the "save" button
    And I am directed to the "home" page
    And I fill in the "search" input with "Ted Smith"
    And the "search" should equal the value "Ted Smith"
    And the "search" should not equal the value "Ted Smythe"
    And the "full name label" should contain the text "Name:"
    And the "name" should equal the text "Ted Smith"
    And the "gender label" should contain the text "Gender:"
    And the "gender" should equal the text "Male"
    And the "address label" should contain the text "Address:"
    And the "address" should equal the text "123 Fake St, Melbourne"
    And the "edit" should be displayed
    And the "delete" should be displayed

  @regression
  Scenario: As a user I do not expect saved contacts to persist after a page refresh
    Given I click the "create" button
    Then I am directed to the "create contact" page
    And the "create contact header" should contain the text "Create Contact"
    And I fill in the "name" input with "Tanya Hardie"
    And I select the "Female" option from the "gender"
    And I fill in the "phone" input with "0434677333"
    And I fill in the "street" input with "152 Margi Court"
    And I fill in the "city" input with "Shelbyville"
    And I click the "save" button
    And I am directed to the "home" page
    And I fill in the "search" input with "Tanya Hardie"
    And the "search" should equal the value "Tanya Hardie"
    And the "full name label" should contain the text "Name:"
    And the "name" should equal the text "Tanya Hardie"
    And the "gender label" should contain the text "Gender:"
    And the "gender" should equal the text "Female"
    And the "address label" should contain the text "Address:"
    And the "address" should equal the text "152 Margi Court, Shelbyville"
    And the "edit" should be displayed
    And the "delete" should be displayed
    And I refresh the "home" page
    And I fill in the "search" input with "Tanya Hardie"
    Then the "contact" should not be displayed


  Scenario: As a user I can create and verify multiple new contacts


