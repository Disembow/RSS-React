describe('About page', () => {
  beforeEach(() => {
    cy.visit('/some-wrong-path');
  });

  it('finds and navigates through header links', () => {
    cy.contains('Home').click().url().should('equal', 'http://localhost:666/');
    cy.visit('/some-wrong-path');
    cy.contains('About').click().url().should('equal', 'http://localhost:666/about');
    cy.visit('/some-wrong-path');
    cy.contains('Form').click().url().should('equal', 'http://localhost:666/forms');
  });

  it('should redirect to github by clicking on its icon located in footer', () => {
    cy.get('.footer__github').click().url().should('equal', 'https://github.com/Disembow');
  });

  it('should redirect to RS School by clicking on its icon located in footer', () => {
    cy.get('.footer__rss').click().url().should('equal', 'https://rs.school/react/');
  });

  it('has page name', () => {
    cy.contains('Page not found :(');
  });
});
