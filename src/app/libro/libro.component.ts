import { Component, Input } from '@angular/core';
import { libro } from '../Model/Libro';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent  {
  @Input()
  librodatos!: libro;
  
  
  
  constructor(){

  }
  OnInit(){
    
  }
 

}
