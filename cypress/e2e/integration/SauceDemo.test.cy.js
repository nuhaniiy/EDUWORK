/// <reference types="cypress" />

describe("All Proses On Sauce Demo", () => {
    it("All Proses On Sauce Demo", () => {
        cy.visit("https://www.saucedemo.com/");
        cy.url().should("include", "");

        cy.fixture("saucelabs").then((saucelabs) => {
            const username = saucelabs.username;
            const password = saucelabs.password;
            cy.login(username, password); 

        });
        cy.get("select").select("Price (low to high)");
        cy.get("#item_2_title_link").find("div").should("contain", "Sauce Labs Onesie").click();
        cy.get('div').should('contain','Sauce Labs Onesie')

        cy.get('#add-to-cart').click()
        cy.get('.shopping_cart_badge').should('contain', '1');

        cy.get('.shopping_cart_link').click();
        cy.get('span').should('contain.text','Your Cart')

        cy.fixture("saucelabCheckOutForm").then((saucelabCheckOutForm) => {
            const firstName = saucelabCheckOutForm.firstName;
            const lastName = saucelabCheckOutForm.lastName;
            const postalCode = saucelabCheckOutForm.postalCode;

            cy.checkout(firstName, lastName, postalCode);
        });

        
        cy.get('.cart_button').click()
        cy.get('#finish').click()
        cy.get('h2').should('contain.text','Thank you for your order!')
        cy.get('#back-to-products').click()


    });
});