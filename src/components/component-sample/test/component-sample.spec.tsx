import { newSpecPage } from '@stencil/core/testing';
import { ComponentSample } from '../component-sample';

describe('component-sample', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ComponentSample],
      html: `<component-sample></component-sample>`,
    });
    
    //Basic Html structure testing
    expect(page.root).toEqualHtml(`
    <component-sample>
      <mock:shadow-root>
        <h3>
          I'm a child component
        </h3>
        <div class=\"container\">
          <div class=\"box1\"></div>
          <div class=\"box2\"></div>
          <div class=\"box3\"></div>
        </div>
      </mock:shadow-root>
    </component-sample>
    `);
  });
});
