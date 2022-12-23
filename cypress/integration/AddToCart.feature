Feature: Add to Cart functionality

    Scenario: Add to cart functionality
        Given Visit the Ecommerce site
        When Search the product starts with "ca"
        Then Add "Carrot" in the cart
        Then Proceed for checkout
         And Place the order
         Then select county check the condition tab
         And Validate Thank you msg