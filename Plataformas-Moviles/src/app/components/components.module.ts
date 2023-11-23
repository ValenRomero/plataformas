import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    CardComponent,
    HeaderComponent,
    FooterComponent
    ],
  imports: [
    CommonModule,
    IonicModule  
  ],
  exports: [
    CardComponent,
    HeaderComponent,
    FooterComponent
  ],
})
export class ComponentsModule { }
