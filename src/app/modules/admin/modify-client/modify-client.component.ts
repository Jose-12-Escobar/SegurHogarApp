import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SidebarService } from 'src/app/Services/sidebar.service';
import { Client } from '../models/client-model';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-modify-client',
  templateUrl: './modify-client.component.html',
  styleUrls: ['./modify-client.component.css']
})
export class ModifyClientComponent implements OnInit {

  formGroupSearch !: FormGroup;
  formGroupClient !: FormGroup;
  isExist: boolean = true;
  tiposDocumentos !: { name: string }[];
  documentLabel !: string;
  codCliente !: string;
  cliente !: Client[];



  constructor(public _show: SidebarService, private fb: FormBuilder, private _localStorageService: LocalStorageService) {
    _show.changeShowSidebar(true);
  }

  ngOnInit(): void {

    this.codCliente = this._localStorageService.getItem('idCliente');
    this.initFormSearch();
    this.initFormClient();
    this.formGroupClient.disable()
    this.tiposDocumentos = [
      { name: 'DNI' },
      { name: 'NIE' }
    ];

    if (this.codCliente) {
      this.cliente = this._localStorageService.getItemId(this.codCliente)
      this.formGroupClient.enable();
      this.formGroupSearch.disable();
      this.showClientInformation(this.cliente)
    }else{
      this.formGroupSearch.enable();
    }
  }

  initFormSearch() {
    this.formGroupSearch = this.fb.group({
      id_documento: [null, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]]
    });
  }

  initFormClient() {
    this.formGroupClient = this.fb.group({
      nombre: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      apellidos: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
      fe_nacimiento: [null, [Validators.required]],
      tipo_documento: [null, [Validators.required]],
      documento: [null, [Validators.required]],
      mail: [null, [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")]],
      telefono: [null, [Validators.required, Validators.minLength(9), Validators.maxLength(20)]]
    });

  }

  isValid(campo: string, formGroup: FormGroup) {
    return formGroup.controls[campo].touched && formGroup.controls[campo].invalid;
  }

  getMensaje(campo: string, formGroup: FormGroup): string {
    const error = formGroup.get(campo)?.errors;
    let msg: string = "";

    if (error?.['required']) {
      msg = 'El campo es obligatorio';
    }
    else if (error?.['minlength']) {
      msg = {
        id_documento: "No cumple el mínimo de caracteres válido",
        nombre: "El mínimo de caracteres válido es 3",
        apellidos: "El mínimo de caracteres válido es 10",
        telefono: "El mínimo de caracteres válido es 9"
      }[campo] || '';
    }
    else if (error?.['maxlength']) {
      msg = 'Exede el maximo de caracteres';
    }
    else if (error?.['pattern']) {
      msg = 'No cumple el patron estandar';
    }
    return msg;
  }

  searchClient() {
    if (this.formGroupSearch.invalid) {
      this.formGroupSearch.markAllAsTouched();
    } else {
      this.codCliente = this.formGroupSearch.value.id_documento;
      this.cliente = this._localStorageService.getItemId(this.codCliente)
      if (this.cliente != null) {
        this.formGroupClient.enable();
        this.showClientInformation(this.cliente)
      } else {
        this.isExist = false;
        this.formGroupClient.disable();
        this.formGroupClient.reset();
      }
    }
  }

  showClientInformation(cliente: Client[]) {
    this.formGroupClient.controls['nombre'].setValue(cliente[0].nombre);
    this.formGroupClient.controls['apellidos'].setValue(cliente[0].apellidos);
    this.formGroupClient.controls['fe_nacimiento'].setValue(cliente[0].fe_nacimiento);
    this.formGroupClient.controls['tipo_documento'].setValue(cliente[0].tipo_documento);
    this.formGroupClient.controls['documento'].setValue(cliente[0].documento);
    this.formGroupClient.controls['mail'].setValue(cliente[0].email);
    this.formGroupClient.controls['telefono'].setValue(cliente[0].telefono);
  }

  updateLabelDocument(): void {
    this.documentLabel = this.formGroupClient.get('tipo_documento')?.value?.name;
  }

  modifyClient() {
    if (this.formGroupClient.invalid) {
      this.formGroupClient.markAllAsTouched();
    }
  }

  clearForm(){
    this.formGroupClient.reset();
    this.formGroupClient.disable();
    this._localStorageService.setItem('idCliente', null)
    this.formGroupSearch.enable();
  }

}
