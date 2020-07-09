import { Component} from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { ProductoService} from '../../services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  providers:[ProductoService]

})
export class ProductoComponent  {
  public titulo:string;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _productoservice: ProductoService
  ) { 
    this.titulo="Lista de Productos"
  }

  ngOnInit() {

    console.log('Productos lista.component.ts Cargado');
    alert(this._productoservice.getProductos())
  }

}
