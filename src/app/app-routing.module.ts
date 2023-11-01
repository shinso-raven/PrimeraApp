import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LibroProductoComponent } from './libro-producto/libro-producto.component';
import { TiendaVirtualComponent } from './tienda-virtual/tienda-virtual.component';

const routes: Routes = [
  {path: 'TiendaVirtual', component: TiendaVirtualComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'detailes/:id', component: LibroProductoComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
