import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { MainContainerModule } from './main-container/main-container.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { CursosModule } from './cursos/cursos.module';
import { InscripcionModule } from './inscripcion/inscripcion.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UsuariosModule,
    MainContainerModule,
    EstudiantesModule,
    CursosModule,
    InscripcionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
