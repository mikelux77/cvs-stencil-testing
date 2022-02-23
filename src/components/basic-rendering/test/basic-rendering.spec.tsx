import { newSpecPage } from '@stencil/core/testing';
import { BasicRendering } from '../basic-rendering';

describe('basic-rendering', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BasicRendering],
      html: `<basic-rendering></basic-rendering>`,
    });
    expect(page.root).toEqualHtml(`
    <basic-rendering>
      <mock:shadow-root>
        <h1 class=\"title\">
          basic rendering
        </h1>
        <div class=\"container\">
          <h5>
            Basic H5 element
          </h5>
          <label>
            Basic label element
          </label>
          <component-sample></component-sample>
        </div>
      </mock:shadow-root>
    </basic-rendering>
    `);
  });
});
