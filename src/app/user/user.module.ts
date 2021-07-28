import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './pages/admin/admin.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ProductorComponent } from './pages/productor/productor.component';



@NgModule({
  declarations: [
    AdminComponent,
    ClienteComponent,
    ProductorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
