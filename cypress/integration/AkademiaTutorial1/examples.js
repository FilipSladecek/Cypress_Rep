/// <reference types="cypress" />

it('Akademia testing aplikacie', () => {
    cy.visit('/')
    cy.contains("We care")
    cy.contains("Accept all & visit the site").click()
    cy.contains("Not Sure")
    //cy.click("#fa fa-logo")
    cy.get('#w3loginbtn').click()
    cy.get('_3L6qc -fif_input_wrp ')
});