import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListClientComponent } from './list-client/list-client.component';

/* Importaciones PrimeNG */
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    ListClientComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TableModule,
    CardModule
  ]
})
export class AdminModule { }
