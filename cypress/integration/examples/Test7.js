/// <reference types="Cypress" />


describe('My First Test Suite', function() {
    it('My seventh test case', function() {
        //Goto url
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        
        //The jQuery .prop() method gets the property value for only the first element in the matched set.
        //cy.get('#opentab').prop('href') whenever you have a cypress command and jQuery method
        //you must resolve the promise so you will have to write it this way
        cy.get('#opentab').then(function(el) 
        {
        
            const url = el.prop('href')
            cy.log(url)
            cy.visit(url)
        
        })

        //Use cy.origin(url, ()=> 
        
        //{
        //    cy.get('parent tagname.class and child href').click()
       // })
       //this allows you to run other domains in the same block of code
       //Any domain outside this block won't execute in cypress.
       //It also uses a nameless or anonymous function.



})
})