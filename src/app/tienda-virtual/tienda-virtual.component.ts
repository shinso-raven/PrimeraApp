import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { libro } from '../Model/Libro';

@Component({
  selector: 'app-tienda-virtual',
  templateUrl: './tienda-virtual.component.html',
  styleUrls: ['./tienda-virtual.component.css']
})
export class TiendaVirtualComponent {
  
  libros: libro[] = [];
  http = inject(HttpClient);
  generoslibros = [
    'comedia',
    'fantasia',
    'Romance',
    'drama',
    'terror',
    'Suspenso',
    'Ciencia-ficción'
  ]

  ngOnInit(){
    this.http.get<libro[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe( (data) =>{
      this.libros = data;
    })

  }

}
