import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductoService } from '../../services/producto.service';
import { Producto } from 'src/app/models/producto';
import { GLOBAL } from '../../services/global';

@Component({
  selector: 'app-producto-add',
  templateUrl: './producto-add.component.html',
  providers: [ProductoService]

})
export class ProductoAddComponent {
  public titulo: string;

  constructor() { 
    this.titulo = "Crear un nuevo Producto"
  }

  ngOnInit(){
    console.log("'producto-add.component.ts cargando ..xd..'");
  }

}
