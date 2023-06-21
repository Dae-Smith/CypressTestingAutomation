/// <reference types="Cypress" />

describe('My first Mock HTTP Suite', function()
{
    it('My first test case HTTP', function()
    {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
            (req)=>
            {
                //You are modifying a new url here by changing author's name= 
                // Status 403 indicates that the server understands the request but refuses -
                //to authorize it due to correct author isn't recognized. 
            req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
    
            req.continue((res)=>
            //This means request is being sent to the server
            {
            // expect(res.statusCode).to.equal(403)
            })
        }
        ).as("dummyUrl")
        
        cy.get("button[class='btn btn-primary']").click()
        cy.wait('@dummyUrl')


        //length of the response array = rows of the table




    })
})