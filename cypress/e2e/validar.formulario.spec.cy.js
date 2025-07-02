describe("Acceso al site y envio de formulario ", () => {
    //cada una de las pruebas
    it("Llenar el formulario", () => {
    //cuerpo o instrucciones o acciones de la prueba
    cy.visit('https://ljcl79.github.io/primera-pagina-ia-taller-adl/'); //Cypress visita esta web
    cy.get('[name="name"]');
    cy.get('[name="email"]');
    cy.get('#message');
    cy.get('#enviar_formulario"]').click(); //usando metodo click
    });
});