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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("checkFilter", (time, showClosed = false) => {
  cy.get('main').find(`form input#${time}`).check({ force: true })
  if (showClosed) {
    cy.get('main').find("form input#filtered_close").check({ force: true })
  }
  cy.get('main').find("form button[type=submit]").click({ force: true })
  cy.wait(1600)
  cy.get('main').find("#counter").invoke('text').then(counterNumber => {
    expect(counterNumber).not.equal('0')
  })
})

