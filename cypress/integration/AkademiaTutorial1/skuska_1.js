describe('Test set 1', () =>{
    it('TC 1', () => {
        cy.visit('https://www.demoblaze.com/')
        cy.intercept('https://api.demoblaze.com/entries').as('Entries')
        cy.intercept('POST', 'https://api.demoblaze.com/view').as('Samsung s6 post')
        cy.wait('@Entries').its('state')
        .should('eq', 'Complete')
        cy.get('@Entries').then(code => {
            expect(code.response.statusCode)
            .to.eq(200)
        })
        cy.get('@Entries').its('response.statusCode')
        .should('eq', 200)
 
        cy.get('@Entries').then(code => {
            Cypress.env('code', code.responseWaited)
        })
 
        cy
        .intercept({
            method: 'GET',
            url: 'https://api.demoblaze.com/entries'
        })
        .as('test page')
         // cy
        // .request({
        //     method: 'POST',
        //     url: 'https://api.demoblaze.com/entries',
        //     body: {
        //         name: 'blabla'
        //     }
        // })


 
    });
    it('Using data', () => {
        const tasks  = ['Ssad', 'Tasd', 'Basd']
        var dict = {
            Name: 'Eric',
            Job: 'Free',
            Skills: 'JS'
        }
        
        let taskname = tasks
        let tasknames = Cypress._.map(tasks, '0')
        let dictionar = Cypress._.mapKeys(dict)
        console.log(taskname)
        console.log(tasknames)
        console.log(dictionar)
        // cy.setCookie('tokenp_', )
    })
});