import { newSpecPage, SpecPage } from "@stencil/core/testing";
import { BasicState } from '../basic-state';

describe('basic-state', () => {
  let page: SpecPage;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [BasicState],
      html: `
        <basic-state>
        </basic-state>
      `
    });
    await page.waitForChanges();
  });

  it('renders', async () => {
    expect(page.root).toEqualHtml(`
    <basic-state>
      <mock:shadow-root>
        <div class=\"container\">
          <input value=\"\">
          <div class=\"button-container\">
            <button class=\"submit-button\">
              Submit
            </button>
            <button class=\"cancel-button\">
              Cancel
            </button>
          </div>
          <div>
            <h3></h3>
          </div>
        </div>
      </mock:shadow-root>
    </basic-state>
    `);
  });

  it("handleSubmit changes isSubmitted state", async () => {
    const previousIsSubmitted = page.rootInstance.isSubmitted;
    expect(previousIsSubmitted).toBe(false);

    page.rootInstance.handleSubmit();

    await page.waitForChanges();

    const afterIsSubmitted = page.rootInstance.isSubmitted;
    expect(afterIsSubmitted).toBe(true);
  })

  it("handleCancel changes isSubmitted and creditCard state", async ()=> {
    const previousIsSubmitted = page.rootInstance.isSubmitted;
    const creditCard = '12345';
    page.rootInstance.creditCard = creditCard;
    await page.waitForChanges();

    expect(page.rootInstance.creditCard).toBe(creditCard);
    expect(previousIsSubmitted).toBe(false);

    page.rootInstance.handleCancel();
    const afterCancelCreditCard = page.rootInstance.creditCard;
    const afterCancelisSubmitted = page.rootInstance.isSubmitted;
    expect(afterCancelCreditCard).toBe("");
    expect(afterCancelisSubmitted).toBe(false);
  })
});
