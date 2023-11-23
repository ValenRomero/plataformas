import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../login/auth/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  logout(){
    this.authService.logout()
  }
}
