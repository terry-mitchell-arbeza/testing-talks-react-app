Feature: As a user I can intercept a REST api and mock the response

  @smoke
  @regression
  Scenario: As a user I expect to see the REST users
    Given I navigate to the "playground" page
    And I am directed to the "playground" page
    Then the "1st" "full name" should contain the text "Leanne Graham"

  @smoke
  @regression
  Scenario: As a user I can mock no users existing
    Given the "api" endpoint for "users" is mocked with "no users"
    And I navigate to the "playground" page
    And I am directed to the "playground" page
    Then the "full name" should not be displayed

  @smoke
  @regression
  Scenario: As a user I can mock a single user
    Given the "api" endpoint for "users" is mocked with "single user"
    And I navigate to the "playground" page
    And I am directed to the "playground" page
    Then the "1st" "full name" should not contain the text "Leanne Graham"
    And the "1st" "full name" should contain the text "Todd Smith"

  @smoke
  @regression
  Scenario: As a user I can mock multiple users
    Given the "api" endpoint for "users" is mocked with "multiple users"
    And I navigate to the "playground" page
    And I am directed to the "playground" page
    Then the "1st" "full name" should not contain the text "Leanne Graham"
    And the "1st" "full name" should contain the text "Todd Smith"
    And the "2nd" "full name" should contain the text "Natalie Ford"
    And the "3rd" "full name" should contain the text "River Wild"

  @smoke
  @regression
  Scenario: As a user I can validate only 5 users will display
    Given the "api" endpoint for "users" is mocked with "six users"
    And I navigate to the "playground" page
    And I am directed to the "playground" page
    Then the "1st" "full name" should not contain the text "Leanne Graham"
    And the "1st" "full name" should contain the text "Todd Smith"
    And the "2nd" "full name" should contain the text "Natalie Ford"
    And the "3rd" "full name" should contain the text "River Wild"
    And the "4th" "full name" should contain the text "Monica Louise"
    And the "5th" "full name" should contain the text "Ted Nugget"
    And the "6th" "full name" should not be displayed