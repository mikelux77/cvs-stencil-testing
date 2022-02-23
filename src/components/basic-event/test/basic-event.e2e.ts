import { E2EElement, E2EPage, newE2EPage } from "@stencil/core/testing";

describe('basic-event', () => {
  let page: E2EPage;
  let element: E2EElement;
  beforeEach(async () => {
    page = await newE2EPage({
      html: `<basic-event></basic-event>`
    });
    element = await page.find("basic-event");
  });

  it("fires event when button is clicked", async () => {
    const button = await page.find("basic-event >>> .click-event");
    const clickEventSpy = await page.spyOnEvent("clickEvent");

    button.click();
    await page.waitForChanges();

    expect(clickEventSpy).toHaveReceivedEvent();
  })

  it("fires event with detail when button is clicked", async () => {
    const button = await page.find("basic-event >>> .click-with-detail-event");
    const clickEventSpy = await page.spyOnEvent("clickEventWithDetail");

    button.click();
    await page.waitForChanges();

    expect(clickEventSpy).toHaveReceivedEvent();
    expect(clickEventSpy).toHaveReceivedEventDetail({"data": "some data"})
  })

});
