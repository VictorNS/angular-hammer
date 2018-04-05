import { HammerGestureConfig } from '@angular/platform-browser';
import { HammerInstance } from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as Hammer from 'hammerjs/hammer.min.js';

// just an example, we don't need it actually
export class CustomHammerGestureConfig extends HammerGestureConfig {
  buildHammer(element: HTMLElement): HammerInstance {
    return new Hammer(element, {});
  }
}
