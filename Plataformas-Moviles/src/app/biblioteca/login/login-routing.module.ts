import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login.page';
import { InicioPage } from '../page/inicio/inicio.page';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { PerfilPage } from '../page/perfil/perfil.page';

const routes: Routes = [

  { path: 'login', component: LoginPage },
  { path: 'inicio', component: InicioPage, canActivate: [AuthGuard] },
  { path: 'perfil', component: PerfilPage, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[AuthGuard, AuthService],
})
export class LoginRoutingModule { }
