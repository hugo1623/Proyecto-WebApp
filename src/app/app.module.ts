import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

//Rutas
import{routing,appRoutinProviders} from './app.routing';
//Componentes
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductoAddComponent } from './components/producto-add/producto-add.component';
import { ProductoDetailComponent } from './components/producto-detail/producto-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    ErrorComponent,
    ProductoComponent,
    ProductoAddComponent,
    ProductoDetailComponent
    
    
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [appRoutinProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
