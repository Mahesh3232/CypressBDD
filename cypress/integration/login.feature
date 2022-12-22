Feature: Login

    Scenario Outline: login to testYou dashboard
        Given User is on login page
        When User enters username as '<UserName>'
        Then User enters password as '<Password>'
        And click login button
        Then User is on dashboard page
        Examples:
            | UserName                  | Password  |
            | mahesh.xxxx@gmail.com | xxxxxxxx |