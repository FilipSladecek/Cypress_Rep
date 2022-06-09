/// <reference types="cypress" />

describe('Test set for academy', () =>{

    it('Akademia testing aplikacie', () => {
        cy.visit('https://www.demoblaze.com/')
        cy.get('a[href="prod.html?idp_=1"] img').should('be.visible')
        cy.get('a[href="prod.html?idp_=1"]').should('have.length', 2)
        cy.contains('Samsung galaxy s6').should('have.text', 'Samsung galaxy s6')
    });

    it('Akademia testing aplikacie_2', () => {
        
    });

})