import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/Http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiURL:string = 'http://localhost:3540/pcn';

  constructor( private http: HttpClient ) { }

  getConsultarProducto():Observable<any[]>{
    const url = `${this.apiURL}/producto/consultarProducto`;
    return this.http.get<any[]>(url);
  }

  getObtenrProducto(id:any):Observable<any>{
    const idProducto:any = { id: id };
    const url = `${this.apiURL}/producto/consultarProductoID`;
    return this.http.post<any>(url, idProducto);
  } 

}
