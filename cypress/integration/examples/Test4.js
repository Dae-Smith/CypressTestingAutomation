/// <reference types="Cypress" />


describe('My First Test Suite', function() {
    it('My fourth test case', function() {
        //Goto url
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //Handling Alerts in cypress
        //This one uses id attribute for alert button
        cy.get('#alertbtn').click()
        //This one uses the value attribute for confirm button
        cy.get('[value="Confirm"]').click()
        //Cypress have the capabilities to listen for browser events
        //window:alert
        //cy.on() can trigger any events and takes 2 arguments
        cy.on('window:alert',(str) =>
        {
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        //window:confirm
        cy.on('window:confirm',(str) =>
        {
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        //Cypress has the ability to manipulate the DOM
        //Invoke command in cypress .invoke(functionName)
        //Using jquery removeattr() or remove attribute to remove target attribute from DOM 
        //so cypress can open tab in same window since it can't work on child tabs

        cy.get('#opentab').invoke('removeAttr', 'target').click()

        //Validate URL of current page that's active
        //correct sub string should be ('include','url string')
        cy.url().should('include','qaclickacademy')


        //Cypress command “go” allows you to navigate back or forward to the previous 
        //or next URL in the browser’s history

        cy.go('back')
        cy.go('forward')




})
})