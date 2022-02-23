// @ts-nocheck
import { BasicApiMock } from '../basic-api-mock';
import { newSpecPage, SpecPage } from "@stencil/core/testing";
import {ApiData} from '../apiData'

describe('basic-api-mock', () => {
  let page: SpecPage;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [BasicApiMock],
      html: `<basic-api-mock></basic-api-mock>`,
    });
    await page.waitForChanges();
  });

  it('renders', async () => {
    expect(page.root).toEqualHtml(`
    <basic-api-mock>
      <div class=\"container\">
        <div class=\"alert-container\"></div>
        <div class=\"main-container\"></div>
        <button>
          Fetch Data
        </button>
      </div>
    </basic-api-mock>
    `);
  });

  it("API success set states properly and renders proper elements", async () => {
    ApiData.fetchData = () => {
      return {
        statusCode: "0000",
        body: {
            data: [
                "Apple",
                "Banana",
                "Cherry",
                "Grape",
                "Watermelon",
            ]
        }
    }
    }
    page.rootInstance.fetchData();
    await page.waitForChanges();
    const container = page.root.querySelector(".container");
    const mainContainer = container.querySelector(".main-container")
    const lists = mainContainer.querySelectorAll("p")

    const alertContainer = container.querySelector(".alert-container")
    const alertBanner = alertContainer.querySelector("p");

    expect(container).toBeTruthy();
    expect(mainContainer).toBeTruthy();
    expect(alertContainer).toBeTruthy();
    expect(alertBanner).toBeTruthy()
    
    expect(lists.length).toBe(5);
    expect(alertBanner.textContent).toBe("Fetch Successfully")

    expect(page.rootInstance.isSuccess).toBe(true);
    expect(page.rootInstance.isFailed).toBe(false);
 })

 it("API failure set states properly and renders proper elements", async () => {
  ApiData.fetchData = () => {
    return {
      statusCode: "9999"
  }
  }
  page.rootInstance.fetchData();
  await page.waitForChanges();
  const container = page.root.querySelector(".container");
  const mainContainer = container.querySelector(".main-container")
  const lists = mainContainer.querySelectorAll("p")

  const alertContainer = container.querySelector(".alert-container")
  const alertBanner = alertContainer.querySelector("p");

  expect(container).toBeTruthy();
  expect(mainContainer).toBeTruthy();
  expect(alertContainer).toBeTruthy();
  expect(alertBanner).toBeTruthy()
  
  expect(lists.length).toBe(0);
  expect(alertBanner.textContent).toBe("Fetch Failed")

  expect(page.rootInstance.isSuccess).toBe(false);
  expect(page.rootInstance.isFailed).toBe(true);
})
});
