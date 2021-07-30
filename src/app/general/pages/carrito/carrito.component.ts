import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../service/producto.service';
import { render } from 'creditcardpayments/creditCardPayments';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  descuentoText:string = '';
  respuesta:string = '';
  productos:any = [];
  carrito:any = [];
  canasta:any = [];

  subTotal:number = 0;
  ITBMS:number = 0;
  descuento:number = 0;
  comisionServicio:number = 0;
  granTotal:number = 0;
  granTotalString:string = '';

  constructor( private productoService:ProductoService) {


  }

  ngOnInit(): void {

    this.carrito = JSON.parse(localStorage.getItem('carrito')!) || [];
    this.productos = JSON.parse(localStorage.getItem('productos')!) || [];
    console.log(this.carrito);
    console.log(this.productos);
    
    for (let index = 0; index < this.productos.length; index++) {

      for (let xedex = 0; xedex < this.carrito.length; xedex++) {

        if (this.carrito[xedex].id == this.productos[index].id) {
          this.productos[index].cantidad = this.carrito[xedex].cantidad;
          this.canasta.push(this.productos[index]);
        }

      }

    }

    console.log(this.canasta);
  }
  onDescuento() {
    if(this.descuentoText == "Olivero"){
      this.respuesta = "Valido"
      this.descuento = 10;
    }else{
      this.respuesta = "Denegado"
      this.descuento = 0;
    }
  }
  onGenerarTotal(){
    for (let index = 0; index < this.canasta.length; index++) {
      let AS:number = this.canasta[index].precios;
      let SD:number = this.canasta[index].cantidad;
      this.subTotal = this.subTotal + ( AS * SD) ;
    }

    this.granTotal = this.subTotal;
    this.ITBMS = this.granTotal * 0.07;
    this.comisionServicio = this.granTotal * 0.01;
    this.granTotal = this.granTotal + this.ITBMS + this.comisionServicio;
    if( this.granTotal > this.descuento){
      this.granTotal = this.granTotal - this.descuento ;
    }
    
    this.granTotalString = this.granTotal.toFixed(2).toString();
    console.log(this.granTotal);
  }

  onRealizarCompra(){
    render({
      id: "#myPaypalButton",
      currency: "USD",
      value: this.granTotalString,
      onApprove: (details) =>{
        alert("Transaccion Completa")
        this.carrito = [];
        localStorage.setItem('carrito',JSON.stringify(this.carrito)); 
      }
    });

    
  }

}
