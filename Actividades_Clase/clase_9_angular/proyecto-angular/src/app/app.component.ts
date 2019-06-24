import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'práctica clase web angular'; //si le cambias, cuando llames esta variable en los componentes {{title}}
  variable = "Soy una variable";

  calificacion = 50;

  leDiClick($event){
    this.variable = "Cambie mi nombre a variable."
    console.log("click", $event);
  }
}
