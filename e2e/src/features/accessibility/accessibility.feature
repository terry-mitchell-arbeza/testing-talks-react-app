Feature: Generate accessibility reports across our website

  @accessibility
  @regression
  Scenario: Generate an accessibility report for the Home page
    Given I navigate to the "home" page
    And I am directed to the "home" page
    And I inject axe accessibility engine
    Then I generate an accessibility report

  @accessibility
  @regression
  Scenario: Generate an accessibility report for the Create Contact page
    Given I navigate to the "create contact" page
    And I am directed to the "create contact" page
    And I inject axe accessibility engine
    Then I generate an accessibility report

  @accessibility
  @regression
  Scenario: Generate an accessibility report for the Edit Contact page
    Given I navigate to the "home" page
    And I am directed to the "home" page
    And I click the "1st" "edit" button
    And I inject axe accessibility engine
    Then I generate an accessibility report

    @dev
  @accessibility
  @regression
  Scenario: Generate an accessibility report for the Edit Contact page
    Given I navigate to the "playground" page
    And I am directed to the "playground" page
    And I inject axe accessibility engine
    Then I generate an accessibility report