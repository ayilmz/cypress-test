describe('text control', () => {
  beforeEach( () => {
    cy.visit("http://localhost:3000/")
  })

  it('Learn React text control', () => {
    cy.get(".App-link").should('have.text','Learn React');
  })
})