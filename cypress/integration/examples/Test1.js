/// <reference types="Cypress" />


describe('My First Test Suite', function() {
    it('My first test case', function() {
    
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)
        //Parent child chaining
        cy.get('.products').find('.product').should('have.length',4)
        // eq method selects index position
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        //Using Cypress text commands
        //Use .each() method to iterate through array
        cy.get('.products').find('.product').each(($el, index, $list)=> {
            
            const textVeg = $el.find('h4.product-name').text()
                if(textVeg.includes('Cashews')) {
                    //Cannot use .find() & .click() method unless promise is resolved for $el
                    //$el.find('button').click() is the incorrect way
                    cy.wrap($el).find('button').click()
                }
        })
})
})