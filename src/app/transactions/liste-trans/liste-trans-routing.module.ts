import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeTransPage } from './liste-trans.page';

const routes: Routes = [
  {
    path: '',
    component: ListeTransPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeTransPageRoutingModule {}
