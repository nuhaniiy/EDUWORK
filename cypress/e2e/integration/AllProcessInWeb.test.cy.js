/// <reference types="cypress" />

describe("Tugas Automation SWAG", () => {
    it("visit the website", () => {
      cy.visit("https://www.saucedemo.com/");
      cy.url().should("include", "");
    });
    // before(() => {
    //   cy.visit("https://www.saucedemo.com/");
    // });
  
    it("Should Try Login Negative", () => {
      cy.clearCookies();
      cy.clearLocalStorage();
      const username = 'asdasd';
      const password = 'asdasd';

      cy.login(username, password);
      cy.get('[data-test="error"]').should('be.visible').and('contain','Epic sadface: Username and password do not match any user in this service');
        // cy.get(".product_sort_container").should("contain.text", "Price (high to low)").click();
      
    });
    it("Should Try Login", () => {
    //   cy.clearCookies();
    //   cy.clearLocalStorage();
      cy.fixture("saucelabs").then((saucelabs) => {
        const username = saucelabs.username;
        const password = saucelabs.password;
  
        cy.login(username, password);
       // cy.url().should("include", "inventory.html");
  
        // cy.get(".product_sort_container").should("contain.text", "Price (high to low)").click();
       
      });
    });

    it("Should Short By", () => {

        cy.get("select").select("Price (low to high)");
        cy.get("#item_2_title_link").find("div").should("contain", "Sauce Labs Onesie").click();
        cy.get('div').should('contain','Sauce Labs Onesie')
        // cy.url().should("include", "inventory-item.html?id=2");
    });
  });