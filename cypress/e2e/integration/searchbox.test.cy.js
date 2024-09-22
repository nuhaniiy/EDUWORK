/// <reference types="cypress" />

describe('Searchbox', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html',{timeout: 10000});
    });

    it('should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('bank{enter}');
    });
    it('should show search results page', () => {
        cy.get('h2').should('contain.text','Search Results:')
    });
    it('should show search results', () => {
        cy.get('a').should('contain.text','Personal Banking')
    });
});

