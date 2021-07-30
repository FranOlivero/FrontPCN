import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoComponent } from './pages/carrito/carrito.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { GeneralRoutingModule } from './general-routing.module';
import { ProductosComponent } from './pages/producto/productos/productos.component';
import { ProductoDetalleComponent } from './pages/producto/producto-detalle/producto-detalle.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    CarritoComponent,
    AcercaComponent,
    ProductosComponent,
    ProductoDetalleComponent
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    FormsModule
  ]
})
export class GeneralModule { }
