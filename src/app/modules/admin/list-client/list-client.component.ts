import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/Services/sidebar.service';
import { Client } from '../models/client-model';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit{

  clientes !: Client[];


  constructor(public _show: SidebarService, private _localStorageService: LocalStorageService) {
    _show.changeShowSidebar(true)
  }

  ngOnInit(): void {
    var cliente  =  localStorage.getItem('clientes');
    if (cliente) {
      this.clientes = JSON.parse(cliente)
    }
  }

  editClient( idClienteModificar: string){
    this._localStorageService.setItem('idCliente', idClienteModificar);
  }
}
