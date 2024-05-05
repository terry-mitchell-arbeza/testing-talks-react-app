Feature: As a user I can interact with text areas

  Background:
    Given I navigate to the "playground" page
    And I am directed to the "playground" page

  @smoke
  @regression
  Scenario: As a user I can interact and assert on text areas
    Then the "textarea" should contain the text "Testing Talks Hub has been established to teach the community how to build world class automation frameworks using the latest tooling."
    When I fill in the "textarea" input with "Learning to input into textarea"
    And the "textarea" should contain the value "Learning to input into textarea"

