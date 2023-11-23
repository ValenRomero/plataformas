import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPage } from './inicio.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PerfilPage } from '../perfil/perfil.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    InicioPage,
    PerfilPage,
  ],
  exports:[
    InicioPage,
    PerfilPage,
  ]
})
export class InicioPageModule {}
