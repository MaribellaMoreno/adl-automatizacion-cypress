describe("Validando mercado libre", () => {
    it("validar busqueda de producto", () => {
        cy.visit('https://www.mercadolibre.cl/');
        cy.get('#cb1-edit').type('iphone'); 
        cy.get('.nav-search-btn').click();
        cy.origin('https://listado.mercadolibre.cl', () => {
            cy.get('#root-app > div > div.ui-search-main.ui-search-main--only-products.ui-search-main--with-topkeywords > aside > div.ui-search-breadcrumb > h1').contains('Iphone', { matchCase:false });
        });
    }); 
});