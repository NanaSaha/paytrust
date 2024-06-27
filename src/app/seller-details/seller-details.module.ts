import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellerDetailsPageRoutingModule } from './seller-details-routing.module';

import { SellerDetailsPage } from './seller-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SellerDetailsPageRoutingModule
  ],
  declarations: [SellerDetailsPage]
})
export class SellerDetailsPageModule {}



