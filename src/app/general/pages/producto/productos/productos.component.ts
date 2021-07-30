import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/general/service/producto.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos:any = [];
  constructor( private productoService:ProductoService ) { }

  ngOnInit(): void {
    this.productoService.getConsultarProducto()
    .subscribe( resp => {
      console.log(resp)
      this.productos = resp;
      localStorage.setItem('productos',JSON.stringify(resp));
    });
  }

}
