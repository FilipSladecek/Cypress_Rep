Cypress.Commands.add('openPage', (name) => {
    cy.setCookie('tokenp_','Y2F1MTY1MzYzMg==').visit('https://www.demoblaze.com/' + name)
})  