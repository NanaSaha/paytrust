import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WithdrawSuccessPageRoutingModule } from './withdraw-success-routing.module';

import { WithdrawSuccessPage } from './withdraw-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WithdrawSuccessPageRoutingModule
  ],
  declarations: [WithdrawSuccessPage]
})
export class WithdrawSuccessPageModule {}
