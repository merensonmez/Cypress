/// <reference types="Cypress"/>

const { faker } = require('@faker-js/faker')

let fakeName = faker.name.firstName()
let fakeLastName = faker.name.lastName()
let fakePostCode = faker.location.zipCode()


describe("GlobalsQA Banking Project Site Test" , () => {
    beforeEach(() => {
    })
    it("Check site" , () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/');
        cy.wait(1000);
        cy.get(':nth-child(3) > .btn').click();
        cy.wait(1000);
        cy.get('[ng-class="btnClass1"]').click();
        cy.wait(1000);
        cy.get(':nth-child(1) > .form-control').type(fakeName);
        cy.wait(1000);
        cy.get(':nth-child(2) > .form-control').type(fakeLastName);
        cy.wait(1000);
        cy.get(':nth-child(3) > .form-control').type(fakePostCode);
        cy.wait(1000);
        cy.get('form.ng-dirty > .btn').click();
        cy.wait(1000);
        cy.get('[ng-class="btnClass2"]').click();
        cy.get('#userSelect').select('6');
        cy.wait(1000);
        cy.get('#currency').select('Dollar');
        cy.wait(1000);
        cy.get('form.ng-dirty > button').click();
        cy.wait(1000);
        cy.get('[ng-class="btnClass3"]').click();
        cy.wait(1000);
        cy.get(':nth-child(1) > :nth-child(5) > button').click();
        cy.wait(1000);
        cy.get('.marTop').screenshot();
        cy.wait(1000);
        cy.get('.home').click();
        cy.wait(1000);
        cy.get('.borderM > :nth-child(1) > .btn').click();
        cy.wait(1000)
        cy.get('#userSelect').select('6');
        cy.wait(1000);
        cy.get('form.ng-valid > .btn').click();
        cy.get('[ng-class="btnClass2"]').click();
        cy.wait(1000);
        cy.get('.form-control').type('1000');
        cy.wait(1000);
        cy.get('form.ng-dirty > .btn').click();
        cy.get('.error').should('be.visible').click();
        cy.wait(1000);
        cy.get('[ng-class="btnClass3"]').click();
        cy.get('.form-control').click();
        cy.wait(1000);
        cy.get('.form-control').type('500');
        cy.get('form.ng-dirty > .btn').click();
        cy.wait(1000);
        cy.get('[ng-class="btnClass1"]').click();
        cy.clock();



    })
})