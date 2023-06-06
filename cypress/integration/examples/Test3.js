/// <reference types="Cypress" />


describe('My First Test Suite', function() {
    it('My third test case', function() {
        //Goto url
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //Automating Checkboxes
        //Assertions like should() describe the behaviour of the selected element.
        //Use .and() to add multiple assertions instead of using .should() over again.
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        //Unchecking a checkbox
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        //Selecting multiple checkboxes instead of 1 at a time.
        //Find the common property they all share
        cy.get('input[type= "checkbox"]').check(['option2','option3'])
        
        //Static Dropdowns

        cy.get('select').select('option2').should('have.value','option2')

        //Dynamic Dropdowns
        //Locate the tagname of the dropdown, this ex uses the id#
        cy.get('#autocomplete').type('ind')
        //Locate the parent element of the choices and space-bar and add the child tagname.
        //Next is to iterate through the choices.
        cy.get('.ui-menu-item div').each(($el, index, $list) => {

            if($el.text()==="India")
            {
                $el.click()
            }

        })
        //check and make sure the assertion checks value so test passes
        cy.get('#autocomplete').should("have.value",'India')

        //Handling Visible and invisible elements using Assertions in Cypress

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //Radio Buttons works the same way as checked boxes
        //In this example we didn't use the tagname (input) but used the attribute "value"
        cy.get('[value="radio2"]').check().should('be.checked')




})
})