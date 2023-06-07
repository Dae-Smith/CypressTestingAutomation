/// <reference types="Cypress" />
///<reference types="cypress-iframe" />
import 'cypress-iframe'

describe('My First Test Suite', function() {
    it('My eighth test case', function() {
        //Goto url
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        
        //Handling Frames with Cypress using real time example
        //Need to install plugin-in npm install -D cypress-iframe
        cy.visit(Cypress.env('url')+"/AutomationPractice/");
        //Get frame by going to developer tools and locate it in the DOM
        cy.frameLoaded('#courses-iframe')
        //When you switch to iframe mode you are seeing what other frames loaded into your object
        cy.iframe().find('a[href*= "mentorship"]').eq(0).click()
        
        cy.iframe().find('h1[class*= "pricing-title"]').should('have.length',2)


})
})