import { Component, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidbar',
  templateUrl: './sidbar.component.html',
  styleUrls: ['./sidbar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {

   items !: MenuItem[] ;

   constructor( ) {
   }

    ngOnInit() {
        this.items = [
            {
                label: 'Clientes',
                icon: 'pi pi-user',
                items: [
                    { label: 'Nuevo', icon: 'pi pi-user-plus', routerLink: '/admin/newClient', styleClass:"text-decoration-none" },
                    { label: 'Modificar', icon: 'pi pi-user-edit', routerLink: '/admin/modifyClient' },
                    { label: 'Lista', icon: 'pi pi-list', routerLink: '/admin/listClient' }
                ]
            },
            {
                label: 'Siniestros',
                items: [
                    { label: 'Option1', icon: 'pi pi-times' },
                    { label: 'Option2', icon: 'pi pi-times', },
                    { label: 'Option3', icon: 'pi pi-times', }
                ]
            },
            {
              label: 'Polizas',
              items: [
                  { label: 'Option1', icon: 'pi pi-times' },
                  { label: 'Option2', icon: 'pi pi-times', },
                  { label: 'Option3', icon: 'pi pi-times', }
              ]
          }
        ];
    }

    ngOnDestroy(): void {
    }

}
