import { Component} from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html'
  // styleUrls: ['./error.component.css']
})
export class ErrorComponent  {
  public titulo:string;

  constructor() { 
    this.titulo="Error !! Página no encontrada."
  }

  ngOnInit(){
    console.log("Componente error.component.ts cargado");
  }

}
