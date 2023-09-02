import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailNoticiaPageRoutingModule } from './detail-noticia-routing.module';

import { DetailNoticiaPage } from './detail-noticia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailNoticiaPageRoutingModule
  ],
  declarations: [DetailNoticiaPage]
})
export class DetailNoticiaPageModule {}
