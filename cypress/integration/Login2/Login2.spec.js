
import {Given,When,Then,And} from 'cypress-cucumber-preprocessor/steps'

Given('User is on login  page',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})

When('User enter username {string} and password as {string}',(UserName,Password)=>{
    cy.get('[placeholder="Username"]').type(UserName)
    cy.get('[placeholder="Password"]').type(Password)
})

And('Click on login button',()=>{
    cy.get('.orangehrm-login-button').click()
})

Then('User in on dashboard page',()=>{
    cy.get('[alt="client brand banner"]').should('be.visible')
})