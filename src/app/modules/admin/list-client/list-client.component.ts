import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/Services/sidebar.service';
import { Client } from '../models/client-model';
import { LocalStorageService } from '../services/local-storage.service';
import { AdminService } from '../services/admin.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit{

  subscription !: Subscription;
  clients !: Client[];

  constructor(public _show: SidebarService, private _localStorageService: LocalStorageService, private _adminService: AdminService) {
    _show.changeShowSidebar(true)
  }

  ngOnInit(): void {
    this._adminService.getAllClients().subscribe({
      next: (res: Client[]) => {
        this.clients = res;
      }
    })
  }

  editClient( idClienteModificar: string){
    this._localStorageService.setItem('idCliente', idClienteModificar);
  }
}
