import { E2EElement, E2EPage, newE2EPage } from "@stencil/core/testing";

describe('basic-api-mock', () => {

  let page: E2EPage;
  let element: E2EElement;
  beforeEach(async () => {
    page = await newE2EPage({
      html: `<basic-api-mock></basic-api-mock>`
    });
    element = await page.find("basic-api-mock");
  });

  it('renders', async () => {
    const element = await page.find('basic-api-mock');
    expect(element).toHaveClass('hydrated');
  });

  it("renders lists and alert banner when button is clicked", async () => {
    const button = await page.find("basic-api-mock >>> button");
    button.click();
    await page.waitForChanges();

    const mainContainer = await page.find("basic-api-mock >>> .main-container");
    const lists = await mainContainer.findAll("p");
    const alertContainer = await page.find("basic-api-mock >>> .alert-container");
    const alertBanner = alertContainer.find("p");
    expect(lists).not.toBeNull();
    expect(lists.length).toBe(5);
    expect(alertBanner).toBeTruthy();
    expect((await alertBanner).textContent).toBe("Fetch Successfully")
  })
});
