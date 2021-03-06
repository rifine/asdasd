import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarPageRoutingModule } from './calendar-routing.module';
import { RouterModule } from '@angular/router';
import { CalendarModule } from 'ion2-calendar';



import { CalendarPage } from './calendar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: CalendarPage
      }
  ]),
  CalendarModule
],
  declarations: [CalendarPage]
})
export class CalendarPageModule {}
