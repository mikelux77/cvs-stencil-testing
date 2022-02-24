import { newSpecPage, SpecPage } from "@stencil/core/testing";
import { BasicFunction } from '../basic-function';

describe('basic-function', () => {

  let page: SpecPage;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [BasicFunction],
      html: `
        <basic-function>
        </basic-function>
      `
    });
    await page.waitForChanges();
  });
  it('renders', async () => {
    //Basic Html structure testing
    expect(page.root).toEqualHtml(`
    <basic-function>
      <mock:shadow-root>
        <h5>
          5 x 5 =
        </h5>
        <button>
          get answer
        </button>
      </mock:shadow-root>
    </basic-function>
    `);
  });

  it("calculate functions works properly", async ()=> {
    const expected = 25;
    const actual = page.rootInstance.calculate(); //We can access to component's methods or states using rootInstance

    expect(expected).toBe(actual)
  })
});
