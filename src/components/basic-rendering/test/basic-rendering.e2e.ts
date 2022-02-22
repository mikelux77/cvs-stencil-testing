import { E2EElement, E2EPage, newE2EPage } from "@stencil/core/testing";

describe("basic-rendering", () => {
  let page: E2EPage;
  let element: E2EElement;
  beforeEach(async () => {
    page = await newE2EPage({
      html: `<basic-rendering></basic-rendering>`
    });
    element = await page.find("basic-rendering");
  });

  it("renders", async () => {
    expect(element).toHaveClass("hydrated");
  });

  it("renders h1", async () => {
    const h1Element = await page.find("basic-rendering >>> h1");
    expect(h1Element).toBeTruthy();
  })

  it("renders container div", async () => {
    const containerElement = await page.find("basic-rendering >>> div");
    // const containerElement = await page.find("basic-rendering >>> .container");
    // you can find element using class or id too
    expect(containerElement).toBeTruthy();
    expect(containerElement).toHaveClass("container")
  })

  it("renders box div", async () => {
    const divElement = await page.find("basic-rendering >>> .container");
    const label = await divElement.find("label")
    const input = await divElement.find("input")
    expect(label).toBeTruthy();
    expect(input).toBeTruthy();
  })

  it("renders component-sample component", async () => {
    const componentSample = await page.find("basic-rendering >>> component-sample");
    expect(componentSample).toBeTruthy();
  })
});
