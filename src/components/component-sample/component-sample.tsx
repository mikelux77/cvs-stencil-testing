import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'component-sample',
  styleUrl: 'component-sample.scss',
  shadow: true,
})
export class ComponentSample {

  render() {
    return (
      <Host>
        <h3>I'm a child component</h3>
        <div class="container">
          <div class="box1"></div>
          <div class="box2"></div>
          <div class="box3"></div>
        </div>
      </Host>
    );
  }

}
