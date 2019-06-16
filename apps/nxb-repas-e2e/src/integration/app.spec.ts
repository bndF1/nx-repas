import { getGreeting } from '../support/app.po';

describe('nxb-repas', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to nxb-repas!');
  });
});
