import { E2EElement, E2EPage, newE2EPage } from "@stencil/core/testing";

describe("component-sample", () => {
  let page: E2EPage;
  let element: E2EElement;
  
  beforeEach(async () => {  //We want to use beforeEach to reduce redundancy if there are more than one testing cases 
    page = await newE2EPage({
      html: `<component-sample></component-sample>`
    });
    element = await page.find("component-sample");
  });

  it('renders', async () => {
    expect(element).toHaveClass("hydrated"); // Basic rendering of the component will have "hydrated" class
  });

  it("renders h3", async () => {
    // you can find element using class or id too #id, .class component
    const h3Element = await page.find("component-sample >>> h3"); //When the StencilJS component's shadow is set up as true, we have to drill down from it's component using "">>>""
    expect(h3Element).toBeTruthy(); //toBeTruthy() or checking not.toBeNull() is great to check the rendering element
    expect(h3Element).not.toBeNull();
  })

  it("renders container div", async () => {
    const divElement = await page.find("component-sample >>> div");
    expect(divElement).toBeTruthy();
  })

  it("renders box div", async () => {
    const divElement = await page.find("component-sample >>> div");
    const boxElements = await divElement.findAll("div");
    expect(boxElements.length).toBe(3); //You can test the length of all the divs because findAll() returns an array.

    expect(boxElements[0]).toHaveClass("box1") //Testing the correct class
    expect(boxElements[1]).toHaveClass("box2")
    expect(boxElements[2]).toHaveClass("box3")

    expect(boxElements[0]).toBeTruthy()//You can test the element to be truthy along with toHaveClass() above.
  })
});
