import App from './../../src/App';

describe('text control', () => {
  beforeEach( () => {
    cy.mount(<App />);
  })

  it('Learn React text control', () => {
    cy.get(".App-link").should('have.text','Learn React');
  })
})