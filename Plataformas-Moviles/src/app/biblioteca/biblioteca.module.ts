import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';

import { IonicModule } from '@ionic/angular';

import { BibliotecaPageRoutingModule } from './biblioteca-routing.module';
import { LoginModule } from './login/login.module';
import { InicioPageModule } from './page/inicio/inicio.module';
import { CatalogoPage } from './catalogo/catalogo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BibliotecaPageRoutingModule,
    LoginModule,
    InicioPageModule,
    ComponentsModule,
  ],
  exports: [CatalogoPage, ComponentsModule],
  declarations: [CatalogoPage],
})
export class BibliotecaPageModule {}
