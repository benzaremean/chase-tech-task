Feature: Verify News Articles

  Scenario: Verify Guardian as fake if less than 2 matches from other source
    Given I take the 1st news article from The Guardian website
    When I search for similar information on Google
    Then the Guardian news article is considered fake if there are less than 2 matches on Google

  Scenario: Verify Guardian news as real if 2 or more matches from other source
    Given I take the 1st news article from The Guardian website
    When I search for similar information on Google
    Then the Guardian news article is considered real if there are 2 or more matches on Google