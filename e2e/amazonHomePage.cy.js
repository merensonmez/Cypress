/// <reference types="Cypress" />

beforeEach(() => {
    cy.visit('https://www.amazon.com/')
})
describe("Amazon  home page", () =>{
    it("Amazon sitesine git" , () =>{
        cy.visit('https://www.amazon.com/')
    })
    it("Amazon.com sitesinde title dogrula" , () =>{
        cy.title().should('include', "Amazon.com. Spend less. Smile more.")
    })
})