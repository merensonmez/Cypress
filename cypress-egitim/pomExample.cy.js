/// <reference types="Cypress" />

import { Login } from "../../pageobjects/login";
const login = new Login();

describe("SauceDemo Login sayfasi testi", () =>{
    it("TC0001 - SauceDemo sayfasina git ve basligi dogrula" , () =>{
        login.navigate()
        login.title()
        
    })

    it("TC002- SauceDemo Basarisiz Login Testi" , () => {
        login.navigate()
        login.username()
        login.password()
        login.loginBtn()
    })
})