Feature: As a user I can interact with tables

  Background:
    Given I navigate to the "playground" page
    And I am directed to the "playground" page

  @smoke
  @regression
  Scenario: As a user I can interact and assert on tables
    Then the "basic" table should equal the following:
      | 159 | 6   | 24 | 4   |
      | 237 | 9   | 37 | 4.3 |
      | 262 | 16  | 24 | 6   |
      | 305 | 3.7 | 67 | 4.3 |
      | 356 | 16  | 49 | 3.9 |
    Then the "basic" table should not equal the following:
      | 159 | 6   | 24 | 4   |
      | 237 | 9   | 37 | 4.3 |
      | 262 | 16  | 24 | 6   |
      | 305 | 3.4 | 67 | 4.3 |
      | 356 | 16  | 49 | 3.9 |


