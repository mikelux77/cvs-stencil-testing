import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { BasicProp } from '../basic-prop';
import { h } from "@stencil/core";

describe('basic-prop', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BasicProp],
      html: `<basic-prop></basic-prop>`,
    });

    //Basic Html structure testing
    expect(page.root).toEqualHtml(`
    <basic-prop>
    <mock:shadow-root>
      <div class=\"container\">
        <span>
          Flow:
        </span>
        <span>
          CC#:
        </span>
      </div>
    </mock:shadow-root>
  </basic-prop>
    `);
  });

  it('renders with props', async () => {
    const page = await newSpecPage({
      components: [BasicProp],
      html: `<basic-prop payment-flow="evc" credit-card="1234-1234-1234-1234"></basic-prop>`,
    });
    
    //after applying the props
    expect(page.root).toEqualHtml(`
    <basic-prop credit-card=\"1234-1234-1234-1234\" payment-flow=\"evc\">
      <mock:shadow-root>
        <div class=\"container\">
          <span>
            Flow: evc
          </span>
          <span>
            CC#: 1234-1234-1234-1234
          </span>
        </div>
      </mock:shadow-root>
    </basic-prop>
    `);
  });
});

//We can test the page with another way to pass props using template
//Note: must import h from @stencil/core because the below is returning jsx (tsx)
describe("basic-prop other way", () => {
  it("renders with props other way", async () => {
    let page: SpecPage = await newSpecPage({
      components: [BasicProp],
      template: () => <basic-prop creditCard="1234-1234-1234-1234" paymentFlow="evc"></basic-prop>
    })

    //after applying the props
    expect(page.root).toEqualHtml(`
    <basic-prop>
      <mock:shadow-root>
        <div class=\"container\">
          <span>
            Flow: evc
          </span>
          <span>
            CC#: 1234-1234-1234-1234
          </span>
        </div>
      </mock:shadow-root>
    </basic-prop>
    `)
  })
})