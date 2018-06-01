import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appToucher]'
})
export class ToucherDirective {

  constructor(private elRef: ElementRef) {
  }

  touch1 = { x: 0, y: 0, time: 0 };
  touch2 = { x: 0, y: 0, time: 0 };

  @HostListener('touchstart', ['$event'])
  touchstart(ev) {
    const touch = ev.touches[0] || ev.changedTouches[0];
    this.touch1 = { x: touch.pageX, y: touch.pageY, time: ev.timeStamp };
    this.touch2 = { x: touch.pageX, y: touch.pageY, time: ev.timeStamp };
    //
    ev.preventDefault();
  }

  @HostListener('touchmove', ['$event'])
  touchmove(ev) {
    const touch = ev.touches[0] || ev.changedTouches[0];
    const dx = touch.pageX - this.touch1.x;
    const dy = touch.pageY - this.touch1.y;
    const dt = ev.timeStamp - this.touch1.time;
    this.touch1.x = touch.pageX;
    this.touch1.y = touch.pageY;
    this.touch1.time = ev.timeStamp;
    //
    ev.preventDefault();

    if (dt < 300) {
      this.elRef.nativeElement.scrollTop -= dy;
    }
  }

  @HostListener('touchend', ['$event'])
  touchend(ev) {
    const touch = ev.touches[0] || ev.changedTouches[0];
    const dx = touch.pageX - this.touch2.x;
    const dy = touch.pageY - this.touch2.y;
    const dt = ev.timeStamp - this.touch2.time;
    const target = ev.target;
    //
    ev.preventDefault();

    console.log(`swipe to ${dy} pixels during ${dt}`);
    if (dt < 250) {
      console.log(`looks like a click on`, target);
      //
      const evt = document.createEvent('MouseEvent');
      evt.initEvent('click', true, true);
      target.dispatchEvent(evt);
    }
  }

}
