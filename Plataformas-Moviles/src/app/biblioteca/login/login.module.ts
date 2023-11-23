import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    IonicModule,
    ComponentsModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    LoginPage,
  ]
})
export class LoginModule { }
