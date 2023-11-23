import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./autor/autor.module').then( m => m.AutorPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./biblioteca/biblioteca.module').then( m => m.BibliotecaPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./components/components.module').then( m => m.ComponentsModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
