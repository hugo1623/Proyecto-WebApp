import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

// Componentes
import{ ComponentsComponent } from './components/components.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductoComponent } from './components/producto/producto.component';
const appRoutes: Routes=[
    {path: '', component: ComponentsComponent},
    {path: 'home', component: ComponentsComponent},
    {path: 'producto', component: ProductoComponent},
    {path: '**', component: ErrorComponent}
];

export const appRoutinProviders: any[]=[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);