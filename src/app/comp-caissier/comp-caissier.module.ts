import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompCaissierPageRoutingModule } from './comp-caissier-routing.module';

import { CompCaissierPage } from './comp-caissier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompCaissierPageRoutingModule
  ],
  declarations: [CompCaissierPage]
})
export class CompCaissierPageModule {}
