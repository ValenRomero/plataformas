import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../../interface/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private url = 'http://localhost:3000'; // URL de tu servidor Express

  constructor(private http: HttpClient) {}

  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.url}/micoleccion`);
  }

  agregarProducto(producto: Producto): Observable<any> {
    return this.http.post(`${this.url}/micoleccion`, producto);
  }

  // En tu servicio
  actualizarProducto(id: number, producto: Producto): Observable<any> {
    return this.http.put(`${this.url}/micoleccion/${id}`, producto);
  }

  buscarProductos(titulo: string): Observable<any> {
    return this.http.get(`${this.url}/micoleccion?titulo=${titulo}`);
  }

  eliminarProducto(id: number): Observable<any> {
    return this.http.delete(`${this.url}/micoleccion/${id}`);
  }
}
