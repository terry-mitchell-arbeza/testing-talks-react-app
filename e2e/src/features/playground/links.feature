Feature: As a user I can interact with links

  Background:
    Given I navigate to the "playground" page
    And I am directed to the "playground" page

  @smoke
  @regression
  Scenario: As a user I can interact and assert on links
    When I click the "primary" button
    Then the "primary" should contain the text "Primary"
    And the "secondary" should not be enabled
    Then the "secondary" should equal the text "Disabled"
    And I click the "third" link
    And the "third" should contain the text "Link"


