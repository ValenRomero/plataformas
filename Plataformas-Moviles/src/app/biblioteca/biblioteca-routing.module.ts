import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoPage } from './catalogo/catalogo.page';

const routes: Routes = [
  {
    path: 'catalogo',
    component: CatalogoPage,
  },
  {
    path: '',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./page/inicio/inicio.module').then((m) => m.InicioPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BibliotecaPageRoutingModule {}
