import { capitalize } from 'cypress/types/lodash'
import {testClass} from '../../page_objects/testPageObject'
const startClass = new testClass

it('testing typescript', () => {
    cy.visit('de ')
    cy.openPage('API')
startClass.start()
.end('Meno')
})

describe('Test set for academy', () =>{

    it.skip('testing mail', () => {
        cy.visit('https://courses.ultimateqa.com/collections')
        cy.contains('Sign In').click()
        cy.get('a[href="/users/sign_up"]').click()
        /*cy.get('.form__control').eq(0).type('surprise-amount@gnf1yifp.mailosaur.net')
        cy.get('.form__control').eq(1).type('abeceda123')
        cy.get('input.button').click()
        cy.get('input').type('abeceda123{enter}')
        cy.get('p').should('contain', 'Your Ultimate QA course details.')*/
    })

    it.only('testing_POST', () => {
        cy.request({
            method: 'POST',
            url: 'https://mailosaur.com/api/messages/search?server=mbbwpk6p',
            headers: {
                authorization: 'Basic ' + Buffer.from('U9mQbeNoA5d0cs0O').toString('base64')
            },
            body:{
                sentTo: 'wind-simply@mbbwpk6p.mailosaur.net'

            }
        }).then((res) => {
            expect(res.body.items[0].subject).equal('Resending: 👉 Allure TestOps Hands-On Guide: Part 1')
        })
    })
})