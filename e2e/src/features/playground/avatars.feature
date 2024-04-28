Feature: As a user I can interact with avatars

  Background:
    Given I navigate to the "playground" page
    And I am directed to the "playground" page

  @smoke
  @regression
  Scenario: As a user I can interact with and assert on avatars
    Then the "1st" "avatar" should be displayed
    And the "2nd" "avatar" should be displayed
    And the "small avatar" should be displayed
    And I should see "2" "avatar" displayed


