import { E2EElement, E2EPage, newE2EPage } from "@stencil/core/testing";

describe("basic-rendering", () => {
  let page: E2EPage;
  let element: E2EElement;
  beforeEach(async () => { //We want to use beforeEach to reduce redundancy if there are more than one testing cases 
    page = await newE2EPage({
      html: `<basic-rendering></basic-rendering>`
    });
    element = await page.find("basic-rendering");
  });

  it("renders", async () => {
    expect(element).toHaveClass("hydrated"); // Basic rendering of the component will have "hydrated" class
  });

  it("renders h1", async () => {
     // you can find element using class or id too #id, .class component
    const h1Element = await page.find("basic-rendering >>> h1"); //When the StencilJS component's shadow is set up as true, we have to drill down from it's component using "">>>""
    expect(h1Element).toBeTruthy(); //toBeTruthy() or checking not.toBeNull() is great to check the rendering element
    expect(h1Element).not.toBeNull();
  })

  it("renders container div", async () => {
    const containerElement = await page.find("basic-rendering >>> div");
    expect(containerElement).toBeTruthy();
    expect(containerElement).toHaveClass("container")
  })

  it("renders box div", async () => {
    //Youi can find certain element by going down step by step too.
    const divElement = await page.find("basic-rendering >>> .container");
    const label = await divElement.find("label")
    const h5 = await divElement.find("h5")

    expect(label).toBeTruthy();
    expect(h5).toBeTruthy();
    //or just drill down using >>> if shadow for this component is true
    const sameh5 = await page.find("basic-rendering >>> h5");
    expect(sameh5).toBeTruthy()
  })

  it("renders component-sample component", async () => {
    const componentSample = await page.find("basic-rendering >>> component-sample");
    expect(componentSample).toBeTruthy();
  })
});
