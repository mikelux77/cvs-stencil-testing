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
        <label>
          basic input
        </label>
        <input>
        <component-sample></component-sample>
      </div>
    </mock:shadow-root>
  </basic-rendering>
    `);
  });
});
