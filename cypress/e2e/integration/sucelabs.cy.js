describe("Automate Checkout Process on SauceDemo", () => {
    before(() => {
        cy.visit("https://www.saucedemo.com/");
    });

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('session-standard_user');
    });

    it("Should login with valid credentials", () => {
        cy.fixture("saucelabs").then((saucelabs) => {
            const username = saucelabs.username;
            const password = saucelabs.password;
            cy.login(username, password); 
        });
    });

    it("Should add a product to the cart", () => {
        cy.get('.inventory_item').first().find('button').click();
        cy.get('.shopping_cart_badge').should('contain', '1');
    });

    it("Should proceed to checkout", () => {
        cy.get('.shopping_cart_link').click();
        cy.get('.checkout_button').click();
    });

    it("Should fill in checkout information", () => {
        cy.fixture("saucelabCheckOutForm").then((checkout) => {
            cy.get('#first-name').type(checkout.firstName);
            cy.get('#last-name').type(checkout.lastName);
            cy.get('#postal-code').type(checkout.postalCode);
        });
        cy.get('.cart_button').click();
    });

    it("Should finish the checkout process", () => {
        cy.get('.cart_button').click();
        cy.get('[data-test="back-to-products"]')
    });
});
