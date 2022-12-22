Feature: Ecommerce Site - Add to Cart

Scenario: Add to cart functionality
    Given Visit the Ecommerce Site
    Then Search the product starts with "Ca"
    And Add "Carrot" in the cart
    Then Place order and select the country
    And Validate the Thank you msg 