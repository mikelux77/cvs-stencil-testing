import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'basic-prop',
  styleUrl: 'basic-prop.css',
  shadow: true,
})
export class BasicProp {

  @Prop() readonly paymentFlow!:string;
  @Prop() readonly creditCard!:string;

  render() {
    return (
      <Host>
        <div class="container">
          <span>Flow: {this.paymentFlow}</span>
          <span>CC#: {this.creditCard}</span>
        </div>
      </Host>
    );
  }

}
