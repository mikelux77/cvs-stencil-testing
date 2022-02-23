import { Component, Host, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'basic-event',
  styleUrl: 'basic-event.css',
  shadow: true,
})
export class BasicEvent {

  @Event() clickEvent!: EventEmitter<any>
  @Event() clickEventWithDetail!: EventEmitter<any>
  @Event() clickMultipleTimes!: EventEmitter<any>

  private readonly clickHandler = () => {
    console.log("clickHandler");
    this.clickEvent.emit();
  }

  private readonly clickWithDetailHandler = () => {
    console.log("clickWithDetailHandler");
    this.clickEventWithDetail.emit({data:"some data"});
  }

  render() {
    return (
      <Host>
        <div>
          <button class={"click-event"} onClick={this.clickHandler}>Click Event</button>
          <button class="click-with-detail-event" onClick={this.clickWithDetailHandler}>Click Event With Details</button>
        </div>
      </Host>
    );
  }
}
