describe("Hola Mundo Test", () => {
    //cada una de las pruebas
    it("Visitando una galeria de imagenes", () => {
    //cuerpo o instrucciones o acciones de la prueba
    cy.visit('https://ljcl79.github.io/primera-pagina-ia-taller-adl/'); //Cypress visita esta web
    cy.contains('Santiago'); 
    cy.contains('Buenos Aires').should('not.exist');
    cy.get('#formulario').should('be.visible'); 
    cy.get('.item-imagen').should('have.length, 9');
    }); 
});