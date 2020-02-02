import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  template: `
    <button (click)="dashboardButton()">Submit</button>
    {{clickMessage}}`
})
export class ReturnDashComponent {
  
  //this is just testing to see if the button is working.
    clickMessage = '';

    dashboardButton() {
    this.clickMessage = 'if this pop up, it works!!!';
  }
}