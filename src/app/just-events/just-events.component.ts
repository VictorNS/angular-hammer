import { Component } from '@angular/core';

@Component({
  selector: 'app-just-events',
  templateUrl: './just-events.component.html',
  styleUrls: ['./just-events.component.scss']
})
export class JustEventsComponent {

  text: string;

  onEvent(ev) {
    this.text = ev.type + ' gesture detected.';
  }

}
