import { E2EElement, E2EPage, newE2EPage } from "@stencil/core/testing";

describe("basic-state", () => {
  let page: E2EPage;
  let element: E2EElement;
  beforeEach(async () => { //We want to use beforeEach to reduce redundancy if there are more than one testing cases 
    page = await newE2EPage({
      html: `<basic-state></basic-state>`
    });
    element = await page.find("basic-state");
  });

  it("renders", async () => {
    expect(element).toHaveClass("hydrated"); // Basic rendering of the component will have "hydrated" class
  });

  it("renders h3 element without any text inside + without submitting", async () => {
     // you can find element using class or id too #id, .class component
    const h3Element = await page.find("basic-state >>> h3"); //When the StencilJS component's shadow is set up as true, we have to drill down from it's component using "">>>""
    //We can test its textContent or built-in function toEqualText()
    expect(h3Element.textContent).toBe("")
    expect(h3Element).toEqualText("")
  })

  it("changes input values as user types", async () => {
    const input = await page.find("basic-state >>> input");
    expect(await input.getProperty("value")).toBe(""); //We can get the value property from input element and test it

    input.press("a"); //input has press method and can be used to press any characters
    input.press("b");
    input.press("c");
    await page.waitForChanges(); //If any changes have made to page, we must waitForChanges()
    expect(await input.getProperty("value")).toBe("abc");
  })

  it("set h3 Element text context when user submit", async () => {
    const mockData = "testing input";
    const input = await page.find("basic-state >>> input");
    const submitButton = await page.find("basic-state >>> .submit-button")

    for (let i = 0; i < mockData.length; i ++) { //When testing a long string, we can use a loop instead of writing many input.press("")
      await input.press(mockData[i]);
    }

    const h3Element = await page.find("basic-state >>>h3");
    submitButton.click(); //Any element can be clicked by using click()
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
