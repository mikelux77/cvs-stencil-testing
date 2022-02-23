import { Component, Host, h, State } from '@stencil/core';
import { ApiData } from './apiData';

@Component({
  tag: 'basic-api-mock',
  styleUrl: 'basic-api-mock.css',
  shadow: false,
})
export class BasicApiMock {

  @State() list?:any;
  @State() isSuccess:boolean = false
  @State() isFailed: boolean = false;

  private readonly fetchData  = () => {
    const data = ApiData.fetchData()
    if(data.statusCode === "0000") {
      this.list = data.body.data
      this.isSuccess = true;
      this.isFailed = false;
    }else {
      this.isSuccess = false;
      this.isFailed = true;
    }
  }

  render() {
    return (
      <Host>
        <div class="container">
          <div class="alert-container">
            {this.isSuccess && <p>Fetch Successfully</p>}
            {this.isFailed && <p>Fetch Failed</p>}
          </div>

          <div class="main-container">  
          {this.list && this.list.map(each=> {
            return (
            <p>{each}</p>
            )
          })}
          </div>
          <button onClick={this.fetchData}>Fetch Data</button>
        </div>
      </Host>
    );
  }

}
