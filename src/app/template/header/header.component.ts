import { Component, NgZone, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/general/service/carrito.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  public cantidad:number = 0;
  constructor( private carritoService:CarritoService, private  ngZone:NgZone ) { 
  }

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.cantidad = this.carritoService.carritoCantidad
    });
  }

}
