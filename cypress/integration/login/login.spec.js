
import {Given,When,Then, And} from 'cypress-cucumber-preprocessor/steps'

Given('User is on login page',()=>{
    cy.visit('https://testyou.in/Login.aspx')
})

When('User enters username as {string}',(UserName)=>{
    cy.get('#ctl00_CPHContainer_txtUserLogin').type(UserName)
})

Then('User enters password as {string}',(Password)=>{
    cy.get('[type="password"]').last().type(Password)
})

And('click login button',()=>{
    cy.get('[value="Login"]').last().click()
})

Then('User is on dashboard page',()=>{
    cy.get('.logo').should('be.visible')
})