import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResendcodePageRoutingModule } from './resendcode-routing.module';

import { ResendcodePage } from './resendcode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResendcodePageRoutingModule
  ],
  declarations: [ResendcodePage]
})
export class ResendcodePageModule {}
