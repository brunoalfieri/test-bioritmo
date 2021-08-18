// https://docs.cypress.io/api/introduction/api.html

describe('Interactive user with form', () => {
  it('Not filter when user not select time interval', () => {
    cy.visit('/')
    cy.get('main').find("form button[type=submit]").click({ force: true })
    cy.get('main').find("#counter").invoke('text').then(counterNumber => {
      expect(counterNumber).equal('0')
    })
  })
  it('filter when user select time interval', () => {
    cy.visit('/')
    cy.get('main').find("form input#morning").check({ force: true })
    cy.get('main').find("form button[type=submit]").click({ force: true })
    cy.get('main').find("#counter").invoke('text').then(counterNumber => {
      expect(counterNumber).not.equal('0')
    })
  })
  it('Verify clear button is functional', () => {
    cy.visit('/')
    cy.get('main').find("form input#morning").check({ force: true })
    cy.get('main').find("form input#filtered_close").check({ force: true })
    cy.get('main').find("form button[type=reset]").click({ force: true })
    cy.get('main').find("form input#morning").should('not.to.be.checked')
    cy.get('main').find("form input#filtered_close").should('not.to.be.checked')
  })
})
