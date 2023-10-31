import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LibroComponent } from './libro/libro.component';
import { TiendaVirtualComponent } from './tienda-virtual/tienda-virtual.component';

@NgModule({
  declarations: [
    AppComponent,
    TiendaVirtualComponent,
    LibroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
