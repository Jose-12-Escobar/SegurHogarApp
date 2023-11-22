import { Component, OnInit } from '@angular/core';
import { SidebarService } from './Services/sidebar.service';
import { Client } from './modules/admin/models/client-model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'SegurHogar';
  public show !: boolean;

  cliente : Client[] =   [
    {
      nombre: "Jose Carlos",
      apellidos: "Escobar Carrandi",
      fe_nacimiento: "12/01/2000",
      tipo_documento: { name: "DNI" },
      documento: "12345678A",
      email: "jose@gmail.com",
      telefono: "121234430"
    },
    {
      nombre: "Daniel",
      apellidos: "Acosta Acosta",
      fe_nacimiento: "31/01/1990",
      tipo_documento: { name: "DNI" },
      documento: "87654321A",
      email: "daniel@gmail.com",
      telefono: "333444555"
    },
    {
      nombre: "Luis",
      apellidos: "Díaz Díaz",
      fe_nacimiento: "22/06/1998",
      tipo_documento: { name: "NIE" },
      documento: "S4445556D",
      email: "luis@gmail.com",
      telefono: "888777666"
    },
    {
      nombre: "Carlos",
      apellidos: "Lopez Lopez",
      fe_nacimiento: "02/05/2002",
      tipo_documento: { name: "DNI" },
      documento: "11145678A",
      email: "carlos@gmail.com",
      telefono: "111134430"
    },
    {
      nombre: "Claudia",
      apellidos: "Silva Silva",
      fe_nacimiento: "21/06/1992",
      tipo_documento: { name: "DNI" },
      documento: "22254321A",
      email: "claudia@gmail.com",
      telefono: "222244555"
    },
    {
      nombre: "Laura",
      apellidos: "Pol Pol",
      fe_nacimiento: "25/11/1997",
      tipo_documento: { name: "NIE" },
      documento: "S3335556D",
      email: "laura@gmail.com",
      telefono: "333377666"
    },
    {
      nombre: "Jose Carlos",
      apellidos: "Escobar Carrandi",
      fe_nacimiento: "12/01/2000",
      tipo_documento: { name: "DNI" },
      documento: "44485678A",
      email: "jose@gmail.com",
      telefono: "4444234430"
    },
    {
      nombre: "Daniel",
      apellidos: "Acosta Acosta",
      fe_nacimiento: "31/01/1990",
      tipo_documento: { name: "DNI" },
      documento: "55574321A",
      email: "daniel@gmail.com",
      telefono: "555544555"
    },
    {
      nombre: "Luis",
      apellidos: "Díaz Díaz",
      fe_nacimiento: "22/06/1998",
      tipo_documento: { name: "NIE" },
      documento: "S6665556D",
      email: "luis@gmail.com",
      telefono: "666677666"
    },
    {
      nombre: "Jose Carlos",
      apellidos: "Escobar Carrandi",
      fe_nacimiento: "12/01/2000",
      tipo_documento: { name: "DNI" },
      documento: "77745678A",
      email: "jose@gmail.com",
      telefono: "777734430"
    },
    {
      nombre: "Daniel",
      apellidos: "Acosta Acosta",
      fe_nacimiento: "31/01/1990",
      tipo_documento: { name: "DNI" },
      documento: "88854321A",
      email: "daniel@gmail.com",
      telefono: "888844555"
    },
    {
      nombre: "Luis",
      apellidos: "Díaz Díaz",
      fe_nacimiento: "22/06/1998",
      tipo_documento: { name: "NIE" },
      documento: "S9995556D",
      email: "luis@gmail.com",
      telefono: "999977666"
    },
    {
      nombre: "Jose Carlos",
      apellidos: "Escobar Carrandi",
      fe_nacimiento: "12/01/2000",
      tipo_documento: { name: "DNI" },
      documento: "12311178A",
      email: "jose@gmail.com",
      telefono: "121211110"
    },
    {
      nombre: "Daniel",
      apellidos: "Acosta Acosta",
      fe_nacimiento: "31/01/1990",
      tipo_documento: { name: "DNI" },
      documento: "87622201A",
      email: "daniel@gmail.com",
      telefono: "333422255"
    },
    {
      nombre: "Luis",
      apellidos: "Díaz Díaz",
      fe_nacimiento: "22/06/1998",
      tipo_documento: { name: "NIE" },
      documento: "S4443336D",
      email: "luis@gmail.com",
      telefono: "888733336"
    },
    {
      nombre: "Jose Carlos",
      apellidos: "Escobar Carrandi",
      fe_nacimiento: "12/01/2000",
      tipo_documento: { name: "DNI" },
      documento: "12344478A",
      email: "jose@gmail.com",
      telefono: "121244440"
    },
    {
      nombre: "Daniel",
      apellidos: "Acosta Acosta",
      fe_nacimiento: "31/01/1990",
      tipo_documento: { name: "DNI" },
      documento: "87655521A",
      email: "daniel@gmail.com",
      telefono: "333455559"
    },
    {
      nombre: "Luis",
      apellidos: "Díaz Díaz",
      fe_nacimiento: "22/06/1998",
      tipo_documento: { name: "NIE" },
      documento: "S4446668D",
      email: "luis@gmail.com",
      telefono: "888766664"
    },
  ]


  constructor( public _show: SidebarService){
    this._show.showSidebar.subscribe(res => { this.show = res});
   }

  ngOnInit(): void {
    localStorage.setItem('clientes', JSON.stringify(this.cliente))
  }

}
