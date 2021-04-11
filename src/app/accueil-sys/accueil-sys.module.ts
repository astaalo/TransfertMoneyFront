import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueilSysPageRoutingModule } from './accueil-sys-routing.module';

import { AccueilSysPage } from './accueil-sys.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccueilSysPageRoutingModule
  ],
  declarations: [AccueilSysPage]
})
export class AccueilSysPageModule {}
