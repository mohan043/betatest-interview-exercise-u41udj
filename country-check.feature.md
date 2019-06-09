Feature: Country-Check
	As a competent coder
	I want to view and filter a list of countries
	In order to demonstrate knowledge of Angular web development


  Background:
    Given the following countries:
      | NAME     | IS VISITED |
      | Andorra  | true       |
      | Anguilla | false      |
      | Albania  | false      |


  Scenario Outline: View Layout
    Given I have navigated to a completed 'betatest-solutions-interview-exercise' app in my web browser
    Then I should see a layout with a 'Filter' single-state select button input with the following segments:
      | All         |
      | Visited     | 
      | Not Visited |
    And the layout should have a list with the following columns:
      | (checkbox)  |
      | Name        |
    And the list row checkboxes should contain a <checked or unchecked> box for a country that is <is visited>

    Examples:
      | is visited | checked or unchecked  |
      | true       | checked               |
      | false      | unchecked             |
    

  Scenario Outline: Filter List
    Given I have pressed the <all or visited or not visited> select button segment
    Then the <country> should be <shown or hidden>
     
    Examples:
      | all or visited or not visited | country  | shown or hidden |
      | all                           | Andorra  | shown           |
      | all                           | Anguilla | shown           |
      | all                           | Albania  | shown           |
      | visited                       | Andorra  | shown           |
      | visited                       | Anguilla | hidden          |
      | visited                       | Albania  | hidden          |
      | not visited                   | Andorra  | hidden          |
      | not visited                   | Anguilla | shown           |
      | not visited                   | Albania  | shown           |
