

it('should add notes', () => {
  cy.visit('http://localhost:4200/');
  cy.get('#mat-input-0')
    .type(4.8);
  cy.get('#mat-input-1')
    .type(15);
  cy.get('#send').click();
  cy.get('.note:last')
    .should('have.text', '4.8');
});

