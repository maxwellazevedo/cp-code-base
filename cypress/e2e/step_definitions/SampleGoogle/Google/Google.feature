Feature: Google sample page test
The purpose of this feature is to test the functionality of performing a search on the Google page

Scenario: Perform a search on the Google page 
    Given that the user is on the Google home page
    When the user types "shoe" in the search bar
    And click on the search button
    Then the search results should be displayed
    And the results list should contain links related to shoes