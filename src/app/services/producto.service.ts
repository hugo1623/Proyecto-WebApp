import { Injectable } from '@angular/core';
import{HttpClient, HttpResponse,HttpHeaders,HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Producto } from '../models/producto';
import {GLOBAL} from './global';

@Injectable(
  )
export class ProductoService {
  public url:string;

  constructor(
    public _http:HttpClient
  ) { 
    this.url = GLOBAL.url;
  }
  getProductos(){
    return this._http.get(this.url + 'productos')
    .pipe(map(res => res));
  }
}
