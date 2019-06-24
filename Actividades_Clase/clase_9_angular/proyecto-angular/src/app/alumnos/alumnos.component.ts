import { Component, OnInit } from '@angular/core';
import  { AlumnosService} from '../services/alumnos.service'; 

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
  providers: [AlumnosService]
})
export class AlumnosComponent implements OnInit {

  alumnos; //es una propiedad por lo que no tiene var

  constructor(alumnosService: AlumnosService) { 
    var suma = 0;//aqui si se pone var por ser variable
    this.alumnos = alumnosService.getAlumnos();
  }

  ngOnInit() {
  }

}
