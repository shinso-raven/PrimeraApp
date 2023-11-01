import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LibroTarjetaComponent } from './libro-tarjeta/libro-tarjeta.component';
import { TiendaVirtualComponent } from './tienda-virtual/tienda-virtual.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LibroProductoComponent } from './libro-producto/libro-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    TiendaVirtualComponent,
    LibroTarjetaComponent,
    DashboardComponent,
    LibroProductoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
