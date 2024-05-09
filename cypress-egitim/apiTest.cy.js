/// <reference types="Cypress" />

describe('Basit API Testi', () => {
    it('Headers Dogrulama Testi' , () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/1')
        .its('headers')
        .its('content-type')
        .should('include' , 'application/json; charset-utf-8')
    })
})