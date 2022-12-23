
import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"

Given('Visit the Ecommerce site',()=>{
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
})

When('Search the product starts with {string}',(keyword)=>{
    cy.get('.search-keyword').type(keyword)
    cy.get('.search-button').click()
})

Then('Add {string} in the cart',(Product)=>{
    cy.get('h4[class="product-name"]').each((el,index)=>{
        //cy.log(typeof(el.text()))
        let Vegi = el.text().replace('- 1 Kg',' ').trim()
        //cy.log(Vegi)
        if(Vegi == Product){
            cy.get('.product-action >button').eq(index).click()
        }
    })
})

Then('Proceed for checkout',()=>{
    cy.get('[alt="Cart"]').click()
    cy.get('.action-block >button').first().click()
})

And('Place the order',()=>{
    cy.contains('Place Order').click()
})

Then('select county check the condition tab',()=>{
    cy.get('select').select('India')
    cy.get('[type="checkbox"]').check()
    cy.get('button').click()
})

And('Validate Thank you msg',()=>{
    cy.contains(`Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!`).should('be.visible')
})
