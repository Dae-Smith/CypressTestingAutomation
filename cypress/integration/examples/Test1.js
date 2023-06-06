/// <reference types="Cypress" />


describe('My First Test Suite', function() {
    it('My first test case', function() {
        //Goto url
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)
        //Parent child chaining
        //Assigning aliases to act as a variable for later use
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length',4)
        //Another way to select the product with cypress
        cy.get(':nth-child(3) > .product-action > button').click()
        // eq method selects index position
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
            console.log('sf')
            //.then(function(){}) makes console.log follow order after step 18 is executed
            //Otherwise it will be logged earlier since cypress is async.
        })
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
        //Assert if logo text is correctly displayed with chai assertions.
        cy.get('.brand').should('have.text','GREENKART')

        //When you use non-cypress code (const) and create a variable the application will break 
        //because the promise isn't resolved. This is the wrong way.
        //const logo = cy.get('.brand')
           // cy.log(logo.text())
        //The write way is to resolve it manually using .then() method.
        const logo = cy.get('.brand').then(function(logoElement){
            cy.log(logoElement.text())
            //cy.log will print in testrunner
        })




})
})