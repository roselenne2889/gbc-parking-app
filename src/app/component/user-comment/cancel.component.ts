import { Component } from '@angular/core';

@Component({
  selector: 'cancel',
  template: `
    <button (click)="cancelButton()">Submit</button>
    {{clickMessage}}`
})
export class CancelComponent {
  
  //this is just testing to see if the button is working.
    clickMessage = '';

    cancelButton() {
    this.clickMessage = 'if this pop up, it works!!!';
  }
}