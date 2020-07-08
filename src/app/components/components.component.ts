import { Component } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  // styleUrls: ['./components.component.css']
})
export class ComponentsComponent {
  public titulo:string;

  constructor() { 
    this.titulo=" WebApp de productos con Angular";
  }

  ngOnInit() {
    console.log("Se ha cargado el componente ");
  }

}
