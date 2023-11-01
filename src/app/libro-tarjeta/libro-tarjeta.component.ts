import { Component, Input } from '@angular/core';
import { libro } from '../Model/Libro';

@Component({
  selector: 'app-libro-tarjeta',
  templateUrl: './libro-tarjeta.component.html',
  styleUrls: ['./libro-tarjeta.component.css']
})
export class LibroTarjetaComponent  {
  @Input()
  librodatos!: libro;
  
  
  
  constructor(){

  }
  OnInit(){
    
  }

  GoLibroPage(){
    return '/' +'dashboard'

  }
 

}
