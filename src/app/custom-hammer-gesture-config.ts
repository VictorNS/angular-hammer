import { HammerGestureConfig } from '@angular/platform-browser';
import { HammerInstance } from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as Hammer from 'hammerjs/hammer.min.js';

export class CustomHammerGestureConfig extends HammerGestureConfig {
  buildHammer(element: HTMLElement): HammerInstance {
    return new Hammer(element, {
      press: { time: 200 },
      cssProps: {
        userSelect: 'none',
        contentZooming: 'none',
        tapHighlightColor: 'rgba(0,0,0,0)',
        touchCallout: 'none',
        touchSelect: 'none',
        userDrag: 'none'
      }
    });
  }
}
