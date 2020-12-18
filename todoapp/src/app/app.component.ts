import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todoapp';

  messageToChild = 'Im parent';

  countInParent;

  showCountChanged(count) {
    console.log(count);
    this.countInParent = `this is parent : ${count}`;
  }



}
