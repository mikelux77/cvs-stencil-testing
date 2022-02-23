import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'basic-rendering',
  styleUrl: 'basic-rendering.css',
  shadow: true,
})
export class BasicRendering {

  render() {
    return (
      <Host>
        <h1 class="title"> basic rendering</h1>
        <div class="container">
          <h5>Basic H5 element</h5>
          <label>Basic label element</label>
          <component-sample></component-sample>
        </div>
      </Host>
    );
  }

}
