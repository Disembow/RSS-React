describe('About page', () => {
  beforeEach(() => {
    cy.visit('/about');
  });

  it('finds and navigates through header links', () => {
    cy.contains('Home').click().url().should('equal', 'http://localhost:666/');
    cy.visit('/about');
    cy.contains('Form').click().url().should('equal', 'http://localhost:666/forms');
  });

  it('has page name', () => {
    cy.contains('About');
  });

  it('should redirect to github by clicking on its icon located in footer', () => {
    cy.get('.footer__github').click().url().should('equal', 'https://github.com/Disembow');
  });

  it('should redirect to RS School by clicking on its icon located in footer', () => {
    cy.get('.footer__rss').click().url().should('equal', 'https://rs.school/react/');
  });
});
