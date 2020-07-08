import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';

//Rutas
import{routing,appRoutinProviders} from './app.routing' ;
@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent
    
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutinProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
