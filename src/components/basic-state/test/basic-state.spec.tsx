import { newSpecPage } from '@stencil/core/testing';
import { BasicState } from '../basic-state';

describe('basic-state', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BasicState],
      html: `<basic-state></basic-state>`,
    });
    expect(page.root).toEqualHtml(`
      <basic-state>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </basic-state>
    `);
  });
});
