/// <reference types="Cypress" />


describe('My First Test Suite', function() {
    it('My sixth test case', function() {
        //Goto url
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
       
        //Mouse hover events are not supported in cypress
        //Use jQuery show() method to display hidden and selected elements.
        //.invoke('show') should be applied to parent element. Also helps you use jQuery methods
        cy.get('div.mouse-hover-content').invoke('show')
        //If top was a hidden element you can you the force argument to .click({force: true})
        cy.contains('Top').click()
        cy.url().should('include','top')





})
})