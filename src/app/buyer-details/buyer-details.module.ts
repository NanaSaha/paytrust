import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyerDetailsPageRoutingModule } from './buyer-details-routing.module';

import { BuyerDetailsPage } from './buyer-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BuyerDetailsPageRoutingModule
  ],
  declarations: [BuyerDetailsPage]
})
export class BuyerDetailsPageModule {}

