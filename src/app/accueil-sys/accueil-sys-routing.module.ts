import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilSysPage } from './accueil-sys.page';

const routes: Routes = [
  {
    path: '',
    component: AccueilSysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccueilSysPageRoutingModule {}
