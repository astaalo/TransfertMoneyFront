import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompCaissierPage } from './comp-caissier.page';

const routes: Routes = [
  {
    path: '',
    component: CompCaissierPage
  },
  {
    path: 'depot-compte',
    loadChildren: () => import('../compCaissier/depot-compte/depot-compte.module').then( m => m.DepotComptePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompCaissierPageRoutingModule {}
