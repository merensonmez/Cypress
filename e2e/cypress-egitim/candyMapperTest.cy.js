/// <reference types="Cypress" />

const { faker } = require('@faker-js/faker')

let fakeName = faker.name.firstName()
let fakeEmail = faker.internet.email()



describe("Candy Mapper Test" , () => {
    it("Login to site and close ads" , () => {
        cy.visit("https://candymapper.com/")
        cy.get('#popup-widget111379-close-icon').click()  
        cy.wait(3000)
        
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
        cy.get('#popup-widget111379-close-icon').click();   
        cy.wait(3000)
        cy.get('.x-el-div.c2-1y > .x-el-form > :nth-child(3)').type(fakeName);
        cy.get('.x-el-div.c2-1y > .x-el-form > :nth-child(4)').type(fakeEmail);
        cy.get('.x-el-div.c2-1y > .x-el-form > :nth-child(5) > .x-el-div').type("Eren Sonmez is a Test Automation Engineer.Cypress,SELENIUM, TESTNG, CUCUMBER")
        cy.get('.x-el-div.c2-1y > .x-el-form > :nth-child(6) > :nth-child(1) > .x-el-div > .x-el').click()
        cy.wait(4000)
        cy.get('.c2-4s > .c2-1z').should('be.visible').and('have.text', 'Thank you for your inquiry! We will get back to you within 48 hours.')        
})
})
