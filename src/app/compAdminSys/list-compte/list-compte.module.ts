import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListComptePageRoutingModule } from './list-compte-routing.module';

import { ListComptePage } from './list-compte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListComptePageRoutingModule
  ],
  declarations: [ListComptePage]
})
export class ListComptePageModule {}
