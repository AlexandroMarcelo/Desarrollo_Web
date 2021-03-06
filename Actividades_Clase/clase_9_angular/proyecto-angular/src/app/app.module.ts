import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TituloComponent } from './titulo/titulo.component';
import { Titulo2Component } from './titulo2/titulo2.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AlumnoComponent } from './alumno/alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    Titulo2Component,
    AlumnosComponent,
    AlumnoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [TituloComponent, AppComponent]
})
export class AppModule { }
