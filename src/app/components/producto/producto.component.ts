import { Component} from '@angular/core';
import { Router, ActivatedRoute, Params, Routes} from '@angular/router'
import { from } from 'rxjs';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  // styleUrls: ['./producto.component.css']
})
export class ProductoComponent  {
  public titulo:string;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router
  ) { 
    this.titulo="Lista de Productos"
  }

  ngOnInit() {
    console.log("Productos lista.component.ts Cargado");
  }

}
