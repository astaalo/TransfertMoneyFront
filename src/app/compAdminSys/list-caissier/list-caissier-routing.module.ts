import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCaissierPage } from './list-caissier.page';

const routes: Routes = [
  {
    path: '',
    component: ListCaissierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCaissierPageRoutingModule {}
