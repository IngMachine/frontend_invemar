import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspeciesBiologicosRoutingModule } from './especies-biologicos-routing.module';
import { AgregarComponent } from './components/agregar/agregar.component';
import { ListadoComponent } from './components/listado/listado.component';
import { PrimengModule } from '../primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AgregarComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    EspeciesBiologicosRoutingModule,
    PrimengModule,
    ReactiveFormsModule
  ]
})
export class EspeciesBiologicosModule { }
