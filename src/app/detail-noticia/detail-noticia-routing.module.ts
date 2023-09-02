import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailNoticiaPage } from './detail-noticia.page';

const routes: Routes = [
  {
    path: '',
    component: DetailNoticiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailNoticiaPageRoutingModule {}
