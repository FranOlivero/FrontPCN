import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/Http';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/interface/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito:any = [];
  private cantidad:number = 0;
  get carritoCompra(){
    return [...this.carrito];
  }
  get carritoCantidad(){
    return this.cantidad;
  }

  constructor() {
    this.carrito = JSON.parse(localStorage.getItem('carrito')!) || [];
  }

  agregarCarrito(id:any, cantidad:any = 0):any{
      const addCarrito = {id: id , cantidad: cantidad}
      
      let obj = this.carrito.find((x: { id: any; }) => x.id === id) || {};
      cantidad = this.carrito.length;
      if( Object.keys(obj).length === 0 ){
        console.log('NO hay');
        this.carrito.unshift(addCarrito);
        localStorage.setItem('carrito',JSON.stringify(this.carrito)); 
      }else{
        console.log('hay');
      }

  }
}
