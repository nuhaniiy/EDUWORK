// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("zeroLogin", (username, password) => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.get("#user_login").clear();
    cy.get("#user_login").type(username);
    cy.get("#user_password").clear();
    cy.get("#user_password").type(password);
    cy.get("#user_remember_me").click();
    cy.get("input[name='submit']").click();
  });

  Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies();
    cy.clearLocalStorage();
      cy.get("#user-name").clear();
      cy.get("#user-name").type(username);

      cy.get("#password").clear();
      cy.get("#password").type(password);

      cy.get("#login-button").click();
    //   cy.url().should("include", "inventory.html");

});

Cypress.Commands.add('checkout', (firstName, lastName, postalCode) => {
    cy.get('#checkout').click()
    cy.get('#first-name').type(firstName)
    cy.get('#last-name').type(lastName)
    cy.get('#postal-code').type(postalCode)
    // cy.get('.cart_button').click()
});