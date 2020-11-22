

it('should add notes', () => {
  cy.visit('http://localhost:4200/');
  cy.get('#nota-input')
    .type(4.8);
  cy.get('#percentage-input')
    .type(15);
  cy.get('#send').click();
  cy.get('.note:last')
    .should('have.text', '4.8');
});

it('should show json', () => {
  cy.visit('http://localhost:8080/api/v1/notas/')
})

