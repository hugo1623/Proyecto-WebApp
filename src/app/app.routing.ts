import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { ComponentsComponent } from './components/components.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductoAddComponent } from './components/producto-add/producto-add.component';
import { ErrorComponent } from './components/error/error.component';

const appRoutes: Routes = [
  { path: '', component: ComponentsComponent },
  { path: 'home', component: ComponentsComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'crearproducto', component: ProductoAddComponent },
  { path: '**', component: ErrorComponent },
];

export const appRoutinProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
