import { HammerGestureConfig } from '@angular/platform-browser';
import { HammerInstance } from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as Hammer from 'hammerjs/hammer.js';

export class CustomHammerGestureConfig extends HammerGestureConfig {
  buildHammer(element: HTMLElement): HammerInstance {
    return new Hammer(element, {
      /* pan: { direction: Hammer.DIRECTION_ALL },
      ** we don't need this parameter, see hammer.js in node_modules:
      ** defaults: { event: 'pan', ... , direction: DIRECTION_ALL },
      */
      pan: { threshold: 3 },
      press: { time: 200 }, // actulay it's a long press, well after our changes it's not too long :-)
      cssProps: {
        userSelect: 'none', // prevent selections of elements
      }
    });
  }
}
