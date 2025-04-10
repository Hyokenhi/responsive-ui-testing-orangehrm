describe('Responsive Login Test - OrangeHRM', () => {
    const sizes = ['macbook-15', 'ipad-2', 'iphone-6'];
  
    sizes.forEach((size) => {
      it(`Should login successfully on ${size}`, () => {
        cy.viewport(size);
        cy.visit('/');
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
        cy.get('a.oxd-main-menu-item.active').should('be.visible') // espera a que aparezca
        cy.wait(1000) // tiempo extra para renderizar
        cy.screenshot()
               cy.contains('Dashboard').should('be.visible');
      });
    });
  });
  