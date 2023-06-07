/// <reference types="Cypress" />


describe('My First Test Suite', function() {
    it('My fifth test case', function() {
        //Goto url
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        
        //Handling Web tables with Cypress using each command
        //In CSS to write [2] index position is tr td:nth-child(2)

        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

            const text = $el.text()
            if (text.includes('Python')) {
                //next() method gets the immediately following sibling of each DOM element
                //within a set of DOM elements
                //eq method extracts the index you're looking for
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
                {
                    //text is an jQuery object so we need to use .then(function()) to resolve this promise
                    //then you can use text
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }

        })




})
})