/// <reference types="Cypress" />

beforeEach(() => {
    
})
describe('Ilk Test' , () => {
    it('Test Case-1', () => {
        cy.visit('https://www.google.com')
        cy.wait(3000)
        cy.scrollTo('top') // dogru kullanim
        cy.get("#input-01").scrollIntoView.should('be.visible').click()
        cy.click('input-01') // yanlis kullanim
    })
})
    it("TC002- SauceDemo Basarisiz Login Testi" , () => {
        
        cy.get("#user-name")
        cy.get("#password")
        cy.fixture("userdata")
        cy.get("user").then((user) => {
            cy.login(user.usernameFake , user.passwordFake)
        })
    })
    it("TC003- SauceDemo Basarili Login Testi" , () => {
        cy.fixture("userdata").as("user")
        cy.get("user").then((user) => {
            cy.login(user.username , user.password)
    })
   
})