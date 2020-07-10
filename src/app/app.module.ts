import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';

import { HttpClientModule } from '@angular/common/http'; 
//Rutas
import{routing,appRoutinProviders} from './app.routing';
import { ErrorComponent } from './components/error/error.component';
import { ProductoComponent } from './components/producto/producto.component';
@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    ErrorComponent,
    ProductoComponent
    
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
