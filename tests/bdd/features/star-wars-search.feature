Feature: Star Wars Search

    As a user
    I want to be able to search for Star Wars Character
    So that I can find out more information about them

    Scenario: Search for "Luke"
        Given I navigate to the homepage
        When I type "Luke" into the search box
        Then I see 1 option in the results

#    Scenario: Search for "Skywalker"
#        Given I navigate to the homepage
#        When I type "Skywalker" into the search box
#        Then I see 3 Skywalker people in the results
