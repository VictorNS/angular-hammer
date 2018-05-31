import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-h-scroll',
  templateUrl: './h-scroll.component.html',
  styleUrls: ['./h-scroll.component.scss']
})
export class HScrollComponent {

  numbers = new Array<number>(100);

  @ViewChild('scrollable')
  private _div: ElementRef;
  private _initialScrollPosition = 0;

  constructor() {
    for (let i = 0; i < 100; i++) {
      this.numbers[i] = i;
    }
  }

  onPanStart() {
    this._initialScrollPosition = this._div.nativeElement.scrollLeft;
  }
  onPan(event) {
    this._div.nativeElement.scrollLeft = this._initialScrollPosition - event.deltaX;
  }
  onPanEnd(event) {
    const d = event.deltaX < 0 ? -1 : 1;
    const newPos = this._div.nativeElement.scrollLeft + d * event.velocityX * 10;
    console.log('scrollLeft, newPos', this._div.nativeElement.scrollLeft, newPos);
    this._div.nativeElement.scrollLeft = newPos;
  }

}
