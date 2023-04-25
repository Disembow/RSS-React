describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('finds and navigates through header links', () => {
    cy.contains('Home');
    cy.contains('About').click().url().should('equal', 'http://localhost:666/about');
    cy.contains('Form').click().url().should('equal', 'http://localhost:666/forms');
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
      .should('have.text', 'About');
  });

  it('navigates to Form page by clicking on the link', () => {
    cy.get('.navigation__item')
      .contains(/form/i)
      .click()
      .get('h1')
      .should('have.text', 'Form page');
  });

  it('navigates to 404 page in case of wrong path', () => {
    cy.visit('/wrong-path-to-page').get('h1').should('have.text', 'Page not found :(');
  });

  it('should open modal window by clicking on card', () => {
    const randomNumber = Math.trunc(Math.random() * 70 + 1);
    cy.get(`#${randomNumber}`).click().get('.overlay').should('be.visible');

    cy.get('.overlay').click(0, 0).should('not.exist');
  });

  it('should redirect to github by clicking on its icon located in footer', () => {
    cy.get('.footer__github').click().url().should('equal', 'https://github.com/Disembow');
  });

  it('should redirect to RS School by clicking on its icon located in footer', () => {
    cy.get('.footer__rss')
      .click()
      .url()
      .should('equal', 'https://app.rs.school/registry/student?course=react-2023-q1');
  });
});
