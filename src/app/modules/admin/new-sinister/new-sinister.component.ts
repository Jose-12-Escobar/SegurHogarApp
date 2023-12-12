import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SidebarService } from 'src/app/Services/sidebar.service';
import { ValidatorDate } from '../validator/validatorDate';
import { ValidatorDocuemntId } from '../validator/validatorDI';

@Component({
  selector: 'app-new-sinister',
  templateUrl: './new-sinister.component.html',
  styleUrls: ['./new-sinister.component.css']
})
export class NewSinisterComponent implements OnInit {

  selectedCategory !: any;
  formGroupNewSinister !: FormGroup;
  state: { state: string, key: string }[] = [
    { state: 'Tramitado', key: '1' },
    { state: 'En proceso', key: '2' },
    { state: 'Finalizado', key: '3' }
  ];

  constructor(public _show: SidebarService, private fb: FormBuilder) {
    this._show.changeShowSidebar(true);
  }

  ngOnInit(): void {
    this.initFormSinister();
  }

  initFormSinister() {
    this.formGroupNewSinister = this.fb.group({
      idClient: [null, [Validators.required, ValidatorDocuemntId.validDucumentId]],
      ref_sinister: [null, [Validators.required]],
      fe_dano: [null, [Validators.required, ValidatorDate.DateTopCurrent]],
      state: [null, [Validators.required]],
      fe_inicio_rep: [null, [Validators.required, this.dateStartOlderDamage.bind(this)]],
      coste: [null, [Validators.required]],
      peritado: [null, [Validators.required]]
    });
  }

  noEsValido(campo: string) {
    return this.formGroupNewSinister.controls[campo].touched && this.formGroupNewSinister.controls[campo].invalid;
  }

  getMensaje(campo: string): string {
    const error = this.formGroupNewSinister.get(campo)?.errors;
    let msg: string = "";

    if (error?.['required']) {
      msg = 'El campo es obligatorio';
    }else if(error?.['fechaSuperiorActual']){
      msg = 'La fecha del daño no puede ser superior a la fecha actual.'
    }else if(error?.['dateStartOlderDamage']) {
      msg = 'La fecha de inicio de reparacion no puede ser antes que la fecha del daño.'
    }else if(error?.['dniInvalid']) {
      msg = 'El DNI no es valido.'
    }else if(error?.['documentInvalid']) {
      msg = 'Documento de identificacion invalido'
    }else if(error?.['nieInvalid']) {
      msg = 'El NIE no es valido'
    }

    return msg;
  }

  guardarDatos() {
    if (this.formGroupNewSinister.invalid) {
      this.formGroupNewSinister.markAllAsTouched();
    }
  }

  clearForm() {
    this.formGroupNewSinister.reset();
  }

  dateStartOlderDamage(control: AbstractControl): { [key: string]: boolean } | null {
    const fechaDano = this.formGroupNewSinister?.get('fe_dano')?.value;
    const fechaInicio = control.value;

    if (fechaInicio && fechaDano) {
      const fechaInicioDate = new Date(fechaInicio);
      const fechaDanoDate = new Date(fechaDano);

      if (fechaDanoDate > fechaInicioDate) {
        return { 'dateStartOlderDamage': true };
      }
    }

    return null;
  }

}


