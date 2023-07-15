import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaInscripcionComponent } from './lista-inscripcion/lista-inscripcion.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { RegistroInscripcionComponent } from './registro-inscripcion/registro-inscripcion.component';


@NgModule({
  declarations: [
    ListaInscripcionComponent,
    RegistroInscripcionComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class InscripcionModule { }