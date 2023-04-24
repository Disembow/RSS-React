describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('finds the navigation links', () => {
    cy.contains('Home');
    cy.contains('About');
    cy.contains('Form');
  });

  it('has page name', () => {
    cy.contains('Home page');
  });

  it('filters cards by typing text into input', () => {
    cy.get('input[type="search"]').type('cult');
    cy.get('input[type="search"]').should('have.value', 'cult');
    cy.get('button').click();
    cy.get('[data-testid="card-item"]').should('have.length', 9);
  });

  it('filters cards by typing year into input', () => {
    cy.get('input[type="search"]').type('1993');
    cy.get('input[type="search"]').should('have.value', '1993');
    cy.get('button').click();
    cy.get('[data-testid="card-item"]').should('have.length', 1);
  });

  it('shows message if search is wrong', () => {
    cy.get('input[type="search"]').type('Ave satan!');
    cy.get('input[type="search"]').should('have.value', 'Ave satan!');
    cy.get('button').click();
    cy.get('.error__message_fetch').should('have.text', 'No result found');
  });

  it('navigates to About page by clicking on the link', () => {
    cy.get('.navigation__item')
      .contains(/about us/i)
      .click()
      .get('h1')
      .should('have.text', /about/i);
  });

  it('', () => {});

  it('', () => {});
});
