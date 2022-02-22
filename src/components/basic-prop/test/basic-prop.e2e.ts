import { E2EElement, E2EPage, newE2EPage } from "@stencil/core/testing";

describe("basic-prop", () => {
  let page: E2EPage;
  let element: E2EElement;
  beforeEach(async () => {
    page = await newE2EPage({
      html: `<basic-prop payment-flow="EVC" credit-card="1234-1234-1234-1234"></basic-prop>`
    });
    element = await page.find("basic-prop");
  });

  it('renders', async () => {
    expect(element).toHaveClass("hydrated");
  });

  it("renders spans with correct prop values", async () => {
    const spans = await page.findAll("basic-prop >>> span");
    const flowSpan = spans[0];
    const cc = spans[1];

    expect(flowSpan).toEqualText("Flow: EVC")
    expect(cc).toEqualText("CC#: 1234-1234-1234-1234")
  })
});
