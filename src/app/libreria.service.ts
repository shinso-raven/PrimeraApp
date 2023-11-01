import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { libro } from './Model/Libro';

@Injectable({
  providedIn: 'root'
})
export class LibreriaService {

  http = inject(HttpClient);

  constructor() { }


  GetProductos(): Observable<libro[]>{
    let datos = this.http.get<libro[]>('https://api.escuelajs.co/api/v1/products')
    
    return datos;
  }

}
