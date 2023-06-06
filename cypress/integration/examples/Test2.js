/// <reference types="Cypress" />


describe('My First Test Suite', function() {
    it('My second test case', function() {
        //Goto url
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //Parent child chaining
        //Assigning aliases to act as a variable for later use
        cy.get('.products').as('productLocator')
        //console.log will print in the dev tools, inspect page and click on console.
        //Using Cypress text commands
        //Use .each() method to iterate through array
        cy.get('@productLocator').find('.product').each(($el, index, $list)=> {
            
            const textVeg = $el.find('h4.product-name').text()
                if(textVeg.includes('Cashews')) {
                    //Cannot use .find() & .click() method unless promise is resolved for $el
                    //$el.find('button').click() is the incorrect way
                    cy.wrap($el).find('button').click()
                }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()




})
})