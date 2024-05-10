describe("Trigger Events" , () => {
    it('Trigger Events- Mouseover' , () =>{
        cy.visit('https://www.amazon.com/')
        cy.get('span#nav-link-accountList-nav-line-1').trigger('mouseover')
        cy.get('div#nav-al-your-account a:nth-child(4) > span').click()
    })

    it('Trigger Events- Mouseover-2' , () =>{
        cy.visit('https://www.amazon.com/')
        cy.get('span#nav-link-accountList-nav-line-1').trigger('mouseover')
        cy.get('div#nav-al-your-account a:nth-child(12) > span').click()
    })
})