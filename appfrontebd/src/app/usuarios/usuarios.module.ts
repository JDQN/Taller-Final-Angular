import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

/**
 * Modulos de material
 */
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RegistroComponent } from './registro/registro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { MicuentaComponent } from './micuenta/micuenta.component';



@NgModule({
  declarations: [
    LoginComponent,
    ResetPasswordComponent,
    RegistroComponent,
    PerfilComponent,
    AyudaComponent,
    MicuentaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    LoginComponent,
    RegistroComponent,
    PerfilComponent,
    ResetPasswordComponent
  ]
})
export class UsuariosModule { }
