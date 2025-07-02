describe("Acceso al site y envio de formulario ", () => {
    //cada una de las pruebas
    it("Llenar el formulario con email no valido", () => {
    //cuerpo o instrucciones o acciones de la prueba
    cy.visit('https://ljcl79.github.io/primera-pagina-ia-taller-adl/'); //Cypress visita esta web
    cy.get('[name="name"]').type('maribella');
    cy.get('[name="email"]').type('correo'); //falla correo no valido
    cy.get('#message').type('Mensaje');
    cy.get('#enviar_formulario').click();
    //cy.get('.contactenos').contains('Formulario enviado!');
    cy.get('.contactenos').should('be.visible'); //usando metodo contains
    });

    it("Enviar formulario vacio", () => {
    //cuerpo o instrucciones o acciones de la prueba
    cy.visit('https://ljcl79.github.io/primera-pagina-ia-taller-adl/'); //Cypress visita esta web
    cy.get('[name="name"]').type('maribella');
    cy.get('[name="email"]').clear(); //usando metodo clear
    cy.get('#message').clear();
    cy.get('#enviar_formulario').click(); //usando metodo click
    cy.get('#enviar_formulario').should('be.visible'); //usando metodo should
    });
});