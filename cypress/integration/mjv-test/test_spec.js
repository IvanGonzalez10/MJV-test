/* global describe, it, cy */

describe("mjv-test", function () {
  it("para probar si la app funciona", function () {
    cy.visit("/");
  });
  it("navegar a login", function () {
    cy.visit("/login/");
    cy.get("div");
  });
  it("navegar a las categorias de la app", function () {
    cy.visit("/categories/");
    cy.get("div");
  });
  it("navegar con la NavBar a la home desde categories", function () {
    cy.visit("/categories/");
    cy.get("nav a").first().click();
    cy.url().should("include", "/");
  });
  it("navegar con la NavBar a la home desde el login", function () {
    cy.visit("/login/");
    cy.get("nav a").first().click();
    cy.url().should("include", "/");
  });
  it("navegar con el logo a la home", function () {
    cy.visit("/login/");
    cy.get("a").first().click();
    cy.url().should("include", "/");
  });
  it("navegar a un URL desconocido", function () {
    cy.visit("/gsgsfsf/");
    cy.get("div");
  });
});