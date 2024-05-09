export class Login {
    navigate(){
        cy.visit('https://www.saucedemo.com/')
    }
    title(){
        cy.title().should('eq', "Swag Labs")
    }
    username(){
        cy.get('#user-name').type('user')
        return  this;
    }
    password(){
        cy.get('#password').type('123456')
    }
    loginBtn(){
        cy.get('#login-button').click()
    }
}