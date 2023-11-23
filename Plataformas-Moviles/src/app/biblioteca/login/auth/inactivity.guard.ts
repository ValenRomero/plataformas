import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InactivityGuard implements CanActivate {
  
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    const lastActivity = Number(localStorage.getItem('lastActivity'));
    const now = Date.now();
    const thirtyMinutes = 1 * 60 * 1000; // 30 minutos en milisegundos

    if (now - lastActivity > thirtyMinutes) {
      this.authService.logout();
      this.router.navigate(['/inicio']);
      alert('Se cerró tu sesion por inactividad');
      return false;
    }

    this.authService.updateActivity();
    return true;
  }
  
}
