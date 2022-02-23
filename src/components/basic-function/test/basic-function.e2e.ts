import { newE2EPage } from '@stencil/core/testing';

describe('basic-function', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<basic-function></basic-function>');

    const element = await page.find('basic-function');
    expect(element).toHaveClass('hydrated');
  });
});
