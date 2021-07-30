import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/Http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getTipoUsuario(){
    return this.http.get('http://localhost:3540/pcn/admin/consultarUsuario');
  }

  postTipoUsuario(tipoUsuario:any):Observable<any> {
    return this.http.post<any>('http://localhost:3540/pcn/admin/crearUsaurio',tipoUsuario);
  }

  postAgrProductoInv(agregarProducto:any):Observable<any> {
    return this.http.post<any>('http://localhost:3540/pcn/producto/crearProducto',agregarProducto);
  }

}
