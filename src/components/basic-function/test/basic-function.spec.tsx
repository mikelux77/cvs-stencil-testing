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
    const actual = page.rootInstance.calculate();

    expect(expected).toBe(actual)
  })
});
