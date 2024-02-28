describe("Navigation", () => {
  it("should navigate to the about page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // Find the MuiLink element with text "About"
    cy.get('a[href*="/about"]').contains("About").click();

    // Assertions remain the same:
    cy.url().should("include", "/about");
    cy.get("div").contains("About");
  });
});
