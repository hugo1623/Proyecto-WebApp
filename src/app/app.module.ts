import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';

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
    routing
  ],
  providers: [appRoutinProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
