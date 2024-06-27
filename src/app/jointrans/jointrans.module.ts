import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JointransPageRoutingModule } from './jointrans-routing.module';

import { JointransPage } from './jointrans.page';
import { Angular4PaystackModule } from "angular4-paystack";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Angular4PaystackModule,
    JointransPageRoutingModule
  ],
  declarations: [JointransPage]
})
export class JointransPageModule {}
