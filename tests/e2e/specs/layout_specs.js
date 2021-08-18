describe('Layout integrity', () => {
  it('Exists Header with img logo', () => {
    cy.visit('/', {
      failOnStatusCode: false
    })
    cy.get('header').find("img[alt='logo da empresa']")
  })
  it('Exists Main with h1', () => {
    cy.visit('/', {
      failOnStatusCode: false
    })
    cy.get('main').find("h1").contains('REABERTURA SMART FIT')
  })
  it('Exists Footer with logo and copyright', () => {
    cy.visit('/', {
      failOnStatusCode: false
    })
    cy.get('footer').find("img[alt='logo da empresa']")
    cy.get('footer').contains('h5', 'Todos os direitos reservados - 2020')
  })
})
