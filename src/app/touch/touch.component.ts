import { Component } from '@angular/core';

@Component({
  selector: 'app-touch',
  templateUrl: './touch.component.html',
  styleUrls: ['./touch.component.scss']
})
export class TouchComponent {

  numbers = new Array<number>(100);

  constructor() {
    for (let i = 0; i < 100; i++) {
      this.numbers[i] = i;
    }
  }

  onClick(i) {
    console.log(`Click ${i}`);
  }

}
