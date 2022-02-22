import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'basic-state',
  styleUrl: 'basic-state.css',
  shadow: true,
})
export class BasicState {

  @State() isSubmitted:boolean = false

  @State() creditCard:string=''
  
  private readonly handleInput = (e):void => {
    if (e.key === "Backspace") {
      this.creditCard = this.creditCard.slice(0, this.creditCard.length -1)
    }else {
      this.creditCard += e.key
    }
    return;
  }

  private readonly handleSubmit = ():void => {
    this.isSubmitted = !this.isSubmitted;
    return;
  }

  render() {
    return (
      <Host>
        <div>
          {this.isSubmitted ? 
          <h3 class="canceled">Canceled</h3>
          :<h3 class="submitted">Submitted</h3>}

          <input 
          value={this.creditCard}
          onKeyDown={this.handleInput}
          />
          <button onClick={this.handleSubmit}>{this.isSubmitted ? "Canceled" : "Submit"}</button>
        </div>
      </Host>
    );
  }

}
