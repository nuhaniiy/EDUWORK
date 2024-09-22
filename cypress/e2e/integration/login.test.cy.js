/// <reference types="cypress" />

describe('Login', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html',{timeout: 50000});
        cy.url().should('include','index.html');
        cy.get('#signin_button').click();
    });
    it('should try to login with invalid credentials', () => {
        cy.get('#login_form').should('be.visible');
        cy.get('#user_login').type('invalid username');
        cy.get('#user_password').type('invalid password');
        cy.get('#user_remember_me').check();
        cy.get('input[type="submit"]').click();
    });
    it('should display error message', () => {
        cy.get('.alert-error').should('be.visible').and('contain.text','Login and/or password are wrong.');
    });
    it('should login to application with valid data', () => {
        cy.fixture('user').then((user) => { 
            const username = user.username;
            const password = user.password;
            // cy.get('#user_login').clear()
            // cy.get('#user_login').type(username);
            // cy.get('#user_password').clear()
            // cy.get('#user_password').type(password);
            // cy.get('#user_remember_me').check();
            // cy.get('input[type="submit"]').click();
            cy.zeroLogin(username,password);
        cy.get('h2').should('be.visible').and('contain.text','Cash Accounts');
        });
    });
    it('should logout from application', () => {
        cy.contains('username').click();
        cy.get('#logout_link').click();
        cy.get('strong').should('contain.text','Home');
        cy.get('#signin_button').should('be.visible');
        cy.get('#searchTerm')
    });
});