import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
<<<<<<< HEAD

/* Importaciones PrimeNG */
import { PasswordModule } from 'primeng/password';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PasswordModule
=======
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


/* Importaciones PrimeNG */
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PasswordModule,
    InputTextModule,
    ButtonModule
>>>>>>> main
  ]
})
export class AuthModule { }
