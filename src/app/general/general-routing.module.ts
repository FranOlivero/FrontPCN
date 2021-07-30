import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ProductoDetalleComponent } from './pages/producto/producto-detalle/producto-detalle.component';
import { ProductosComponent } from './pages/producto/productos/productos.component';

const routes: Routes = [ 
  {
    path: '',
    children: [
      {
        path: 'acerca',
        component: AcercaComponent
      },
      {
        path: 'carrito',
        component: CarritoComponent
      }
      ,
      {
        path: 'productos',
        component: ProductosComponent
      }
      ,
      {
        path: 'productos/:id',
        component: ProductoDetalleComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class GeneralRoutingModule { }
