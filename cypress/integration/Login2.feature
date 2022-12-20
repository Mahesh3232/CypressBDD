Feature: Login

    Scenario Outline: Login with multiple data

        Given User is on login  page
        When User enter username '<UserName>' and password as '<Password>'
        And Click on login button
        Then User in on dashboard page
        Examples:
            | UserName | Password |
            | Admin    | admin123 |
            | Admin    | admin123 |
            | Admin    | admin123 |