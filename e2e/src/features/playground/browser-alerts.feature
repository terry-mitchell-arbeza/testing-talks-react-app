Feature: As a user I can interact with browser alerts

  Background:
    Given I navigate to the "playground" page
    And I am directed to the "playground" page

  @smoke
  @regression
  Scenario: As a user I can accept and assert on browser alerts
    Given I click the "browser alert" button
    When I click accept on the alert dialog

  @smoke
  @regression
  Scenario: As a user I can dismiss and assert on browser alerts
    Given I click the "browser alert" button
    When I click dismiss on the alert dialog