import { newE2EPage } from '@stencil/core/testing';

describe('basic-state', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<basic-state></basic-state>');

    const element = await page.find('basic-state');
    expect(element).toHaveClass('hydrated');
  });
});
