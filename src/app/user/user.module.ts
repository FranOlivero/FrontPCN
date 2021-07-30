import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './pages/admin/admin.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ProductorComponent } from './pages/productor/productor.component';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    AdminComponent,
    ClienteComponent,
    ProductorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    UserRoutingModule
  ]
})
export class UserModule { }
