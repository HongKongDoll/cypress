describe('My First Test', () => {
  it('finds the content "type"', () => {
    cy.visit('/');
    cy.pause();

    cy.contains('Learn React').click();

  });
});
