import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SidebarService } from 'src/app/Services/sidebar.service';
import { Client } from '../models/client-model';
import { LocalStorageService } from '../services/local-storage.service';
import { AdminService } from '../services/admin.service';
import { MessageService } from 'primeng/api';
import { ValidatorDocuemntId } from '../validator/validatorDI';

@Component({
  selector: 'app-modify-client',
  templateUrl: './modify-client.component.html',
  styleUrls: ['./modify-client.component.css']
})
export class ModifyClientComponent implements OnInit {

  formGroupSearch !: FormGroup;
  formGroupClient !: FormGroup;
  tiposDocumentos !: { name: string }[];
  documentLabel !: string;
  codCliente !: string;
  client !: Client;




  constructor(
    public _show: SidebarService,
    private fb: FormBuilder,
    private _localStorageService: LocalStorageService,
    private _adminService: AdminService,
    private _messageService: MessageService) {
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
      this._adminService.getClientById(this.codCliente).subscribe({
        next: (res: Client) => {
          this.formGroupClient.enable();
          this.formGroupSearch.disable();
          this.showClientInformation(res)
          localStorage.removeItem('idCliente');
        }
      })
    }else{
      this.formGroupSearch.enable();
    }
  }

  initFormSearch() {
    this.formGroupSearch = this.fb.group({
      id_documento: [null, [Validators.required,ValidatorDocuemntId.validDucumentId, Validators.minLength(9), Validators.maxLength(9)]]
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
    return formGroup.controls[campo].touched && formGroup.controls[campo].invalid
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
    else if(error?.['dniInvalid']) {
      msg = 'El DNI no es valido.'
    }
    else if(error?.['documentInvalid']) {
      msg = 'Documento de identificacion invalido'
    }
    else if(error?.['nieInvalid']) {
      msg = 'El NIE no es valido'
    }

    return msg;
  }

  searchClient() {
    if (this.formGroupSearch.invalid) {
      this.formGroupSearch.markAllAsTouched();
    } else {
      this._adminService.getClientByDni(this.formGroupSearch.value.id_documento).subscribe(
        (res) => {
          this.client = res;
          this.formGroupClient.enable();
          this.showClientInformation(this.client)
        }, () => {
          this._messageService.add({ severity: 'error',
          summary: 'Error',
          detail: 'No hay nigun cliente asociado a ese documento de identidad' });
          this.formGroupClient.disable();
        }
      )
    }
  }

  showClientInformation(client: Client) {
    this.formGroupClient.controls['nombre'].setValue(client.nombre);
    this.formGroupClient.controls['apellidos'].setValue(`${client.primerApellido} ${client.segundoApellido} `);
    this.formGroupClient.controls['fe_nacimiento'].setValue(client.fechaNacimiento);
    this.formGroupClient.controls['documento'].setValue(client.documento);
    this.formGroupClient.controls['mail'].setValue(client.mail);
    this.formGroupClient.controls['telefono'].setValue(client.telefono);
    this.formGroupClient.controls['tipo_documento'].setValue(
      client.documento[0] !== ('X') &&
        client.documento[0] !== ('Y') &&
        client.documento[0] !== ('Z') ? { name: 'DNI' } : { name: 'NIE' });
  }

  updateLabelDocument(): void {

    this.documentLabel = this.formGroupClient.get('tipo_documento')?.value?.name;

  }

  modifyClient() {
    if (this.formGroupClient.invalid) {
      this.formGroupClient.markAllAsTouched();
    }
  }

  clearForm() {
    this.formGroupClient.reset();
    this.formGroupClient.disable();
    this._localStorageService.setItem('idCliente', null)
    this.formGroupSearch.enable();
  }

}
