import Form from './../../src/Form';

describe('input control', () => {
  beforeEach( () => {
    cy.mount(<Form />)
  })

  it('city and district', () => {
    cy.get('[type="submit"]').should("not.exist");
    cy.get("#city").type("istanbul");
    cy.get("#district").type("şişli");
    cy.get('[type="submit"]').should("exist");
  })
})