import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JustEventsComponent } from './just-events/just-events.component';
import { HScrollComponent } from './h-scroll/h-scroll.component';
import { VScrollComponent } from './v-scroll/v-scroll.component';
import { TouchComponent } from './touch/touch.component';

const APP_ROUTES: Routes = [
  { path: 'Events', component: JustEventsComponent },
  { path: 'Hscroll', component: HScrollComponent },
  { path: 'Vscroll', component: VScrollComponent },
  { path: 'Touch', component: TouchComponent },
  { path: '**', redirectTo: 'Events' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
