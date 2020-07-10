import { Component} from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { ProductoService} from '../../services/producto.service';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  providers:[ProductoService]

})
export class ProductoComponent  {
  public titulo:string;
  public productos:Producto[];

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _productoservice: ProductoService
  ) { 
    this.titulo="Lista de Productos"
  }

  ngOnInit() {

    console.log('Productos lista.component.ts Cargado');
    // alert(this._productoservice.getProductos())
    this._productoservice.getProductos().subscribe(
      resul =>{
        // this.productos= resul;
        console.log(resul);

      },
      error =>{
        console.log(<any>error);

      }
    );
  }

}
