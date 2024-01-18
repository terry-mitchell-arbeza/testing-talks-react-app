Feature: As a user I expect to be able to create contacts

  @smoke
  @regression
  Scenario: As a user I expect to be able to create a new contact
    Given I am on the "home" page
    And I click the "create" button
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
    And the "search" should not equal the text "Ted Smythe"
    And the "full name label" should contain the text "Name:"
    And the "name" should equal the text "Ted Smith"
    And the "gender label" should contain the text "Gender:"
    And the "gender" should equal the text "Male"
    And the "address label" should contain the text "Address:"
    And the "address" should equal the text "123 Fake St, Melbourne"
    And the "edit" should be displayed
    And the "delete" should be displayed
    