describe("Acceso al site y envio de formulario ", () => {
    //cada una de las pruebas
    it("Llenar el formulario con email no valido", () => {
    //cuerpo o instrucciones o acciones de la prueba
    cy.visit('https://ljcl79.github.io/primera-pagina-ia-taller-adl/'); //Cypress visita esta web
    cy.get('[name="name"]').type('maribella');
    cy.get('[name="email"]').type('correo@gmail.com'); //falla correo no valido
    cy.get('#message').type('Mensaje');
    cy.get('#fotos').select('Santiago');
    cy.get('#notificaciones').check(); //usando metodo check
    cy.get('#enviar_formulario').click();
    //cy.get('#enviar_formulario').should('be.visible'); //usando metodo contains
    cy.get('.contactenos').contains('Formulario enviado!').should('not.exist'); //usando metodo contains y should
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