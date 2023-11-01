import { Component, OnInit } from '@angular/core';
import { libro } from '../Model/Libro';
import { LibreriaService } from '../libreria.service';


@Component({
  selector: 'app-tienda-virtual',
  templateUrl: './tienda-virtual.component.html',
  styleUrls: ['./tienda-virtual.component.css']
})
export class TiendaVirtualComponent implements OnInit {
  
  libros: libro[] = [];
  generoslibros = [
    'comedia',
    'fantasia',
    'Romance',
    'drama',
    'terror',
    'Suspenso',
    'Ciencia-ficción'
  ]

  constructor(private productosService: LibreriaService){}

  ngOnInit(){
    this.productosService.GetProductos()
    .subscribe( (data) =>{
      this.libros = data;
    })
  }




}
