import { E2EElement, E2EPage, newE2EPage } from "@stencil/core/testing";

describe("component-sample", () => {
  let page: E2EPage;
  let element: E2EElement;
  beforeEach(async () => {
    page = await newE2EPage({
      html: `<component-sample></component-sample>`
    });
    element = await page.find("component-sample");
  });

  it('renders', async () => {
    expect(element).toHaveClass("hydrated");
  });

  it("renders h3", async () => {
    const h3Element = await page.find("component-sample >>> h3");
    expect(h3Element).toBeTruthy();
  })

  it("renders container div", async () => {
    const divElement = await page.find("component-sample >>> div");
    expect(divElement).toBeTruthy();
  })

  it("renders box div", async () => {
    const divElement = await page.find("component-sample >>> div");
    const boxElements = await divElement.findAll("div");
    expect(boxElements.length).toBe(3);
    expect(boxElements[0]).toHaveClass("box1")
    expect(boxElements[1]).toHaveClass("box2")
    expect(boxElements[2]).toHaveClass("box3")
  })
});
