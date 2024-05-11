Feature: As a user I can interact with drop down menus

  Background:
    Given I navigate to the "playground" page
    And I am directed to the "playground" page

    @dev
  @smoke
  @regression
  Scenario: As a user I can interact and assert on drop down menus
    When I click the "drop down button" button
    And the "drop down profile" should contain the text "Profile"
    And the "drop down my account" should contain the text "My account"
    And the "drop down logout" should contain the text "Logout"
    And I click the "drop down profile" button
    When I click the "drop down button" button
    And I click the "drop down my account" button
    When I click the "drop down button" button
    And I click the "drop down logout" button
    And the "drop down profile" should not be displayed
    And the "drop down my account" should not be displayed
    And the "drop down logout" should not be displayed
