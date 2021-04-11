import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCaissierPageRoutingModule } from './list-caissier-routing.module';

import { ListCaissierPage } from './list-caissier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCaissierPageRoutingModule
  ],
  declarations: [ListCaissierPage]
})
export class ListCaissierPageModule {}
