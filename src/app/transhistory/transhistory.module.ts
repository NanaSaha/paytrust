import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranshistoryPageRoutingModule } from './transhistory-routing.module';

import { TranshistoryPage } from './transhistory.page';
import { Angular4PaystackModule } from "angular4-paystack";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Angular4PaystackModule,
    TranshistoryPageRoutingModule
  ],
  declarations: [TranshistoryPage]
})
export class TranshistoryPageModule {}
