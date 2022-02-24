import { E2EElement, E2EPage, newE2EPage } from "@stencil/core/testing";

describe('basic-function', () => {
  let page: E2EPage;
  let element: E2EElement;
  
  beforeEach(async () => {  //We want to use beforeEach to reduce redundancy if there are more than one testing cases 
    page = await newE2EPage({
      html: `<basic-function></basic-function>`
    });
    element = await page.find("basic-function");
  });

  it('renders', async () => {
    const element = await page.find('basic-function');
    expect(element).toHaveClass('hydrated'); // Basic rendering of the component will have "hydrated" class
  });

  it("renders h5 element without calculating", async () => {
    const h5Element = await page.find("basic-function >>> h5"); //When the StencilJS component's shadow is set up as true, we have to drill down from it's component using "">>>""

    //We can test its textContent or built-in function toEqualText()
    expect(h5Element).toEqualText("5 x 5 =")
    expect(h5Element.textContent).toBe("5 x 5 = ")
  })

  it("renders h5 element with calculating", async () => {
    const button = await page.find("basic-function >>> button");

    const previousH5Element = await page.find("basic-function >>> h5");
    expect(previousH5Element).toEqualText("5 x 5 =")

    button.click(); //Any element can be clicked by using click()
    await page.waitForChanges();

    const afterH5Element = await page.find("basic-function >>> h5");
    expect(afterH5Element).toEqualText("5 x 5 = 25")
  })
});
