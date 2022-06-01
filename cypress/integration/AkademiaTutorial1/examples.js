/// <reference types="cypress" />

it('Akademia testing aplikacie', () => {
    cy.visit('/');
    cy.get(".card-body").contains("Elements").click()
    cy.get("#item-0").click()
});