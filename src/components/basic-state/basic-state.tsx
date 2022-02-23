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
    this.isSubmitted = true;
    return;
  }

  private readonly handleCancel = ():void => {
    this.isSubmitted = false;
    this.creditCard = '';
  }

  render() {
    return (
      <Host>
        <div class="container">

          <input 
          value={this.creditCard}
          onKeyDown={this.handleInput}
          />

          <div class="button-container">
          <button class="submit-button" onClick={this.handleSubmit}>Submit</button>
          <button class="cancel-button" onClick={this.handleCancel}>Cancel</button>
          </div>

          <div>
            <h3>{this.isSubmitted ? `Input submitted : ${this.creditCard}` : ""}</h3>
          </div>
        </div>
      </Host>
    );
  }

}
