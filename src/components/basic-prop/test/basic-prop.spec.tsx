import { newSpecPage } from '@stencil/core/testing';
import { BasicProp } from '../basic-prop';

describe('basic-prop', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BasicProp],
      html: `<basic-prop></basic-prop>`,
    });

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

  it('renders', async () => {
    const page = await newSpecPage({
      components: [BasicProp],
      html: `<basic-prop payment-flow="evc" credit-card="1234-1234-1234-1234"></basic-prop>`,
    });
    
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
