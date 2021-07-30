import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap,tap } from 'rxjs/operators';
import { CarritoService } from 'src/app/general/service/carrito.service';
import { ProductoService } from 'src/app/general/service/producto.service';
import { Producto } from 'src/app/interface/producto.interface';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {

  producto:Producto[] = [];
  cantidad: number = 1;
  constructor( 
    private activateRoute: ActivatedRoute,
    private productoService:ProductoService,
    private carritoService:CarritoService ) { }

  ngOnInit(): void {

    this.activateRoute.params
        .pipe( 
          switchMap((param) => this.productoService.getObtenrProducto( param.id )),
          tap( console.log )
        )
        .subscribe( (result) => {
          this.producto = result;
        })

  }

  agregarCarrito():any{
    this.carritoService.agregarCarrito( this.producto[0].id, this.cantidad );
  }

}
