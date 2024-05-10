const { faker } = require('@faker-js/faker')

let fakeName = faker.name.firstName()
let fakeEmail = faker.internet.email()

describe('Faker example' , () => {
    it('Fake kullanici adi, mail girelim' , () => {
        cy.visit('https://automationexercise.com/login')
        cy.get("input[placeholder='Name']").type(fakeName)
        cy.get("input[data-qa='signup-email']").type(fakeEmail)
        cy.get("button[data-qa='signup-button']").click()
    });
});