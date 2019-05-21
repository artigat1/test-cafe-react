Feature: Homepage

    As a user
    I want to see the React logo
    So that I know I am looking at a React page

    Scenario: Check for the React logo
        Given I navigate to the homepage
        Then I see the React logo

    Scenario: Check that there is a link to learn React
        Given I navigate to the homepage
        Then I see a link
        And The link text says "Learn React"



