import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/general/service/producto.service';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  productos:any = [];

  agregarProducto: any = {
    idProducto: '',
    idUsProductor: '',
    precio:'',
    cantidad: '', 
    imagen: ''
  }

  constructor(private adminService: AdminService, private productoService:ProductoService) { }

  ngOnInit(): void {
    this.adminService.getTipoUsuario()
    .subscribe( resp => {
      console.log(resp)
    });

    this.productoService.getConsultarProducto()
    .subscribe( resp => {
      console.log(resp)
      this.productos = resp;
      localStorage.setItem('productos',JSON.stringify(resp));
    });
  }


  // ------------------->
  // ------------------------------------- AGREGAR PRODUCTO  
  onAgrProducto(){

    console.log(this.agregarProducto);
    this.adminService.postAgrProductoInv(this.agregarProducto)
    .subscribe( resp => console.log(resp));

  }
  
  capturarImagen(event:any){

    const imagenCaptura = event.target.files[0];
    this.extraerBase64(imagenCaptura)
    .then((imagen:any) => {
      this.agregarProducto.imagen = imagen.base;
    })

  }

 // ------------------->
 // ------------------------------------- EXTRAS
 extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
  try {
    // const unsafeImg = window.URL.createObjectURL($event);
    // const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
    const reader = new FileReader();
    reader.readAsDataURL($event);
    reader.onload = () => {
      resolve({
        base: reader.result
      });
    };
    reader.onerror = error => {
      resolve({
        base: null
      });
    };

  } catch (e) {
    return null;
  }
})
}
