import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

/* Importaciones PrimeNG */
import { PasswordModule } from 'primeng/password';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PasswordModule
  ]
})
export class AuthModule { }
