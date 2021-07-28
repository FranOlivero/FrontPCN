import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CarritoComponent } from './pages/carrito/carrito.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { ProductoCatComponent } from './pages/producto/producto-cat/producto-cat.component';
import { ProductoComponent } from './pages/producto/producto-cat-sel/producto/producto.component';
import { ProvinciaComponent } from './pages/producto/producto-cat-sel/provincia/provincia.component';
import { ProductorComponent } from './pages/producto/producto-cat-sel/productor/productor.component';
import { GeneralRoutingModule } from './general-routing.module';




@NgModule({
  declarations: [
    CarritoComponent,
    AcercaComponent,
    ProductoCatComponent,
    ProductoComponent,
    ProvinciaComponent,
    ProductorComponent
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    RouterModule
  ]
})
export class GeneralModule { }
