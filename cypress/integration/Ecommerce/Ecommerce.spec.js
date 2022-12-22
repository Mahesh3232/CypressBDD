
import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"


Given('Visit the Ecommerce Site',()=>{
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
})

Then('Search the product starts with {string}',(str)=>{
    cy.get('.search-keyword').type(str)
    cy.get('[class="search-button"]').click()
    cy.wait(2000)
})

And('Add {string} in the cart',(product)=>{
   cy.get('h4[class="product-name"]').each((el,index)=>{
        //cy.log(el.text())
         let p1= el.text().replace(' - 1 Kg',' ').trim()
        //cy.log(p1)
        if( p1 == product){
            cy.get('.product-action > button').eq(index).click()
        }
   })
})

Then('Place order and select the country',()=>{
    cy.get('[alt="Cart"]').click()
    cy.get('.action-block > button').first().click()
    cy.contains('Place Order').click()
    cy.get('select').select('India')
    cy.get('[type="checkbox"]').check()
    cy.get('button').click()
})

And('Validate the Thank you msg',()=>{
    cy.contains(`Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!`).should('be.visible')
})