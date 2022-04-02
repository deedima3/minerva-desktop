describe("User can login the page", () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Display login title and subtitle", () => {
    cy.get("h1").should("contain", "Selamat Datang");
    cy.get("h3").should("contain", "Silahkan login untuk lanjut");
    cy.screenshot();
  });

  it("Toast failed login work", () => {
    cy.get("input[id=username]").type("adminganteng");
    cy.get("input[id=password]").type("12345678");
    cy.get("button[type=submit]").click();
    cy.get("div[id=toast]").should("contain", "Login Gagal");
    cy.screenshot();
  });

  it("User can login to the app", () => {
    cy.get("input[id=password]").type("mimin123");
    cy.get("button[type=submit]").click();
    cy.screenshot();
  });


});
