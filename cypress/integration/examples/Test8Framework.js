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

       


})
})