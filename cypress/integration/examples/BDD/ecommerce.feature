Feature: End to end eCommerce validation

    application Regression
    @Regression
    Scenario: Ecommerce products delivery
    Given I open eCommerce Page
    When I add items to cart
    Then Validate the total prices
    Then select the country and submit and verify Thankyou
    
    @Smoke
    Scenario: Filling the form to shop
    Given I open Ecommerce Page
    When I fill the form details
    Then validate the forms behaviour 
    Then select the shop page