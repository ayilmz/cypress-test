describe('input control', () => {
  beforeEach( () => {
    cy.visit("http://localhost:3000/")
  })

  it('city and district', () => {
    cy.get('[type="submit"]').should("not.exist");
    cy.get("#city").type("istanbul");
    cy.get("#district").type("şişli");
    cy.get('[type="submit"]').should("exist");
  })
})