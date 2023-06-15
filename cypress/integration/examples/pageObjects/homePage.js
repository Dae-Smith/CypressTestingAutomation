//How to declare a class in JS
class homePage
{

    getEditBox()
    {
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getTwoWayDataBinding()
        {
            return cy.get(':nth-child(4) > .ng-untouched')
        }

    getGender()
    {
        return cy.get('select')
    }

    getEntrepreneur()
    {
        return cy.get('3inlineRadio3')
    }

    getShopTab()
    {
        return cy.get(':nth-child(2) > .nav.link')
    }

}
//To make available to all files in framework you have to export class
export default homePage;