/// <reference types="Cypress" />

//Automating a Form
describe('My First Test Suite', function() {

        before(function(){
            //runs once before all tests in the block
            cy.fixture('example').then(function(data)
            {
    this.data = data
            })
        })

    it('My form test case', function() {
        //Goto url
        cy.visit("https://rahulshettyacademy.com/angularpractice/");
        //Automating a form
        //Find child tagname.classname followed by semicolon:nth-child()
        //Find out what nth child it is 
        cy.get('input[name="name"]:nth-child(1)').type(this.data.name)
        cy.get('input[name="email"]:nth-child(2)').type(this.data.email)
        cy.get('#exampleInputPassword1').type(this.data.password)
        cy.get('#exampleCheck1').click()
        cy.get('select').select(this.data.gender)
        cy.get('#inlineRadio2').click()
        cy.get('input[name="bday"]').type(this.data.birthdate)
        cy.get('input[value="Submit"]').click()
        
        ///Validating attribute properties and their behaviour with cypress assertions
        cy.get(':nth-child(5) > .ng-valid').should('have.value', this.data.name)
        //cy.get('input[name="name"]:nth-child(1)').should('have.attr', 'minlength','2')
        
        //Check if radio/checkbox buttons is disabled
        cy.get('#inlineRadio3').should('be.disabled')
        
        //Building customized Cypress commands for reusing the code
        cy.get(':nth-child(2) > .nav-link').click()
        //Grab all products text using 1 locator using .each() method
        // cy.get('h4.card-title').each(($el, index, $list) => 
        // {
        //     if($el.text().includes('Blackberry'))
        //     {
        //         //Grab all buttons
        //         cy.get("button.btn.btn-info").eq(index).click()
        //     }
        // })
        //We've created a custom command in the support folder for this so we don't have to 
        //Type this code every time see command.js
        //The new cypress command will show like this 
        //cy.selectProduct('Blackberry')

        //What I need to drive the data from multiple products
        //Iterate through array in javascript using .forEach()
        //this.data.productName would swap in place of array1
        //syntax for iterating through array
        // array1.forEach(function(element)
        // {
        //     console.log(element);
        // });
        this.data.productName.forEach(function(element)
        {
            cy.selectProduct(element)
        });

        
})
})