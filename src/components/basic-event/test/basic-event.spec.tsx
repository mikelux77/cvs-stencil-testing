import { newSpecPage, SpecPage } from "@stencil/core/testing";
import { BasicEvent } from '../basic-event';

describe('basic-event', () => {
  let page: SpecPage;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [BasicEvent],
      html: `
        <basic-event>
        </basic-event>
      `
    });
    await page.waitForChanges();
  });

  it('renders', async () => {
    expect(page.root).toEqualHtml(`
    <basic-event>
      <mock:shadow-root>
        <div>
          <button class=\"click-event\">
            Click Event
          </button>
          <button class=\"click-with-detail-event\">
            Click Event With Details
          </button>
        </div>
      </mock:shadow-root>
    </basic-event>
    `);
  });

  it("fires clickEvent event on clickHandler", async () => {
    const spyClickEvent = jest.fn();
    page.doc.addEventListener("clickEvent", spyClickEvent);

    page.rootInstance.clickHandler();
    await page.waitForChanges();

    expect(spyClickEvent).toHaveBeenCalled();
  })

  it("fires clickEvent event multiple times on clickHandler", async () => {
    const spyClickEvent = jest.fn();
    page.doc.addEventListener("clickEvent", spyClickEvent);

    page.rootInstance.clickHandler();
    page.rootInstance.clickHandler();
    page.rootInstance.clickHandler();
    await page.waitForChanges();

    expect(spyClickEvent).toHaveBeenCalled();
    expect(spyClickEvent).toHaveBeenCalledTimes(3);
  })

  it("fires clickEventWithDetail event on clickWithDetailHandler", async () => {
    const spyClickEvent = jest.fn();
    page.doc.addEventListener("clickEventWithDetail", spyClickEvent);

    page.rootInstance.clickWithDetailHandler();
    await page.waitForChanges();

    expect(spyClickEvent).toHaveBeenCalled();
  })
});
