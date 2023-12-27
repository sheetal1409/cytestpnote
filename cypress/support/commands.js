// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//

// import PageChange from "../integration/examples/pageObjects/PageChange"

// const newPage = new PageChange()

Cypress.Commands.add('PageNum', () => {
    cy.get('h3').should((h3) => {
        let textDisplay = h3.text().split(' ')
        return textDisplay[textDisplay.length]
    })

})

Cypress.Commands.add('CheckDone', (item) => {

    cy.get('ul>li').each((el, index, $list) => {
        if (el.text() == item) {
            cy.get('.fa-circle-check').eq(index).click()
        }

    })
})

Cypress.Commands.add('RemoveItem', (item) => {
    cy.get('ul>li').each((el, index, $list) => {
        if (el.text() == item) {
            cy.get('.fa-circle-minus').eq(index).click()
        }
    })
})



//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
