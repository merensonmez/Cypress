/// <reference types="Cypress" />

describe('Ilk Test' , () => {
  it('Test Case-1', () => {
      cy.visit('https://www.google.com')
      cy.wait(3000)
      cy.scrollTo('top') // dogru kullanim
      cy.get("#input-01").scrollIntoView.should('be.visible').click()
      cy.click('input-01') // yanlis kullanim
  })
  it('Test Case-2', () => {
      
  })
}); 