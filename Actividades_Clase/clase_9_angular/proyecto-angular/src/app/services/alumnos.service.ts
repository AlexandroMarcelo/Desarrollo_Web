import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor() { }

  getAlumnos(){
    return[
      {
        nombre:"Alumno1",
        matricula:1
      },
      {
        nombre:"Alumno2",
        matricula:2
      },
      {
        nombre:"Alumno3",
        matricula:3
      }
    ];
  }
}
