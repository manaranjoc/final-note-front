describe('Notas list', () => {

  before(() => {
    cy.visit('http://localhost:4200');
  })

  it('should add notes', () => {
    cy.get('#nota-input')
      .type(4.8);
    cy.get('#percentage-input')
      .type(15);

    cy.get('#send').click();

    cy.get('.note:last')
      .should('have.text', '4.8');
  });

  it('should clear input', () => {
    cy.get('#nota-input')
      .type(4.8);
    cy.get('#percentage-input')
      .type(15);

    cy.get('#send').click();

    cy.get('#nota-input').should('have.text', '');
    cy.get('#percentage-input').should('have.text', '');
  })

  it('should make average calculation', () => {
    cy.get('#average').click();

    cy.get('#calc-average').should('not.contain.text', '--')
  })
})
