import axiosApi from "@/app/_utils/apiConfig/axiosConfig";
import Page from "@/app/page";

describe("App Page", () => {
  it("Should mount the App page", async () => {
    cy.stub(axiosApi, "get").resolves({
      data: "Zia",
    });
    const comp = await Page();
    cy.mount(comp);
  });
});
