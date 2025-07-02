describe("Validando de login", () => {
    it("validar inicio de sesion", () => {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('#username').type('tomsmith'); 
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('.radius').click();
        cy.get('#flash').contains('You logged into a secure area').should('be.visible');
    }); 
});