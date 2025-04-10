import users from '../fixtures/users.json';

describe('Negative Login Tests - OrangeHRM', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should show error with invalid credentials', () => {
    cy.get('input[name="username"]').type(users.invalidUser.username);
    cy.get('input[name="password"]').type(users.invalidUser.password);
    cy.get('button[type="submit"]').click();
    cy.get('.oxd-alert-content-text')
      .should('contain', 'Invalid credentials');
  });

  it('Should show error when fields are empty', () => {
    cy.get('button[type="submit"]').click();
    cy.get('a.oxd-main-menu-item.active').should('be.visible') // espera a que aparezca
    cy.wait(1000) // tiempo extra para renderizar
    cy.screenshot()
    cy.get('.oxd-input-field-error-message').should('exist');
  });
});
