// @ts-nocheck
import { BasicApiMock } from '../basic-api-mock';
import { newSpecPage, SpecPage } from "@stencil/core/testing";
import {ApiData} from '../apiData'

describe('basic-api-mock', () => {
  let page: SpecPage;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [BasicApiMock],
      html: `<basic-api-mock>
      </basic-api-mock>`,
    });
    await page.waitForChanges();
  });

  it('renders', async () => {
    expect(page.root).toEqualHtml(`
    <basic-api-mock>
      <mock:shadow-root>
        <div class=\"container\">
          <div class=\"alert-container\"></div>
          <div class=\"main-container\"></div>
          <button>
            Fetch Data
          </button>
        </div>
      </mock:shadow-root>
    </basic-api-mock>
    `);
  });

  it("API successfully returns data with status code 0000", async () => {
    // ApiData.fetchData = () => {
    //   return {
    //     statusCode: "0000",
    //     body: {
    //         data: [
    //             "Apple",
    //             "Banana",
    //             "Cherry",
    //             "Grape",
    //             "Watermelon",
    //         ]
    //     }
    // }
    // }
    // page.rootInstance.fetchData();
    // await page.waitForChanges();
    const container = page.root.querySelector("div")
    console.log(container)
    // const mainContainer = container.querySelector(".main-container")
    // const lists = mainContainer.querySelectorAll("p")
    // expect(page.rootInstance.isSuccess).toBe(true);
 })
});
