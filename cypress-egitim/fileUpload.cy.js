/// <reference types="Cypress" />

describe('Cypress File Upload' , () => {
  it('png file upload', () => {
    cy.viewport(1200, 1200)
      cy.visit('https://fineuploader.com/demos.html')
      cy.wait(1000)
      cy.get('[name="qqfile"]').attachFile({filePath: "../fixtures/türkbayragi.png"})
      
  })
}); 