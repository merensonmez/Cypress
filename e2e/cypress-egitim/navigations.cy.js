/// <reference types="Cypress" />

describe("Tarayicida ileri geri kullanimi", () =>{
    it("Cypress.io sitesine git,feature'a tikla sonra geri ve ileri komutlarini kullan" , () =>{
        cy.visit('https://www.cypress.io/') // cypress ana sayfa
        cy.title().should('eq', "Testing Frameworks for Javascript | Write, Run, Debug | Cypress")

        cy.get('body astro-island li:nth-child(5)').click() // pricing sayfasi
        cy.title().should('eq' , 'Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing')

        cy.go('back') // geri gidiliecek,cypress anasayfaya gidecek
        cy.title().should('eq', 'Testing Frameworks for Javascript | Write, Run, Debug | Cypress')

        cy.wait(2000)

        cy.go('forward') // ileri gidilecek, pricing sayfasi goruntulenecek
        cy.title().should('eq' , 'Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing')

        cy.go(-1) // geri gidiliecek,cypress anasayfaya gidecek
        cy.title().should('eq', 'Testing Frameworks for Javascript | Write, Run, Debug | Cypress')

        cy.go(1) // ileri gidilecek, pricing sayfasi goruntulenecek
        cy.title().should('eq' , 'Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing')
    })
})