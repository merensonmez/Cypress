/// <reference types="Cypress" />

describe("Custom Commands login icin deneme", () =>{

    beforeEach(() => {
        cy.viewport("ipad-mini")
    })
    it("Basarili login sayfasi testi" , () =>{
        cy.viewport("iphone-8")
        cy.fixture("userdata").as("user")
        cy.visit('https://www.saucedemo.com/')
        cy.get("@user").then((user) => {
            cy.login(user.username,user.password)
        })
    })
    it("Basarili login sayfasi testi" , () =>{
        
    })
    it("Basarili login sayfasi testi" , () =>{
        
    })
})