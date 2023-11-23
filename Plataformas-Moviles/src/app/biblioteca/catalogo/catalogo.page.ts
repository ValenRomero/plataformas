import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { Router } from '@angular/router';
import { Producto } from 'src/app/interface/producto';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {

  productos!: Producto[];

  textoDeBusqueda = '';

  constructor(public router: Router, private miServicio: ProductosService) { }

  ngOnInit() {
    this.cargarProductos();
  }
  
  cargarProductos() {
    this.miServicio.obtenerProductos().subscribe((productos: Producto[]) => {
      this.productos = productos;
    });
  }
  
  buscar() {
    if (this.textoDeBusqueda) {
      this.miServicio.buscarProductos(this.textoDeBusqueda)
        .subscribe(productos => {
          this.productos = productos;
        });
    } else {
      this.cargarProductos();
    }
  }

  comprar(url_compra:string) {
    window.open(url_compra, '_blank');
  };

}
