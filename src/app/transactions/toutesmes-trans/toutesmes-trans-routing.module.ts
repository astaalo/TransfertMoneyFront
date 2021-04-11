import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToutesmesTransPage } from './toutesmes-trans.page';

const routes: Routes = [
  {
    path: '',
    component: ToutesmesTransPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToutesmesTransPageRoutingModule {}
