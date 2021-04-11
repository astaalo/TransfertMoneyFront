import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToutesmesTransPageRoutingModule } from './toutesmes-trans-routing.module';

import { ToutesmesTransPage } from './toutesmes-trans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToutesmesTransPageRoutingModule
  ],
  declarations: [ToutesmesTransPage]
})
export class ToutesmesTransPageModule {}
