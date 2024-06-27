import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipientPageRoutingModule } from './recipient-routing.module';

import { RecipientPage } from './recipient.page';
import { Angular4PaystackModule } from "angular4-paystack";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Angular4PaystackModule,
    RecipientPageRoutingModule
  ],
  declarations: [RecipientPage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class RecipientPageModule {}
