import { Component} from '@angular/core';

@Component({
  selector: 'submit-comment',
  template: `<button (click)="submitButton()">Submit</button>
  {{clickMessage}}`

})
export class SubmitComponent{
    
    clickMessage = '';

    submitButton() {
    this.clickMessage = 'if this pop up, it works!!!';
  }

}
