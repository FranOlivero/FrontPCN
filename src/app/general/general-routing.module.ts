import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ProductoCatComponent } from './pages/producto/producto-cat/producto-cat.component';
import { ProductoComponent } from './pages/producto/producto-cat-sel/producto/producto.component';
import { ProductorComponent } from './pages/producto/producto-cat-sel/productor/productor.component';
import { ProvinciaComponent } from './pages/producto/producto-cat-sel/provincia/provincia.component';

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
      },
      {
        path: 'productoCategoria',
        component: ProductoCatComponent
      },
      {
        path: 'productoProductos',
        component: ProductoComponent
      },
      {
        path: 'productoProductor',
        component: ProductorComponent
      },
      {
        path: 'productoProvincia',
        component: ProvinciaComponent
      },
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
