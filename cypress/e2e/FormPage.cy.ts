import { PostServices } from '../../src/types/enums';

type TMockFormData = {
  radio: string;
  firstName: string;
  lastName: string;
  deliveryDate: string;
  checkbox: boolean;
  postProvider: number;
  avatar: Cypress.FileReference;
};

const mockFormData: TMockFormData[] = [
  {
    radio: 'Mr.',
    firstName: 'Jack',
    lastName: 'Crow',
    deliveryDate: '2023-05-30',
    checkbox: true,
    postProvider: 2,
    avatar: {
      fileName: 'anotherssPicture.png',
      contents: ['here might be your photo'],
      mimeType: 'text/plain',
      lastModified: new Date('Mar 16 1990').valueOf(),
    },
  },
  {
    radio: 'Ms.',
    firstName: 'Jacky',
    lastName: 'Crow',
    deliveryDate: '2023-06-15',
    checkbox: false,
    postProvider: 1,
    avatar: {
      fileName: 'anotherssPicture.png',
      contents: ['here might be your photo'],
      mimeType: 'text/plain',
      lastModified: new Date('Mar 16 1990').valueOf(),
    },
  },
  {
    radio: '',
    firstName: 'Jackson',
    lastName: 'Crowly',
    deliveryDate: '2023-09-13',
    checkbox: false,
    postProvider: 0,
    avatar: {
      fileName: 'anotherssPicture.png',
      contents: ['here might be your photo'],
      mimeType: 'text/plain',
      lastModified: new Date('Mar 16 1990').valueOf(),
    },
  },
];

describe('Form page', () => {
  beforeEach(() => {
    cy.visit('/forms');
  });

  it('should have formbox', () => {
    cy.get('form').should('be.visible');
  });

  it('should create a card for Mr. Jack Crow ', () => {
    mockFormData.forEach((_, i) => {
      cy.get(`[value="${mockFormData[i].radio}"]`).click();
      cy.get('#first-name').type(mockFormData[i].firstName);
      cy.get('#last-name').type(mockFormData[i].lastName);
      cy.get('#delivery-date').type(mockFormData[i].deliveryDate);
      cy.get('#post-select').select(mockFormData[i].postProvider);
      mockFormData[i].checkbox && cy.get('#checkbox').click();
      cy.get('#avatar').selectFile({
        fileName: 'anotherssPicture.png',
        contents: ['here might be your photo'],
        mimeType: 'text/plain',
        lastModified: new Date('Mar 16 1990').valueOf(),
      });
      cy.get('.button').click();

      cy.get('.submit__popup').should('be.visible');
      cy.get('.overlay').click(0, 0);
      cy.get('.submit__popup').should('not.exist');
    });

    cy.get('.card__item').should('have.length', mockFormData.length);

    const card = cy.get('.card__item');
    card.each((e, i) => {
      const item = cy.wrap(e);
      item.get(`:nth-child(${i + 1}) > h3`).should((el) => {
        expect(el.get(0).innerText).to.eq(`Card #${i + 1}`);
      });

      item.get(`:nth-child(${i + 1}) > :nth-child(3) > [data-testid="fullname"]`).should((el) => {
        expect(el.get(0).innerText).to.eq(
          `${mockFormData[i].radio === '' ? '' : mockFormData[i].radio + ' '}${
            mockFormData[i].firstName
          } ${mockFormData[i].lastName}`
        );
      });

      item
        .get(`:nth-child(${i + 1}) > :nth-child(4) > [data-testid="delivery-date"]`)
        .should((el) => {
          expect(el.get(0).innerText).to.eq(mockFormData[i].deliveryDate);
        });

      item
        .get(`:nth-child(${i + 1}) > :nth-child(5) > [data-testid="post-provider"]`)
        .should((el) => {
          expect(el.get(0).innerText).to.eq(
            Object.keys(PostServices)[mockFormData[i].postProvider]
          );
        });
    });

    card.should('exist');
  });
});
