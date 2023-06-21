/// <reference types="Cypress" />

describe('My first Mock API Suite', function()
{
    it('My first test case HTTP', function()
    {
        cy.request('Post', 'http://216.10.245.166/Library/Addbook.php', {

            "name" : "Learn Appium Automation with Java",
            "isbn" : "bcdsss",
            "aisle" : "22s7",
            "author" : "John Foe"
        }).then(function(response)
        {
            expect(response.body).to.have.property("Msg","successfully added")
            expect(response.body).to.eq(200)
        })





    })
})