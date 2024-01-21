Feature: As a user I can interact with radio buttons

  Background:
    Given I navigate to the "playground" page
    And I am directed to the "playground" page

  @smoke
  @regression
  Scenario: As a user I can interact and assert on radio buttons
    Then the "female" radio button should be checked
    And the "female label" should not contain the text "Male"
    And the "male" radio button should not be checked
    And the "male label" should not contain the text "Female"
    When I check the "male" radio button
    Then the "male" radio button should be checked
    Then the "female" radio button should not be checked
    When I check the "female" radio button
    Then the "female" radio button should be checked
    Then the "male" radio button should not be checked

