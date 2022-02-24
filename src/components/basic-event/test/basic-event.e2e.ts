import { E2EElement, E2EPage, newE2EPage } from "@stencil/core/testing";

describe('basic-event', () => {
  let page: E2EPage;
  let element: E2EElement;
  beforeEach(async () => { //We want to use beforeEach to reduce redundancy if there are more than one testing cases 
    page = await newE2EPage({
      html: `<basic-event></basic-event>`
    });
    element = await page.find("basic-event");
  });

  it("renders", async () => {
    expect(element).toHaveClass("hydrated"); // Basic rendering of the component will have "hydrated" class
  });

  it("fires event when button is clicked", async () => {
    // you can find element using class or id too #id, .class component
    const button = await page.find("basic-event >>> .click-event"); //When the StencilJS component's shadow is set up as true, we have to drill down from it's component using "">>>""
    const clickEventSpy = await page.spyOnEvent("clickEvent"); //spyOnEvent can spy any event we create in this component. Must be the name we use for @Event

    button.click(); //Any element can be clicked by using click()
    await page.waitForChanges();

    expect(clickEventSpy).toHaveReceivedEvent(); //If there is no detail passing within the event
  })

  it("fires event with detail when button is clicked", async () => {
    const button = await page.find("basic-event >>> .click-with-detail-event");
    const clickEventSpy = await page.spyOnEvent("clickEventWithDetail");

    button.click();
    await page.waitForChanges();

    expect(clickEventSpy).toHaveReceivedEvent();
    expect(clickEventSpy).toHaveReceivedEventDetail({"data": "some data"}) //If there is detail passing within the event
  })

});
