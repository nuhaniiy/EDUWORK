/// <reference types="cypress" />

describe('Navbar', () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/index.html', {timeout: 30000});
        cy.url().should('include','index.html');
    });

    it('should display online banking content', () => {
        cy.get('#onlineBankingMenu').click();
        cy.url().should('include','online-banking.html');
        cy.get('#account_summary_link').should('be.visible').and('contain.text','Account Summary');
        cy.get('#account_activity_link').should('be.visible').and('contain.text','Account Activity');
        cy.get('#transfer_funds_link').should('be.visible').and('contain.text','Transfer Funds');
        cy.get('#pay_bills_link').should('be.visible').and('contain.text','Pay Bills');
    });
    it('should display feedback content', () => {
        cy.get('#feedback').click();
        cy.url().should('include','feedback.html');
        cy.get('#feedback-title').should('be.visible').and('contain.text','Feedback');
        cy.get('#name').should('be.visible');
        cy.get('#email').should('be.visible');
        cy.get('#subject').should('be.visible');
        cy.get('#comment').should('be.visible');
    });
    it('should display homepage content', () => {
        cy.get('#homeMenu').click();
        cy.url().should('include','index.html');
        cy.get('#account_activity_link').should('be.visible').and('contain.text','Checking Account Activity');
        cy.get('#transfer_funds_link').should('be.visible').and('contain.text','Transfer Funds');
    });
});
