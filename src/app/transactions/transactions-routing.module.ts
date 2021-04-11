import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionsPage } from './transactions.page';

const routes: Routes = [
  {
    path: '',
    component: TransactionsPage
  },
  {
    path: 'retrait',
    loadChildren: () => import('./retrait/retrait.module').then( m => m.RetraitPageModule)
  },
  {
    path: 'depot',
    loadChildren: () => import('./depot/depot.module').then( m => m.DepotPageModule)
  },
  {
    path: 'toutesmes-trans',
    loadChildren: () => import('./toutesmes-trans/toutesmes-trans.module').then( m => m.ToutesmesTransPageModule)
  },
  {
    path: 'liste-trans',
    loadChildren: () => import('./liste-trans/liste-trans.module').then( m => m.ListeTransPageModule)
  },
  {
    path: 'depot-caissier',
    loadChildren: () => import('./depot-caissier/depot-caissier.module').then( m => m.DepotCaissierPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionsPageRoutingModule {}
