import { E2EElement, E2EPage, newE2EPage } from "@stencil/core/testing";

describe("basic-prop", () => {
  let page: E2EPage;
  let element: E2EElement;
  beforeEach(async () => { //We want to use beforeEach to reduce redundancy if there are more than one testing cases
    page = await newE2EPage({
      html: `<basic-prop payment-flow="EVC" credit-card="1234-1234-1234-1234"></basic-prop>` //We can pass props here in html
    });
    element = await page.find("basic-prop");
  });

  it('renders', async () => {
    expect(element).toHaveClass("hydrated"); // Basic rendering of the component will have "hydrated" class
  });

  it("renders spans with correct prop values", async () => {
    const spans = await page.findAll("basic-prop >>> span"); //When the StencilJS component's shadow is set up as true, we have to drill down from it's component using "">>>""
    const flowSpan = spans[0];
    const cc = spans[1];
    expect(cc).toBeTruthy(); //toBeTruthy() or checking not.toBeNull() is great to check the rendering element
    expect(cc).not.toBeNull();

    //We can test its textContent or built-in function toEqualText()
    expect(flowSpan).toEqualText("Flow: EVC") 
    expect(flowSpan.textContent).toBe("Flow: EVC")
    expect(cc).toEqualText("CC#: 1234-1234-1234-1234")
    expect(cc.textContent).toBe("CC#: 1234-1234-1234-1234")
  })
});

describe("basic-prop different way to set props", () => {
  let page: E2EPage;
  let element: E2EElement;
  beforeEach(async () => {
    page = await newE2EPage({
      html: `<basic-prop></basic-prop>`
    });
    element = await page.find("basic-prop");
  });

  it("renders with props in different way", async () => {
    await page.$eval("basic-prop", (basicPropComponent: HTMLBasicPropElement) => { //We can use $eval to set the props for this component
      basicPropComponent.paymentFlow = "EVC";
      basicPropComponent.creditCard = "1234-1234-1234-1234"
    });

    await page.waitForChanges();
    const spans = await page.findAll("basic-prop >>> span"); //When the StencilJS component's shadow is set up as true, we have to drill down from it's component using "">>>""
    const flowSpan = spans[0];
    const cc = spans[1];
    expect(cc).toBeTruthy(); //toBeTruthy() or checking not.toBeNull() is great to check the rendering element
    expect(cc).not.toBeNull();

    //We can test its textContent or built-in function toEqualText()
    expect(flowSpan).toEqualText("Flow: EVC") 
    expect(flowSpan.textContent).toBe("Flow: EVC")
    expect(cc).toEqualText("CC#: 1234-1234-1234-1234")
    expect(cc.textContent).toBe("CC#: 1234-1234-1234-1234")
  })
})