Feature: As a user I can interact with iframes

  Background:
    Given I navigate to the "playground" page
    And I am directed to the "playground" page

  @smoke
  @regression
  Scenario: As a user I can interact with and assert on iframes
    When I fill in the "search" input on the "basic iframe" iframe with "Abraham Perry"
    And I scroll to the "basic iframe"
    Then the "contact" on the "basic iframe" iframe should be displayed
    And the "full name label" on the "basic iframe" iframe should contain the text "Name:"
    And the "name" on the "basic iframe" iframe should equal the text "Abraham Perry"
    And the "gender label" on the "basic iframe" iframe should contain the text "Gender:"
    And the "gender" on the "basic iframe" iframe should equal the text "Male"
    And the "address label" on the "basic iframe" iframe should contain the text "Address:"
    And the "address" on the "basic iframe" iframe should equal the text "Ap #826-8849 Vulputate Street, Laramie"
    And the "edit" on the "basic iframe" iframe should be displayed
    And the "delete" on the "basic iframe" iframe should be displayed