/// <reference types="Cypress" />

const { faker } = require('@faker-js/faker')

let fakeName = faker.name.firstName()
let fakeEmail = faker.internet.email()



describe("Candy Mapper Test" , () => {
    it("Login to site and close ads" , () => {
        cy.visit("https://candymapper.com/")
        cy.get('.x-el-h3').should('be.visible')
        cy.get('#popup-widget111379-close-icon').click()  
        cy.wait(2000)
        
    })
    it("Create account" , () => {
        cy.visit("https://candymapper.com/m/create-account")
        cy.wait(2000)
        cy.get('#popup-widget82402-close-icon').click()
        cy.get(".x-el-form > :nth-child(1) > .x-el").type(fakeName)
        cy.get('.x-el-form > :nth-child(2) > .x-el').type("Sonmez")
        cy.get('.x-el-form > :nth-child(3) > .x-el').type(fakeEmail)
        cy.get('.x-el-form > :nth-child(7) > .x-el').click()
    })
    it("Login to site" , () =>{
        cy.visit("https://candymapper.com/m/login")
        cy.get('#popup-widget82239-close-icon').click()
        cy.get('.x-el-form > :nth-child(1) > .x-el').type("rafox40790@nweal.com")
        cy.get('.x-el-form > :nth-child(2) > .x-el').type("123456Ee")
        cy.get('.x-el-form > :nth-child(5) > .x-el').click()
    })
    it('Write all information in home page' , () => {
        cy.visit("https://candymapper.com/")
        cy.wait(2000)
        cy.get('#popup-widget111379-close-icon').click()  
        cy.get('.c2-l > .c2-15').should('be.visible').trigger('mousedown')
        cy.wait(2000)
        cy.get('#input4').type(fakeName);
        cy.get('#input5').type(fakeEmail);
        
})
})