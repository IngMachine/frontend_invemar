import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Especie } from '../../interfaces/especie';
import { Familia } from '../../interfaces/familia';
import { Proyecto } from '../../interfaces/proyecto';
import { BaseRegistro } from '../../interfaces/base-registro';
import { Departamento } from '../../interfaces/departamento';
import { Municipio } from '../../interfaces/municipio';
import { Localidad } from '../../interfaces/localidad';
import { EcoRegion } from '../../interfaces/eco-region';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  formGroupEspecies!: FormGroup;

  especies!: Especie[];
  familias!: Familia[];
  proyectos!: Proyecto[];
  baseRegistros!: BaseRegistro[];
  departamentos!: Departamento[];
  municipios!: Municipio[];
  localidades!: Localidad[];
  ecoRregiones!: EcoRegion[];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formGroupEspecies = this.fb.group({
      especie: [null, [Validators.required]],
      familia: [null, [Validators.required]],
      nombreComun: [null, [Validators.required]],
      proyecto: [null, [Validators.required]],
      identificador: [null, [Validators.required]],
      baseRegistro: [null, [Validators.required]],
      departamento: [null, [Validators.required]],
      municipio: [null, [Validators.required]],
      localidad: [null, [Validators.required]],
      autor: [null, [Validators.required]],
      latitud: [null, [Validators.required]],
      longitud: [null, [Validators.required]],
      fechaCaptura: [null, [Validators.required]],
      ecoRregiones: [null, [Validators.required]],
    });
  }

  crear(): void {
    console.log(this.formGroupEspecies.value);
  }

}
