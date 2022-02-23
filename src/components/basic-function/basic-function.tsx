import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'basic-function',
  styleUrl: 'basic-function.css',
  shadow: true,
})
export class BasicFunction {

  @State() answer?:number;

  private readonly calculate = ():number => {
    return 5 * 5;
  }

  private readonly getAnswer = () => {
    this.answer = this.calculate();
  }

  render() {
    return (
      <Host>
        <h5>5 x 5 = {this.answer}</h5>
        <button onClick={this.getAnswer}>get answer</button>
      </Host>
    );
  }

}
