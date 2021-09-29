import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';

@NgModule({
  exports: [
    ButtonModule,
    CalendarModule,
    DropdownModule,
    InputTextModule,
    MenubarModule
  ]
})
export class PrimengModule { }
