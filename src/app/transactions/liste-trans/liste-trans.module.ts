import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeTransPageRoutingModule } from './liste-trans-routing.module';

import { ListeTransPage } from './liste-trans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeTransPageRoutingModule
  ],
  declarations: [ListeTransPage]
})
export class ListeTransPageModule {}
