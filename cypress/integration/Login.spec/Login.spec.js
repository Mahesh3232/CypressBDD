import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('User is at the login page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})

When('User enters username as {string} and password as {string}', (username, password) => {
    cy.get('[placeholder="Username"]').type(username)
    cy.get('[placeholder="Password"]').type(password)
})

And('User clicks on login button', () => {
    cy.get('.orangehrm-login-button').click()
})

Then('User is able to successfully login to the Website', () => {
    cy.get('[alt="client brand banner"]').should('be.visible', {timeout: 10000})
})