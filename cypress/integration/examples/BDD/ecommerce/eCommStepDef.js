import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../pageObjects/homePage"
import productPage from "../pageObjects/productPage"

const homePage = new homePage()
const productPage = new ProductPage()
let name

Given('I open ecommerce page',function()
{
    //Write code here that explains the step or sentence above
    cy.visit(Cypress.env('url')+"/angularpractice/")
        
})
//When I add items to cart
When('I add items to cart',function()
{
    homePage.getShopTab().click()
        
    this.data.productName.forEach(function(element) {
            cy.selectProduct('element')
        });
        productPage.checkOutButton().click()
})
//And validate the total prices
When('Validate the total prices',function()
{
    var sum = 0
        //Summing up products functionality in cypress
        cy.get('tr td:nth-child(4'/strong).each(($el, index, $list) => {

            //grab the text of jQuery method
            const amount=$el.text()
            //splitting whitespace from product price string to remove ($.) from the 50000
            //res/result
            var res= actualText.split(" ")
            res = res[1].trim()
            sum = Number(sum)+Number(res)
            

        // ₹. 50000
        // res[0]= ₹.
        // res[1]= 50000
        //res or result
        }).then(function()
        {
            cy.log(sum)
        })
        cy.get('h3 strong').then(function(element)
            {
                const amount=element.text()
                //splitting whitespace from product price string to remove ($.) from the 50000
                var res= amount.split(" ")
                var total = res[1].trim()
                expect(Number(total)).to.equal(sum)
            })
})
//Then select the country submit, verify, thankyou
Then('select the country submit verify Thankyou',()=>
{
    cy.contains('Checkout').click()
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({force: true})
        cy.get('input[type="submit"]').click()
        cy.get('.alert').then(function(element)
        {
            const actualText=element.text()
            expect(actualText.includes("Success")).to.be.true
        })
})
//When I fill the form details
When('I fill the form details', function(dataTable)
{
    name = dataTable.rawTable[1][0]
    homePage.getEditBox().type(this.data.name)
    homePage.getGender().select(this.data.gender)
})
//Then validate the forms of behaviour
Then('validate the forms of behaviour',function()
{
    homePage.getTwoWayDataBinding().should('have.value',this.data.name)
    homePage.getEditBox().should('have.atrr','minlength','2')
    homePage.getEntrepreneur().should('be.disabled')
})
//And select the shop page
When('select the shop page',function()
{
    homePage.getShopTab().click()
})