import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'; 
import{routing,appRoutinProviders} from './app.routing';
//Rutas
import { ComponentsComponent } from './components/components.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductoAddComponent } from './components/producto-add/producto-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    ErrorComponent,
    ProductoComponent,
    ProductoAddComponent
    
    
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    RouterModule
  ],
  providers: [appRoutinProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
