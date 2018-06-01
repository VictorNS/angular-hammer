import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-v-scroll',
  templateUrl: './v-scroll.component.html',
  styleUrls: ['./v-scroll.component.scss']
})
export class VScrollComponent {

  text: string;

  onPan(ev) {
    this.text = ev.type + ' gesture detected.';
  }

}
