import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SidebarService } from 'src/app/Services/sidebar.service';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})
export class NuevoClienteComponent implements OnInit{

  formGroup !: FormGroup;
  tiposDocumentos !: {name: string; code: string;}[];
  documentLabel : string = "Seleccione tipo de documento";

  constructor( public _show: SidebarService, private fb : FormBuilder){
    _show.changeShowSidebar(true);
  }


  ngOnInit(): void {
      this.initFormNewClient();
      this.formGroup.get('documento')?.disable();
      this.tiposDocumentos = [
        { name: 'DNI', code: 'dni' },
        { name: 'NIE', code: 'nie' }
    ];
  }

  initFormNewClient() {
    this.formGroup = this.fb.group({
      nombre: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      apellidos: [null, [Validators.required,  Validators.minLength(10), Validators.maxLength(100)]],
      fe_nacimiento: [null, [Validators.required]],
      tipo_documento: [null, [Validators.required]],
      documento: [null, [Validators.required]],
      mail: [null, [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")]],
      telefono: [null, [Validators.required, Validators.minLength(9), Validators.maxLength(20)]]
    });

  }

  noEsValido(campo: string) {
    return this.formGroup.controls[campo].touched && this.formGroup.controls[campo].invalid;
  }

  getMensaje(campo: string): string {
    const error = this.formGroup.get(campo)?.errors;
    let msg:string="";

    if (error?.['required']) {
      msg='El campo es obligatorio';
    }
    else if(error?.['minlength']){
      msg= {
        nombre:"El mínimo de caracteres válido es 3",
        apellidos:"El mínimo de caracteres válido es 10",
        telefono:"El mínimo de caracteres válido es 9"
        }[campo]|| '';
    }
    else if(error?.['maxlength']){
      msg= 'Exede el maximo de caracteres';
    }
    else if(error?.['pattern']){
      msg= 'No cumple el patron estandar';
    }

    return msg;
  }

  updateLabelDocument(): void{
    this.formGroup.get('documento')?.enable();
    this.documentLabel = this.formGroup.get('tipo_documento')?.value.name;
  }

  guardarDatos(){
    if (this.formGroup.invalid) {
          this.formGroup.markAllAsTouched();
        }
}
}

