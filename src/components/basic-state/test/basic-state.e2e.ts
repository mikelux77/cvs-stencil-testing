import { E2EElement, E2EPage, newE2EPage } from "@stencil/core/testing";

describe("basic-state", () => {
  let page: E2EPage;
  let element: E2EElement;
  beforeEach(async () => {
    page = await newE2EPage({
      html: `<basic-state></basic-state>`
    });
    element = await page.find("basic-state");
  });

  it("renders", async () => {
    expect(element).toHaveClass("hydrated");
  });

  it("renders h3 element without any text inside + without submitting", async () => {
    const h3Element = await page.find("basic-state >>> h3");
    expect(h3Element).toEqualText("")
  })

  it("changes input values as user types", async () => {
    const input = await page.find("basic-state >>> input");
    expect(await input.getProperty("value")).toBe("");

    input.press("a");
    input.press("b");
    input.press("c");
    await page.waitForChanges();
    expect(await input.getProperty("value")).toBe("abc");
  })

  it("set h3 Element text context when user submit", async () => {
    const mockData = "testing input";
    const input = await page.find("basic-state >>> input");
    const submitButton = await page.find("basic-state >>> .submit-button")

    for (let i = 0; i < mockData.length; i ++) {
      await input.press(mockData[i]);
    }

    const h3Element = await page.find("basic-state >>>h3");
    submitButton.click();
    await page.waitForChanges();
    expect(h3Element).toEqualText("Input submitted : testing input")
  })

  it("set h3 Element text context to clearn when user cancel", async () => {
    const mockData = "testing input";
    const input = await page.find("basic-state >>> input");
    const submitButton = await page.find("basic-state >>> .submit-button")
    const cancelButton = await page.find("basic-state >>> .cancel-button")

    for (let i = 0; i < mockData.length; i ++) {
      await input.press(mockData[i]);
    }

    const h3Element = await page.find("basic-state >>>h3");
    submitButton.click();
    await page.waitForChanges();
    expect(h3Element).toEqualText("Input submitted : testing input")

    cancelButton.click();
    await page.waitForChanges();
    expect(h3Element).toEqualText("")
  })
});
