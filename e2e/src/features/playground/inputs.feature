Feature: As a user I can interact with autocomplete inputs

  Background:
    Given I navigate to the "playground" page
    And I am directed to the "playground" page

  @smoke
  @regression
  Scenario Outline: As a user I can interact and assert on autocomplete inputs
    When I fill in the "movies" input with "<search>"
    And I click the "<movie button>" button
    Then the "movies" should contain the value "<movie>"
    And the "movies" should not contain the value "The Godfather: Part II"

    Examples:
      | search | movie button    | movie           |
      | The G  | the godfather   | The Godfather   |
      | The D  | the dark knight | The Dark Knight |

  @smoke
  @regression
  Scenario: As a user I can interact and assert on inputs
    Then the "outlined required" should equal the value "Testing"
    And the "outlined disabled" should equal the value "Talks"
    And the "outlined read only" should equal the value "Hub"
    And the "outlined required" should be enabled
    And the "outlined disabled" should not be enabled
    And I fill in the "outlined required" input with "Testing Talks Online"
    And the "outlined required" should equal the value "Testing Talks Online"

  @smoke
  @regression
  Scenario: As a user I can interact and assert on input validation
    Then the "outlined error" should contain the text "Error"
    And the "outlined error text" should contain the text "Incorrect entry."