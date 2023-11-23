import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  async login(email: string, password: string) {
    const result = await this.http.post<{ auth: boolean, token: string }>('http://localhost:3000/login', { email, password }).toPromise();
    if (result && result.auth) {
      localStorage.setItem('token', result.token);
      localStorage.setItem('lastActivity', Date.now().toString());
      this.router.navigate(['/inicio']); // Asegúrate de que esta es la ruta correcta a tu página de inicio
      return true;
    }
    alert("Correo o contraseña invalidos.");
    this.router.navigate(['/inicio']);
    return false;
  }

  updateActivity() {
    localStorage.setItem('lastActivity', Date.now().toString());
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']); // Asegúrate de que esta es la ruta correcta a tu página de inicio de sesión
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}