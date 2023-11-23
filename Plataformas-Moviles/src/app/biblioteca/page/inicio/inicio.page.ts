import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { Producto } from 'src/app/interface/producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  form!: FormGroup;

  productos!: Producto[];

  constructor(public router: Router, private formBuilder: FormBuilder, private miServicio: ProductosService) { }

  ngOnInit() {

    this.miServicio.obtenerProductos().subscribe((productos: Producto[]) => {
      this.productos = productos;
    });
    this.form = this.formBuilder.group({
      id: '',
      titulo: '',
      receta: '',
      url_imagen: '',
      url_compra: '',
    });

    this.miServicio.obtenerProductos().subscribe((productos: any[]) => {
      this.productos = productos;
    });
  }

  
  onSubmit() {
    this.miServicio.agregarProducto(this.form.value).subscribe(() => {
      console.log('Producto agregado exitosamente');
      this.miServicio.obtenerProductos().subscribe((productos: Producto[]) => {
        this.productos = productos;
      });
    }, error => {
      console.error('Error al agregar el producto', error);
    });
  }

  eliminarProducto(id: number) {
    const confirmar = confirm('¿Deseas borrar este producto?')
    if(confirmar){
      this.miServicio.eliminarProducto(id).subscribe(() => {
        console.log('Producto eliminado exitosamente');
        // Aquí podrías actualizar la lista de productos...
        this.miServicio.obtenerProductos().subscribe((productos: Producto[]) => {
          this.productos = productos;
        });
      });
    }
    
  }

  actualizarProducto(idProducto:number) {
    this.miServicio.actualizarProducto(idProducto, this.form.value).subscribe(() => {
      console.log('Producto actualizado exitosamente');
      // Aquí podrías actualizar la lista de productos...
      this.miServicio.obtenerProductos().subscribe((productos: Producto[]) => {
        this.productos = productos;
      });
    });
  }
  
}
