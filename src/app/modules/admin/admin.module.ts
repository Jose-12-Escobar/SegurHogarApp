import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AdminRoutingModule } from './admin-routing.module';
import { ListClientComponent } from './list-client/list-client.component';
import { NewSinisterComponent } from './new-sinister/new-sinister.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


/* Importaciones PrimeNG */
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    ListClientComponent,
    NewSinisterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TableModule,
    CardModule,
    CalendarModule,
    FormsModule,
    InputTextModule,
    InputNumberModule,
    RadioButtonModule,
    DropdownModule,
    ReactiveFormsModule,
    TooltipModule,
  ],
  providers: [MessageService],
})
export class AdminModule { }
