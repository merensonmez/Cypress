/// <reference types="Cypress" />

const { faker } = require('@faker-js/faker')

let fakeName = faker.name.firstName()
let fakeEmail = faker.internet.email()

describe("DemoQa Test" , ()  =>{
    it("Login to site and click elements button" , () =>{
        cy.visit("https://demoqa.com/")
        cy.get("div[class='category-cards'] div:nth-child(1) div:nth-child(1) div:nth-child(3) h5:nth-child(1)").click()
        cy.wait(1000)
        
    })
    it("Write information" , () => {
        cy.visit("https://demoqa.com/text-box");
        cy.wait(2000)
        cy.get("input#userName").type('Eren');
        cy.get("#userEmail").type(fakeEmail);
        cy.get("#currentAddress").type("Zonguldak Kozlu");
        cy.wait(1000)
        cy.get("#permanentAddress").type("Malatya Yesilyurt")
        cy.get("#submit").click()
    })

})