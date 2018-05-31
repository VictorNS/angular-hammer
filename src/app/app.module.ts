import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomHammerGestureConfig } from './custom-hammer-gesture-config';
import { AppRoutingModule } from './app-routing.module';
import { HScrollComponent } from './h-scroll/h-scroll.component';
import { VScrollComponent } from './v-scroll/v-scroll.component';
import { JustEventsComponent } from './just-events/just-events.component';

@NgModule({
  declarations: [
    AppComponent,
    HScrollComponent,
    VScrollComponent,
    JustEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerGestureConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
